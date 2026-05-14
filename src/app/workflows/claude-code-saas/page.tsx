import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Claude Code SaaS Repository System — RepoRules.dev",
  description:
    "A structured repository workflow designed for scalable AI-assisted SaaS engineering.",
};

const CODE =
  "overflow-x-auto rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 font-mono text-sm leading-7";
const CARD =
  "rounded-xl border border-zinc-800 bg-[#16181d] p-6 font-mono text-sm leading-7 text-zinc-400";
const SECTION_TITLE = "text-2xl font-semibold tracking-tight text-zinc-100 mb-6";

export default function ClaudeCodeSaaS() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Tag */}
      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
        Production AI Workflow
      </span>

      {/* H1 */}
      <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
        Claude Code SaaS Repository System
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        A structured repository workflow designed for scalable AI-assisted SaaS engineering.
      </p>

      {/* Repo stats */}
      <div className="mt-8 flex gap-5 font-mono text-xs text-zinc-500">
        <span>24 rules</span>
        <span>12 prompts</span>
        <span>6 workflows</span>
        <span>Updated 3 days ago</span>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 flex flex-wrap gap-3">
        {["Copy rules.md", "Copy prompts", "Open Docs"].map((a) => (
          <button
            key={a}
            className="rounded-lg border border-zinc-700 px-3 py-2 font-mono text-xs text-zinc-400 transition-colors hover:bg-zinc-900"
          >
            {a}
          </button>
        ))}
      </div>

      {/* Repository Context */}
      <section className="mt-14">
        <h2 className={SECTION_TITLE}>Repository Context</h2>
        <div className={CARD}>
          <span className="text-zinc-500">Stack:</span>
          <div className="ml-4">- Next.js App Router</div>
          <div className="ml-4">- Supabase</div>
          <div className="ml-4">- Stripe</div>
          <div className="ml-4">- shadcn/ui</div>
          <div className="ml-4">- pnpm</div>
          <div className="ml-4">- Turborepo</div>
          <div className="mt-4">
            <span className="text-zinc-500">Architecture:</span>
          </div>
          <div className="ml-4">- server-first</div>
          <div className="ml-4">- feature-based</div>
          <div className="ml-4">- shared UI primitives</div>
          <div className="mt-4">
            <span className="text-zinc-500">Constraints:</span>
          </div>
          <div className="ml-4">- avoid duplicated hooks</div>
          <div className="ml-4">- avoid mixed concerns</div>
          <div className="ml-4">- keep PRs under 300 LOC</div>
        </div>
      </section>

      {/* Repo Tree */}
      <section className="mt-14">
        <h2 className={SECTION_TITLE}>Repository Structure</h2>
        <div className={CODE}>
          <pre className="text-zinc-400 leading-6">{`/app
  /(dashboard)
  /(marketing)
  /api

/components
  /ui
  /shared

/features
  /auth
  /billing
  /dashboard
  /settings
  /analytics
  /notifications

/lib
  /db
  /stripe
  /auth
  /validators
  /utils

/prompts

/rules

/tests

legacy/
  deprecated/

README.md
TODO.md
.env.example
pnpm-workspace.yaml
turbo.json
architecture.md
migration-notes.md
testing-guidelines.md
memory.md
rules.md`}</pre>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="mt-14">
        <h2 className={SECTION_TITLE}>Workflow Steps</h2>
        <div className="space-y-8">
          {[
            {
              step: "Step 1 — Repository Planning",
              constraints: [
                "define feature boundaries",
                "avoid shared business logic",
                "keep folder naming predictable",
              ],
              output: ["repo structure", "feature folders", "architecture notes"],
              failures: [
                "oversized shared utils",
                "mixed feature concerns",
                "inconsistent naming",
              ],
            },
            {
              step: "Step 2 — Feature Planning",
              constraints: [
                "avoid duplicated hooks",
                "isolate business logic",
                "reuse validation schemas",
              ],
              output: ["feature folder", "server actions", "validation layer"],
              failures: [
                "repeated schemas",
                "client-side fetching",
                "oversized components",
              ],
            },
            {
              step: "Step 3 — AI Implementation",
              constraints: [
                "follow repo conventions",
                "reuse shared primitives",
                "preserve server-first architecture",
              ],
              output: [
                "predictable code structure",
                "isolated business logic",
                "reusable UI",
              ],
              failures: [
                "inconsistent prompt output",
                "duplicated logic",
                "unstable patterns",
              ],
            },
            {
              step: "Step 4 — PR Validation",
              constraints: [
                "avoid mixed concerns",
                "keep PRs focused",
                "preserve architecture consistency",
              ],
              output: [
                "stable PR review",
                "predictable diffs",
                "maintainable repo history",
              ],
              failures: [
                "oversized PRs",
                "inconsistent architecture",
                "duplicated patterns",
              ],
            },
          ].map((s) => (
            <div key={s.step} className={CARD}>
              <h3 className="mb-4 text-base font-semibold text-zinc-100">
                {s.step}
              </h3>
              <div className="mt-3">
                <span className="text-zinc-500">Constraints:</span>
                {s.constraints.map((c) => (
                  <div key={c} className="ml-4">
                    - {c}
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <span className="text-zinc-500">Expected Output:</span>
                {s.output.map((o) => (
                  <div key={o} className="ml-4">
                    - {o}
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <span className="text-zinc-500">Common Failures:</span>
                {s.failures.map((f) => (
                  <div key={f} className="ml-4">
                    - {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt */}
      <section className="mt-14">
        <h2 className={SECTION_TITLE}>Prompt</h2>
        <div className={CARD}>
          <pre className="leading-7 text-zinc-400">
Refactor this feature following existing repo conventions.

{"Requirements:"}
{"- preserve server-first architecture"}
{"- avoid duplicated validation logic"}
{"- reuse shared UI primitives"}
{"- keep business logic isolated"}

{"Do not:"}
{"- introduce new folder structures"}
{"- fetch inside client components"}
{"- create oversized utility files"}
          </pre>
        </div>
      </section>

      {/* Team Workflow */}
      <section className="mt-14">
        <h2 className={SECTION_TITLE}>Team Workflow</h2>
        <div className={CARD}>
          <div className="leading-7">
            {[
              "1. feature planning",
              "2. AI implementation",
              "3. human review",
              "4. PR validation",
              "5. incremental refactor",
            ].map((s) => (
              <div key={s}>{s}</div>
            ))}
          </div>
          <p className="mt-4 text-zinc-500">
            All generated code must pass review before merge.
          </p>
        </div>
      </section>

      {/* Common Failures */}
      <section className="mt-14">
        <h2 className={SECTION_TITLE}>Common AI Engineering Failures</h2>
        <div className={CARD}>
          {[
            "duplicated hooks",
            "inconsistent naming",
            "mixed client/server logic",
            "oversized components",
            "scattered utilities",
            "repeated validation schemas",
          ].map((f) => (
            <div key={f}>- {f}</div>
          ))}
        </div>
      </section>

      {/* Migration Notes */}
      <section className="mt-14">
        <h2 className={SECTION_TITLE}>Migration Notes</h2>
        <div className={CARD}>
          {[
            "dashboard still uses old hooks",
            "billing refactor in progress",
            "auth migration planned",
            "validation migration partially completed",
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
        <h2 className={SECTION_TITLE}>Recent Changes</h2>
        <div className="max-w-xl rounded-xl border border-[#2a2d35] bg-[#151922] p-5 font-mono text-sm text-zinc-400">
          <div className="mb-4 text-xs text-zinc-500">// changelog</div>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-blue-300">v0.4.2</div>
              <div className="mt-1 space-y-1">
                <div>- improved billing workflow</div>
                <div>- updated repo constraints</div>
                <div>- added testing standards</div>
                <div>- reduced duplicated logic</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-blue-300">v0.4.1</div>
              <div className="mt-1 space-y-1">
                <div>- updated auth workflow</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-blue-300">v0.4.0</div>
              <div className="mt-1 space-y-1">
                <div>- introduced repo constraints</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
