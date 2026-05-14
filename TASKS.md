# TASKS — Rate Limit & Abuse Protection

## Context
Generator is calling DeepSeek API per request with no rate limits. Need to add IP-based rate limiting using Cloudflare KV + input validation + timeout protection.

## KV Namespace Already Created
- Name: `REPORULES_RATE_LIMIT`
- ID: `191f6503571c4861b8c0b7e752a938d6`
- Binding name in wrangler.toml: `RATE_LIMIT_KV`

## Task 1 — Create Rate Limit Helper

Create file: `src/lib/rate-limit.ts`

```typescript
export async function checkRateLimit(
  kv: KVNamespace,
  ip: string
): Promise<{ success: boolean; message?: string }> {
  const hourKey = `hour:${ip}:${new Date().getHours()}`;
  const dayKey = `day:${ip}:${new Date().toDateString()}`;

  const hourCount = Number(await kv.get(hourKey)) || 0;
  const dayCount = Number(await kv.get(dayKey)) || 0;

  if (hourCount >= 3) {
    return { success: false, message: "Hourly generation limit reached. Please try again later." };
  }

  if (dayCount >= 10) {
    return { success: false, message: "Daily generation limit reached. Please try again tomorrow." };
  }

  await kv.put(hourKey, String(hourCount + 1), { expirationTtl: 3600 });
  await kv.put(dayKey, String(dayCount + 1), { expirationTtl: 86400 });

  return { success: true };
}
```

## Task 2 — Update Cloudflare Function

File: `functions/api/generate.ts`

### 2a. Add rate limit check at function start
```typescript
const ip = request.headers.get("cf-connecting-ip") || "unknown";

const rateLimit = await checkRateLimit(env.RATE_LIMIT_KV, ip);
if (!rateLimit.success) {
  return new Response(JSON.stringify({ error: rateLimit.message }), {
    status: 429,
    headers: { "Content-Type": "application/json" },
  });
}
```

### 2b. Add input validation
```typescript
if (input.length > 5000) {
  return new Response(JSON.stringify({ error: "Input too large. Maximum 5000 characters." }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

const blockedPatterns = [
  "ignore previous instructions",
  "system prompt",
  "reveal prompt",
  "developer message",
];
const lower = input.toLowerCase();
const blocked = blockedPatterns.some((pattern) => lower.includes(pattern));
if (blocked) {
  return new Response(JSON.stringify({ error: "Invalid repository input." }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}
```

### 2c. Add timeout to DeepSeek API call
Wrap the fetch call with AbortController, 60 second timeout.

### 2d. Add logging
```typescript
console.log(JSON.stringify({
  ip, timestamp: Date.now(), inputLength: input.length,
  repoType: "unknown", tokens: 2500,
}));
```

### 2e. IMPORTANT — Import path
The functions/ directory runs in Cloudflare Pages Workers runtime. The import for rate-limit.ts must use a path relative to functions/. If `../src/lib/rate-limit` doesn't work, inline the logic directly.

## Task 3 — Update Frontend Error Handling

File: `src/app/generator/page.tsx`

Handle these error cases:
- 429 rate limit → show limit reached UI
- Timeout (AbortError) → show timeout message
- 400 validation → show API error message

## Task 4 — Verification
- [ ] npm run build succeeds
- [ ] git add && git commit && git push
