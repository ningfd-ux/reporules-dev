import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Why AI-Generated Code Breaks — RepoRules.dev",
  description:
    "Understand common failure modes in AI-generated code and how coding standards prevent them.",
};

export default function WhyAIGeneratedCodeBreaks() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/docs"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Docs
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Why AI-Generated Code Breaks
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Understanding the common failure modes in AI-generated code — and how
        AI coding standards prevent them.
      </p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            1. Wrong framework patterns
          </h2>
          <p>
            AI models are trained on code from all eras. Without guidance, they
            might generate Pages Router patterns for a Next.js App Router
            project, or use class components instead of function components in
            modern React.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Solution:</strong> Repository-aware
            standards tell the AI exactly which framework version and patterns
            to use.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            2. Missing error handling
          </h2>
          <p>
            AI often generates the &ldquo;happy path&rdquo; and skips error
            handling, edge cases, and validation. This works in demo scenarios
            but fails in production.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Solution:</strong> Standards can
            specify error handling patterns, validation requirements, and edge
            case coverage.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            3. Inconsistent architecture
          </h2>
          <p>
            Without constraints, AI tools may mix different architectural
            patterns in the same project — putting business logic in components,
            using multiple state management approaches, or mixing sync and async
            patterns inconsistently.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Solution:</strong> Architecture
            standards define a consistent mental model for the AI to follow.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            4. Security vulnerabilities
          </h2>
          <p>
            AI models can generate code with SQL injection, XSS, or other
            security vulnerabilities, especially when working with unfamiliar
            frameworks or database libraries.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Solution:</strong> Security-focused
            standards constrain the AI to use safe patterns (parameterized
            queries, input validation, proper escaping).
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            5. Dependency conflicts
          </h2>
          <p>
            AI might suggest packages or APIs that conflict with your existing
            dependency versions. For example, using Prisma v5 syntax when your
            project uses Prisma v4.
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Solution:</strong> By analyzing
            your package.json, standards can reference the exact versions and
            APIs available.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            The bottom line
          </h2>
          <p>
            AI-generated code breaks when the AI lacks context about your
            specific project. Coding standards bridge this gap by providing the
            repository-aware context AI tools need to generate maintainable,
            production-ready code.
          </p>
          <p className="mt-4 mb-6">
            Generate standards for your repository and prevent these issues
            before they happen.
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
