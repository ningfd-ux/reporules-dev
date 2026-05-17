import type { ExampleData } from "./nextjs-ai-saas";

export const stripeBillingExample: ExampleData = {
  slug: "stripe-billing",
  title: "Stripe Billing System",
  description: "Subscription billing with webhooks, invoices, and metered usage. Repository governance files for Stripe-integrated SaaS.",
  repository: "stripe-billing",
  generatedFrom: ["31 billing systems", "19 Stripe integrations", "8 metered billing architectures"],
  signals: ["Stripe", "Prisma", "Next.js", "Zod"],
  files: {
    rules: `# Repository Rules

- validate all Stripe webhook payloads with Zod
- keep billing logic inside features/billing
- avoid duplicated subscription queries
- preserve idempotency in webhook handlers
- track metered usage in separate ledger table

## Repository Constraints

- avoid direct Stripe API calls from server components
- centralize billing helpers in lib/stripe
- keep webhook handlers thin — delegate to services
- preserve migration safety when updating subscription schemas

## Common Incidents

2026-05-09
- duplicated invoice creation from retried webhooks without idempotency keys

2026-05-02
- metered usage recalculation broke after schema change`,
    memory: `# Repository Memory

- billing system migrated to Stripe SDK v15 in Q2
- subscription webhooks standardized in v0.4.2
- metered usage tracking added post-launch
- legacy invoice helpers still active in admin dashboard
- technical debt: duplicated subscription validation in webhooks`,
    architecture: `# Architecture

/app
  /(dashboard)
  /api/stripe/webhook
/lib
  /stripe
    subscriptions.ts
    invoices.ts
    webhooks.ts
    usage.ts
/features
  /billing
    /components
    /hooks
    /actions

## System Architecture

- Stripe webhooks flow through centralized validation layer
- Subscription state managed via Stripe customer portal
- Metered usage tracked in separate reporting table
- Invoice generation delegated to Stripe — only cache locally

## Migration Notes

- old invoice hooks still reference Stripe SDK v12
- metered usage aggregation pending refactor
- admin billing panel uses deprecated subscription queries`,
    cursorRules: `# Cursor Rules

Validate Stripe webhook signatures before processing.
Never duplicate subscription queries across features.
Keep billing logic isolated in features/billing.
Use Zod schemas for all webhook payloads.
Always include idempotency keys in mutation handlers.`,
    claude: `# Project Memory for Claude Code

Prioritize billing accuracy over code elegance.
Keep Stripe integration isolated in lib/stripe.
Document webhook event types and their handlers.
Preserve idempotency in all payment-related operations.

## Legacy Notes

- old invoice helpers still exist in admin dashboard
- subscription validation duplicated across webhooks
- metered usage recalculation needs refactor`,
    testingWorkflow: `# Testing Workflow

1. validate webhook signature verification
2. test invoice creation idempotency
3. verify metered usage calculation accuracy
4. confirm subscription lifecycle events
5. check billing error recovery paths

## Common Failures

- flaky webhook tests due to unsigned payloads
- missed idempotency causing duplicate charges
- outdated Stripe API version in test fixtures`,
    migrationNotes: `# Migration Notes

## Active Migration

- Stripe SDK v12 → v15 migration
- webhook handler standardization
- metered usage aggregation refactor

## Legacy Constraints

- old invoice helpers still active in admin
- deprecated subscription queries pending removal
- legacy payment method lookup still active`,
  },
};
