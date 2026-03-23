import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60,
});

export async function checkRateLimit(key: string): Promise<{
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
}> {
  try {
    const res = await rateLimiter.consume(key);
    return {
      allowed: true,
      remaining: res.remainingPoints,
      retryAfterMs: 0,
    };
  } catch (rej) {
    const res = rej as { msBeforeNext: number };
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: res.msBeforeNext,
    };
  }
}

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  return headers.get("x-real-ip") ?? "unknown";
}
