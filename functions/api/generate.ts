function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function onRequest(context) {
  const request = context.request;

  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(),
    });
  }

  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders(), "Content-Type": "application/json" } },
    );
  }

  try {
    const body = await context.request.json();
    const { packageJson, toolTarget, strictness } = body;

    if (!packageJson) {
      return new Response(
        JSON.stringify({ error: "package.json content is required" }),
        { status: 400, headers: { ...corsHeaders(), "Content-Type": "application/json" } },
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
      "Generate repository-aware AI coding standards for the detected tech stack.\n\n" +
      "CRITICAL RULES:\n" +
      "- NEVER output generic advice like \"write clean code\", \"use reusable components\", \"follow best practices\"\n" +
      "- Each standard must be specific and actionable\n" +
      "- Reference the detected technologies directly\n" +
      "- Output 15-30 standards maximum\n" +
      "- Structure: Architecture Standards, Framework Standards, API Standards, Database Standards, AI Coding Constraints\n\n" +
      "Each standard must follow this format:\n" +
      "Category header then dash-prefixed standard with title and explanation.\n\n" +
      "For example: Framework Standards:\n" +
      "- Prefer Server Components by default: Detected Next.js App Router. Server Components reduce client bundle size and improve data fetching consistency. Only use Client Components when you need interactivity or browser APIs.\n" +
      "- Never fetch data inside client components: Detected React. Move all data fetching to Server Components and pass data as props.\n\n" +
      "Output format: Return JSON with this shape:\n" +
      '{ "detectedStack": ["Next.js App Router", "Prisma ORM", "Zod"], "standards": "the full standards output as a markdown string", "explanation": "2-3 sentence explanation" }';

    const userPrompt = "Generate AI coding standards for this package.json. Target AI tool: " + toolTarget + ". Strictness: " + strictness + ".\n\n" +
      "package.json:\n" +
      packageJson;

    const apiKey = context.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { ...corsHeaders(), "Content-Type": "application/json" } },
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
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(
        JSON.stringify({ error: `DeepSeek API error: ${errorText}` }),
        { status: response.status, headers: { ...corsHeaders(), "Content-Type": "application/json" } },
      );
    }

    const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);

    return new Response(
      JSON.stringify(content),
      { headers: { ...corsHeaders(), "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : "Unknown error",
      }),
      { status: 500, headers: { ...corsHeaders(), "Content-Type": "application/json" } },
    );
  }
}
