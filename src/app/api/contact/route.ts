import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { checkIdempotency, setCachedResponse } from "@/lib/idempotency";
import { contactSchema } from "./validations/contact-schema";
import { buildPlainText, buildHtml } from "./template/contact-email";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(apiKey);
}

function hashPayload(payload: string): string {
  return createHash("sha256").update(payload).digest("hex");
}

function json(body: Record<string, unknown>, status: number, extraHeaders?: Record<string, string>) {
  return NextResponse.json(body, { status, headers: extraHeaders });
}

export async function POST(request: NextRequest) {
  try {
    // 1. Content-Type check
    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return json({ error: "Content-Type must be application/json" }, 415);
    }

    // 2. Content-Length check (10KB limit)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 10_240) {
      return json({ error: "Request body too large" }, 413);
    }

    // 3. Rate limit check
    const clientIp = getClientIp(request.headers);
    const rateLimit = await checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      const retryAfter = Math.ceil(rateLimit.retryAfterMs / 1000);
      return json(
        { error: "Too many requests. Please try again later." },
        429,
        { "Retry-After": String(retryAfter) }
      );
    }

    // 4. Idempotency key is mandatory
    const idempotencyKey = request.headers.get("x-idempotency-key");
    if (!idempotencyKey) {
      return json({ error: "X-Idempotency-Key header is required" }, 400);
    }

    // 5. Read raw body (needed for both parsing and payload hashing)
    let rawBody: string;
    try {
      rawBody = await request.text();
    } catch {
      return json({ error: "Invalid request body" }, 400);
    }

    const payloadHash = hashPayload(rawBody);

    // 6. Idempotency check (key + payload hash)
    {
      const cached = checkIdempotency(idempotencyKey, payloadHash);
      if (cached.hit) {
        if (!cached.replay) {
          return json(
            { error: "Idempotency key reused with different payload" },
            409
          );
        }
        return json(cached.body, cached.status, {
          "X-Idempotent-Replay": "true",
        });
      }
    }

    // 7. Parse + validate
    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return json({ error: "Invalid JSON body" }, 400);
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      return json({ error: "Validation failed", fieldErrors }, 422);
    }

    const { name, email, subject } = result.data;

    // 8. Send email via Resend
    const emailSubject = subject || `New enquiry from ${name}`;
    const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toAddress = process.env.CONTACT_EMAIL || "info@nalaproperties.com.au";

    const { error: sendError } = await getResend().emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: emailSubject,
      text: buildPlainText(result.data),
      html: buildHtml(result.data),
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      return json({ error: "Failed to send message. Please try again later." }, 502);
    }

    // 9. Cache response for idempotency
    const responseBody = { success: true, message: "Message sent successfully" };
    setCachedResponse(idempotencyKey, payloadHash, 200, responseBody);

    // 10. Return success
    return json(responseBody, 200);
  } catch (error) {
    console.error("Contact form error:", error);
    return json({ error: "An unexpected error occurred. Please try again later." }, 500);
  }
}
