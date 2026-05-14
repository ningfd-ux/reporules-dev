import { notFound } from "next/navigation";
import Link from "next/link";
import { allExamples, getExampleBySlug } from "@/data/examples";

export function generateStaticParams() {
  return allExamples.map((e) => ({ slug: e.slug }));
}

const FILE_TABS = [
  { key: "rules", label: "rules.md" },
  { key: "memory", label: "memory.md" },
  { key: "architecture", label: "architecture.md" },
  { key: "cursorRules", label: ".cursorrules" },
  { key: "claude", label: "claude.md" },
  { key: "testingWorkflow", label: "testing-workflow.md" },
];

export default async function ExamplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const example = getExampleBySlug(slug);
  if (!example) notFound();

  return (
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
            <Link
              href={`/workflows/${example.repository}`}
              className="font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-200"
            >
              View workflow &rarr;
            </Link>
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

        {/* Bottom nav */}
        <div className="mt-16">
          <Link href="/examples" className="font-mono text-sm text-zinc-500 transition-colors hover:text-zinc-200">
            &larr; Back to Examples
          </Link>
        </div>
      </div>
    </main>
  );
}
