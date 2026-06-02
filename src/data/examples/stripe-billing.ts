import type { ExampleData } from "./nextjs-ai-saas";

export const stripeBillingExample: ExampleData = {
  slug: "stripe-billing",
  title: "Stripe Billing System",
  description: "Subscription billing with webhooks, invoices, and metered usage. Repository governance files for Stripe-integrated SaaS.",
  repository: "stripe-billing",
  generatedFrom: ["31 billing systems", "19 Stripe integrations", "8 metered billing architectures"],
  signals: ["Stripe", "Prisma", "Next.js", "Zod"],
  engineeringDecisions: [
    "Webhook handler deployed as separate Cloudflare Worker for independent scaling. Reason: Stripe webhook traffic spikes during payment promotions (up to 200 req/s) saturated the main app's request pool. Isolating webhook processing in a Worker prevents payment processing from affecting user-facing API latency.",
    "Idempotency keys stored in Redis with 24h TTL instead of in PostgreSQL. Reason: checking idempotency via PostgreSQL added ~20ms latency per webhook event and created lock contention during high-throughput events. Redis with 24h TTL covers Stripe's standard 12-hour webhook retry window with zero database load.",
    "Subscription state machine implemented as Zod discriminated union, not an enum. Reason: an enum-based approach required updating the type definition and redeploying every time Stripe added a new subscription status. The Zod discriminated union allows adding new states without code changes — Stripe's 'past_due' and 'incomplete' statuses were handled without a deployment.",
  ],
  aiFailureCases: [
    "AI generated a webhook handler that parsed Stripe events inside a database transaction, causing lock contention. The model wrapped the entire webhook handler in a Prisma $transaction block 'for consistency'. During high-traffic promotions, overlapping webhooks created deadlocks on the subscription table. Fix: database transactions should scope only the data mutations, not the event parsing and validation.",
    "Cursor agent suggested merging billing and subscription tables, breaking the separation that allows independent scaling. The model argued that 'billing and subscription are the same domain' and proposed a single table. This would make it impossible to query subscription metrics without loading billing rows. Fix: keep billing and subscription tables separate — they serve different query patterns.",
  ],
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
