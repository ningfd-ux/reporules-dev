"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const LEFT_NAV = [
  { id: "architecture", label: "Architecture" },
  { id: "repository-files", label: "Repository Files" },
  { id: "ai-constraints", label: "AI Constraints" },
  { id: "testing-workflow", label: "Testing Workflow" },
  { id: "pr-governance", label: "PR Governance" },
  { id: "migration-notes", label: "Migration Notes" },
  { id: "technical-debt", label: "Technical Debt" },
  { id: "incident-log", label: "Incident Log" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("architecture");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#0d0f14] text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr_280px]">
          {/* Left Sidebar */}
          <aside className="border-r border-[#22252d] pr-6">
            <div className="sticky top-24">
              <div className="mb-5 font-mono text-xs uppercase tracking-wide text-zinc-500">
                Documentation
              </div>
              <div className="space-y-1">
                {LEFT_NAV.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={
                      activeSection === item.id
                        ? "block border-l border-zinc-100 pl-3 text-sm text-zinc-100"
                        : "block pl-4 text-sm text-zinc-500 hover:text-zinc-200"
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="min-w-0">
            {/* Hero */}
            <div className="mb-14">
              <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
                Repository Documentation
              </div>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight">
                Engineering documentation
                <br />
                for AI-assisted repositories
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                Repository governance systems, migration workflows, architecture
                constraints and engineering standards.
              </p>
              <div className="mt-6 flex gap-5 font-mono text-xs text-zinc-500">
                <span>24 documents</span>
                <span>Updated 2 days ago</span>
                <span>v0.4.2</span>
              </div>
            </div>

            {/* Architecture */}
            <section id="architecture" className="mt-16">
              <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
                Architecture
              </div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight">
                Repository architecture
              </h2>
              <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
                <p className="leading-7 text-zinc-300">
                  Repositories are organized around feature boundaries instead of
                  technical layers.
                </p>
                <div className="mt-6 font-mono text-sm leading-7 text-zinc-400">
                  apps/
                  <br />
                  packages/
                  <br />
                  shared/
                  <br />
                  validators/
                  <br />
                  workflows/
                  <br />
                  migration-notes/
                </div>
              </div>
            </section>

            {/* Repository Files */}
            <section id="repository-files" className="mt-16">
              <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
                Repository Files
              </div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight">
                Governance files
              </h2>
              <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-6">
                <div className="space-y-4">
                  <Link
                    href="/examples/nextjs-ai-saas"
                    className="block font-mono text-sm text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    rules.md
                  </Link>
                  <Link
                    href="/examples/nextjs-ai-saasmemory"
                    className="block font-mono text-sm text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    memory.md
                  </Link>
                  <Link
                    href="/examples/nextjs-ai-saasmigration-notes"
                    className="block font-mono text-sm text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    migration-notes.md
                  </Link>
                  <div className="font-mono text-sm text-zinc-500">
                    architecture.md
                  </div>
                  <div className="font-mono text-sm text-zinc-500">
                    testing-workflow.md
                  </div>
                </div>
              </div>
            </section>

            {/* AI Constraints */}
            <section id="ai-constraints" className="mt-16">
              <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
                AI Constraints
              </div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight">
                AI engineering constraints
              </h2>
              <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
                <div className="font-mono text-sm leading-7 text-zinc-400">
                  - avoid large rewrites
                  <br />
                  - preserve migration consistency
                  <br />
                  - avoid duplicated business logic
                  <br />
                  - preserve package boundaries
                  <br />
                  - reduce architecture drift
                </div>
              </div>
            </section>

            {/* Testing Workflow */}
            <section id="testing-workflow" className="mt-16">
              <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
                Testing Workflow
              </div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight">
                Repository testing workflow
              </h2>
              <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
                <div className="font-mono text-sm leading-7 text-zinc-400">
                  1. validate architecture boundaries
                  <br />
                  2. run validation tests
                  <br />
                  3. verify migration compatibility
                  <br />
                  4. execute repository integration tests
                  <br />
                  5. confirm PR consistency
                </div>
              </div>
            </section>

            {/* PR Governance */}
            <section id="pr-governance" className="mt-16">
              <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
                PR Governance
              </div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight">
                Pull request standards
              </h2>
              <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
                <div className="font-mono text-sm leading-7 text-zinc-400">
                  - preserve repository boundaries
                  <br />
                  - avoid duplicated validation
                  <br />
                  - verify migration safety
                  <br />
                  - review architectural consistency
                </div>
              </div>
            </section>

            {/* Migration Notes */}
            <section id="migration-notes" className="mt-16">
              <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
                Migration Notes
              </div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight">
                Active repository migrations
              </h2>
              <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-6">
                <div className="font-mono text-sm leading-7 text-zinc-400">
                  - dashboard validation migration in progress
                  <br />
                  - old analytics hooks pending cleanup
                  <br />
                  - billing services require standardization
                </div>
              </div>
            </section>

            {/* Technical Debt */}
            <section id="technical-debt" className="mt-16">
              <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
                Technical Debt
              </div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight">
                Known repository issues
              </h2>
              <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-6">
                <div className="font-mono text-sm leading-7 text-zinc-400">
                  - duplicated dashboard hooks
                  <br />
                  - inconsistent validator naming
                  <br />
                  - oversized shared utility modules
                </div>
              </div>
            </section>

            {/* Incident Log */}
            <section id="incident-log" className="mt-16">
              <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
                Incident Log
              </div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight">
                Recent repository incidents
              </h2>
              <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-6">
                <div className="font-mono text-sm leading-7 text-zinc-400">
                  2026-05-08
                  <br />
                  - duplicated auth hooks introduced during billing migration
                  <br />
                  <br />
                  2026-05-04
                  <br />
                  - analytics service bypassed validation layer
                  <br />
                  <br />
                  2026-04-28
                  <br />
                  - migration workflow broke shared server boundaries
                </div>
              </div>
            </section>
          </div>

          {/* Cross-link to AICodingStandards */}
          <section className="mt-24 border-t border-[#2a2d35] pt-12">
            <div className="rounded-xl border border-[#2a2d35] bg-[#111318] p-8">
              <p className="text-sm font-medium text-zinc-400">
                Related Engineering Standards
              </p>
              <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-500">
                Explore AI-safe coding standards, repository constraints and engineering conventions.
              </p>
              <a
                href="https://aicodingstandards.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 items-center rounded-lg border border-zinc-700 px-5 text-sm text-zinc-300 transition-colors hover:border-zinc-500"
              >
                View AI Coding Standards &rarr;
              </a>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="hidden space-y-6 lg:block">
            <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-5">
              <div className="mb-4 text-sm font-medium">Repository Signals</div>
              <div className="space-y-3 text-sm text-zinc-300">
                <div>✓ Shared validation layer</div>
                <div>✓ Migration governance</div>
                <div>✓ AI repository workflows</div>
                <div>✓ Monorepo architecture</div>
              </div>
            </div>
            <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-5">
              <div className="mb-4 text-sm font-medium">Generated From</div>
              <div className="font-mono text-xs leading-7 text-zinc-500">
                42 SaaS repositories
                <br />
                18 monorepo systems
                <br />
                11 AI engineering workflows
              </div>
            </div>
            <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-5">
              <div className="mb-4 text-sm font-medium">Documentation Files</div>
              <div className="font-mono text-xs leading-7 text-zinc-500">
                rules.md
                <br />
                memory.md
                <br />
                migration-notes.md
                <br />
                architecture.md
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
