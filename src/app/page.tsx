import Link from "next/link";
import {
  Code2,
  Box,
  Blocks,
  Shield,
  Brain,
  Zap,
  GitBranch,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import ExampleCard from "@/components/ExampleCard";
import StackBadge from "@/components/StackBadge";

const FEATURES = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Repository-aware",
    description:
      "Analyzes your dependencies and project architecture to generate context-specific standards that actually apply to your codebase.",
  },
  {
    icon: <Box className="h-5 w-5" />,
    title: "Framework-specific",
    description:
      "Understands Next.js, React, Python, Go and more. Standards reflect each framework's idioms and best practices, not generic advice.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "AI-tool optimized",
    description:
      "Works with Cursor, Claude Code and Copilot. Export formats that AI coding tools can use immediately.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Maintainability-first",
    description:
      "Designed to keep AI-generated code clean, consistent, and maintainable at scale across your entire team.",
  },
];

const EXAMPLES = [
  {
    title: "Next.js + Tailwind + Prisma",
    input: `{
  "dependencies": {
    "next": "15",
    "react": "19",
    "tailwindcss": "^4",
    "prisma": "^6",
    "zod": "^4"
  }
}`,
    output: `# Architecture Standards
- Prefer Server Components by default
- Use Server Actions for mutations

# Database Standards
- Use Prisma transactions for multi-step ops
- Validate all inputs with Zod schemas

# AI Constraints
- Never fetch data inside client components
- Keep business logic in server services`,
  },
  {
    title: "React + Zustand + Vitest",
    input: `{
  "dependencies": {
    "react": "19",
    "zustand": "^5",
    "vitest": "^2",
    "@testing-library/react": "^16"
  }
}`,
    output: `# Architecture Standards
- Keep state logic in Zustand stores
- Use selectors for derived state

# Testing Standards
- Write unit tests for stores
- Test components with Testing Library

# AI Constraints
- Avoid prop drilling — use stores
- Test user behavior, not implementation`,
  },
  {
    title: "Python + FastAPI + Pydantic",
    input: `{
  "dependencies": {
    "fastapi": "^0.115",
    "pydantic": "^2",
    "sqlalchemy": "^2",
    "alembic": "^1.14"
  }
}`,
    output: `# Architecture Standards
- Use Pydantic v2 models for validation
- Define schemas separately from ORM models

# API Standards
- Use dependency injection for DB sessions
- Keep route handlers thin (logic in services)

# AI Constraints
- Never expose ORM models directly
- Use Alembic for all schema migrations`,
  },
];

const COMPARISONS = [
  {
    title: "Cursor vs Windsurf",
    description:
      "Compare repository awareness, context handling and AI coding workflows.",
    href: "/compare/cursor-vs-windsurf",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Cursor vs Claude Code",
    description:
      "How Cursor and Claude Code handle multi-file refactoring and agent workflows.",
    href: "/compare/cursor-vs-claude-code",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    title: "Cursor vs Copilot",
    description:
      "Comparing code completion, context understanding and tool ecosystem.",
    href: "/compare/cursor-vs-copilot",
    icon: <GitBranch className="h-5 w-5" />,
  },
];

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Paste package.json",
    description: "Copy your package.json or dependencies and paste them in.",
    detail: (
      <pre className="mt-4 rounded-lg bg-zinc-950 p-3 font-mono text-xs leading-relaxed text-zinc-400">
{`{
  "next": "15",
  "react": "19",
  "tailwindcss": "^4"
}`}
      </pre>
    ),
  },
  {
    number: "02",
    title: "AI detects your stack",
    description:
      "Our engine identifies frameworks, databases and tools from your dependencies.",
    detail: (
      <div className="mt-4 flex flex-wrap gap-2">
        <StackBadge label="Next.js App Router" variant="primary" />
        <StackBadge label="React Server Components" />
        <StackBadge label="Tailwind v4" />
      </div>
    ),
  },
  {
    number: "03",
    title: "Generate standards",
    description:
      "Get repository-aware AI coding standards you can use immediately.",
    detail: (
      <pre className="mt-4 rounded-lg bg-zinc-950 p-3 font-mono text-xs leading-relaxed text-zinc-400">
{`- Prefer Server Components by default
- Use Server Actions for mutations
- Validate external input with Zod`}
      </pre>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <HeroSection />

      {/* SECTION 2: How It Works */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-500">
            Three steps from paste to production-ready AI coding standards.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.number} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <span className="font-mono text-sm text-zinc-600">{step.number}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {step.description}
                </p>
                {step.detail}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2.5: Featured Workflows */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Featured Workflows
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-500">
            Copy battle-tested AI workflows for your next project.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/workflows/claude-code-saas"
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700"
            >
              <h3 className="text-base font-semibold text-white group-hover:text-zinc-200">
                Claude Code SaaS Workflow
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Production-ready AI workflow for scalable Next.js SaaS projects.
              </p>
              <div className="mt-4">
                <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300">
                  View Workflow &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why RepoRules */}
      <section className="border-t border-border/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why RepoRules
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Generate standards that actually understand your codebase.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Real Generated Examples */}
      <section id="examples" className="border-t border-border/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real generated examples
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            See how RepoRules generates repository-aware standards for different
            tech stacks.
          </p>
          <div className="mt-12 grid gap-8">
            {EXAMPLES.map((example) => (
              <ExampleCard key={example.title} {...example} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Tool Comparison */}
      <section className="border-t border-border/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tool comparison
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Choosing between AI coding tools? Here&apos;s how they compare.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {COMPARISONS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-border/40 bg-card p-6 transition-colors hover:border-border/60"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
