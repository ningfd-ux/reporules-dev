import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Zap, Brain, Workflow, GitBranch } from "lucide-react";
import CompareTable from "@/components/CompareTable";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Cursor vs Windsurf — RepoRules.dev",
  description:
    "Cursor vs Windsurf: compare repository awareness, agent workflows, code completion, and terminal integration for AI-assisted engineering.",
};

const FEATURES = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Code Completion",
    description:
      "Cursor excels at inline code completion with strong context awareness. Windsurf offers good completions but with wider context gaps.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Context Handling",
    description:
      "Cursor maintains better long-context consistency across large files. Windsurf can lose context in complex refactoring sessions.",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Agent Workflow",
    description:
      "Windsurf has more advanced agent workflows. Cursor's agent mode is simpler but more predictable.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Multi-file Refactor",
    description:
      "Both handle multi-file refactoring well. Cursor offers more precise suggestions when working with strongly-typed codebases.",
  },
];

const TABLE_ROWS = [
  {
    capability: "Repository Awareness",
    left: "Strong",
    right: "Medium",
  },
  {
    capability: "Multi-file Refactor",
    left: "Excellent",
    right: "Good",
  },
  {
    capability: "Long Context Handling",
    left: "Strong",
    right: "Medium",
  },
  {
    capability: "Agent Workflow",
    left: "Basic",
    right: "Advanced",
  },
  {
    capability: "Code Completion Speed",
    left: "Fast",
    right: "Fast",
  },
  {
    capability: "Terminal Integration",
    left: "Good",
    right: "Strong",
  },
];

export default function CursorVsWindsurf() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Cursor vs Windsurf
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Compare repository awareness, context handling and AI coding workflows
        between Cursor and Windsurf.
      </p>

      {/* Section 1: Feature Comparison */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">
          Feature Comparison
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A detailed breakdown of capabilities across key dimensions.
        </p>
        <div className="mt-6">
          <CompareTable
            leftName="Cursor"
            rightName="Windsurf"
            rows={TABLE_ROWS}
          />
        </div>
      </section>

      {/* Section 2: Workflow Analysis */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">
          Workflow Analysis
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Section 3: Best Use Cases */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">
          Best Use Cases
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">
              Choose Cursor when
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Working with large monorepos
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                You need strong long-context consistency
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Preferring simpler, more predictable behavior
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                TypeScript/React focused projects
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/40 bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">
              Choose Windsurf when
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                You need advanced agent workflows
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Working with diverse tech stacks
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Terminal-heavy development workflows
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Exploring new or unfamiliar codebases
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
