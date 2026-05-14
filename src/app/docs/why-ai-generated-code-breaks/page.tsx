import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why AI-Generated Code Breaks — RepoRules.dev",
  description: "Common failure modes in AI-generated code and how coding standards prevent them.",
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

const PROBLEMS = [
  { title: "1. Wrong framework patterns", desc: "AI models are trained on code from all eras. Without guidance, they might generate Pages Router patterns for a Next.js App Router project.", solution: "Repository-aware standards tell the AI exactly which framework version and patterns to use." },
  { title: "2. Missing error handling", desc: "AI often generates the happy path and skips error handling, edge cases, and validation.", solution: "Standards specify error handling patterns, validation requirements, and edge case coverage." },
  { title: "3. Inconsistent architecture", desc: "Without constraints, AI may mix different patterns — putting business logic in components, using multiple state management approaches.", solution: "Architecture standards define a consistent mental model for the AI to follow." },
  { title: "4. Security vulnerabilities", desc: "AI can generate code with SQL injection, XSS, or other vulnerabilities.", solution: "Security-focused standards constrain the AI to use safe patterns." },
  { title: "5. Dependency conflicts", desc: "AI might suggest packages or APIs that conflict with your existing versions.", solution: "By analyzing package.json, standards reference the exact versions and APIs available." },
];

export default function WhyAIGeneratedCodeBreaks() {
  return (
    <div className="mx-auto flex max-w-7xl gap-12 px-6 py-20">
      <aside className="hidden w-56 shrink-0 lg:block">
        <nav className="sticky top-24 space-y-3">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">Docs</p>
          {SECTIONS.map((s) => (
            <Link key={s.label} href={s.href} className={SIDEBAR_LINK}>
              {s.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="min-w-0 flex-1 space-y-12">
        <div>
          <Link href="/docs" className="font-mono text-sm text-zinc-500 hover:text-blue-300">
            &larr; Back to Docs
          </Link>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">
            Why AI-Generated Code Breaks
          </h1>
          <p className="mt-4 font-mono text-sm leading-relaxed text-zinc-400">
            Common failure modes in AI-generated code — and how AI coding standards prevent them.
          </p>
        </div>

        <div className="space-y-8 font-mono text-sm leading-relaxed text-zinc-400">
          {PROBLEMS.map((p) => (
            <section key={p.title}>
              <h2 className="mb-3 text-lg font-semibold text-zinc-100">{p.title}</h2>
              <p>{p.desc}</p>
              <p className="mt-2"><strong className="text-zinc-100">Solution:</strong> {p.solution}</p>
            </section>
          ))}

          <section className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-5">
            <p className="text-zinc-100">AI-generated code breaks when the AI lacks context about your specific project. Coding standards bridge this gap by providing the repository-aware context AI tools need to generate maintainable, production-ready code.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
