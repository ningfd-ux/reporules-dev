"use client";

import Link from "next/link";
import { Copy } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="min-h-[82vh]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-16 lg:grid-cols-2 lg:pt-20">
          {/* LEFT: Copy + CTA */}
          <div>
            {/* H1 */}
            <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-white">
              Production-ready AI workflows
              <br />
              for scalable codebases
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Copy battle-tested repo structures, rules and prompts
              <br />
              to keep AI-generated code clean and maintainable.
            </p>

            {/* CTA */}
            <div className="mt-8 flex gap-4">
              <Link
                href="/workflows/claude-code-saas"
                className="rounded-xl bg-white px-6 py-3 font-medium text-black transition-opacity hover:opacity-90"
              >
                Browse Workflows
              </Link>
              <button className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-medium text-zinc-300 transition-colors hover:bg-zinc-800">
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
            <div className="grid grid-cols-[1.2fr_1.8fr_2fr]">
              {/* Col 1: Repo Tree */}
              <div className="border-r border-zinc-800 p-4 font-mono text-sm leading-relaxed text-zinc-500">
                <div>app/</div>
                <div className="ml-3">components/</div>
                <div className="ml-3">features/</div>
                <div className="ml-3 text-zinc-400">lib/</div>
                <div className="ml-3">prompts/</div>
                <div className="ml-3 text-zinc-400">rules/</div>
                <div className="ml-3">tests/</div>
                <div className="ml-3 text-zinc-400">memory.md</div>
                <div className="ml-3 text-zinc-400">rules.md</div>
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
                <div className="mt-4 text-zinc-500">
                  Prefer feature-based folders.
                </div>
                <div className="mt-1 text-zinc-500">Avoid duplicated hooks.</div>
              </div>

              {/* Col 3: Generated code */}
              <div className="p-4 font-mono text-sm leading-relaxed text-zinc-400">
                <span className="text-zinc-600">// pages/dashboard.tsx</span>
                <div className="mt-2">
                  <span className="text-blue-400">export default async function</span>
                  <span className="text-zinc-300"> DashboardPage()</span>
                </div>
                <div className="text-zinc-300">{"{"}</div>
                <div className="ml-4">
                  <span className="text-blue-400">const</span>
                  <span className="text-zinc-300"> data = </span>
                  <span className="text-blue-400">await</span>
                  <span className="text-zinc-300"> getDashboardData()</span>
                </div>
                <div className="ml-4 text-zinc-300" />
                <div className="ml-4">
                  <span className="text-blue-400">return</span>
                </div>
                <div className="ml-6 text-zinc-300">
                  {"<"}DashboardLayout{">"}
                </div>
                <div className="ml-10 text-zinc-300">
                  {"<"}DashboardStats data={"{data}"} {"/"}{">"}
                </div>
                <div className="ml-6 text-zinc-300">
                  {"<"}/DashboardLayout{">"}
                </div>
                <div className="text-zinc-300">{"}"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Typical AI Constraints */}
        <div className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
            <div className="mb-2 font-mono text-xs text-zinc-500">
              // typical AI constraints
            </div>
            <div className="grid gap-x-8 gap-y-1.5 text-sm text-zinc-500 sm:grid-cols-2 lg:grid-cols-4">
              <span>- Never fetch inside client components</span>
              <span>- Avoid duplicated hooks</span>
              <span>- Prefer feature-based folders</span>
              <span>- Reuse shared UI primitives</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3">
          <div className="text-sm font-medium text-zinc-500">
            Reduce inconsistent AI output
          </div>
          <div className="text-sm font-medium text-zinc-500">
            Keep repo structures predictable
          </div>
          <div className="text-sm font-medium text-zinc-500">
            Scale AI coding across teams
          </div>
        </div>
      </div>
    </>
  );
}
