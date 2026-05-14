import { nextjsAiSaasExample } from "./nextjs-ai-saas";
import { cursorMonorepoExample } from "./cursor-monorepo";
import { aiStartupExample } from "./ai-startup";
import type { ExampleData } from "./nextjs-ai-saas";

export const allExamples: ExampleData[] = [
  nextjsAiSaasExample,
  cursorMonorepoExample,
  aiStartupExample,
];

export function getExampleBySlug(slug: string): ExampleData | undefined {
  return allExamples.find((e) => e.slug === slug);
}

export type { ExampleData };
