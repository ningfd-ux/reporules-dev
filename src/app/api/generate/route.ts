import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { packageJson, toolTarget, strictness } = body;

    if (!packageJson) {
      return NextResponse.json(
        { error: "package.json content is required" },
        { status: 400 },
      );
    }

    const strictnessGuidance =
      strictness === "relaxed"
        ? "Be permissive. Only flag the most critical issues. Allow flexibility."
        : strictness === "strict"
          ? "Be strict. No compromises on code quality and architecture."
          : "Balanced. Focus on maintainability without being overly prescriptive.";

    const systemPrompt = `You are a senior tech lead reviewing a codebase. Your tone is direct, opinionated, and specific.

${strictnessGuidance}

Generate repository governance files for the detected tech stack.

CRITICAL RULES:
- NEVER output generic advice like "write clean code", "use reusable components", "follow best practices"
- Each file must contain realistic engineering constraints and migration notes
- Avoid placeholder content
- Avoid generic AI assistant language
- Prefer realistic engineering constraints and migration notes
- Output 15-30 standards maximum across all files

Each section should represent a real repository file.

Return JSON only. Output format:
{
  "detectedStack": ["Next.js App Router", "Prisma ORM", "Zod"],
  "standards": "the full standards output as markdown",
  "explanation": "2-3 sentence explanation of why these standards apply",
  "rules": "## Architecture Rules\\n\\n- preserve feature boundaries\\n- avoid duplicated business logic\\n- keep validation isolated\\n\\n## Repository Constraints\\n\\n- avoid large rewrites\\n- preserve migration consistency\\n- reduce architectural drift\\n- reuse validation schemas",
  "memory": "- billing system migrated in Q2\\n- old dashboard hooks still pending cleanup\\n- analytics modules still use legacy fetching\\n- shared validators standardized across repositories\\n- server actions introduced in v0.4.0",
  "architecture": "## Repository Architecture\\n\\n- Server-first architecture by default\\n- Feature-based folder structure\\n- Shared UI primitives in /components/ui\\n- Isolated business logic per feature\\n- Centralized validation layer",
  "cursorRules": "- Prefer Server Components by default\\n- Never fetch inside client components\\n- Avoid duplicated hooks\\n- Reuse shared UI primitives\\n- Keep PRs under 300 LOC\\n- Use feature-based naming",
  "claude": "# Project Memory\\n\\n## Stack\\n- Next.js App Router\\n- TypeScript\\n- Tailwind CSS\\n- Supabase\\n- Stripe\\n\\n## Architecture\\n- Feature-first structure\\n- Server Components by default\\n- Shared UI primitives\\n\\n## Constraints\\n- Never fetch inside client components\\n- Avoid duplicated hooks\\n- Keep PRs under 300 LOC"
}`;

    const userPrompt = `Generate AI coding standards for this package.json. Target AI tool: ${toolTarget}. Strictness: ${strictness}.

package.json:
\`\`\`json
${packageJson}
\`\`\``;

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 },
      );
    }

    const response = await fetch(
      "https://api.deepseek.com/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.3,
          max_tokens: 4096,
          response_format: { type: "json_object" },
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `DeepSeek API error: ${errorText}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);

    return NextResponse.json(content);
  } catch (err) {
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
