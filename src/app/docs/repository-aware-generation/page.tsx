import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Repository-Aware Generation — RepoRules.dev",
  description:
    "Learn how repository-aware AI coding standards analyze your dependencies and architecture for context-specific guidelines.",
};

export default function RepositoryAwareGeneration() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/docs"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Docs
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Repository-Aware Generation
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The key differentiator: standards that actually understand your
        codebase.
      </p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            What makes standards repository-aware?
          </h2>
          <p>
            Traditional AI coding rules are generic. They tell the AI to
            &ldquo;write clean code&rdquo; or &ldquo;use best practices.&rdquo;
            Repository-aware standards analyze your actual dependencies and
            generate rules that reflect your specific tech stack.
          </p>
          <p className="mt-4">
            When you paste your package.json, we detect frameworks (Next.js,
            React, Vue), databases (Prisma, Drizzle), validation libraries (Zod,
            Yup), and more. The generated standards reference these specific
            technologies and explain how they should work together.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Detection capabilities
          </h2>
          <ul className="space-y-3">
            {[
              {
                title: "Frameworks",
                items: "Next.js App Router, React, Vue, Svelte, Angular",
              },
              {
                title: "Styling",
                items: "Tailwind CSS, Styled Components, Emotion, Sass",
              },
              {
                title: "Databases",
                items: "Prisma ORM, Drizzle, Mongoose, TypeORM",
              },
              {
                title: "Validation",
                items: "Zod, Yup, Joi, Valibot",
              },
              {
                title: "Backend",
                items: "Express, Fastify, Hono, NestJS",
              },
            ].map((cat) => (
              <li key={cat.title} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">{cat.title}:</strong>{" "}
                  {cat.items}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            From generic to specific
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border/40 bg-card p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground/60">
                Generic (bad)
              </p>
              <p className="mt-1 text-foreground">
                &ldquo;Write clean, maintainable code.&rdquo;
              </p>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground/60">
                Repository-aware (good)
              </p>
              <p className="mt-1 text-foreground">
                &ldquo;Prefer Server Components by default. Detected Next.js App
                Router — Server Components reduce client bundle size and improve
                data fetching consistency.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Try it yourself
          </h2>
          <p className="mb-6">
            Paste your package.json and see the difference that repository-aware
            standards make.
          </p>
          <Link
            href="/generator"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
          >
            Generate Standards
          </Link>
        </section>
      </div>
    </div>
  );
}
