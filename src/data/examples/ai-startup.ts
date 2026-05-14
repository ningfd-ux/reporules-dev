import type { ExampleData } from "./nextjs-ai-saas";

export const aiStartupExample: ExampleData = {
  slug: "ai-startup",
  title: "AI Startup",
  description: "Repository governance files generated from a lean AI startup engineering system.",
  repository: "ai-startup",
  generatedFrom: ["27 startup repositories", "15 AI product systems", "9 Claude Code workflows"],
  signals: ["AI coding workflows", "Shared validation layer", "Startup governance", "Claude integration"],
  files: {
    rules: `# Repository Rules

- avoid premature abstraction
- keep minimal folder structure
- preserve shipping velocity
- avoid duplicated AI prompts
- reuse validation schemas

## Repository Constraints

- avoid large rewrites during MVP phase
- preserve migration flexibility
- reduce unnecessary architecture decisions
- keep business logic colocated with features

## Common Incidents

2026-05-03
- duplicated onboarding flows created by unconstrained AI prompts

2026-04-28
- inconsistent validator naming caused schema conflicts`,
    memory: `# Repository Memory

- MVP launched with minimal architecture
- payment integration added post-MVP
- auth system refactored twice during early iteration
- AI prompt library accumulated without cleanup
- technical debt: duplicated onboarding flows`,
    architecture: `# Architecture

app/
shared/
validators/
ai-workflows/
prompts/
migration-notes/

## System Architecture

- Lean architecture optimized for iteration speed
- Shared validation layer as single source of truth
- AI workflows colocated with feature code
- Minimal folder structure to reduce cognitive load

## Migration Notes

- old auth hooks still active from MVP phase
- billing integration pending standardization
- prompt library requires deduplication`,
    cursorRules: `# Cursor Rules

Prefer simple solutions over abstractions.
Keep folder structure minimal.
Avoid creating utility files prematurely.
Reuse existing patterns before introducing new ones.
Document architectural decisions as they emerge.`,
    claude: `# Project Memory for Claude Code

Prioritize shipping velocity without accumulating technical debt.
Avoid premature abstractions during early stage.
Keep AI prompts organized and deduplicated.
Document architectural decisions as the codebase grows.

## Legacy Notes

- old onboarding flows still exist
- auth hooks from MVP phase pending refactor
- prompt library needs organization`,
    testingWorkflow: `# Testing Workflow

1. validate critical user flows
2. run integration tests on core features
3. verify AI-generated code consistency
4. confirm no regression in payment flows
5. check prompt output stability

## Common Failures

- incomplete test coverage during rapid iteration
- outdated test fixtures from MVP phase
- flaky payment integration tests`,
  },
};
