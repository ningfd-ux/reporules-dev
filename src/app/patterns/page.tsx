"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const patterns = [
  {
    title: "Feature-Based Structure",
    category: "Folder Structure",
    description: "Group files by feature instead of technical role.",
    failures: "oversized shared utility folders",
    constraints: [
      "avoid duplicated hooks",
      "preserve feature boundaries",
      "keep business logic isolated",
    ],
  },
  {
    title: "Server Components First",
    category: "Architecture",
    description:
      "Prefer server components unless interactivity is required.",
    failures: "mixed client/server logic",
    constraints: [
      "fetch on server",
      "avoid client waterfalls",
      "preserve async boundaries",
    ],
  },
  {
    title: "Shared Validation Layer",
    category: "Validation",
    description: "Centralize reusable validation schemas.",
    failures: "duplicated zod validators",
    constraints: [
      "reuse schemas",
      "avoid inline validation",
      "preserve typing consistency",
    ],
  },
  {
    title: "Server-First Data Fetching",
    category: "Data Fetching",
    description: "Move all data fetching to the server layer.",
    failures: "mixed server and client fetching patterns",
    constraints: [
      "fetch on server",
      "avoid client hydration overhead",
      "stream when possible",
    ],
  },
  {
    title: "Shared UI Primitives",
    category: "Folder Structure",
    description:
      "Keep all reusable UI in /components/ui. Business UI in features.",
    failures: "inconsistent UI patterns across different features",
    constraints: [
      "reuse primitives",
      "avoid inline styles",
      "keep spacing consistent",
    ],
  },
  {
    title: "Small PR Workflow",
    category: "PR Workflow",
    description: "Keep PRs isolated and incremental.",
    failures: "mixed feature concerns inside one PR",
    constraints: [
      "under 300 LOC",
      "single responsibility",
      "preserve architecture consistency",
    ],
  },
  {
    title: "AI Testing Standards",
    category: "Testing",
    description:
      "Require loading, error, empty and accessibility checks on every generated feature.",
    failures: "tests passing but production flows broken",
    constraints: [
      "test behavior not implementation",
      "avoid excessive mocking",
      "prefer integration tests",
    ],
  },
  {
    title: "Monorepo Package Structure",
    category: "Folder Structure",
    description: "Keep package boundaries explicit.",
    failures: "shared UI package importing business logic",
    constraints: [
      "avoid circular imports",
      "isolate shared packages",
      "preserve dependency direction",
    ],
  },
  {
    title: "Incremental Migration Pattern",
    category: "Architecture",
    description:
      "Document legacy areas explicitly so AI avoids adding to them.",
    failures: "new features built on deprecated patterns",
    constraints: [
      "prevent AI from adding to legacy code",
      "document deprecated patterns",
      "maintain migration timeline",
    ],
  },
];

const categories = [
  "All",
  "Folder Structure",
  "Architecture",
  "Validation",
  "Testing",
  "PR Workflow",
];

export default function PatternsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPatterns = patterns.filter((pattern) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      pattern.title.toLowerCase().includes(q) ||
      pattern.category.toLowerCase().includes(q) ||
      pattern.description.toLowerCase().includes(q) ||
      pattern.failures.toLowerCase().includes(q);
    const matchesCategory =
      activeCategory === "All" || pattern.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#0d0f14] text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero */}
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
            Repository Architecture Patterns
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight">
            Architecture patterns
            <br />
            for AI-assisted repositories
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Reusable architecture systems designed to keep AI-generated
            repositories scalable and maintainable.
          </p>
          <div className="mt-6 flex gap-5 font-mono text-xs text-zinc-500">
            <span>18 patterns</span>
            <span>6 categories</span>
            <span>Updated 3 days ago</span>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-xl">
          <div className="flex h-11 items-center gap-3 rounded-lg border border-[#2a2d35] bg-[#111318] px-4">
            <Search className="h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search architecture patterns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-zinc-300 outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`h-8 rounded-lg px-3 text-xs font-mono transition-colors ${
                activeCategory === category
                  ? "border border-zinc-700 bg-[#1d2129] text-zinc-100"
                  : "border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="hidden w-[240px] border-r border-[#22252d] pr-6 lg:block">
            <div className="sticky top-24">
              <h3 className="mb-5 text-sm font-medium">Pattern Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left text-sm transition-colors ${
                      activeCategory === category
                        ? "border-l border-zinc-100 pl-3 text-zinc-100"
                        : "pl-4 text-zinc-500 hover:text-zinc-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-6">
            {filteredPatterns.map((pattern) => (
              <div
                key={pattern.title}
                className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 transition-colors hover:border-zinc-600"
              >
                <div className="mb-4 font-mono text-xs text-zinc-500">
                  Maintained by RepoRules · Last updated 3 days ago
                </div>
                <h2 className="mb-5 text-xl font-semibold tracking-tight">
                  {pattern.title}
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">
                      Description
                    </div>
                    <p className="text-sm leading-7 text-zinc-300">
                      {pattern.description}
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">
                      Constraints
                    </div>
                    <ul className="space-y-2">
                      {pattern.constraints.map((item) => (
                        <li key={item} className="text-sm text-zinc-300">
                          - {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">
                      Common Failure
                    </div>
                    <p className="text-sm leading-7 text-zinc-300">
                      {pattern.failures}
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">
                      Migration Notes
                    </div>
                    <p className="text-sm leading-7 text-zinc-500">
                      Old dashboard modules still depend on legacy validation
                      patterns.
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Repository Files */}
            <div className="mt-12 rounded-xl border border-[#2a2d35] bg-[#151922] p-5">
              <div className="mb-4 text-sm font-medium">Repository Files</div>
              <div className="font-mono text-xs leading-7 text-zinc-500">
                <Link href="/repository/rules" className="hover:text-zinc-200 transition-colors">rules.md</Link>
                <br />
                <Link href="/repository/memory" className="hover:text-zinc-200 transition-colors">memory.md</Link>
                <br />
                architecture.md
                <br />
                <Link href="/repository/migration-notes" className="hover:text-zinc-200 transition-colors">migration-notes.md</Link>
                <br />
                pnpm-workspace.yaml
                <br />
                turbo.json
              </div>
            </div>

            {/* Incident Log */}
            <div className="mt-12 rounded-xl border border-[#2a2d35] bg-[#151922] p-6">
              <div className="mb-4 text-sm font-medium">
                Pattern Incident Log
              </div>
              <div className="font-mono text-sm leading-7 text-zinc-400">
                2026-05-08
                <br />
                - duplicated dashboard hooks introduced during billing migration
                <br />
                <br />
                2026-05-04
                <br />
                - analytics module bypassed validation layer
                <br />
                <br />
                2026-04-27
                <br />
                - oversized shared utility folders exceeded architecture
                boundaries
              </div>
            </div>

            {/* Engineering Constraints */}
            <div className="mt-12 rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
              <div className="mb-4 text-sm font-medium">
                Engineering Constraints
              </div>
              <div className="font-mono text-sm leading-7 text-zinc-400">
                - avoid large rewrites
                <br />
                - preserve migration consistency
                <br />
                - reduce architectural drift
                <br />
                - isolate business logic
                <br />
                - avoid duplicated validation
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
