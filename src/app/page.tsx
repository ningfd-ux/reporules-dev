import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const COMING_SOON =
  "inline-flex items-center rounded border border-zinc-700 px-2.5 py-1 font-mono text-[11px] text-zinc-500";

const WORKFLOW_CARD =
  "group rounded-2xl border border-[#2a2d35] bg-[#16181d] p-6 transition-colors hover:border-zinc-600";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Featured Workflows */}
      <section className="border-t border-[#2a2d35] bg-[#12141a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Featured Workflows
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-zinc-400">
            Copy battle-tested AI workflows for your next project.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/workflows/claude-code-saas"
              className={WORKFLOW_CARD}
            >
              <span className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-300">
                Production-ready workflow
              </span>
              <h3 className="mt-3 text-base font-semibold text-zinc-100 group-hover:text-zinc-200">
                Claude Code SaaS Workflow
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Scalable Next.js architecture for long-term AI-assisted
                development.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "Claude Code", "Cursor", "Supabase"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <div className="mt-4 border-t border-[#2a2d35] pt-4">
                <p className="font-mono text-xs text-zinc-400">Includes:</p>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {[
                    "repo structure",
                    "rules.md",
                    "memory.md",
                    "prompts",
                    "testing workflow",
                    "PR workflow",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-green-500">&check;</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <span className="font-mono text-sm text-zinc-400 group-hover:text-blue-300">
                  View Full Workflow &rarr;
                </span>
              </div>
            </Link>

            {/* Card 2: Coming Soon */}
            <div className={WORKFLOW_CARD}>
              <span className={COMING_SOON}>Coming Soon</span>
              <h3 className="mt-3 text-base font-semibold text-zinc-100">
                Cursor Monorepo Workflow
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Shared AI workflow for scalable monorepo architecture.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Turborepo", "pnpm", "shared packages"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: Coming Soon */}
            <div className={WORKFLOW_CARD}>
              <span className={COMING_SOON}>Coming Soon</span>
              <h3 className="mt-3 text-base font-semibold text-zinc-100">
                AI Startup Workflow
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Lean AI coding workflow for fast-moving startup teams.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "Stripe", "MVP"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Constraints */}
      <section className="border-t border-[#2a2d35] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            AI Constraints
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-zinc-400">
            Team-wide rules applied across all AI-generated code.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Never fetch inside client components",
              "Avoid duplicated hooks",
              "Reuse shared UI primitives",
              "Prefer feature-based folders",
              "Keep business logic isolated",
              "Avoid large components over 200 lines",
              "Prefer server state over client state",
              "Keep PRs under 300 LOC",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#2a2d35] bg-[#16181d] p-4 font-mono text-sm text-zinc-400"
              >
                <span className="text-zinc-500">$</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Goals */}
      <section className="border-t border-[#2a2d35] bg-[#12141a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Workflow Goals
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-zinc-400">
            What this workflow is designed to achieve.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Reduce inconsistent AI output",
                "AI tools generate different patterns without clear constraints. Standardized workflows produce predictable code.",
              ],
              [
                "Keep repo structure predictable",
                "Feature-based architecture prevents AI from creating scattered utilities and duplicated logic.",
              ],
              [
                "Improve long-term maintainability",
                "Server-first patterns and shared primitives keep the codebase clean across months of development.",
              ],
              [
                "Scale AI coding across teams",
                "Consistent rules and prompts let multiple developers use AI without introducing conflicting patterns.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-5"
              >
                <h3 className="text-base font-semibold text-zinc-100">
                  {title}
                </h3>
                <p className="mt-2 font-mono text-xs leading-relaxed text-zinc-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Standards */}
      <section className="border-t border-[#2a2d35] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Team Standards
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-zinc-400">
            Shared conventions that keep AI-generated code consistent across the
            team.
          </p>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[#2a2d35] bg-[#16181d] p-6 font-mono text-sm text-zinc-400">
            <div className="mb-4 text-xs text-zinc-500">
              // team standards
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-green-500">+</span>
                shared prompts
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">+</span>
                shared repo conventions
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">+</span>
                shared architecture rules
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">+</span>
                predictable AI output
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Notes */}
      <section className="border-t border-[#2a2d35] bg-[#12141a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Legacy Notes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-zinc-400">
            Real projects have history. These are tracked in memory.md.
          </p>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-[#2a2d35] bg-[#16181d] p-6">
            <div className="mb-4 font-mono text-xs text-zinc-500">
              // legacy
            </div>
            <div className="space-y-3 font-mono text-sm text-zinc-400">
              <div className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">*</span>
                <span>old billing hooks still exist</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">*</span>
                <span>dashboard migration in progress</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">*</span>
                <span>auth refactor planned</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
