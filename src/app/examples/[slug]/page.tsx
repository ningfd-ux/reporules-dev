import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { allExamples, getExampleBySlug } from "@/data/examples";
import PageViewTracker from "@/components/PageViewTracker";
import GithubSourceLink from "@/components/GithubSourceLink";
import { getRelatedWorkflows, normalizeStackTags, repositoryMetadata, type WorkflowMetadata } from "@/data/repositories";

export const metadata: Metadata = {
  title: "Repository Governance Example — RepoRules.dev",
  description:
    "Real generated repository governance files from AI-assisted engineering systems. View rules, memory, architecture, and migration notes.",
};

export function generateStaticParams() {
  return allExamples.map((e) => ({ slug: e.slug }));
}

const githubRepos: Record<string, string> = {
  "nextjs-ai-saas": "https://github.com/ningfd-ux/nextjs-ai-saas-governance",
};


const FILE_TABS = [
  { key: "rules", label: "rules.md" },
  { key: "memory", label: "memory.md" },
  { key: "architecture", label: "architecture.md" },
  { key: "cursorRules", label: ".cursorrules" },
  { key: "claude", label: "claude.md" },
  { key: "testingWorkflow", label: "testing-workflow.md" },
  { key: "migrationNotes", label: "migration-notes.md" },
];

export default async function ExamplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const example = getExampleBySlug(slug);
  if (!example) notFound();

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${example.title} — RepoRules.dev`,
    description: example.description,
    proficiencyLevel: "Advanced",
    about: {
      "@type": "Thing",
      name: "AI Repository Governance",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      <PageViewTracker eventName="example_view" params={{ slug }} />
      <main className="min-h-screen bg-[#0d0f14] text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
            Generated using RepoRules Generator
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">{example.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">{example.description}</p>
          <div className="mt-6 flex gap-5 font-mono text-xs text-zinc-500">
            <span>6 files generated</span>
            <span>Pattern confidence: 92%</span>
            <span>Migration compatible</span>
          </div>
        </div>

        {/* Repository Signals */}
        <div className="mb-8 rounded-xl border border-[#2a2d35] bg-[#151922] p-5">
          <div className="mb-4 text-sm font-medium">Repository Signals Detected</div>
          <div className="space-y-3 text-sm text-zinc-300">
            {example.signals.map((s) => (
              <div key={s}>✓ {s}</div>
            ))}
          </div>
        </div>

        {/* Generated From + Nav */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-5">
            <div className="mb-4 text-sm font-medium">Generated From</div>
            <div className="font-mono text-xs leading-7 text-zinc-500">
              {example.generatedFrom.map((g) => (
                <span key={g}>
                  {g}
                  <br />
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-5">
            <div className="mb-4 text-sm font-medium">View Source</div>
            {githubRepos[slug] ? (
              <GithubSourceLink
                href={githubRepos[slug]}
                slug={slug}
                className="font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-200"
              >
                View workflow &rarr;
              </GithubSourceLink>
            ) : (
              <Link
                href={`/workflows/${example.repository}`}
                className="font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-200"
              >
                View workflow &rarr;
              </Link>
            )}
          </div>
        </div>

        {/* File Tabs — Server Component, static */}
        <div className="flex gap-2 overflow-x-auto border-b border-[#2a2d35] pb-4">
          {FILE_TABS.map((tab) => (
            <span
              key={tab.key}
              className="h-9 whitespace-nowrap rounded-lg border border-zinc-500 bg-zinc-800/50 px-4 text-sm text-zinc-100"
            >
              {tab.label}
            </span>
          ))}
        </div>

        {/* File Content — show all files */}
        <div className="mt-8 space-y-10">
          {FILE_TABS.map((tab) => {
            const content = example.files[tab.key as keyof typeof example.files];
            return (
              <div key={tab.key}>
                <div className="mb-3 font-mono text-xs text-zinc-500">{tab.label}</div>
                <pre className="overflow-x-auto rounded-xl border border-[#2a2d35] bg-[#16181d] p-5 font-mono text-sm leading-relaxed text-zinc-400">
                  {content}
                </pre>
              </div>
            );
          })}
        </div>

        {/* Engineering Decisions */}
        {example.engineeringDecisions && example.engineeringDecisions.length > 0 && (
          <div className="mt-16 border-t border-[#2a2d35] pt-12">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight">Engineering Decisions</h2>
            <p className="mb-8 text-sm text-zinc-500">
              Key architectural decisions made during development, explaining <em>why</em> the system is built this way.
            </p>
            <div className="space-y-6">
              {example.engineeringDecisions.map((decision, i) => (
                <div key={i} className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-5">
                  <div className="mb-2 font-mono text-xs text-zinc-600">Decision {i + 1}</div>
                  <p className="text-sm leading-7 text-zinc-300">{decision}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Failure Cases */}
        {example.aiFailureCases && example.aiFailureCases.length > 0 && (
          <div className="mt-16 border-t border-[#2a2d35] pt-12">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight">AI Failure Cases</h2>
            <p className="mb-8 text-sm text-zinc-500">
              Real incidents where AI-generated code caused issues — and what we changed to prevent them.
            </p>
            <div className="space-y-6">
              {example.aiFailureCases.map((failure, i) => (
                <div key={i} className="rounded-xl border border-red-900/30 bg-[#1c1316] p-5">
                  <div className="mb-2 font-mono text-xs text-red-400/80">Case {i + 1}</div>
                  <p className="text-sm leading-7 text-zinc-300">{failure}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom nav */}
        <div className="mt-16">
          <Link href="/examples" className="font-mono text-sm text-zinc-500 transition-colors hover:text-zinc-200">
            &larr; Back to Examples
          </Link>
        </div>

        {/* Related Examples */}
        {(() => {
          const all = allExamples.filter(e => e.slug !== slug);
          const related = all.slice(0, 3);
          return (
            <div className="mt-16 border-t border-zinc-800 pt-12">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight">Related Examples</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map((ex) => (
                  <Link
                    key={ex.slug}
                    href={`/examples/${ex.slug}`}
                    className="rounded-xl border border-zinc-800 bg-[#151922] p-5 transition-colors hover:border-zinc-600"
                  >
                    <div className="text-sm font-medium">{ex.title}</div>
                    <div className="mt-2 text-xs text-zinc-500 line-clamp-2">{ex.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Related Workflows */}
        {(() => {
          const meta = repositoryMetadata.find(m => m.slug === slug);
          if (!meta) return null;
          const workflows = getRelatedWorkflows(meta.stack, 2);
          if (workflows.length === 0) return null;
          return (
            <div className="mt-8">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight">Related Workflows</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {workflows.map((wf: WorkflowMetadata) => (
                  <Link
                    key={wf.id}
                    href={`/workflows/${wf.id}`}
                    className="rounded-xl border border-zinc-800 bg-[#151922] p-5 transition-colors hover:border-zinc-600"
                  >
                    <div className="text-sm font-medium">{wf.title}</div>
                    <div className="mt-2 text-xs text-zinc-500 line-clamp-2">{wf.description}</div>
                    <div className="mt-3 font-mono text-[10px] text-zinc-500">View Workflow &rarr;</div>
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
