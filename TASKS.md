# TASKS - Restore API + Fix Static Export

## Context
- Staging host: C:\Users\P1\reporules
- Cloudflare Pages: reporules-dev (npm run build -> /out)
- Domain: reporules.dev (verifying on Cloudflare)
- API key: DEEPSEEK_API_KEY set as Cloudflare Secret (sk-b470****c74c4)
- Model: deepseek-chat (DeepSeek V4)
- Current issue: next.config.ts missing output: "export" -> build goes to .next/ not /out/

## Task 1: Fix next.config.ts

File: C:\Users\P1\reporules\next.config.ts

Change from:
  const nextConfig: NextConfig = {};
to:
  const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
  };

## Task 2: Create functions/api/generate.ts

Create Cloudflare Pages Function: C:\Users\P1\reporules\functions\api\generate.ts

Same prompt logic as src/app/api/generate/route.ts but use Cloudflare Workers API:
- context.request.json() instead of req.json()
- context.env.DEEPSEEK_API_KEY instead of process.env.DEEPSEEK_API_KEY
- Return new Response() instead of NextResponse.json()
- Add CORS headers for POST and OPTIONS
- Remove response_format: { type: "json_object" } (may not be needed, or keep it - the model should support it)

## Task 3: Build locally

cd C:\Users\P1\reporules && npm run build

Should produce /out directory. Fix any errors.

## Task 4: Git push

Before push: enable TUN mode in 0dcloud VPN (required for CLI tools to reach GitHub)

cd C:\Users\P1\reporules
git add -A
git commit -m "fix: static export + pages function api"
git push origin main

## Verification
1. Check Cloudflare deploy log for errors
2. Visit reporules-dev.pages.dev
3. POST /api/generate with sample package.json
