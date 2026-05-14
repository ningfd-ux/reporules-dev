"use client";

import Link from "next/link";
import { Copy } from "lucide-react";

export default function HeroSection() {
  const scrollToExamples = () => {
    document.getElementById("examples")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="min-h-[85vh]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:py-20">
          {/* LEFT: Copy + CTA */}
          <div>
            {/* H1 */}
            <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-white">
              Production-ready AI coding workflows
              <br />
              for{" "}
              <span className="text-zinc-400">Cursor, Claude Code</span>
              <br />
              and Windsurf.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Copy battle-tested rules, prompts and repo standards
              <br />
              to generate cleaner and more maintainable code.
            </p>

            {/* CTA */}
            <div className="mt-8 flex gap-4">
              <Link
                href="/generator"
                className="rounded-xl bg-white px-6 py-3 font-medium text-black transition-opacity hover:opacity-90"
              >
                Browse Workflows
              </Link>
              <button
                onClick={scrollToExamples}
                className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
              >
                <Copy className="mr-2 inline-block h-4 w-4" />
                Copy Rules
              </button>
            </div>

            {/* Trust text */}
            <p className="mt-6 text-sm text-zinc-600">
              Used for SaaS apps, monorepos and AI-assisted teams
            </p>
          </div>

          {/* RIGHT: Workflow Preview Card */}
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3 font-mono text-sm text-zinc-500">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="ml-2">workflow-preview.tsx</span>
            </div>

            {/* Three columns */}
            <div className="grid grid-cols-3">
              {/* Col 1: Repo Tree */}
              <div className="border-r border-zinc-800 p-4 font-mono text-sm leading-relaxed text-zinc-500">
                <div>apps/</div>
                <div className="ml-3">components/</div>
                <div className="ml-3">lib/</div>
                <div className="ml-3 text-zinc-400">prompts/</div>
                <div className="ml-3">rules/</div>
                <div className="ml-3 text-zinc-400">memory.md</div>
              </div>

              {/* Col 2: rules.md */}
              <div className="border-r border-zinc-800 p-4 font-mono text-sm leading-relaxed text-zinc-400">
                <div className="text-zinc-300"># Server Components First</div>
                <div className="mt-3 text-zinc-500">
                  Always prefer server components
                </div>
                <div className="text-zinc-500">
                  unless interactivity is required.
                </div>
                <div className="mt-4 text-zinc-500">
                  Never fetch directly inside
                </div>
                <div className="text-zinc-500">client components.</div>
              </div>

              {/* Col 3: Generated code */}
              <div className="p-4 font-mono text-sm leading-relaxed text-zinc-400">
                <span className="text-zinc-600">// generated</span>
                <div className="mt-2">
                  <span className="text-blue-400">export default async function</span>
                  <span className="text-zinc-300"> Dashboard()</span>
                </div>
                <div className="text-zinc-300">{"{"}</div>
                <div className="ml-4">
                  <span className="text-blue-400">const</span>
                  <span className="text-zinc-300"> data = </span>
                  <span className="text-blue-400">await</span>
                  <span className="text-zinc-300"> getData()</span>
                </div>
                <div className="ml-4 text-zinc-300" />
                <div className="ml-4">
                  <span className="text-blue-400">return</span>
                  <span className="text-zinc-300"> {"<"}DashboardUI data={"{data}"} {"/"}{">"}</span>
                </div>
                <div className="text-zinc-300">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-3">
          <div className="text-sm font-medium text-zinc-500">
            Reduce inconsistent AI output
          </div>
          <div className="text-sm font-medium text-zinc-500">
            Generate cleaner repo structures
          </div>
          <div className="text-sm font-medium text-zinc-500">
            Scale AI coding across teams
          </div>
        </div>
      </div>
    </>
  );
}
