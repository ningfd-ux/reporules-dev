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

Generate repository-aware AI coding standards for the detected tech stack.

CRITICAL RULES:
- NEVER output generic advice like "write clean code", "use reusable components", "follow best practices"
- Each standard must be specific and actionable
- Reference the detected technologies directly
- Output 15-30 standards maximum
- Structure: Architecture Standards → Framework Standards → API Standards → Database Standards → AI Coding Constraints

Each standard must follow this format:
## [Category]
- **[Title]:** [Why it matters and what to do]

For example:
## Framework Standards
- **Prefer Server Components by default:** Detected Next.js App Router. Server Components reduce client bundle size and improve data fetching consistency. Only use Client Components ('use client') when you need interactivity or browser APIs.
- **Never fetch data inside client components:** Detected React. Move all data fetching to Server Components and pass data as props. Client Components should only handle UI interactions.

Output format: Return JSON with this shape:
{
  "detectedStack": ["Next.js App Router", "Prisma ORM", "Zod"],
  "standards": "[the full standards output as a markdown string]",
  "explanation": "2-3 sentence explanation of why these standards apply to the detected stack"
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
