"use client";

import { useState } from "react";
import Link from "next/link";

const FILTERS = [
  "All",
  "Next.js",
  "Monorepo",
  "AI Startup",
  "Cursor",
  "Claude Code",
];

const CARD = "rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 transition-colors hover:border-[#3b4150]";

const WORKFLOWS = [
  {
    id: "claude-code-saas",
    title: "Claude Code SaaS Workflow",
    type: "Production Workflow",
    desc: "Scalable Next.js workflow for long-term AI-assisted development.",
    tags: ["Next.js", "Cursor", "Claude Code", "Supabase"],
    includes: ["rules.md", "memory.md", "prompts", "testing workflow", "PR workflow", "architecture notes"],
    stats: "24 rules · 12 prompts · Updated 3 days ago",
    href: "/workflows/claude-code-saas",
  },
  {
    id: "cursor-monorepo",
    title: "Cursor Monorepo Workflow",
    type: "Monorepo System",
    desc: "Shared repo workflow for Turborepo and multi-package projects.",
    tags: ["Turborepo", "pnpm", "Monorepo"],
    includes: ["shared packages", "pnpm workspace", "repo constraints", "build system"],
    stats: "18 rules · 9 prompts",
    href: null,
    progress: "Expected release: Q2 2026",
  },
  {
    id: "ai-startup",
    title: "AI Startup Workflow",
    type: "Lean Startup Workflow",
    desc: "Lean AI coding standards for fast-moving startup teams.",
    tags: ["Startup", "MVP", "Stripe"],
    includes: ["MVP repo rules", "AI prompt system", "fast iteration workflow"],
    stats: "15 rules · 7 prompts",
    href: null,
    progress: "Expected release: Q2 2026",
  },
];

export default function WorkflowsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = WORKFLOWS.filter((w) => {
    const q = search.toLowerCase();
    const matchSearch =
      !search ||
      w.title.toLowerCase().includes(q) ||
      w.desc.toLowerCase().includes(q) ||
      w.tags.some((t) => t.toLowerCase().includes(q)) ||
      w.includes.some((i) => i.toLowerCase().includes(q));
    const matchFilter =
      activeFilter === "All" || w.tags.includes(activeFilter);
    return matchSearch && matchFilter;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
        Workflow Library
      </span>

      <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
        AI workflows for scalable repositories
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        Reusable workflow systems designed for long-term AI-assisted engineering.
      </p>

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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-10 w-full max-w-xl rounded-xl border border-[#2a2d35] bg-[#16181d] px-4 py-3 text-sm text-zinc-300 outline-none"
      />

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-3">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={
              activeFilter === f
                ? "rounded-md bg-zinc-100 px-3 py-1.5 font-mono text-xs text-zinc-900"
                : "rounded-md border border-zinc-700 px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-100"
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w) =>
          w.href ? (
            <Link key={w.id} href={w.href} className={CARD}>
              <p className="mb-4 font-mono text-xs text-zinc-500">{w.type}</p>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-100">{w.title}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{w.desc}</p>
              <div className="mt-5 font-mono text-xs leading-6 text-zinc-400">
                {w.includes.map((i) => (
                  <div key={i} className="flex items-center gap-2"><span className="text-green-500">&check;</span> {i}</div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span key={t} className="rounded-md border border-zinc-700 px-2 py-1 font-mono text-xs text-zinc-400">{t}</span>
                ))}
              </div>
              <div className="mt-6 font-mono text-xs text-zinc-500">{w.stats}</div>
              <div className="mt-4 font-mono text-[10px] text-zinc-500">
                <div>Maintained by RepoRules</div>
                <div>Last constraint update: 2 days ago</div>
                <div>Technical debt: legacy auth hooks, billing migration</div>
              </div>
              <div className="mt-6 inline-flex items-center rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900">
                Open Workflow
              </div>
            </Link>
          ) : (
            <div key={w.id} className={`${CARD} opacity-60`}>
              <p className="mb-4 font-mono text-xs text-zinc-500">{w.type}</p>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-100">{w.title}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{w.desc}</p>
              <div className="mt-5 font-mono text-xs leading-6 text-zinc-400">
                {w.includes.map((i) => (
                  <div key={i} className="flex items-center gap-2"><span className="text-zinc-600">&check;</span> {i}</div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span key={t} className="rounded-md border border-zinc-700 px-2 py-1 font-mono text-xs text-zinc-400">{t}</span>
                ))}
              </div>
              <div className="mt-6 font-mono text-xs text-zinc-500">{w.stats}</div>
              <div className="mt-4 font-mono text-[10px] text-zinc-500">
                <div>{w.progress}</div>
              </div>
              <div className="mt-6 inline-flex cursor-not-allowed items-center rounded-lg border border-zinc-800 bg-[#12151b] px-4 py-2 font-mono text-xs text-zinc-500 pointer-events-none">
                Workflow In Progress
              </div>
            </div>
          ),
        )}
      </div>

      {/* Workflow Philosophy */}
      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Workflow Philosophy</h2>
        <p className="mt-4 leading-8 text-zinc-300">
          AI-generated code becomes unmaintainable without shared repo conventions, prompt constraints and architecture rules.
        </p>
        <p className="mt-4 leading-8 text-zinc-300">
          These workflows are designed to keep large AI-assisted repositories consistent over time. All generated code must pass review before merge.
        </p>
      </section>

      {/* Known Repository Issues */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Known Repository Issues</h2>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-[#16181d] p-6 font-mono text-sm leading-7 text-zinc-400">
          <div>- duplicated auth hooks across features</div>
          <div>- legacy dashboard queries pending migration</div>
          <div>- billing validation refactor in progress</div>
          <div>- oversized utility files from early AI output</div>
        </div>
      </section>

      {/* Migration Notes */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Migration Notes</h2>
        <div className="mt-6 rounded-xl border border-zinc-800 bg-[#16181d] p-6 font-mono text-sm leading-7 text-zinc-400">
          <div className="flex items-start gap-2"><span className="mt-1 text-amber-400">*</span><span>dashboard hooks still pending migration</span></div>
          <div className="flex items-start gap-2"><span className="mt-1 text-amber-400">*</span><span>billing validation refactor in progress</span></div>
          <div className="flex items-start gap-2"><span className="mt-1 text-amber-400">*</span><span>legacy auth module awaiting deprecation</span></div>
        </div>
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
              <div className="mt-1 space-y-1"><div>- added repo migration notes</div></div>
            </div>
            <div>
              <div className="text-xs text-blue-300">v0.4.0</div>
              <div className="mt-1 space-y-1"><div>- introduced AI repo standards</div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
