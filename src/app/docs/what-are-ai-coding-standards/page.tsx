import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "What Are AI Coding Standards? — RepoRules.dev",
  description:
    "Learn how AI coding standards help AI agents generate consistent, maintainable, and repository-aware code.",
};

export default function WhatAreAICodingStandards() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/docs"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Docs
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        What Are AI Coding Standards?
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        AI coding standards are structured guidelines that tell AI coding tools
        how to generate code for your specific repository.
      </p>

      <div className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Why standards matter for AI-generated code
          </h2>
          <p>
            Without explicit guidance, AI coding tools generate code based on
            general patterns from their training data. This leads to:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Inconsistent code style across files
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Wrong framework patterns (e.g., using Pages Router in a Next.js App Router project)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Missing error handling or validation specific to your stack
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Security anti-patterns that your project specifically avoids
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            How AI coding standards differ from traditional linting
          </h2>
          <p>
            While linters (ESLint, Prettier) enforce formatting and catch syntax
            errors, AI coding standards operate at a higher level of abstraction.
            They guide architectural decisions, framework conventions, and data
            flow patterns that linters can&apos;t enforce.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-border/40">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40 bg-card">
                  <th className="px-4 py-3 text-left font-medium text-foreground">Aspect</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Linter</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">AI Standards</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Formatting", "Enforces", "Not needed"],
                  ["Syntax errors", "Catches", "Prevents"],
                  ["Architecture", "Limited", "Full guidance"],
                  ["Framework patterns", "Not applicable", "Specific rules"],
                  ["Data flow", "Not applicable", "Detailed"],
                  ["Security", "Basic", "Context-aware"],
                ].map(([aspect, linter, standards]) => (
                  <tr key={aspect} className="border-b border-border/20">
                    <td className="px-4 py-3 text-foreground">{aspect}</td>
                    <td className="px-4 py-3">{linter}</td>
                    <td className="px-4 py-3">{standards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Example: Before and after
          </h2>
          <p className="mb-4">
            Without standards, an AI tool might generate a client component that
            fetches data directly. With standards, it knows to use a Server
            Component instead.
          </p>
          <div className="rounded-lg bg-zinc-950 p-4 font-mono text-xs leading-relaxed text-zinc-400">
            <span className="text-zinc-500">// Without standards:</span>
            {`
"use client";
export default function UserProfile() {
  const [user, setUser] = useState(null);
  useEffect(() => { fetch("/api/user").then(...) }, []);
  return <div>{user.name}</div>;
}`}
          </div>
          <div className="mt-4 rounded-lg bg-zinc-950 p-4 font-mono text-xs leading-relaxed text-zinc-400">
            <span className="text-zinc-500">// With standards:</span>
            {`
export default async function UserProfile() {
  const user = await getUser();
  return <div>{user.name}</div>;
}`}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Get started
          </h2>
          <p className="mb-6">
            Ready to generate standards for your repository? Paste your
            package.json and get repository-aware AI coding standards in
            seconds.
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
