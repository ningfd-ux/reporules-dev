import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Claude Code SaaS Workflow — RepoRules.dev",
  description:
    "Production-ready AI coding workflow for Next.js SaaS projects using Claude Code, Cursor and modern repo standards.",
};

const CODE_STYLES =
  "overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 font-mono text-sm leading-relaxed";

function CodeBlock({ children }: { children: string }) {
  return (
    <div className={CODE_STYLES}>
      <pre className="text-zinc-300">{children}</pre>
    </div>
  );
}

export default function ClaudeCodeSaaS() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Back link */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-300"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Workflows
      </Link>

      {/* H1 */}
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        Claude Code SaaS Workflow
      </h1>
      <p className="mt-4 text-lg leading-8 text-zinc-400">
        Production-ready AI coding workflow for Next.js SaaS projects using
        Claude Code, Cursor and modern repo standards.
      </p>

      {/* Overview */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          This workflow is designed for AI-assisted SaaS development using:
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-400">
          {[
            "Next.js App Router",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Stripe",
            "Claude Code",
            "Cursor",
          ].map((item) => (
            <span
              key={item}
              className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          The goal is to keep AI-generated code predictable, maintainable and
          consistent across long-term projects.
        </p>
      </section>

      {/* Repo Structure */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Recommended Repo Structure
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          Feature-based architecture prevents AI tools from generating
          duplicated logic and inconsistent folder structures.
        </p>
        <div className="mt-6">
          <CodeBlock>{`/app
  /(marketing)
  /(dashboard)
  /api

/components
  /ui
  /shared

/features
  /auth
  /billing
  /dashboard
  /settings

/lib
  /db
  /stripe
  /auth
  /utils

/prompts

/rules

/tests

memory.md
rules.md`}</CodeBlock>
        </div>
      </section>

      {/* Architecture Principles */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Architecture Principles
        </h2>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-base font-medium text-white">
              Feature-First Structure
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Each business feature owns:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
              {["components", "hooks", "actions", "schemas", "tests"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-zinc-600" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-2 text-sm text-zinc-500">
              Avoid global business logic.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium text-white">
              Server-First Architecture
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Prefer:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
              {["Server Components", "Server Actions", "async data fetching on server"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-zinc-600" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-2 text-sm text-zinc-500">
              Avoid unnecessary client-side state.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium text-white">
              Shared UI Layer
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Reusable UI primitives belong inside <code className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-xs">/components/ui</code>
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Business-specific UI belongs inside{" "}
              <code className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-xs">/features/*</code>
            </p>
          </div>
        </div>
      </section>

      {/* rules.md */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">rules.md</h2>
        <div className="mt-6">
          <CodeBlock>{`# AI Coding Rules

## Architecture

- Use feature-based architecture
- Keep business logic inside features/
- Shared UI belongs inside /components/ui
- Avoid global utilities unless reusable

---

## React

- Prefer Server Components by default
- Use Client Components only for interactivity
- Never fetch directly inside client components
- Avoid unnecessary useEffect usage

---

## API

- Prefer Server Actions over REST APIs
- Keep route handlers thin
- Centralize validation schemas

---

## Components

- Keep components under 200 lines
- Prefer composition over abstraction
- Avoid deeply nested props

---

## Naming

- Use explicit names
- Avoid generic folders like helpers/, misc/, temp/
- Use feature-oriented naming

---

## Styling

- Use Tailwind utilities
- Reuse shared UI primitives
- Avoid duplicated utility patterns

---

## State Management

- Prefer server state
- Avoid unnecessary global state
- Keep local state isolated

---

## Performance

- Avoid unnecessary client bundles
- Lazy load heavy components
- Prefer streaming when possible

---

## Code Quality

- Avoid duplicated hooks
- Avoid duplicated validation logic
- Keep functions focused and small`}</CodeBlock>
        </div>
      </section>

      {/* memory.md */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">memory.md</h2>
        <div className="mt-6">
          <CodeBlock>{`# Project Memory

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- Stripe

---

## Architecture

- Feature-first structure
- Server Components by default
- Shared UI primitives
- Minimal client-side state

---

## Important Constraints

- Never fetch inside client components
- Never create duplicated hooks
- Never create duplicate folder structures
- Avoid introducing alternative architecture patterns

---

## UI Rules

- Reuse shared UI primitives
- Keep spacing consistent
- Avoid inline styles
- Prefer accessibility-first components

---

## Testing Standards

- Use React Testing Library
- Test user behavior
- Avoid snapshot-heavy tests

---

## Code Style

- Prefer readability over abstractions
- Keep components composable
- Prefer explicit naming`}</CodeBlock>
        </div>
      </section>

      {/* File Organization */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          File Organization Standards
        </h2>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="mb-3 text-base font-medium text-white">
              Feature Structure
            </h3>
            <CodeBlock>{`/features/auth
  /components
  /hooks
  /actions
  /schemas
  /tests`}</CodeBlock>
          </div>

          <div>
            <h3 className="mb-3 text-base font-medium text-white">
              Shared UI
            </h3>
            <p className="mb-3 text-sm text-zinc-400">
              <code className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-xs">/components/ui</code> contains:
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
              {[
                "buttons",
                "inputs",
                "dialogs",
                "cards",
                "tables",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-base font-medium text-white">
              Shared Logic
            </h3>
            <p className="mb-3 text-sm text-zinc-400">
              <code className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-xs">/lib</code> contains:
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
              {[
                "database clients",
                "auth helpers",
                "integrations",
                "utilities",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Workflow */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Prompt Workflow
        </h2>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-base font-medium text-white">
              Generate New Feature
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Generate a new dashboard feature following the existing project
              architecture.
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-300">
              Requirements:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
              {[
                "Use feature-based folder structure",
                "Prefer Server Components",
                "Reuse shared UI components",
                "Add loading states",
                "Add error states",
                "Keep components small and composable",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium text-white">
              Refactor Existing Feature
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Refactor this feature without changing business logic.
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-300">
              Requirements:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
              {[
                "Remove duplicated logic",
                "Improve readability",
                "Keep server-first architecture",
                "Preserve folder structure",
                "Reuse existing patterns",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium text-white">
              Generate Tests
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Generate tests following existing testing standards.
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-300">
              Requirements:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
              {[
                "Use React Testing Library",
                "Prefer user behavior testing",
                "Avoid snapshots",
                "Cover loading states",
                "Cover error states",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AI Constraints */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          AI Constraints
        </h2>
        <ul className="mt-6 space-y-2 text-sm text-zinc-400">
          {[
            "Never create duplicate folder structures",
            "Never fetch directly inside client components",
            "Never introduce new UI patterns without reuse",
            "Avoid unnecessary abstractions",
            "Avoid giant utility files",
            "Keep feature boundaries strict",
            "Prefer explicit naming over generic naming",
            "Avoid business logic inside shared components",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Testing Workflow */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Testing Workflow
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          All AI-generated features must include:
        </p>
        <ul className="mt-4 space-y-1 text-sm text-zinc-400">
          {[
            "loading states",
            "error states",
            "empty states",
            "accessibility checks",
            "unit tests",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-base font-medium text-white">
          Testing Stack
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["React Testing Library", "Vitest", "Playwright"].map((item) => (
            <span
              key={item}
              className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="mt-8 text-base font-medium text-white">
          Testing Rules
        </h3>
        <ul className="mt-4 space-y-1 text-sm text-zinc-400">
          {[
            "Test behavior instead of implementation",
            "Avoid excessive mocking",
            "Prefer integration-style tests",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Pull Request Workflow */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Pull Request Workflow
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          Before merging AI-generated code:
        </p>
        <ul className="mt-4 space-y-1 text-sm text-zinc-400">
          {[
            "Check for duplicated logic",
            "Check for duplicated hooks",
            "Verify folder consistency",
            "Verify naming consistency",
            "Ensure tests are included",
            "Ensure server-first architecture is preserved",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-base font-medium text-white">
          PR Guidelines
        </h3>
        <ul className="mt-4 space-y-1 text-sm text-zinc-400">
          {[
            "Keep PRs focused",
            "Avoid mixed concerns",
            "Prefer incremental refactors",
            "Keep PRs under 300 LOC when possible",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Before / After */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Before Applying Workflow Standards
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
            <ul className="space-y-2 text-sm text-zinc-400">
              {[
                "duplicated hooks",
                "mixed server/client logic",
                "inconsistent folder structures",
                "large components",
                "duplicated utility files",
                "scattered business logic",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
            <ul className="space-y-2 text-sm text-zinc-400">
              {[
                "predictable architecture",
                "reusable UI patterns",
                "cleaner AI-generated code",
                "smaller components",
                "consistent folder structure",
                "easier long-term maintenance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recommended Stack */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Recommended Stack
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            {
              label: "Frontend",
              items: ["Next.js App Router", "Tailwind CSS", "shadcn/ui"],
            },
            {
              label: "Backend",
              items: ["Supabase", "PostgreSQL"],
            },
            {
              label: "Payments",
              items: ["Stripe"],
            },
            {
              label: "Deployment",
              items: ["Vercel"],
            },
            {
              label: "AI Tools",
              items: ["Claude Code", "Cursor"],
            },
          ].map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4"
            >
              <h3 className="mb-2 text-sm font-medium text-zinc-300">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-1 font-mono text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Goals */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Workflow Goals</h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          This workflow is designed to:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-400">
          {[
            "reduce inconsistent AI output",
            "improve long-term maintainability",
            "keep repo structure predictable",
            "improve AI-assisted collaboration",
            "reduce duplicated logic",
            "scale AI coding across teams",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Copy CTA */}
      <section className="mt-16 border-t border-zinc-800 pt-16">
        <h2 className="text-2xl font-semibold text-white">
          Copy This Workflow
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          Save these files to your repo and reference them in your AI tool
          configuration.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-medium text-zinc-300 transition-colors hover:bg-zinc-800">
            <Copy className="h-4 w-4" />
            Copy rules.md
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-medium text-zinc-300 transition-colors hover:bg-zinc-800">
            <Copy className="h-4 w-4" />
            Copy memory.md
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition-opacity hover:opacity-90">
            <Copy className="h-4 w-4" />
            Copy Prompt Pack
          </button>
        </div>
      </section>
    </div>
  );
}
