import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const CARD =
  "rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 transition-colors hover:border-zinc-600";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Repository Files */}
      <section className="border-t border-[#2a2d35] bg-[#0d0f14] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Repository Files
          </h2>
          <div className="mx-auto max-w-xl rounded-xl border border-[#2a2d35] bg-[#151922] p-6 font-mono text-xs leading-7 text-zinc-500">
            <Link href="/repository/rules" className="block hover:text-zinc-200 transition-colors">rules.md</Link>
            <Link href="/repository/memory" className="block hover:text-zinc-200 transition-colors">memory.md</Link>
            <Link href="/repository/migration-notes" className="block hover:text-zinc-200 transition-colors">migration-notes.md</Link>
            <span className="block text-zinc-600">architecture.md</span>
            <span className="block text-zinc-600">testing-guidelines.md</span>
            <span className="block text-zinc-600">pnpm-workspace.yaml</span>
            <span className="block text-zinc-600">turbo.json</span>
          </div>
        </div>
      </section>

      {/* Featured Workflows */}
      <section className="border-t border-[#2a2d35] bg-[#12151b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Featured Workflows
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-zinc-400">
            Repository governance workflows for AI-assisted engineering systems.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <Link href="/workflows/claude-code-saas" className={CARD}>
              <div className="mb-4 font-mono text-xs text-zinc-500">
                Maintained Workflow · v0.4.2 · Migration Compatible
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-100">Claude Code SaaS Workflow</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Scalable Next.js workflow for long-term AI-assisted development.</p>
              <div className="mt-5 font-mono text-xs leading-6 text-zinc-400">
                <span className="text-green-500">&check;</span> rules.md<br />
                <span className="text-green-500">&check;</span> memory.md<br />
                <span className="text-green-500">&check;</span> architecture constraints<br />
                <span className="text-green-500">&check;</span> migration workflow<br />
                <span className="text-green-500">&check;</span> validation system
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "Cursor", "Claude Code", "Supabase"].map((t) => (
                  <span key={t} className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400">{t}</span>
                ))}
              </div>
              <div className="mt-6 font-mono text-[10px] text-zinc-500">
                <div>Used in: SaaS repositories, AI coding systems, monorepos</div>
                <div>Last updated 2 days ago</div>
              </div>
              <div className="mt-6 inline-flex items-center rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900">
                Open Workflow
              </div>
            </Link>

            {/* Card 2 */}
            <div className={CARD}>
              <span className="inline-flex items-center rounded-lg border border-zinc-800 bg-[#12151b] px-4 py-2 font-mono text-xs text-zinc-500 cursor-not-allowed">Workflow In Progress</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100">Cursor Monorepo Workflow</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Shared repo workflow for Turborepo and multi-package projects.</p>
              <div className="mt-5 font-mono text-xs leading-6 text-zinc-400">
                <span className="text-zinc-600">&check;</span> shared packages<br />
                <span className="text-zinc-600">&check;</span> pnpm workspace<br />
                <span className="text-zinc-600">&check;</span> repo constraints
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Turborepo", "pnpm", "Monorepo"].map((t) => (
                  <span key={t} className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400">{t}</span>
                ))}
              </div>
              <div className="mt-6 font-mono text-[10px] text-zinc-500">Expected release: Q2 2026</div>
            </div>

            {/* Card 3 */}
            <div className={CARD}>
              <span className="inline-flex items-center rounded-lg border border-zinc-800 bg-[#12151b] px-4 py-2 font-mono text-xs text-zinc-500 cursor-not-allowed">Workflow In Progress</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100">AI Startup Workflow</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Lean AI coding standards for fast-moving startup teams.</p>
              <div className="mt-5 font-mono text-xs leading-6 text-zinc-400">
                <span className="text-zinc-600">&check;</span> MVP repo rules<br />
                <span className="text-zinc-600">&check;</span> AI prompt system
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Startup", "MVP", "Stripe"].map((t) => (
                  <span key={t} className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400">{t}</span>
                ))}
              </div>
              <div className="mt-6 font-mono text-[10px] text-zinc-500">Expected release: Q2 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation System */}
      <section className="border-t border-[#2a2d35] bg-[#0d0f14] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Documentation System
          </h2>
          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
            {[
              { label: "Architecture", href: "/docs#architecture" },
              { label: "AI Constraints", href: "/docs#ai-constraints" },
              { label: "Testing Workflow", href: "/docs#testing-workflow" },
              { label: "PR Governance", href: "/docs#pr-workflow" },
              { label: "Migration Notes", href: "/docs#migration-notes" },
              { label: "Repository Standards", href: "/rules" },
            ].map((d) => (
              <Link key={d.label} href={d.href} className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-5 font-mono text-sm text-zinc-400 hover:border-zinc-600 hover:bg-zinc-800/30 transition-colors">
                {d.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Repository Incidents */}
      <section className="border-t border-[#2a2d35] bg-[#12151b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Repository Incidents
          </h2>
          <div className="mx-auto max-w-2xl rounded-xl border border-[#2a2d35] bg-[#151922] p-6 font-mono text-sm leading-7 text-zinc-400">
            2026-05-08<br />
            - duplicated auth hooks introduced during billing migration<br /><br />
            2026-05-04<br />
            - analytics service bypassed validation layer<br /><br />
            2026-04-27<br />
            - oversized shared utilities exceeded architecture boundaries
          </div>
        </div>
      </section>

      {/* Engineering Constraints */}
      <section className="border-t border-[#2a2d35] bg-[#0d0f14] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Engineering Constraints
          </h2>
          <div className="mx-auto max-w-2xl rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 font-mono text-sm leading-7 text-zinc-400">
            - avoid large rewrites<br />
            - preserve migration consistency<br />
            - avoid duplicated business logic<br />
            - preserve server/client boundaries<br />
            - reduce architectural drift
          </div>
        </div>
      </section>
    </>
  );
}
