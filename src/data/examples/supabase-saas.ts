import type { ExampleData } from "./nextjs-ai-saas";

export const supabaseSaaSExample: ExampleData = {
  slug: "supabase-saas",
  title: "Supabase SaaS",
  description: "Repository governance files generated from a full-stack SaaS using Supabase for auth, database, and realtime.",
  repository: "supabase-saas",
  generatedFrom: ["34 SaaS backends", "12 Supabase projects", "18 server-action codebases"],
  signals: [
    "Supabase SSR auth",
    "Row-Level Security policies",
    "Stripe webhook idempotency",
    "Feature-scoped server actions",
  ],
  engineeringDecisions: [
    "Row-Level Security policies defined in migration files, not in Supabase dashboard. Reason: dashboard-defined RLS policies are not version-controlled and cannot be reviewed in PRs. Moving RLS policy definitions into migration files ensures every policy change goes through code review and has a rollback plan. Dashboard is used for ad-hoc queries only.",
    "SSR auth session checked per-request instead of cached, to handle token revocation. Reason: caching the auth session in a server-side store meant revoked tokens remained valid until cache expiry. A compromised session could be used for up to 15 minutes after revocation. Per-request cookie verification adds ~5ms overhead but eliminates the revocation gap.",
    "Stripe webhooks processed via Supabase Edge Functions for database proximity. Reason: processing webhooks in Edge Functions co-located with the Supabase database reduces latency from ~50ms (external API call) to ~5ms (internal network). This also keeps Stripe secret keys within the Supabase network boundary instead of the main application.",
  ],
  aiFailureCases: [
    "AI model generated an RLS policy that bypassed user_id checks on the billing table. The policy checked tenant_id without also verifying the user belongs to that tenant. A user on one team could query another team's billing data by passing a different tenant_id. Fix: RLS policies must always include both the tenant scope AND the user's membership in that tenant.",
    "Claude Code created a database trigger without considering recursive trigger behavior, causing a stack overflow. The trigger updated Table A on insert, which fired another trigger that updated Table A again. PostgreSQL's default max stack depth was exceeded after 100 iterations. Fix: add WHEN conditions to triggers to detect and prevent recursion.",
  ],
  files: {
    rules: `# Repository Rules

## Architecture Rules

- **Feature isolation**: Each feature in \`features/\` must own its components, data fetching, and validation. No cross-feature imports except from \`shared/\` or \`lib/\`.
- **No direct database calls outside Supabase**: All data access goes through Supabase client — no raw SQL or direct connections.
- **Webhook handlers must be idempotent**: Replay events without side effects.
- **Environment variable validation**: \`lib/env.mjs\` must parse every env var with Zod at app startup.
- **Auth-aware components**: Server Components use \`getCurrentUser()\` from \`@/lib/auth\` — never \`useSession()\` on the server.
- **Stripe webhook endpoint**: Only one webhook endpoint (\`/api/stripe/webhook\`) — all event types handled there.
- **No \`useEffect\` for auth**: Use Supabase SSR cookies; client-side auth is derived from cookies.

## Repository Constraints

- Avoid large schema changes without a reversible migration plan.
- Preserve RLS policy consistency across new tables.
- Keep Stripe webhook handlers idempotent.
- Centralize environment variable validation.
- Avoid bypassing Supabase client for direct database access.`,
    memory: `# Repository Memory

## Key Architectural Decisions
- **Supabase SSR**: Chose \`@supabase/ssr\` for cookie-based auth over JWT localStorage. Server components get user via \`createServerClient\` in middleware.
- **Row-Level Security**: All tables enforce RLS policies defined alongside schema migrations. Policies live in \`supabase/policies/\` per table.
- **Stripe integration**: Idempotency enforced via \`idempotency_key\` header and database dedup table. Failed events retry up to 3 times with exponential backoff.
- **Zod validation**: Single source of truth in \`lib/schemas/\`. Reused in server actions (input validation) and forms (via \`@hookform/resolvers/zod\`).

## Known Technical Debt
1. Trial end validation is client-only — needs middleware check.
2. No rate limiting on public API routes (planned with Supabase Edge Functions).
3. RLS policies not covered by integration tests — only manual verification.
4. Stripe webhook test coverage is thin — only happy path.

## Incident Log
- 2026-03-12: Expired trial users could access premium features for 2 hours. Root cause: \`session.user.trialEnd\` not checked in middleware. Fix: added Supabase RLS policy checking \`trial_end > now()\`.
- 2026-04-05: Stripe webhook replay duplicated subscription updates. Root cause: missing idempotency check. Fix: added \`stripe_events\` dedup table with unique constraint on \`event_id\`.`,
    architecture: `# Repository Architecture

\`\`\`
src/
├── app/
│   ├── (auth)/
│   │   ├── dashboard/
│   │   ├── settings/
│   │   └── layout.tsx
│   ├── (public)/
│   │   ├── landing/
│   │   ├── pricing/
│   │   └── layout.tsx
│   ├── api/
│   │   ├── stripe/
│   │   │   └── webhook/route.ts
│   │   └── auth/
│   │       └── callback/route.ts
│   └── layout.tsx
├── features/
│   ├── auth/
│   │   ├── _actions/
│   │   ├── _components/
│   │   └── _queries/
│   ├── billing/
│   │   ├── _actions/
│   │   ├── _components/
│   │   └── _queries/
│   └── team/
│       ├── _actions/
│       ├── _components/
│       └── _queries/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── stripe/
│   │   ├── client.ts
│   │   └── webhook.ts
│   ├── schemas/
│   │   ├── auth.ts
│   │   └── billing.ts
│   └── env.mjs
├── types/
│   └── supabase.ts
└── supabase/
    ├── migrations/
    ├── policies/
    └── seed.sql

tests/
├── unit/
├── integration/
└── e2e/
\`\`\`

## Migration Notes
- \`supabase/migrations/\` contains all schema migrations — run sequentially.
- Data migrations (backfills, bulk updates) go in \`supabase/data_migrations/\`, separate from schema changes.
- RLS policies are tested via \`supabase/policies/\` SQL files, not in application tests.`,
    cursorRules: `# Cursor Rules

Never import Supabase client directly from \`@supabase/supabase-js\` — always use \`@/lib/supabase/server\` or \`@/lib/supabase/client\`.
Never call \`getCurrentUser()\` in a RSC that doesn't need auth — use it only in auth-required layouts or page-level components.
Avoid writing raw SQL — always use Supabase query builder (\`.from().select().eq()\` chain).
For Stripe webhooks: always check \`stripe_events\` dedup table before processing.
Keep RLS policies defined alongside migrations, not ad-hoc.
Prefer server actions (\`use server\`) over API routes for auth-required mutations.
Avoid \`useEffect\` for data fetching — use Server Components or server actions.
For forms: use \`useActionState\` in React 19, not custom loading states with \`useTransition\`.
Destructure props in function signature. Named exports for all non-page components.`,
    claude: `# Project Memory for Claude Code

## Key Architectural Decisions
- **Supabase SSR auth**: Server-side auth via cookie-based sessions. \`createServerClient()\` reads cookies in middleware and RSCs. No \`useSession()\` on the server.
- **Stripe webhook idempotency**: \`stripe_events\` table with \`event_id\` unique constraint. All webhook handlers check this table before processing.
- **RLS over API middleware**: Row-Level Security policies enforce tenant isolation at the database level instead of application middleware. Each query includes \`tenant_id\` filter implicitly via user context.
- **Zod + Supabase types**: Zod schemas in \`lib/schemas/\` generate TypeScript types via \`z.infer\`. Supabase types generated separately via \`supabase gen types\`.

## Legacy Notes
- Early version used client-side auth with localStorage — all code migrated to SSR. Old patterns remain in \`src/legacy-auth/\`.
- Stripe webhook was originally in Pages Router \`/api/webhooks/stripe.ts\` — migrated to App Router Route Handler.
- Some server actions still use \`revalidatePath\` with hardcoded paths — should be replaced with \`revalidateTag\`.

## Tech Debt
- \`src/legacy-auth/\` should be deleted after verifying no usage.
- Test coverage for RLS policies: none. Recommend \`supabase polices test\` or pgTAP.`,
    testingWorkflow: `# Testing Workflow

1. **Type check**: \`npx tsc --noEmit\` — validates strict mode and catches unused exports.
2. **Server action tests**: Vitest with mocked Supabase server client. Test that actions validate input, check auth, and call the correct service.
3. **Stripe webhook tests**: Mock \`stripe.webhooks.constructEvent\` with a test event payload. Test idempotency by replaying the same event twice.
4. **E2E flows** (Playwright): sign up → verify email → select plan → checkout → view subscription → cancel.
5. **RLS policy review**: After any schema change, review and update \`supabase/policies/\` SQL files.

## Common Failures
- Webhook tests fail when idempotency key is reused without clearing \`stripe_events\` table between tests.
- Type generation runs out of sync: run \`supabase gen types --lang=typescript\` after schema changes.
- Playwright auth resets: use \`storageState\` to persist Supabase session cookies across tests.`,
    migrationNotes: `# Migration Notes

## Active Migration
- **Legacy auth → Supabase SSR**: \`src/legacy-auth/\` still contains old localStorage-based auth code. Deletion target: Q3 2026.
- **Stripe webhook path**: Old webhook at \`/api/webhooks/stripe\` (Pages Router) still active for backward compatibility. Route Handler at \`/api/stripe/webhook\` is the new primary. Cutover target: Q3 2026.

## Schema Migrations
- All schema changes go in \`supabase/migrations/YYYYMMDD_{description}.sql\`.
- Data migrations (backfills, bulk updates) go in \`supabase/data_migrations/\`, separate from schema files.
- RLS policy changes: add or update files in \`supabase/policies/\`, apply separately after schema migration.

## Database Constraints
- \`stripe_events.event_id\`: unique constraint for idempotency.
- \`profiles\` table: \`on_delete cascade\` from \`auth.users\`.
- \`subscriptions\` table: \`user_id\` + \`status\` composite index for billing queries.
- RLS: every table has a \`tenant_id\` or \`user_id\` policy — no table allows unrestricted reads.`,
  },
};
