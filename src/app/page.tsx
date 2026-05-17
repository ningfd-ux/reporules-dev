import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const CARD =
  "rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 transition-colors hover:border-zinc-600";

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
            <Link href="/workflows/cursor-monorepo" className={CARD}>
              <div className="mb-4 font-mono text-xs text-zinc-500">Monorepo System · v0.4.0</div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-100">Cursor Monorepo Workflow</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Shared repo workflow for Turborepo and multi-package projects.</p>
              <div className="mt-5 font-mono text-xs leading-6 text-zinc-400">
                <span className="text-green-500">&check;</span> shared packages<br />
                <span className="text-green-500">&check;</span> pnpm workspace<br />
                <span className="text-green-500">&check;</span> repo constraints
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Turborepo", "pnpm", "Monorepo"].map((t) => (
                  <span key={t} className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400">{t}</span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900">
                Open Workflow
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/workflows/ai-startup" className={CARD}>
              <div className="mb-4 font-mono text-xs text-zinc-500">Lean Startup · v0.3.8</div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-100">AI Startup Workflow</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Lean AI coding standards for fast-moving startup teams.</p>
              <div className="mt-5 font-mono text-xs leading-6 text-zinc-400">
                <span className="text-green-500">&check;</span> MVP repo rules<br />
                <span className="text-green-500">&check;</span> AI prompt system
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Startup", "MVP", "Stripe"].map((t) => (
                  <span key={t} className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400">{t}</span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900">
                Open Workflow
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Generated Repository Examples */}
      <section className="border-t border-[#2a2d35] bg-[#12151b] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Generated Repository Systems
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-mono text-sm text-zinc-400">
            Real governance files generated by RepoRules from repository analysis.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: "nextjs-ai-saas", title: "Next.js AI SaaS", desc: "Full Next.js 15 SaaS with billing, auth, and analytics.", signals: ["prisma", "stripe", "auth.js", "resend"], files: 6 },
              { slug: "ai-agent-monorepo", title: "AI Agent Monorepo", desc: "Multi-agent system with shared packages and AI SDK.", signals: ["turborepo", "pnpm", "ai-sdk", "langchain"], files: 6 },
              { slug: "stripe-billing", title: "Stripe Billing System", desc: "Subscription billing with webhooks, invoices, and metered usage.", signals: ["stripe", "prisma", "next.js", "zod"], files: 6 },
            ].map((ex) => (
              <Link key={ex.slug} href={`/examples/${ex.slug}`} className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 transition-colors hover:border-zinc-600">
                <div className="mb-2 font-mono text-xs text-zinc-500">Generated Example</div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100">{ex.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{ex.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ex.signals.map((s) => (
                    <span key={s} className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400">{s}</span>
                  ))}
                </div>
                <div className="mt-4 font-mono text-xs text-zinc-500">{ex.files} governance files</div>
                <div className="mt-4 font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-200">View output &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-[#2a2d35] bg-[#0d0f14] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            How Repository Governance Works
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              { num: "01", title: "Analyze", desc: "Paste your package.json or repository structure. RepoRules detects your stack, dependencies, and architecture patterns." },
              { num: "02", title: "Generate", desc: "AI generates rules.md, memory.md, architecture constraints, and AI workflow standards tailored to your stack." },
              { num: "03", title: "Export", desc: "Download governance files and add them to your repository. AI coding tools respect your repository context." },
            ].map((step) => (
              <div key={step.num} className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
                <div className="mb-3 font-mono text-2xl text-zinc-600">{step.num}</div>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-100">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
