"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import StackBadge from "@/components/StackBadge";

export default function HeroSection() {
  const scrollToExamples = () => {
    document.getElementById("examples")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 py-20">
      {/* Headline */}
      <h1 className="max-w-4xl text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
        Make AI-generated code
        <br />
        <span className="text-primary/80">maintainable.</span>
      </h1>

      {/* Subheadline */}
      <p className="mt-6 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
        Generate repository-aware AI coding standards for Cursor, Claude Code,
        Copilot and AI agents.
      </p>

      {/* CTA Row */}
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/generator"
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-base font-medium text-primary-foreground transition-all hover:bg-primary/80"
        >
          Generate Standards
          <ArrowRight className="h-5 w-5" />
        </Link>
        <button
          onClick={scrollToExamples}
          className="inline-flex h-12 items-center gap-2 rounded-xl border border-border/40 bg-card px-6 text-base font-medium text-foreground transition-all hover:bg-accent"
        >
          View Example Output
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

      {/* Hero Visual: Split code card */}
      <div className="mt-16 grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-xl border border-border/40 md:grid-cols-2">
        {/* Input side */}
        <div className="bg-zinc-950 p-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-zinc-500">package.json</span>
          </div>
          <pre className="font-mono text-xs leading-relaxed text-zinc-300">
{`{
  "dependencies": {
    "next": "15",
    "react": "19",
    "tailwindcss": "^4",
    "prisma": "^6",
    "zod": "^4"
  }
}`}
          </pre>
        </div>

        {/* Output side */}
        <div className="bg-zinc-900 p-5">
          <div className="mb-3 flex items-center gap-2">
            <StackBadge label="Next.js" variant="primary" />
            <StackBadge label="Prisma" />
            <StackBadge label="Zod" />
          </div>
          <pre className="font-mono text-xs leading-relaxed text-zinc-300">
{`# Architecture Standards
- Prefer Server Components
- Use Server Actions for mutations

# Database Standards
- Use Prisma transactions
- Validate with Zod schemas

# AI Constraints
- Never fetch in client
- Keep business logic in services`}
          </pre>
        </div>
      </div>
    </section>
  );
}
