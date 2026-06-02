export interface ExampleData {
  slug: string;
  title: string;
  description: string;
  repository: string;
  generatedFrom: string[];
  signals: string[];
  engineeringDecisions?: string[];
  aiFailureCases?: string[];
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
  engineeringDecisions: [
    "We use a shared validation layer (packages/validators/) instead of inline validation. Reason: 7 services needed consistent schema enforcement. Inline validation caused 3 production incidents where frontend and backend parsed the same field differently.",
    "Stripe webhook handler is isolated in its own module (apps/webhooks/) — not part of the main app router. Reason: webhook handlers have different error recovery semantics than user-facing routes. A timeout in a user-facing handler should retry; a timeout in webhook processing must fail fast to trigger Stripe's retry mechanism.",
    "Server Actions for mutations, API routes for reads only. Reason: Server Actions handle form validation and redirects natively. Using API routes for mutations created unnecessary fetch boilerplate and lost the progressive enhancement benefit.",
    "Billing logic separated into a shared package (packages/billing/) that both webhook handler and dashboard consume. Reason: before separation, two copies of the same coupon validation existed — one in webhooks and one in dashboard admin. A promo code format change was only deployed to webhooks, resulting in 8 hours of incorrect admin calculations.",
  ],
  aiFailureCases: [
    "AI attempted to consolidate all Prisma queries into a single shared repository service. This broke pagination for 3 endpoints that needed cursor-based queries vs offset-based — the shared service forced offset pagination everywhere. Fix: keep Prisma query logic in the feature module, only share utility functions.",
    "Claude Code generated a Stripe webhook handler that calls the same idempotency check as a user-facing API route. This caused all webhook requests to fail when the main app had a deployment — the webhook handler shared middleware that checked 'deployment in progress' and rejected. Fix: webhook handler must NOT share infrastructure middleware with user-facing routes.",
    "Cursor agent tried to merge billing migration files from two PR branches into one migration timeline. Prisma migration engine treats overlapping timestamps as conflicts. This created a 30-minute CI failure during release. Fix: enforce sequential migration generation — one developer generates Prisma migrations at a time.",
    "AI model suggested moving all Zod schemas to a single package/shared/validators.ts file. This created a 400-line file with circular import errors because some schemas imported types from feature modules. Fix: keep Zod schemas co-located with their feature; only share the output types through a thin index.",
  ],
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
