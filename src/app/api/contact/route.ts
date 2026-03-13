import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { checkIdempotency, setCachedResponse } from "@/lib/idempotency";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(apiKey);
}

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(254, "Email must be 254 characters or fewer"),
  phone: z
    .string()
    .trim()
    .max(30, "Phone must be 30 characters or fewer")
    .optional()
    .default(""),
  subject: z
    .string()
    .trim()
    .max(200, "Subject must be 200 characters or fewer")
    .optional()
    .default(""),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(5000, "Message must be 5000 characters or fewer"),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
    const rateLimit = checkRateLimit(clientIp);
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

    const { name, email, phone, subject, message } = result.data;

    // 8. Send email via Resend
    const emailSubject = subject || `New enquiry from ${name}`;
    const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toAddress = process.env.CONTACT_EMAIL || "info@nalaproperties.com.au";

    const plainText = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      subject ? `Subject: ${subject}` : null,
      "",
      "Message:",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const htmlBody = `
      <div style="font-family: 'Outfit', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff;">
        <div style="border-bottom: 3px solid #1867a5; padding-bottom: 16px; margin-bottom: 24px;">
          <h1 style="font-family: 'Urbanist', Arial, sans-serif; color: #181a20; font-size: 24px; margin: 0;">
            New Contact Form Submission
          </h1>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; color: #61656e; font-size: 14px; width: 100px;">Name</td>
            <td style="padding: 8px 12px; color: #181a20; font-size: 14px;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; color: #61656e; font-size: 14px;">Email</td>
            <td style="padding: 8px 12px; color: #181a20; font-size: 14px;">
              <a href="mailto:${escapeHtml(email)}" style="color: #1867a5;">${escapeHtml(email)}</a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 12px; color: #61656e; font-size: 14px;">Phone</td>
            <td style="padding: 8px 12px; color: #181a20; font-size: 14px;">${escapeHtml(phone)}</td>
          </tr>` : ""}
          ${subject ? `
          <tr>
            <td style="padding: 8px 12px; color: #61656e; font-size: 14px;">Subject</td>
            <td style="padding: 8px 12px; color: #181a20; font-size: 14px;">${escapeHtml(subject)}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f7f7f7; border-radius: 6px;">
          <p style="color: #61656e; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
          <p style="color: #181a20; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e4e5;">
          <p style="color: #717171; font-size: 12px; margin: 0;">
            Sent via nalaproperties.com.au contact form
          </p>
        </div>
      </div>
    `;

    const { error: sendError } = await getResend().emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: emailSubject,
      text: plainText,
      html: htmlBody,
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
