import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Zap, Brain, Workflow, GitBranch } from "lucide-react";
import CompareTable from "@/components/CompareTable";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Cursor vs Copilot — RepoRules.dev",
  description:
    "Cursor vs Copilot: compare code completion accuracy, repository context awareness, multi-file editing, and IDE integration for AI coding workflows.",
};

const FEATURES = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Code Completion",
    description:
      "Both offer fast inline completions. Cursor provides more context-aware suggestions, while Copilot excels at boilerplate and repetitive patterns.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Context Understanding",
    description:
      "Cursor has deeper repository-level context awareness. Copilot is strong at local context but doesn't understand full project architecture as well.",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Multi-file Editing",
    description:
      "Cursor's agent mode can make coordinated multi-file changes. Copilot focuses on single-file completions with limited cross-file awareness.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Ecosystem",
    description:
      "Copilot integrates across all major IDEs. Cursor is a standalone editor built on VS Code with a more focused AI-native experience.",
  },
];

const TABLE_ROWS = [
  {
    capability: "Repository Awareness",
    left: "Strong",
    right: "Limited",
  },
  {
    capability: "Multi-file Refactor",
    left: "Excellent",
    right: "Basic",
  },
  {
    capability: "Code Completion Speed",
    left: "Fast",
    right: "Very Fast",
  },
  {
    capability: "IDE Support",
    left: "Built-in (VS Code fork)",
    right: "VS Code, JetBrains, Neovim, others",
  },
  {
    capability: "Agent Workflow",
    left: "Available",
    right: "Limited",
  },
  {
    capability: "Chat Interface",
    left: "Built-in",
    right: "Available",
  },
];

export default function CursorVsCopilot() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Cursor vs Copilot
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Comparing code completion, context understanding and tool ecosystem
        between Cursor and GitHub Copilot.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">
          Feature Comparison
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Key differences in AI coding capabilities.
        </p>
        <div className="mt-6">
          <CompareTable
            leftName="Cursor"
            rightName="Copilot"
            rows={TABLE_ROWS}
          />
        </div>
      </section>

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
                You need deep repository awareness
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Multi-file refactoring is a daily task
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                You want AI-native editor experience
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Agent-based workflows for complex tasks
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/40 bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">
              Choose Copilot when
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                You use multiple IDEs across projects
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Fast inline completions for boilerplate
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                JetBrains or Neovim is your primary editor
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                You prefer GitHub ecosystem integration
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
