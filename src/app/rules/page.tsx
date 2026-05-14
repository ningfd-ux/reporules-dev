import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rules — RepoRules.dev",
  description: "Team-wide AI coding rules. Architecture, constraints, naming, PR rules, testing, performance.",
};

const SIDEBAR_LINK = "block text-sm text-zinc-400 transition-colors hover:text-blue-300";

const SECTIONS = [
  {
    id: "architecture",
    label: "Architecture",
    content: `## Feature-first structure

Each business feature owns:
- components
- hooks
- actions
- schemas
- tests

Avoid global business logic. Keep feature boundaries clear.`,
  },
  {
    id: "constraints",
    label: "Constraints",
    content: `## AI Constraints

Never fetch inside client components.

Avoid duplicated hooks.

Reuse shared UI primitives.

Prefer feature-based folders.

Keep business logic isolated.

Avoid large components over 200 lines.

Prefer server state over client state.

Keep PRs under 300 LOC.`,
  },
  {
    id: "naming",
    label: "Naming",
    content: `## Naming Conventions

Use explicit names for files and folders.

Avoid generic names like:
- helpers/
- misc/
- utils/ (without clear scope)
- temp/

Use feature-oriented naming:
- /features/billing/hooks/useSubscription.ts
- /features/dashboard/components/StatsCard.tsx`,
  },
  {
    id: "pr-rules",
    label: "PR Rules",
    content: `## Pull Request Rules

Before merging AI-generated code:
- Check for duplicated logic
- Check for duplicated hooks
- Verify folder consistency
- Verify naming consistency
- Ensure tests are included
- Ensure server-first architecture is preserved

PR Guidelines:
- Keep PRs focused on a single concern
- Avoid mixed concerns in one PR
- Prefer incremental refactors
- Keep generated files small`,
  },
  {
    id: "testing",
    label: "Testing",
    content: `## Testing Standards

All AI-generated features must include:
- loading states
- error states
- empty states
- accessibility checks
- unit tests

Testing Stack:
- React Testing Library
- Vitest
- Playwright

Rules:
- Test behavior instead of implementation
- Avoid excessive mocking
- Prefer integration-style tests`,
  },
  {
    id: "performance",
    label: "Performance",
    content: `## Performance Rules

- Avoid unnecessary client bundles
- Lazy load heavy components
- Prefer streaming when possible
- Avoid client-side waterfalls
- Prefetch critical data on server

Detected server-first architecture:
- Move data fetching to server layer
- Use Server Actions for mutations
- Keep client components thin`,
  },
];

export default function RulesPage() {
  return (
    <div className="mx-auto flex max-w-7xl gap-12 px-6 py-20">
      {/* Sidebar */}
      <aside className="hidden w-56 shrink-0 lg:block">
        <nav className="sticky top-24 space-y-3">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Rules
          </p>
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={SIDEBAR_LINK}>
              {s.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="min-w-0 flex-1 space-y-20">
        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id}>
            <pre className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 font-mono text-sm leading-relaxed text-zinc-400 whitespace-pre-wrap">
              {s.content}
            </pre>
          </section>
        ))}
      </div>
    </div>
  );
}
