import Link from "next/link";
import { ArrowLeft, Zap, Brain, Workflow, GitBranch } from "lucide-react";
import CompareTable from "@/components/CompareTable";
import FeatureCard from "@/components/FeatureCard";

const FEATURES = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Code Completion",
    description:
      "Cursor provides instant inline completions. Claude Code requires explicit prompts but offers deeper reasoning on complex problems.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Context Handling",
    description:
      "Claude Code excels at maintaining context across long, multi-file sessions. Cursor handles per-file context well but can lose broader context.",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Agent Workflow",
    description:
      "Claude Code has more sophisticated agent capabilities with tool use. Cursor provides a simpler chat-based agent experience.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Integration",
    description:
      "Cursor integrates as an IDE. Claude Code works as a terminal-based tool that can be integrated into any editor workflow.",
  },
];

const TABLE_ROWS = [
  {
    capability: "Repository Awareness",
    left: "Strong",
    right: "Very Strong",
  },
  {
    capability: "Multi-file Refactor",
    left: "Excellent",
    right: "Excellent",
  },
  {
    capability: "Long Context Handling",
    left: "Strong",
    right: "Very Strong",
  },
  {
    capability: "Agent Workflow",
    left: "Basic",
    right: "Advanced",
  },
  {
    capability: "Inline Completions",
    left: "Fast & Frequent",
    right: "Prompt-based",
  },
  {
    capability: "Terminal Integration",
    left: "Built-in",
    right: "Native (terminal tool)",
  },
];

export default function CursorVsClaudeCode() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Cursor vs Claude Code
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        How Cursor and Claude Code handle multi-file refactoring, context
        management, and agent workflows.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground">
          Feature Comparison
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A detailed comparison of capabilities between the two AI coding tools.
        </p>
        <div className="mt-6">
          <CompareTable
            leftName="Cursor"
            rightName="Claude Code"
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
                You want an all-in-one IDE experience
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Fast inline completions matter most
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Visual Studio Code ecosystem familiarity
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Simpler, more guided AI interactions
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/40 bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">
              Choose Claude Code when
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                You need deep reasoning on complex codebases
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Working with very large files or monorepos
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                You prefer terminal-based workflows
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Advanced agent capabilities needed
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
