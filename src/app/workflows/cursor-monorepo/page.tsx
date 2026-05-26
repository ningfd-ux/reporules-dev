import type { Metadata } from "next";
import Link from "next/link";
import PageViewTracker from "@/components/PageViewTracker";
import { allWorkflows } from "@/data/workflows";

export const metadata: Metadata = {
  title: "Cursor Monorepo Workflow — RepoRules.dev",
  description:
    "Cursor Monorepo workflow: shared repository governance and AI coding standards for Turborepo multi-package projects.",
};

const CARD = "rounded-xl border border-[#2a2d35] bg-[#16181d] p-6";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cursor Monorepo Workflow",
  description:
    "Shared AI workflow for Turborepo and multi-package projects.",
  step: [
    { "@type": "HowToStep", name: "Planning", text: "Define repository structure and feature boundaries" },
    { "@type": "HowToStep", name: "Implementation", text: "Generate governance files and set up conventions" },
    { "@type": "HowToStep", name: "Validation", text: "Verify architecture rules and PR workflow" },
  ],
};

export default function CursorMonorepoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <PageViewTracker eventName="workflow_view" params={{ slug: "cursor-monorepo" }} />
      <main className="min-h-screen bg-[#0d0f14] text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
            Monorepo System
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">Cursor Monorepo Workflow</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Shared AI workflow for Turborepo and multi-package projects.
          </p>
          <div className="mt-6 flex gap-5 font-mono text-xs text-zinc-500">
            <span>18 rules</span>
            <span>9 prompts</span>
            <span>Updated 2 days ago</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className={CARD}>
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Repository Structure
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-400">
              /apps<br />
              &nbsp;&nbsp;web<br />
              &nbsp;&nbsp;admin<br />
              /packages<br />
              &nbsp;&nbsp;ui<br />
              &nbsp;&nbsp;config<br />
              &nbsp;&nbsp;shared<br />
              pnpm-workspace.yaml<br />
              turbo.json
            </div>
          </div>
          <div className={CARD}>
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Constraints
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-300">
              - avoid circular imports<br />
              - isolate shared packages<br />
              - preserve dependency direction<br />
              - keep package boundaries explicit
            </div>
          </div>
          <div className={CARD}>
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Common Failures
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-400">
              - shared UI importing business logic<br />
              - tight coupling across packages<br />
              - inconsistent build configurations
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
          const related = allWorkflows.filter(w => w.id !== "cursor-monorepo");
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
