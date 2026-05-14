import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture Patterns — RepoRules.dev",
  description:
    "Reusable architecture systems designed to keep AI-generated repositories scalable and maintainable.",
};

const CARD =
  "rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 mb-6";
const SIDEBAR =
  "block text-sm text-zinc-400 transition-colors hover:text-zinc-100";
const SECTION_TITLE = "text-2xl font-semibold tracking-tight text-zinc-100 mb-6";

const SECTIONS = [
  {
    id: "feature-based",
    label: "Feature Structure",
    patterns: [
      {
        title: "Feature-Based Structure",
        problem:
          "AI-generated repositories become chaotic when files are grouped by type.",
        solution: "Group files by feature instead of technical role.",
        structure:
          "/features\n  /billing\n  /dashboard\n  /settings\n  /auth",
        constraints: [
          "avoid shared business logic",
          "isolate domain concerns",
          "keep naming predictable",
        ],
        failure: "Oversized shared utils folders.",
      },
    ],
  },
  {
    id: "server-components",
    label: "Server Components",
    patterns: [
      {
        title: "Server Components First",
        problem: "Client-side fetching creates unstable repos.",
        solution:
          "Prefer server components unless interactivity is required.",
        structure:
          "// pages/dashboard.tsx\n\nexport default async function DashboardPage() {\n  const data = await getData()\n  return <DashboardUI data={data} />\n}",
        constraints: [
          "fetch on server",
          "avoid client waterfalls",
          "stream async UI",
        ],
        failure: "Fetching directly inside useEffect.",
      },
    ],
  },
  {
    id: "validation",
    label: "Validation Layer",
    patterns: [
      {
        title: "Shared Validation Layer",
        problem: "Validation schemas become duplicated across features.",
        solution: "Centralize validation logic inside reusable validators.",
        structure:
          "/lib\n  /validators\n    auth.ts\n    billing.ts\n    dashboard.ts",
        constraints: [
          "reuse schemas",
          "avoid inline validation",
          "preserve typing consistency",
        ],
        failure: "Repeated zod schemas across routes.",
      },
    ],
  },
  {
    id: "data-fetching",
    label: "Data Fetching",
    patterns: [
      {
        title: "Server-First Data Fetching",
        problem:
          "Client-side data fetching leads to loading states and waterfalls.",
        solution:
          "Move all data fetching to the server layer.",
        structure:
          "// Server Action\n\nexport async function getBillingData(userId: string) {\n  const data = await db.query(...)\n  return data\n}\n\n// Server Component\nconst data = await getBillingData(session.user.id)",
        constraints: [
          "fetch on server",
          "avoid client hydration overhead",
          "stream when possible",
        ],
        failure: "Mixed server and client fetching patterns.",
      },
    ],
  },
  {
    id: "shared-ui",
    label: "Shared UI",
    patterns: [
      {
        title: "Shared UI Primitives",
        problem:
          "AI tools generate inconsistent UI components across prompts.",
        solution:
          "Keep all reusable UI in /components/ui. Business UI in features.",
        structure:
          "/components/ui\n  button.tsx\n  input.tsx\n  dialog.tsx\n  card.tsx\n  table.tsx\n\n/components/shared\n  header.tsx\n  sidebar.tsx\n  layout.tsx",
        constraints: [
          "reuse primitives",
          "avoid inline styles",
          "keep spacing consistent",
        ],
        failure: "Inconsistent UI patterns across different features.",
      },
    ],
  },
  {
    id: "pr-workflow",
    label: "PR Workflow",
    patterns: [
      {
        title: "Small PR Workflow",
        problem: "Large AI-generated PRs become unreviewable.",
        solution: "Keep PRs isolated and incremental.",
        structure:
          "## PR Guidelines\n\n- under 300 LOC\n- single responsibility\n- preserve architecture consistency\n- avoid mixed concerns",
        constraints: [
          "under 300 LOC",
          "single responsibility",
          "preserve architecture consistency",
        ],
        failure: "Mixed feature concerns inside one PR.",
      },
    ],
  },
  {
    id: "testing",
    label: "Testing",
    patterns: [
      {
        title: "AI Testing Standards",
        problem:
          "AI-generated features often miss edge cases and error states.",
        solution:
          "Require loading, error, empty and accessibility checks on every generated feature.",
        structure:
          "## Testing Requirements\n\n- loading states\n- error states\n- empty states\n- accessibility checks\n- unit tests",
        constraints: [
          "test behavior not implementation",
          "avoid excessive mocking",
          "prefer integration tests",
        ],
        failure: "Tests passing but production flows broken.",
      },
    ],
  },
  {
    id: "monorepo",
    label: "Monorepo",
    patterns: [
      {
        title: "Monorepo Package Structure",
        problem: "Shared packages become tightly coupled.",
        solution: "Keep package boundaries explicit.",
        structure:
          "/apps\n  web\n  admin\n\n/packages\n  ui\n  config\n  shared\n\npnpm-workspace.yaml\nturbo.json",
        constraints: [
          "avoid circular imports",
          "isolate shared packages",
          "preserve dependency direction",
        ],
        failure: "Shared UI package importing business logic.",
      },
    ],
  },
  {
    id: "migration",
    label: "Migration",
    patterns: [
      {
        title: "Incremental Migration Pattern",
        problem:
          "AI tools generate code using deprecated patterns when legacy code exists.",
        solution:
          "Document legacy areas explicitly so AI avoids adding to them.",
        structure:
          "# Migration Notes\n\n- old auth hooks still exist\n- validation refactor in progress\n- dashboard migration planned\n- legacy hooks pending migration",
        constraints: [
          "prevent AI from adding to legacy code",
          "document deprecated patterns",
          "maintain migration timeline",
        ],
        failure: "New features built on deprecated patterns.",
      },
    ],
  },
];

