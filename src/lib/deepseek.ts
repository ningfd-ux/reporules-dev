"use client";

const API_KEY = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY || "";
const MODEL = "deepseek-v4-flash";

export interface FileResult {
  rules: string;
  memory: string;
  architecture: string;
  cursorRules: string;
  claude: string;
  testingWorkflow: string;
}

export interface GenerateResult extends FileResult {
  detectedStack: string[];
  standards: string;
  explanation: string;
}

function buildSystemPrompt(toolTarget: string): string {
  const strictnessGuidance = "Balanced. Focus on maintainability without being overly prescriptive.";
  
  return "You are a senior tech lead reviewing a codebase. Your tone is direct, opinionated, and specific.\n\n" +
    strictnessGuidance + "\n\n" +
    "Generate realistic repository governance files.\n\n" +
    "CRITICAL RULES:\n" +
    "- NEVER output generic advice like \"write clean code\", \"use reusable components\", \"follow best practices\"\n" +
    "- Each field must represent a real repository file\n" +
    "- Avoid placeholder content\n" +
    "- Avoid generic AI assistant wording\n" +
    "- Prefer realistic engineering tradeoffs\n" +
    "- Include: migration notes, technical debt, repository incidents, architecture constraints\n" +
    "- Prefer realistic monorepo naming\n\n" +
    'Return JSON only. Output format:\n' +
    '{ "detectedStack": ["Next.js App Router", "Prisma ORM", "Zod"], "standards": "full governance standards as markdown", "explanation": "2-3 sentence explanation", "rules": "## Architecture Rules\\n\\n- preserve feature boundaries", "memory": "- billing system migrated in Q2", "architecture": "## Repository Architecture", "cursorRules": "- Prefer Server Components", "claude": "# Project Memory", "testingWorkflow": "## Testing Workflow\\n\\n1. validate architecture boundaries" }';
}

export async function generateStandards(params: {
  packageJson: string;
  toolTarget: string;
  strictness: string;
}): Promise<GenerateResult> {
  if (!API_KEY) {
    throw new Error("API key not configured. Add NEXT_PUBLIC_DEEPSEEK_API_KEY to .env.local");
  }

  const systemPrompt = buildSystemPrompt(params.toolTarget);
  const userPrompt = "Generate AI coding standards for this package.json. Target AI tool: " + params.toolTarget +
    ". Strictness: " + params.strictness + ".\n\npackage.json:\n" + params.packageJson;

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.6,
      max_tokens: 3500,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error("DeepSeek API error: " + errorText.substring(0, 200));
  }

  const data = await response.json();
  const rawContent = data.choices?.[0]?.message?.content || "";

  try {
    return JSON.parse(rawContent);
  } catch {
    throw new Error("Generation returned invalid JSON. Try again.");
  }
}
