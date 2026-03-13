const hits = new Map<string, number[]>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

// Prune expired entries every 60s
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamps] of hits) {
    const valid = timestamps.filter((t) => now - t < WINDOW_MS);
    if (valid.length === 0) {
      hits.delete(key);
    } else {
      hits.set(key, valid);
    }
  }
}, 60_000).unref?.();

export function checkRateLimit(key: string): {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
} {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    const oldest = timestamps[0];
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: WINDOW_MS - (now - oldest),
    };
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  return {
    allowed: true,
    remaining: MAX_REQUESTS - timestamps.length,
    retryAfterMs: 0,
  };
}

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  return headers.get("x-real-ip") ?? "unknown";
}
