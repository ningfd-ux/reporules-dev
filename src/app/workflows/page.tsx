import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workflows — RepoRules.dev",
  description: "Browse reusable AI workflow systems for scalable engineering teams.",
};

const FILTER_ACTIVE = "rounded-md bg-zinc-100 px-3 py-1.5 font-mono text-xs text-zinc-900";
const FILTER_INACTIVE = "rounded-md border border-zinc-700 px-3 py-1.5 font-mono text-xs text-zinc-400 hover:text-zinc-100";

const CARD = "rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 transition-colors hover:border-[#3b4150]";

export default function WorkflowsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Tag */}
      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
        Workflow Library
      </span>

      {/* H1 */}
      <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
        AI workflows for scalable repositories
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        Reusable workflow systems designed for long-term AI-assisted engineering.
      </p>

      {/* Repo stats */}
      <div className="mt-8 flex gap-5 font-mono text-xs text-zinc-500">
        <span>3 workflows</span>
        <span>57 rules</span>
        <span>28 prompts</span>
        <span>Last updated 2 days ago</span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search workflows..."
        className="mt-10 w-full max-w-xl rounded-xl border border-[#2a2d35] bg-[#16181d] px-4 py-3 text-sm text-zinc-300 outline-none"
      />

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-3">
        <span className={FILTER_ACTIVE}>All</span>
        <span className={FILTER_INACTIVE}>Next.js</span>
        <span className={FILTER_INACTIVE}>Monorepo</span>
        <span className={FILTER_INACTIVE}>AI Startup</span>
        <span className={FILTER_INACTIVE}>Cursor</span>
        <span className={FILTER_INACTIVE}>Claude Code</span>
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <Link href="/workflows/claude-code-saas" className={CARD}>
          <p className="mb-4 font-mono text-xs text-zinc-500">Production Workflow</p>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Claude Code SaaS Workflow</h2>
          <p className="mt-3 leading-7 text-zinc-300">Scalable Next.js workflow for long-term AI-assisted development.</p>
          <div className="mt-5 font-mono text-xs leading-6 text-zinc-400">
            <div className="flex items-center gap-2"><span className="text-green-500">&check;</span> rules.md</div>
            <div className="flex items-center gap-2"><span className="text-green-500">&check;</span> memory.md</div>
            <div className="flex items-center gap-2"><span className="text-green-500">&check;</span> prompts</div>
            <div className="flex items-center gap-2"><span className="text-green-500">&check;</span> testing workflow</div>
            <div className="flex items-center gap-2"><span className="text-green-500">&check;</span> PR workflow</div>
            <div className="flex items-center gap-2"><span className="text-green-500">&check;</span> architecture notes</div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Next.js", "Cursor", "Claude Code", "Supabase"].map((t) => (
              <span key={t} className="rounded-md border border-zinc-700 px-2 py-1 font-mono text-xs text-zinc-400">{t}</span>
            ))}
          </div>
          <div className="mt-6 font-mono text-xs text-zinc-500">
            <span>24 rules &middot; 12 prompts &middot; Updated 3 days ago</span>
          </div>
          <div className="mt-4 font-mono text-xs text-zinc-500">
            <div>Maintained by RepoRules</div>
            <div>Last constraint update: 2 days ago</div>
          </div>
          <div className="mt-6 inline-flex items-center rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-900">
            Open Workflow &rarr;
          </div>
        </Link>

        {/* Card 2 */}
        <div className={CARD}>
          <p className="mb-4 font-mono text-xs text-zinc-500">Monorepo System</p>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Cursor Monorepo Workflow</h2>
          <p className="mt-3 leading-7 text-zinc-300">Shared repo workflow for Turborepo and multi-package projects.</p>
          <div className="mt-5 font-mono text-xs leading-6 text-zinc-400">
            <div className="flex items-center gap-2"><span className="text-zinc-600">&check;</span> shared packages</div>
            <div className="flex items-center gap-2"><span className="text-zinc-600">&check;</span> pnpm workspace</div>
            <div className="flex items-center gap-2"><span className="text-zinc-600">&check;</span> repo constraints</div>
            <div className="flex items-center gap-2"><span className="text-zinc-600">&check;</span> build system</div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Turborepo", "pnpm", "Monorepo"].map((t) => (
              <span key={t} className="rounded-md border border-zinc-700 px-2 py-1 font-mono text-xs text-zinc-400">{t}</span>
            ))}
          </div>
          <div className="mt-6 font-mono text-xs text-zinc-500">
            <span>18 rules &middot; 9 prompts</span>
            <span className="ml-4 rounded border border-zinc-700 px-2 py-0.5 text-zinc-500">Coming Soon</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className={CARD}>
          <p className="mb-4 font-mono text-xs text-zinc-500">Lean Startup Workflow</p>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">AI Startup Workflow</h2>
          <p className="mt-3 leading-7 text-zinc-300">Lean AI coding standards for fast-moving startup teams.</p>
          <div className="mt-5 font-mono text-xs leading-6 text-zinc-400">
            <div className="flex items-center gap-2"><span className="text-zinc-600">&check;</span> MVP repo rules</div>
            <div className="flex items-center gap-2"><span className="text-zinc-600">&check;</span> AI prompt system</div>
            <div className="flex items-center gap-2"><span className="text-zinc-600">&check;</span> fast iteration workflow</div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Startup", "MVP", "Stripe"].map((t) => (
              <span key={t} className="rounded-md border border-zinc-700 px-2 py-1 font-mono text-xs text-zinc-400">{t}</span>
            ))}
          </div>
          <div className="mt-6 font-mono text-xs text-zinc-500">
            <span>15 rules &middot; 7 prompts</span>
            <span className="ml-4 rounded border border-zinc-700 px-2 py-0.5 text-zinc-500">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Workflow Philosophy */}
      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Workflow Philosophy</h2>
        <p className="mt-4 leading-8 text-zinc-300">
          AI-generated code becomes unmaintainable
          <br />
          without shared repo conventions,
          <br />
          prompt constraints and architecture rules.
        </p>
        <p className="mt-4 leading-8 text-zinc-300">
          These workflows are designed to keep
          <br />
          large AI-assisted repositories consistent
          <br />
          over time.
        </p>
      </section>

      {/* Common Failures */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Common AI Engineering Failures</h2>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-[#16181d] p-6 font-mono text-sm leading-7 text-zinc-400">
          <div>- duplicated hooks across modules</div>
          <div>- mixed server/client logic</div>
          <div>- inconsistent prompt outputs</div>
          <div>- oversized utility files</div>
          <div>- unstable naming conventions</div>
          <div>- repeated validation schemas</div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Recent Updates</h2>
        <div className="mt-6 max-w-xl rounded-xl border border-[#2a2d35] bg-[#151922] p-5 font-mono text-sm text-zinc-400">
          <div className="mb-4 text-xs text-zinc-500">// changelog</div>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-blue-300">v0.4.2</div>
              <div className="mt-1 space-y-1">
                <div>- improved billing workflow</div>
                <div>- updated testing constraints</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-blue-300">v0.4.1</div>
              <div className="mt-1 space-y-1">
                <div>- added repo migration notes</div>
              </div>
            </div>
            <div>
              <div className="text-xs text-blue-300">v0.4.0</div>
              <div className="mt-1 space-y-1">
                <div>- introduced AI repo standards</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
