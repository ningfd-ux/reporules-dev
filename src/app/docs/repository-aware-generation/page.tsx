import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Repository-Aware Generation — RepoRules.dev",
  description: "Standards that analyze your dependencies and generate context-specific guidelines.",
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

export default function RepositoryAwareGeneration() {
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
            Repository-Aware Generation
          </h1>
          <p className="mt-4 font-mono text-sm leading-relaxed text-zinc-400">
            The key differentiator: standards that actually understand your codebase.
          </p>
        </div>

        <div className="space-y-8 font-mono text-sm leading-relaxed text-zinc-400">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-zinc-100">What makes standards repository-aware?</h2>
            <p>Traditional AI coding rules are generic. Repository-aware standards analyze your actual dependencies and generate rules that reflect your specific tech stack. When you paste your package.json, we detect frameworks, databases, validation libraries, and more. The generated standards reference these specific technologies and explain how they should work together.</p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-zinc-100">Detection capabilities</h2>
            <ul className="space-y-3">
              {[
                { title: "Frameworks", items: "Next.js App Router, React, Vue, Svelte, Angular" },
                { title: "Styling", items: "Tailwind CSS, Styled Components, Emotion, Sass" },
                { title: "Databases", items: "Prisma ORM, Drizzle, Mongoose, TypeORM" },
                { title: "Validation", items: "Zod, Yup, Joi, Valibot" },
                { title: "Backend", items: "Express, Fastify, Hono, NestJS" },
              ].map((cat) => (
                <li key={cat.title} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                  <span><strong className="text-zinc-100">{cat.title}:</strong> {cat.items}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-zinc-100">Generic vs Repository-aware</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-4">
                <p className="text-xs text-zinc-500">Generic (bad)</p>
                <p className="mt-1 text-zinc-400">&ldquo;Write clean, maintainable code.&rdquo;</p>
              </div>
              <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-4">
                <p className="text-xs text-zinc-500">Repository-aware (good)</p>
                <p className="mt-1 text-zinc-400">&ldquo;Prefer Server Components by default. Detected Next.js App Router &mdash; Server Components reduce client bundle size and improve data fetching consistency.&rdquo;</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
