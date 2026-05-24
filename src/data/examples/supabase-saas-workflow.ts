import type { ExampleData } from "./nextjs-ai-saas";

export const supabaseSaaSWorkflowExample: ExampleData = {
  slug: "supabase-saas-workflow",
  title: "Supabase SaaS Workflow",
  description: "Repository governance files generated from a full-stack SaaS workflow system using Supabase — CI/CD pipelines, database migrations, and deployment automation.",
  repository: "supabase-saas-workflow",
  generatedFrom: ["28 SaaS CI pipelines", "16 Supabase migration workflows", "12 deployment automation systems"],
  signals: [
    "CI/CD pipeline patterns",
    "Database migration governance",
    "Deploy preview workflows",
    "Staged rollout automation",
  ],
  files: {
    rules: `# Repository Rules

## Workflow Rules

- **Database migration gate**: No migration reaches production without passing \`supabase db diff --linked\` against staging. Run migration lint step before any PR merge.
- **Migration atomicity**: Every migration file must be reversible — provide \`up.sql\` and \`down.sql\` in the same file, separated by a rollback guard comment.
- **One migration per PR**: No bundling schema changes with application code changes. Each migration PR must be reviewed by a second engineer.
- **Deploy preview per branch**: Every feature branch deploys a Supabase branch with its own database. CI must run seed data on new branches automatically.
- **Staged rollout required**: Production migrations roll out in stages: staging → canary (10% traffic) → full. Each stage requires a 15-minute watch window for error spikes.
- **Rollback protocol**: If any stage shows >5% error rate increase, auto-rollback fires. Rollback must complete within 2 minutes.

## Repository Constraints

- Avoid mutating production data directly — always use migration files.
- Preserve migration ordering — never edit a committed migration.
- Keep seed data idempotent — running \`supabase db seed\` multiple times produces the same state.
- Avoid long-running transactions in migration files — split large migrations into batches.
- Never bypass the CI gate — no direct \`supabase db push\` to production.
- Document rollback steps before deploying any migration.`,
    memory: `# Repository Memory

## Key Architectural Decisions
- **Database branch per PR**: Supabase branching enabled for all feature branches — CI creates \`branch-{pr_number}\` on push. Seed data auto-applied for consistent testing.
- **Migration linting**: Custom \`ci/migration-lint.ts\` runs on every PR: checks naming conventions, ensures down.sql exists, validates no destructive ALTER TABLE without review.
- **Staged rollout**: \`ci/deploy-stages.yml\` controls rollout through staging → canary → production. \`rollback-trigger.ts\` monitors sentry error rates during watch windows.
- **Idempotent seeding**: \`supabase/seed.sql\` uses \`ON CONFLICT DO NOTHING\` for all inserts. Run on every branch creation and after schema migrations.

## Known Technical Debt
1. Migration batch splitting not automated — still manual for large data migrations (>100K rows).
2. Canary stage deployment takes 8+ minutes due to Supabase branch creation overhead.
3. No automated down-migration testing in CI — only manual verification.
4. Rollback trigger uses fixed 5% threshold — generates false positives during low-traffic hours.

## Incident Log
- 2026-04-20: Migration \`20260420_add_usage_limits.sql\` deployed without down.sql. Rollback required manual schema reconstruction. Root cause: migration lint was bypassed via \`--force\` flag. Fix: removed \`--force\` from all CI commands and added a blocking check in \`pre-commit\`.
- 2026-05-02: Staging → canary rollout dropped connection pool to production database. Root cause: Supabase branch pool limit hit during parallel migration runs. Fix: added pool throttling in \`ci/deploy-stages.yml\` — max 2 concurrent branch migrations.
- 2026-05-15: Seed data duplication after migration \`20260515_add_teams.sql\`. Root cause: seed.sql inserted into \`teams\` table unconditionally. Fix: added \`ON CONFLICT DO NOTHING\` and wrapped all seed operations in idempotent blocks.`,
    architecture: `# Repository Architecture

\`\`\`
.github/
├── workflows/
│   ├── ci.yml
│   ├── deploy-stages.yml
│   ├── migration-lint.yml
│   └── rollback.yml
├── actions/
│   ├── supabase-branch/action.yml
│   ├── migration-check/action.yml
│   └── staged-deploy/action.yml
ci/
├── migration-lint.ts
├── rollback-trigger.ts
├── branch-lifecycle.ts
├── seed-data.ts
└── pool-throttle.ts
supabase/
├── migrations/
│   ├── 20260501_add_orgs.sql
│   └── 20260515_add_teams.sql
├── seed.sql
├── policies/
└── branches/
scripts/
├── local-dev.sh
├── reset-db.sh
└── mirror-staging.sh
docs/
├── MIGRATION_PROCESS.md
├── ROLLBACK_GUIDE.md
└── DEPLOY_CHECKLIST.md
\`\`\`

## Workflow Pipeline

\`\`\`
PR Created → Migration Lint → Supabase Branch Created
    → Seed Data Applied → Integration Tests Run
    → Review Requested → Merge to Staging
    → Canary Deploy → Watch Window (15m)
    → Full Production Deploy → Branch Cleanup
\`\`\`

## Key Components

- **Migration Lint**: Custom action running \`ci/migration-lint.ts\`. Validates naming convention (\`YYYYMMDD_description.sql\`), checks for down.sql, flags destructive operations (DROP COLUMN, DROP TABLE without review).
- **Branch Lifecycle**: \`ci/branch-lifecycle.ts\` manages Supabase branch creation and cleanup. Branches auto-deleted after PR merge or 7 days of inactivity.
- **Staged Deploy**: \`ci/deploy-stages.yml\` orchestrates the 3-stage rollout. Each stage runs the migration, waits for the watch window, checks error rate, and proceeds or rolls back.
- **Rollback Trigger**: \`ci/rollback-trigger.ts\` monitors sentry error rate and auto-invokes \`supabase db push --down\` if threshold exceeded.`,
    cursorRules: `# Cursor Rules

Never commit a migration without a down.sql — always create the rollback first.
Never edit a committed migration file — create a new migration to undo changes.
Always run \`supabase db diff --linked\` against staging before pushing production migrations.
Keep migration files small — one logical change per file. Split large operations across multiple numbered files.
Avoid \`ALTER COLUMN TYPE\` in migrations unless you have confirmed backward compatibility with all active query patterns.
For new tables: always include \`created_at\`, \`updated_at\` timestamps, RLS policies, and relevant indexes in the same migration.
Use \`ci/local-dev.sh\` to mirror production schema locally before authoring migrations.
Prefer additive migrations (ADD COLUMN, CREATE TABLE) over destructive ones (DROP, ALTER TYPE).`,
    claude: `# Project Memory for Claude Code

## Key Architectural Decisions
- **Database migration gate**: Every PR that touches \`supabase/migrations/\` runs migration lint before tests — enforced by \`.github/workflows/migration-lint.yml\`. Lint checks must pass before any other CI step runs.
- **Supabase branching**: Each PR creates an isolated database branch. The branch name derives from the PR number for traceability. Branches auto-cleanup after merge or 7 days of inactivity.
- **Staged deployment**: Production deploys go through a 3-stage gate: staging → canary (10%) → full. Each stage has a 15-minute watch window monitoring sentry error rates via \`ci/rollback-trigger.ts\`.
- **Idempotent seed data**: All seed operations use \`ON CONFLICT DO NOTHING\` + \`WHERE NOT EXISTS\` guards. The seed script is safe to run multiple times on the same database.

## Legacy Patterns to Preserve
- Rollback protocol documented in \`docs/ROLLBACK_GUIDE.md\` — follow step-by-step, never shortcut.
- Migration naming convention is \`YYYYMMDD_description.sql\` — new migrations must follow this format.
- \`ci/pool-throttle.ts\` caps concurrent branch migrations to 2 — added after the May 2 pool exhaustion incident.

## Tech Debt
- No automated down-migration testing in CI — run \`supabase db push --down\` manually against a test database before deploying.
- Canary deploy takes 8+ minutes — Supabase branch provisioning is the bottleneck. Consider warming pools.
- Rollback threshold is fixed at 5% — should be dynamic based on baseline traffic patterns.
- Migration lint executes locally in CI — should run on Supabase's linked database for accuracy.`,
    testingWorkflow: `# Testing Workflow

1. **Migration lint**: \`npx tsx ci/migration-lint.ts supabase/migrations/<file>\` — validates naming, down.sql existence, destructive operations, and column type changes.
2. **Supabase branch creation**: \`supabase branch create branch-{pr} --from main\` — creates isolated test environment.
3. **Seed data application**: \`supabase db push --branch branch-{pr} && supabase db seed --branch branch-{pr}\` — applies migrations and seed data.
4. **Integration tests**: Runs against Supabase branch — tests that migration doesn't break existing queries, RLS policies maintain tenant isolation, and seed data produces expected state.
5. **Rollback test**: \`supabase db push --down --branch branch-{pr}\` — verifies down migration works without data loss.
6. **Staging deploy**: Merge to main triggers staging deploy. Run \`supabase db diff --linked\` to confirm migration matches linked staging database.
7. **Canary deploy**: 10% traffic routed to canary instance. 15-minute watch window.
8. **Full production deploy**: After canary watch window passes.

## Common Failures
- Migration lint times out on large files (>500 lines) — split migration into batch files.
- Supabase branch creation fails when pool limit hit — retry with exponential backoff (handled by \`ci/pool-throttle.ts\`).
- Rollback test flaky when down migration depends on data inserted by seed — ensure down.sql only references schema, not data state.
- Canary watch window false positives during low traffic — error rate baseline too low for meaningful percentage.`,
    migrationNotes: `# Migration Notes

## Active Migration
- **Phase 1 complete**: All production migrations now include down.sql. Legacy migrations (pre-2026) in \`supabase/migrations/legacy/\` still lack rollback — documented as non-rollbackable.
- **Phase 2 in progress**: Automating down-migration testing in CI. \`ci/rollback-test.ts\` in development but not yet integrated into the workflow pipeline.
- **Phase 3 planned**: Dynamic rollback thresholds based on rolling 7-day traffic baseline. Target: Q3 2026.

## Migration Naming Convention
\`\`\`
YYYYMMDD_description.sql
20260501_add_orgs.sql
20260515_add_teams.sql
\`\`\`
Each file contains both up migration and down migration:
\`\`\`sql
-- UP
CREATE TABLE teams (id uuid DEFAULT gen_random_uuid() PRIMARY KEY, ...);

-- DOWN
DROP TABLE IF EXISTS teams;
\`\`\`

## Rollback Protocol
1. Auto-rollback triggers when staging/canary error rate exceeds 5%.
2. \`.github/workflows/rollback.yml\` runs \`supabase db push --down\` on the affected stage.
3. Rollback must complete within 2 minutes.
4. After rollback: create a new migration with \`_revert_\` prefix documenting why the original migration failed.
5. No re-deploy of the original migration until RCA is documented.

## Database Constraints
- \`supabase/migrations/\`: all migrations must be sequential — no reordering or editing committed files.
- \`supabase/seed.sql\`: must remain idempotent — \`ON CONFLICT DO NOTHING\` everywhere.
- \`supabase/branches/\`: branch metadata stored per deployment stage — \`staging\`, \`canary\`, \`production\`.
- Migration files are never deleted — if a migration is wrong, create a new migration that reverts it.`,
  },
};
