import type { Metadata } from "next";
import Link from "next/link";
import PageViewTracker from "@/components/PageViewTracker";
import { allWorkflows } from "@/data/workflows";

export const metadata: Metadata = {
  title: "AI Startup Workflow — RepoRules.dev",
  description:
    "AI Startup workflow: lean repository governance and AI coding standards for fast-moving startup engineering teams.",
};

const CARD = "rounded-xl border border-[#2a2d35] bg-[#16181d] p-6";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "AI Startup Workflow",
  description:
    "Lean AI coding standards for fast-moving startup teams.",
  step: [
    { "@type": "HowToStep", name: "Planning", text: "Define repository structure and feature boundaries" },
    { "@type": "HowToStep", name: "Implementation", text: "Generate governance files and set up conventions" },
    { "@type": "HowToStep", name: "Validation", text: "Verify architecture rules and PR workflow" },
  ],
};

export default function AIStartupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <PageViewTracker eventName="workflow_view" params={{ slug: "ai-startup" }} />
      <main className="min-h-screen bg-[#0d0f14] text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
            Lean Startup Workflow
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">AI Startup Workflow</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Lean AI coding standards for fast-moving startup teams.
          </p>
          <div className="mt-6 flex gap-5 font-mono text-xs text-zinc-500">
            <span>15 rules</span>
            <span>7 prompts</span>
            <span>Updated 2 days ago</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className={CARD}>
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Repository Structure
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-400">
              /app<br />
              /components<br />
              /features<br />
              /lib<br />
              /prompts<br />
              /rules<br />
              memory.md<br />
              rules.md
            </div>
          </div>
          <div className={CARD}>
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Constraints
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-300">
              - keep minimal folder structure<br />
              - avoid premature abstraction<br />
              - prefer server-first architecture<br />
              - reuse validation schemas
            </div>
          </div>
          <div className={CARD}>
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Migration Notes
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-400">
              - MVP stage — expect rapid restructuring<br />
              - payment integration pending<br />
              - auth system to be added post-MVP
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/workflows" className="font-mono text-sm text-zinc-500 hover:text-zinc-200 transition-colors">
            &larr; Back to Workflows
          </Link>
        </div>

        {/* Related Workflows */}
        {(() => {
          const related = allWorkflows.filter(w => w.id !== "ai-startup");
          return (
            <div className="mt-16 border-t border-zinc-800 pt-12">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight">Related Workflows</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((w) => (
                  <Link
                    key={w.id}
                    href={`/workflows/${w.id}`}
                    className="rounded-xl border border-zinc-800 bg-[#151922] p-5 transition-colors hover:border-zinc-600"
                  >
                    <div className="text-sm font-medium">{w.title}</div>
                    <div className="mt-2 text-xs text-zinc-500 line-clamp-2">{w.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </main>
    </>
  );
}