export default function PatternsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Tag */}
      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
        Repository Architecture Patterns
      </span>

      {/* H1 */}
      <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
        Architecture patterns
        <br />
        for AI-assisted repositories
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        Reusable architecture systems designed to keep AI-generated repositories
        scalable and maintainable.
      </p>

      {/* Stats */}
      <div className="mt-8 flex gap-5 font-mono text-xs text-zinc-500">
        <span>18 patterns</span>
        <span>6 categories</span>
        <span>Updated 3 days ago</span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search architecture patterns..."
        className="mt-10 w-full max-w-xl rounded-xl border border-[#2a2d35] bg-[#16181d] px-4 py-3 text-sm text-zinc-300 outline-none"
      />

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-md bg-zinc-100 px-3 py-1.5 font-mono text-xs text-zinc-900">
          All
        </span>
        {[
          "Folder Structure",
          "Validation",
          "Server Actions",
          "Data Fetching",
          "PR Workflow",
          "Testing",
        ].map((f) => (
          <span
            key={f}
            className="rounded-md border border-zinc-700 px-3 py-1.5 font-mono text-xs text-zinc-400 hover:text-zinc-100"
          >
            {f}
          </span>
        ))}
      </div>

      {/* Layout */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-2">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Pattern Categories
            </p>
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={SIDEBAR}>
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="min-w-0">
          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="mb-14">
              {section.patterns.map((p) => (
                <div key={p.title} className={CARD}>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {p.title}
                  </h3>

                  <div className="mt-4">
                    <span className="font-mono text-xs text-zinc-500">
                      Problem:
                    </span>
                    <p className="mt-1 font-mono text-sm leading-relaxed text-zinc-400">
                      {p.problem}
                    </p>
                  </div>

                  <div className="mt-4">
                    <span className="font-mono text-xs text-zinc-500">
                      Solution:
                    </span>
                    <p className="mt-1 font-mono text-sm leading-relaxed text-zinc-400">
                      {p.solution}
                    </p>
                  </div>

                  <div className="mt-4">
                    <span className="font-mono text-xs text-zinc-500">
                      Structure:
                    </span>
                    <pre className="mt-2 rounded-lg border border-zinc-800 bg-zinc-950 p-3 font-mono text-sm leading-relaxed text-zinc-400">
                      {p.structure}
                    </pre>
                  </div>

                  <div className="mt-4">
                    <span className="font-mono text-xs text-zinc-500">
                      Constraints:
                    </span>
                    <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                      {p.constraints.map((c) => (
                        <div key={c} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="font-mono text-xs text-amber-500">
                      Common Failure
                    </span>
                    <p className="mt-1 font-mono text-sm text-zinc-400">
                      {p.failure}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          ))}

          {/* Why Patterns Matter */}
          <section className="mt-14">
            <h2 className={SECTION_TITLE}>
              Why Architecture Patterns Matter
            </h2>
            <div className="max-w-3xl rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 leading-8 text-zinc-300">
              <p>
                AI-generated code becomes inconsistent without shared
                architectural constraints.
              </p>
              <p className="mt-4">
                Patterns create predictable repository structure, stable
                collaboration workflows and reusable engineering conventions.
              </p>
            </div>
          </section>

          {/* Common Failures */}
          <section className="mt-14">
            <h2 className={SECTION_TITLE}>
              Common AI Repository Failures
            </h2>
            <div className="rounded-xl border border-zinc-800 bg-[#16181d] p-6 font-mono text-sm leading-7 text-zinc-400">
              {[
                "duplicated hooks",
                "repeated validation schemas",
                "oversized utility folders",
                "mixed server/client logic",
                "unstable naming conventions",
                "inconsistent feature structure",
              ].map((f) => (
                <div key={f}>- {f}</div>
              ))}
            </div>
          </section>

          {/* Migration Notes */}
          <section className="mt-14">
            <h2 className={SECTION_TITLE}>Migration Notes</h2>
            <div className="rounded-xl border border-zinc-800 bg-[#16181d] p-6 font-mono text-sm leading-7 text-zinc-400">
              {[
                "old dashboard patterns still exist",
                "validation refactor in progress",
                "legacy hooks pending migration",
              ].map((n) => (
                <div key={n} className="flex items-start gap-2">
                  <span className="mt-1 text-amber-400">*</span>
                  <span>{n}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Changes */}
          <section className="mt-14">
            <h2 className={SECTION_TITLE}>Recent Pattern Updates</h2>
            <div className="max-w-xl rounded-xl border border-[#2a2d35] bg-[#151922] p-5 font-mono text-sm text-zinc-400">
              <div className="mb-4 text-xs text-zinc-500">// changelog</div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-blue-300">v0.4.2</div>
                  <div className="mt-1 space-y-1">
                    <div>- added validation architecture patterns</div>
                    <div>- improved PR workflow standards</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-blue-300">v0.4.1</div>
                  <div className="mt-1 space-y-1">
                    <div>- updated server component constraints</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-blue-300">v0.4.0</div>
                  <div className="mt-1 space-y-1">
                    <div>- introduced monorepo structure patterns</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
