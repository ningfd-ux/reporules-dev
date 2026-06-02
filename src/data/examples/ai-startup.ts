import type { ExampleData } from "./nextjs-ai-saas";

export const aiStartupExample: ExampleData = {
  slug: "ai-startup",
  title: "AI Startup",
  description: "Repository governance files generated from a lean AI startup engineering system.",
  repository: "ai-startup",
  generatedFrom: ["27 startup repositories", "15 AI product systems", "9 Claude Code workflows"],
  signals: ["AI coding workflows", "Shared validation layer", "Startup governance", "Claude integration"],
  engineeringDecisions: [
    "Single package.json for all dependencies to minimize cognitive overhead in early stage. Reason: splitting into workspaces too early created configuration overhead (TypeScript project references, Turborepo pipeline setup) that slowed experimentation. The monorepo split is planned for post-product-market-fit, not before.",
    "No staging environment — production-only with feature flags for rapid iteration. Reason: maintaining staging and production databases during MVP stage doubles schema migration complexity. Feature flags in the application layer allow testing in production with 0% user exposure. Staging environment budget allocated for post-seed round.",
    "Direct database access from server components instead of API layer to reduce boilerplate. Reason: introducing an API layer between server components and the database during MVP stage adds ~40% more files per feature (route handler, validation, types, tests) with zero user-facing benefit. API layer will be introduced when third-party integrations require it.",
  ],
  aiFailureCases: [
    "AI model suggested converting all server components to client components, breaking the server-first architecture. The model detected that some server components needed interactivity and 'simplified' by converting everything to client components. This increased initial bundle size by 120KB and broke server-side data fetching. Fix: add 'use client' only to leaf interactive components; keep data fetching in server components.",
    "Claude Code generated a full test suite for prototype code that was rewritten the next week. The AI wrote 47 tests for a payment flow that was replaced during a Stripe integration change. The test suite became stale immediately and created false CI failures. Fix: don't write tests for code under active exploration. Write tests only after the feature API stabilizes.",
  ],
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
    migrationNotes: `# Migration Notes

## Active Migration

- old auth hooks still active from MVP phase
- billing integration pending standardization
- prompt library requires deduplication

## Legacy Constraints

- onboarding flows from MVP still active
- duplicated validation in early features
- outdated test fixtures from launch`,
  },
};
