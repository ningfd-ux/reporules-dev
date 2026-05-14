import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — RepoRules.dev",
  description:
    "RepoRules.dev generates repository-aware AI coding standards for Cursor, Claude Code, Copilot and AI agents.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        About RepoRules.dev
      </h1>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            What we do
          </h2>
          <p>
            RepoRules.dev generates AI coding standards that are
            <strong className="text-foreground"> repository-aware</strong>.
            Instead of generic guidelines, our system analyzes your actual
            dependencies and architecture to produce standards that reflect
            your specific tech stack.
          </p>
          <p className="mt-4">
            The result: AI coding tools (Cursor, Claude Code, Copilot) generate
            code that follows your project&apos;s conventions, uses the right
            framework patterns, and maintains architectural consistency.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Why we built it
          </h2>
          <p>
            AI coding tools are powerful, but they lack context about your
            specific project. Without explicit guidance, they generate
            boilerplate code that often uses wrong patterns, misses error
            handling, or introduces architectural inconsistencies.
          </p>
          <p className="mt-4">
            We built RepoRules to bridge the gap between AI tools&apos;
            general knowledge and your project&apos;s specific requirements.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Get started
          </h2>
          <p className="mb-6">
            Paste your package.json and get repository-aware AI coding
            standards in seconds.
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
