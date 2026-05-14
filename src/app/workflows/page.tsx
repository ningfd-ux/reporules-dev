import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workflows — RepoRules.dev",
  description:
    "Browse production-ready AI coding workflows for scalable codebases.",
};

const CARD =
  "rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 transition-colors hover:border-[#3b4150]";

export default function WorkflowsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">
        Production-ready AI workflows
      </h1>
      <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-zinc-400">
        Battle-tested repo systems for scalable AI-assisted development.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <Link href="/workflows/claude-code-saas" className={CARD}>
          <span className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-300">
            Production-ready
          </span>
          <h2 className="mt-3 text-base font-semibold text-zinc-100">
            Claude Code SaaS
          </h2>
          <p className="mt-2 font-mono text-sm leading-relaxed text-zinc-400">
            Scalable Next.js workflow. Server-first, feature-based, Stripe +
            Supabase.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js", "Cursor", "Claude Code", "Supabase"].map((t) => (
              <span
                key={t}
                className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 border-t border-[#2a2d35] pt-4">
            <p className="font-mono text-xs text-zinc-400">Includes:</p>
            <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
              {["rules.md", "memory.md", "prompts", "testing workflow", "PR workflow"].map(
                (i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-green-500">&check;</span>
                    {i}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-500">24 rules &middot; 12 prompts</span>
            <span className="font-mono text-xs text-zinc-500">Updated 3 days ago</span>
          </div>
          <div className="mt-3">
            <span className="font-mono text-sm text-zinc-400 hover:text-blue-300">
              View Workflow &rarr;
            </span>
          </div>
        </Link>

        {/* Card 2 */}
        <div className={CARD}>
          <span className="rounded border border-zinc-700 px-2.5 py-1 font-mono text-[11px] text-zinc-500">
            Coming Soon
          </span>
          <h2 className="mt-3 text-base font-semibold text-zinc-100">
            Cursor Monorepo
          </h2>
          <p className="mt-2 font-mono text-sm leading-relaxed text-zinc-400">
            Turborepo + pnpm. Shared AI rules across multi-package repos.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Turborepo", "pnpm", "shared packages"].map((t) => (
              <span
                key={t}
                className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 border-t border-[#2a2d35] pt-4">
            <p className="font-mono text-xs text-zinc-400">Includes:</p>
            <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
              {["workspace rules", "shared memory.md", "package prompts", "CI checks"].map(
                (i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-zinc-600">&check;</span>
                    {i}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="mt-4">
            <span className="font-mono text-xs text-zinc-500">18 rules &middot; 9 prompts</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className={CARD}>
          <span className="rounded border border-zinc-700 px-2.5 py-1 font-mono text-[11px] text-zinc-500">
            Coming Soon
          </span>
          <h2 className="mt-3 text-base font-semibold text-zinc-100">
            AI Startup
          </h2>
          <p className="mt-2 font-mono text-sm leading-relaxed text-zinc-400">
            Lean standards for fast-moving teams. Next.js + Stripe MVP setup.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js", "Stripe", "MVP"].map((t) => (
              <span
                key={t}
                className="rounded border border-[#2a2d35] bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 border-t border-[#2a2d35] pt-4">
            <p className="font-mono text-xs text-zinc-400">Includes:</p>
            <div className="mt-2 space-y-1 font-mono text-sm text-zinc-400">
              {["minimal rules.md", "startup prompts", "deploy checklist"].map(
                (i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-zinc-600">&check;</span>
                    {i}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="mt-4">
            <span className="font-mono text-xs text-zinc-500">15 rules &middot; 7 prompts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
