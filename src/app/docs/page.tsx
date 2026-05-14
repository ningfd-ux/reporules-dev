import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs — RepoRules.dev",
  description:
    "Structured engineering documentation designed to keep AI-assisted repositories maintainable over time.",
};

const SIDEBAR =
  "block text-sm text-zinc-400 transition-colors hover:text-zinc-100";
const CARD =
  "rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 mb-6";
const SECTION_TITLE = "text-2xl font-semibold tracking-tight text-zinc-100 mb-6";

const SECTIONS = [
  "Getting Started",
  "Repository Structure",
  "Architecture",
  "AI Constraints",
  "Testing Workflow",
  "PR Workflow",
  "Validation System",
  "Migration Notes",
  "Deployment",
  "Security",
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Tag */}
      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
        Engineering Documentation
      </span>

      {/* H1 */}
      <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
        Documentation system
        <br />
        for scalable AI repositories
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        Structured engineering documentation designed to keep AI-assisted
        repositories maintainable over time.
      </p>

      {/* Stats */}
      <div className="mt-8 flex gap-5 font-mono text-xs text-zinc-500">
        <span>26 documents</span>
        <span>8 sections</span>
        <span>Updated 2 days ago</span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search documentation..."
        className="mt-10 w-full max-w-xl rounded-xl border border-[#2a2d35] bg-[#16181d] px-4 py-3 text-sm text-zinc-300 outline-none"
      />

      {/* Layout */}
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-2">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Documentation
            </p>
            {SECTIONS.map((s) => (
              <a key={s} href={`#${s.toLowerCase().replace(/\s+/g, "-")}`} className={SIDEBAR}>
                {s}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="min-w-0">
          {/* Getting Started */}
          <section id="getting-started" className="mb-14">
            <div className={CARD}>
              <h3 className="text-lg font-semibold text-zinc-100">
                Getting Started
              </h3>
              <p className="mt-4 font-mono text-sm leading-relaxed text-zinc-400">
                This repository system is designed for long-term AI-assisted
                development.
              </p>
              <div className="mt-4">
                <span className="font-mono text-xs text-zinc-500">
                  Core principles:
                </span>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {[
                    "server-first architecture",
                    "feature-based structure",
                    "reusable validation layer",
                    "shared engineering conventions",
                  ].map((p) => (
                    <div key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <span className="font-mono text-xs text-zinc-500">
                  Repository goals:
                </span>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {[
                    "predictable AI output",
                    "maintainable repo structure",
                    "scalable collaboration workflow",
                  ].map((g) => (
                    <div key={g} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      {g}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Repository Structure */}
          <section id="repository-structure" className="mb-14">
            <h2 className={SECTION_TITLE}>Repository Structure</h2>
            <div className={CARD}>
              <pre className="font-mono text-sm leading-6 text-zinc-400">
{`/app
/components
/features
/lib
/prompts
/rules
/tests

architecture.md
memory.md
rules.md
migration-notes.md`}</pre>
              <p className="mt-4 font-mono text-sm text-zinc-500">
                All business logic should remain isolated by feature.
              </p>
            </div>
          </section>

          {/* Architecture */}
          <section id="architecture" className="mb-14">
            <h2 className={SECTION_TITLE}>Architecture</h2>
            <div className={CARD}>
              <p className="font-mono text-sm leading-relaxed text-zinc-400">
                The repository follows a server-first architecture.
              </p>
              <div className="mt-4">
                <span className="font-mono text-xs text-zinc-500">
                  Guidelines:
                </span>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {[
                    "prefer server components",
                    "isolate business logic",
                    "avoid duplicated hooks",
                    "preserve feature boundaries",
                  ].map((g) => (
                    <div key={g} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      {g}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <span className="font-mono text-xs text-amber-500">
                  Common Failures:
                </span>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {[
                    "mixed server/client logic",
                    "oversized utilities",
                    "inconsistent folder naming",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* AI Constraints */}
          <section id="ai-constraints" className="mb-14">
            <h2 className={SECTION_TITLE}>AI Constraints</h2>
            <div className={CARD}>
              <p className="font-mono text-sm leading-relaxed text-zinc-400">
                All generated code must:
              </p>
              <div className="mt-4 space-y-1 font-mono text-sm text-zinc-400">
                {[
                  "preserve repo conventions",
                  "reuse validation schemas",
                  "reuse shared UI primitives",
                  "preserve folder boundaries",
                ].map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                    {r}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="font-mono text-xs text-red-400">Never:</span>
              </div>
              <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                {[
                  "introduce new folder structures",
                  "duplicate business logic",
                  "fetch directly inside client components",
                ].map((n) => (
                  <div key={n} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testing Workflow */}
          <section id="testing-workflow" className="mb-14">
            <h2 className={SECTION_TITLE}>Testing Workflow</h2>
            <div className={CARD}>
              <span className="font-mono text-xs text-zinc-500">
                Requirements:
              </span>
              <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                {[
                  "test critical flows",
                  "isolate side effects",
                  "prefer integration tests",
                  "avoid snapshot overuse",
                ].map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                    {r}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="font-mono text-xs text-amber-500">
                  Common Failures:
                </span>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {[
                    "duplicated mocks",
                    "oversized test files",
                    "unstable async tests",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PR Workflow */}
          <section id="pr-workflow" className="mb-14">
            <h2 className={SECTION_TITLE}>PR Workflow</h2>
            <div className={CARD}>
              <span className="font-mono text-xs text-zinc-500">
                Requirements:
              </span>
              <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                {[
                  "keep PRs under 300 LOC",
                  "avoid mixed concerns",
                  "preserve architecture consistency",
                ].map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                    {r}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="font-mono text-xs text-zinc-500">
                  Review Checklist:
                </span>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {[
                    "naming consistency",
                    "validation reuse",
                    "server-first architecture",
                  ].map((c) => (
                    <div key={c} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Validation System */}
          <section id="validation-system" className="mb-14">
            <h2 className={SECTION_TITLE}>Validation System</h2>
            <div className={CARD}>
              <p className="font-mono text-sm leading-relaxed text-zinc-400">
                Validation schemas should remain centralized.
              </p>
              <pre className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950 p-3 font-mono text-sm leading-relaxed text-zinc-400">
{`/lib
  /validators`}</pre>
              <div className="mt-4">
                <span className="font-mono text-xs text-zinc-500">
                  Constraints:
                </span>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {[
                    "avoid inline validation",
                    "reuse shared schemas",
                    "preserve typing consistency",
                  ].map((c) => (
                    <div key={c} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Migration Notes */}
          <section id="migration-notes" className="mb-14">
            <h2 className={SECTION_TITLE}>Migration Notes</h2>
            <div className={CARD}>
              <span className="font-mono text-xs text-zinc-500">
                Pending migrations:
              </span>
              <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                {[
                  "billing hooks",
                  "auth validation layer",
                  "dashboard queries",
                ].map((m) => (
                  <div key={m} className="flex items-start gap-2">
                    <span className="mt-1 text-amber-400">*</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="font-mono text-xs text-zinc-500">
                  Technical debt:
                </span>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {[
                    "old utility helpers",
                    "duplicated validators",
                  ].map((d) => (
                    <div key={d} className="flex items-start gap-2">
                      <span className="mt-1 text-amber-400">*</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Deployment */}
          <section id="deployment" className="mb-14">
            <h2 className={SECTION_TITLE}>Deployment</h2>
            <div className={CARD}>
              <span className="font-mono text-xs text-zinc-500">
                Deployment workflow:
              </span>
              <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                {[
                  "run validation",
                  "run integration tests",
                  "review AI-generated diffs",
                  "deploy incrementally",
                ].map((d) => (
                  <div key={d} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                    {d}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="font-mono text-xs text-zinc-500">
                  Constraints:
                </span>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {[
                    "avoid large production changes",
                    "preserve migration consistency",
                  ].map((c) => (
                    <div key={c} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Security */}
          <section id="security" className="mb-14">
            <h2 className={SECTION_TITLE}>Security</h2>
            <div className={CARD}>
              <span className="font-mono text-xs text-zinc-500">
                Requirements:
              </span>
              <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                {[
                  "validate all input",
                  "isolate secrets",
                  "preserve server boundaries",
                ].map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                    {r}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="font-mono text-xs text-red-400">Never:</span>
              </div>
              <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                {[
                  "expose server logic to client",
                  "store secrets in prompts",
                ].map((n) => (
                  <div key={n} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    {n}
                  </div>
                ))}
              </div>
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
                "unstable folder structure",
                "inconsistent validation schemas",
                "oversized utility files",
                "mixed client/server logic",
              ].map((f) => (
                <div key={f}>- {f}</div>
              ))}
            </div>
          </section>

          {/* Recent Changes */}
          <section className="mt-14">
            <h2 className={SECTION_TITLE}>
              Recent Documentation Updates
            </h2>
            <div className="max-w-xl rounded-xl border border-[#2a2d35] bg-[#151922] p-5 font-mono text-sm text-zinc-400">
              <div className="mb-4 text-xs text-zinc-500">// changelog</div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-blue-300">v0.4.2</div>
                  <div className="mt-1 space-y-1">
                    <div>- updated AI constraints</div>
                    <div>- improved PR workflow docs</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-blue-300">v0.4.1</div>
                  <div className="mt-1 space-y-1">
                    <div>- added migration notes</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-blue-300">v0.4.0</div>
                  <div className="mt-1 space-y-1">
                    <div>- introduced testing standards</div>
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
