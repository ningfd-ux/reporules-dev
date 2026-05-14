import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const COMING =
  "inline-flex items-center rounded border border-zinc-700 px-2.5 py-1 font-mono text-[11px] text-zinc-500";

const CARD =
  "group rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 transition-colors hover:border-[#3b4150]";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Featured Workflows */}
      <section className="border-t border-[#2a2d35] bg-[#12151b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Featured Workflows
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-zinc-400">
            Copy battle-tested AI workflows for your next project.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <Link href="/workflows/claude-code-saas" className={CARD}>
              <span className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-300">Production-ready workflow</span>
              <h3 className="mt-3 text-base font-semibold text-zinc-100">Claude Code SaaS Workflow</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Scalable Next.js workflow for long-term AI-assisted development.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "Cursor", "Claude Code", "Supabase"].map((t) => (
                  <span key={t} className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400">{t}</span>
                ))}
              </div>
              <div className="mt-4 border-t border-[#2a2d35] pt-4">
                <p className="font-mono text-xs text-zinc-400">Includes:</p>
                <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
                  {["repo structure", "rules.md", "memory.md", "prompts", "testing workflow", "PR workflow"].map((i) => (
                    <div key={i} className="flex items-center gap-2"><span className="text-green-500">&check;</span>{i}</div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-mono text-xs text-zinc-500">24 rules &middot; 12 prompts</div>
                <span className="font-mono text-xs text-zinc-500">Updated 3 days ago</span>
              </div>
              <div className="mt-4 border-t border-[#2a2d35] pt-4 space-y-1">
                <p className="font-mono text-[10px] text-zinc-500">Maintained by RepoRules</p>
                <p className="font-mono text-[10px] text-zinc-500">Last constraint update: 2 days ago</p>
                <p className="font-mono text-[10px] text-zinc-500">Recommended for: SaaS, AI products, internal tools</p>
              </div>
              <div className="mt-3">
                <span className="font-mono text-sm text-zinc-400 group-hover:text-blue-300">View Full Workflow &rarr;</span>
              </div>
            </Link>

            {/* Card 2 */}
            <div className={CARD}>
              <span className={COMING}>Coming Soon</span>
              <h3 className="mt-3 text-base font-semibold text-zinc-100">Cursor Monorepo Workflow</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Shared repo workflow for Turborepo and multi-package projects.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Turborepo", "pnpm", "shared packages"].map((t) => (
                  <span key={t} className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">18 rules &middot; 9 prompts</span>
                <span className={COMING}>Coming Soon</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className={CARD}>
              <span className={COMING}>Coming Soon</span>
              <h3 className="mt-3 text-base font-semibold text-zinc-100">AI Startup Workflow</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Lean AI coding standards for fast-moving startup teams.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "Stripe", "MVP"].map((t) => (
                  <span key={t} className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">15 rules &middot; 7 prompts</span>
                <span className={COMING}>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Standards */}
      <section className="border-t border-[#2a2d35] bg-[#0f1115] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Team Standards</h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-zinc-400">Shared conventions that keep AI-generated code consistent across the team.</p>
          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 font-mono text-sm text-zinc-400">
            <div className="mb-4 text-xs text-zinc-500">// team standards</div>
            <div className="space-y-3">
              {["shared prompts", "shared repo conventions", "shared architecture rules", "predictable AI output"].map((i) => (
                <div key={i} className="flex items-center gap-2"><span className="text-green-500">+</span>{i}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Changes */}
      <section className="border-t border-[#2a2d35] bg-[#12151b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Recent Changes</h2>
          <div className="mx-auto mt-12 max-w-xl rounded-xl border border-[#2a2d35] bg-[#151922] p-5 font-mono text-sm text-zinc-400">
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
              <div>
                <div className="text-xs text-blue-300">v0.3.8</div>
                <div className="mt-1 space-y-1">
                  <div>- migrated billing prompts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Notes */}
      <section className="border-t border-[#2a2d35] bg-[#0f1115] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Legacy Notes</h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-zinc-400">Real projects have history. These are tracked in memory.md.</p>
          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
            <div className="mb-4 font-mono text-xs text-zinc-500">// legacy</div>
            <div className="space-y-3 font-mono text-sm text-zinc-400">
              {["old billing hooks still exist", "dashboard migration in progress", "auth refactor planned", "old dashboard queries still exist", "billing migration partially completed", "validation layer under refactor"].map((i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-amber-400">*</span>
                  <span>{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
