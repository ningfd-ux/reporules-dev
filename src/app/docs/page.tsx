import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docs — RepoRules.dev",
  description: "Documentation for AI coding workflows, rules, constraints, and repository patterns.",
};

const SIDEBAR_LINK = "block text-sm text-zinc-400 transition-colors hover:text-blue-300";

const SECTIONS = [
  { label: "Getting Started", href: "/docs/what-are-ai-coding-standards" },
  { label: "Workflows", href: "/workflows" },
  { label: "Rules", href: "/rules" },
  { label: "Constraints", href: "/docs/what-are-ai-coding-standards" },
  { label: "Testing", href: "/docs/why-ai-generated-code-breaks" },
  { label: "PR Workflow", href: "/docs/why-ai-generated-code-breaks" },
  { label: "Migration Notes", href: "/docs/why-ai-generated-code-breaks" },
];

export default function DocsPage() {
  return (
    <div className="mx-auto flex max-w-7xl gap-12 px-6 py-20">
      {/* Sidebar */}
      <aside className="hidden w-56 shrink-0 lg:block">
        <nav className="sticky top-24 space-y-3">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Docs
          </p>
          {SECTIONS.map((s) => (
            <Link key={s.label} href={s.href} className={SIDEBAR_LINK}>
              {s.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">
          Documentation
        </h1>
        <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-zinc-400">
          AI coding workflows, rules, constraints, and repository patterns for
          scalable AI-assisted development.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SECTIONS.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-5 transition-colors hover:border-[#3b4150]"
            >
              <h3 className="font-mono text-sm font-medium text-zinc-100">
                {s.label}
              </h3>
              <p className="mt-1 font-mono text-xs text-zinc-500">
                {s.href.replace(/\/docs\//, "").replace(/-/g, " ") ||
                  "Overview"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
