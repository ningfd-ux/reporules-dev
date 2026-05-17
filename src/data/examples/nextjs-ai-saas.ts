export interface ExampleData {
  slug: string;
  title: string;
  description: string;
  repository: string;
  generatedFrom: string[];
  signals: string[];
  files: {
    rules: string;
    memory: string;
    architecture: string;
    cursorRules: string;
    claude: string;
    testingWorkflow: string;
    migrationNotes: string;
  };
}

export const nextjsAiSaasExample: ExampleData = {
  slug: "nextjs-ai-saas",
  title: "Next.js AI SaaS",
  description: "Repository governance files generated from a scalable AI SaaS architecture.",
  repository: "nextjs-ai-saas",
  generatedFrom: ["42 SaaS repositories", "18 AI workflows", "11 monorepo systems"],
  signals: ["Next.js App Router", "Shared validation layer", "Stripe billing", "AI workflow conventions"],
  files: {
    rules: `# Repository Rules

- preserve feature boundaries
- avoid duplicated business logic
- keep validation isolated
- avoid oversized shared utilities
- preserve server/client boundaries

## Repository Constraints

- avoid large rewrites
- preserve migration consistency
- reduce architectural drift
- reuse validation schemas

## Common Incidents

2026-05-08
- duplicated auth hooks introduced during billing migration

2026-05-04
- analytics module bypassed validation layer`,
    memory: `# Repository Memory

- billing system migrated in Q2
- old dashboard hooks still pending cleanup
- analytics modules still use legacy fetching
- shared validators standardized across repositories
- server actions introduced in v0.4.0
- technical debt: duplicated billing validators`,
    architecture: `# Architecture

apps/
packages/
shared/
validators/
workflows/
migration-notes/

## System Architecture

- Server-first architecture by default
- Feature-based folder structure
- Shared UI primitives in /components/ui
- Isolated business logic per feature
- Centralized validation layer

## Migration Notes

- dashboard validation migration in progress
- old auth hooks still active
- billing services require standardization`,
    cursorRules: `# Cursor Rules

Avoid rewriting shared validators.
Preserve migration compatibility.
Never fetch inside client components.
Avoid duplicated hooks.
Reuse shared UI primitives.
Keep PRs under 300 LOC.`,
    claude: `# Project Memory for Claude Code

Prioritize architecture consistency.
Avoid duplicated business logic.
Prefer server-first patterns.
Keep feature boundaries clear.
Document legacy patterns before refactoring.

## Legacy Notes

- old dashboard hooks still exist
- billing migration partially completed
- validation layer under refactor`,
    testingWorkflow: `# Testing Workflow

1. validate architecture boundaries
2. run shared validation tests
3. verify migration compatibility
4. execute repository integration tests
5. confirm PR consistency checks

## Common Failures

- duplicated mocks across test files
- oversized test utilities
- unstable async tests due to legacy fetching patterns`,
    migrationNotes: `# Migration Notes

## Active Migration

- dashboard validation migration
- shared billing utilities refactor
- analytics query standardization

## Legacy Constraints

- old auth hooks still active
- duplicated dashboard services
- inconsistent validator naming`,
  },
};
