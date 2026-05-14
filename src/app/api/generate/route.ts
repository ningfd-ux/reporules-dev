import { NextRequest, NextResponse } from "next/server";

const BLOCKED_PATTERNS = [
  "ignore previous instructions",
  "ignore all instructions",
  "system prompt",
  "reveal prompt",
  "developer message",
  "you are an ai",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { packageJson, toolTarget, strictness } = body;
    const inputStr = JSON.stringify(body);

    // Input length check
    if (inputStr.length > 5000) {
      return NextResponse.json({ error: "Input too large. Maximum 5000 characters." }, { status: 400 });
    }

    // Prompt injection protection
    const lower = inputStr.toLowerCase();
    const blocked = BLOCKED_PATTERNS.some((p) => lower.includes(p));
    if (blocked) {
      return NextResponse.json({ error: "Invalid repository input." }, { status: 400 });
    }

    if (!packageJson) {
      return NextResponse.json({ error: "package.json content is required" }, { status: 400 });
    }

    const strictnessGuidance =
      strictness === "relaxed"
        ? "Be permissive. Only flag the most critical issues. Allow flexibility."
        : strictness === "strict"
          ? "Be strict. No compromises on code quality and architecture."
          : "Balanced. Focus on maintainability without being overly prescriptive.";

    const systemPrompt = `You are a senior tech lead reviewing a codebase. Your tone is direct, opinionated, and specific.

${strictnessGuidance}

Generate realistic repository governance files.

CRITICAL RULES:
- NEVER output generic advice like "write clean code", "use reusable components", "follow best practices"
- Each field must represent a real repository file
- Avoid placeholder content
- Avoid generic AI assistant wording
- Prefer realistic engineering tradeoffs
- Include: migration notes, technical debt, repository incidents, architecture constraints
- Prefer realistic monorepo naming

Return JSON only. Output format:
{
  "detectedStack": ["Next.js App Router", "Prisma ORM", "Zod"],
  "standards": "full governance standards as markdown",
  "explanation": "2-3 sentence explanation",
  "rules": "## Architecture Rules...",
  "memory": "- billing system migrated in Q2...",
  "architecture": "## Repository Architecture...",
  "cursorRules": "- Prefer Server Components...",
  "claude": "# Project Memory...",
  "testingWorkflow": "## Testing Workflow..."
}`;

    const userPrompt = `Generate AI coding standards for this package.json. Target AI tool: ${toolTarget}. Strictness: ${strictness}.

package.json:
\`\`\`json
${packageJson}
\`\`\``;

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000);

    let response;
    try {
      response = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "deepseek-v4-flash",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.6,
          max_tokens: 2500,
          response_format: { type: "json_object" },
        }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
    } catch (fetchErr) {
      clearTimeout(timeout);
      if (fetchErr instanceof Error && fetchErr.name === "AbortError") {
        return NextResponse.json({ error: "Request timed out. Try again with a smaller input." }, { status: 408 });
      }
      throw fetchErr;
    }

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: `DeepSeek API error: ${errorText}` }, { status: response.status });
    }

    const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);

    console.log({ timestamp: Date.now(), toolTarget, strictness, inputLen: inputStr.length });

    return NextResponse.json(content);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 },
    );
  }
}
