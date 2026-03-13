interface CachedEntry {
  status: number;
  body: Record<string, unknown>;
  payloadHash: string;
  expiresAt: number;
}

const cache = new Map<string, CachedEntry>();

const TTL_MS = 5 * 60_000; // 5 minutes

// Cleanup expired entries every 60s
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of cache) {
    if (now > entry.expiresAt) cache.delete(key);
  }
}, 60_000).unref?.();

export type IdempotencyResult =
  | { hit: false }
  | { hit: true; replay: true; status: number; body: Record<string, unknown> }
  | { hit: true; replay: false; conflict: true };

export function checkIdempotency(
  key: string,
  payloadHash: string
): IdempotencyResult {
  const entry = cache.get(key);
  if (!entry) return { hit: false };

  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return { hit: false };
  }

  if (entry.payloadHash !== payloadHash) {
    return { hit: true, replay: false, conflict: true };
  }

  return { hit: true, replay: true, status: entry.status, body: entry.body };
}

export function setCachedResponse(
  key: string,
  payloadHash: string,
  status: number,
  body: Record<string, unknown>
): void {
  cache.set(key, { status, body, payloadHash, expiresAt: Date.now() + TTL_MS });
}
