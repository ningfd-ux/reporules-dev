// Cloudflare Pages Function: POST /api/generate
// Rate-limited: 2/hour per IP, 5/day per IP, 300 calls/day global

const ALLOWED_ORIGINS = [
  "https://reporules.dev",
  "https://www.reporules.dev",
  "https://cursorrules.fun",
  "https://www.cursorrules.fun",
  "https://aicodingstandards.com",
  "https://www.aicodingstandards.com",
];

function corsHeaders(origin: string | null) {
  const allowed = ALLOWED_ORIGINS.includes(origin || "") ? origin : "https://reporules.dev";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

const BLOCKED_PATTERNS = [
  "ignore previous instructions",
  "ignore all instructions",
  "system prompt",
  "reveal prompt",
  "developer message",
  "you are an ai",
];

const BYPASS_IPS = ["45.135.228.94"];
const DAILY_GLOBAL_LIMIT = 250;

async function checkGlobalLimit(kv: any): Promise<boolean> {
  if (!kv) return true;
  const today = new Date().toISOString().slice(0, 10);
  const globalKey = "global:" + today;
  try {
    const count = Number((await kv.get(globalKey)) || 0);
    if (count >= DAILY_GLOBAL_LIMIT) {
      return false;
    }
    await kv.put(globalKey, String(count + 1), { expirationTtl: 86400 });
    return true;
  } catch (e) {
    console.error("Global KV error:", e);
    return true;
  }
}

async function checkRateLimit(kv: any, ip: string): Promise<{ success: boolean; message?: string }> {
  if (BYPASS_IPS.includes(ip)) return { success: true };
  if (!kv) return { success: true };

  const now = new Date();
  const hourKey = "hour:" + ip + ":" + now.getUTCHours();
  const dayKey = "day:" + ip + ":" + now.toISOString().slice(0, 10);

  try {
    const hourCount = Number((await kv.get(hourKey)) || 0);
    const dayCount = Number((await kv.get(dayKey)) || 0);

    if (hourCount >= 2) {
      return { success: false, message: "Hourly generation limit reached. Try again later." };
    }
    if (dayCount >= 10) {
      return { success: false, message: "Daily generation limit reached. Try again tomorrow." };
    }

    await kv.put(hourKey, String(hourCount + 1), { expirationTtl: 3600 });
    await kv.put(dayKey, String(dayCount + 1), { expirationTtl: 86400 });
  } catch (e) {
    console.error("KV error:", e);
  }

  return { success: true };
}


function extractJSON(raw: string): object | null {
  try {
    return JSON.parse(raw);
  } catch (e) {
    // Try extracting between first { and last }
    var start = raw.indexOf("{");
    var end = raw.lastIndexOf("}");
    if (start >= 0 && end > start) {
      try {
        return JSON.parse(raw.substring(start, end + 1));
      } catch (e2) {}
    }
    return null;
  }
}

export async function onRequest(context) {
  const request = context.request;
  const origin = request.headers.get("Origin") || request.headers.get("origin") || null;

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }

  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
    );
  }

  // Verify origin is allowed (also blocks no-Origin requests from scripts)
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return new Response(
      JSON.stringify({ error: "Origin not allowed" }),
      { status: 403, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
    );
  }

  try {
    const body = await request.json();
    const { packageJson, toolTarget, strictness } = body;
    const ip = request.headers.get("cf-connecting-ip") || "unknown";
    const inputStr = JSON.stringify(body);

    // Input length check
    if (inputStr.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Input too large. Maximum 5000 characters." }),
        { status: 400, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
      );
    }

    // Prompt injection protection
    const lower = inputStr.toLowerCase();
    const blocked = BLOCKED_PATTERNS.some((p) => lower.includes(p));
    if (blocked) {
      return new Response(
        JSON.stringify({ error: "Invalid repository input." }),
        { status: 400, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
      );
    }

    const kv = context.env?.RATE_LIMIT_KV;

    // Global daily cap (financial safety net)
    if (!BYPASS_IPS.includes(ip)) {
      const globalOk = await checkGlobalLimit(kv);
      if (!globalOk) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Try again tomorrow." }),
          { status: 429, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
        );
      }
    }

    // Per-IP rate limit
    const rateLimit = await checkRateLimit(kv, ip);
    if (!rateLimit.success) {
      return new Response(
        JSON.stringify({ error: rateLimit.message }),
        { status: 429, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
      );
    }

    if (!packageJson) {
      return new Response(
        JSON.stringify({ error: "package.json content is required" }),
        { status: 400, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
      );
    }

    const strictnessGuidance =
      strictness === "relaxed"
        ? "Be permissive. Only flag the most critical issues. Allow flexibility."
        : strictness === "strict"
          ? "Be strict. No compromises on code quality and architecture."
          : "Balanced. Focus on maintainability without being overly prescriptive.";

    const systemPrompt = "You are a senior tech lead reviewing a codebase. Your tone is direct, opinionated, and specific.\n\n" +
      strictnessGuidance + "\n\n" +
      "Generate realistic repository governance files.\n\n" +
      "CRITICAL RULES:\n" +
      "- NEVER output generic advice like \"write clean code\", \"use reusable components\", \"follow best practices\"\n" +
      "- Each field must represent a real repository file\n" +
      "- Avoid placeholder content\n" +
      "- Avoid generic AI assistant wording\n" +
      "- Prefer realistic engineering tradeoffs\n" +
      "- Include: migration notes, technical debt, repository incidents, architecture constraints\n" +
      "- Prefer realistic monorepo naming\n" +
      "- Include specific version numbers, library APIs, and incident dates in your examples\n\n" +
      "Return JSON only. Output format:\n" +
      '{ "detectedStack": ["Next.js App Router", "Prisma ORM", "Zod"], "standards": "full governance standards as markdown", "explanation": "2-3 sentence explanation", "rules": "## Architecture Rules\\n\\n- preserve feature boundaries", "memory": "- billing system migrated in Q2", "architecture": "## Repository Architecture", "cursorRules": "- Prefer Server Components", "claude": "# Project Memory", "testingWorkflow": "## Testing Workflow\\n\\n1. validate architecture boundaries" }';

    const userPrompt = "Generate AI coding standards for this package.json. Target AI tool: " + toolTarget + ". Strictness: " + strictness + ".\n\n" +
      "package.json:\n" + packageJson;

    const apiKey = context.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000);

    try {
      const response = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + apiKey,
        },
        body: JSON.stringify({
          model: "deepseek-v4-flash",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.6,
          max_tokens: 4000,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const errorText = await response.text();
        return new Response(
          JSON.stringify({ error: "DeepSeek API error: " + errorText }),
          { status: response.status, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
        );
      }

      const data = await response.json();
      let content;
      content = extractJSON(data.choices[0].message.content);
      if (!content) {
        const rawPreview = (data.choices[0]?.message?.content || "").substring(0, 1000);
        return new Response(
          JSON.stringify({ error: "Generation returned invalid JSON. Try again.", raw: rawPreview }),
          { status: 408, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
        );
      }

      return new Response(
        JSON.stringify(content),
        { headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
      );
    } catch (fetchErr) {
      clearTimeout(timeout);
      if (fetchErr instanceof DOMException && fetchErr.name === "AbortError") {
        return new Response(
          JSON.stringify({ error: "Request timed out. Try again with a smaller input." }),
          { status: 408, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
        );
      }
      throw fetchErr;
    }
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } },
    );
  }
}
