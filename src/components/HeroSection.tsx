"use client";

import Link from "next/link";
import { Copy } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="min-h-[82vh]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-16 lg:grid-cols-2 lg:pt-20">
          {/* LEFT */}
          <div>
            <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-white">
              Production-ready AI workflows
              <br />
              for scalable codebases
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Copy battle-tested repo structures, prompts and rules
              <br />
              to keep AI-generated code clean and maintainable.
            </p>

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

            <p className="mt-6 text-sm text-zinc-600">
              Used for SaaS apps, monorepos and AI-assisted teams
            </p>
          </div>

          {/* RIGHT: Workflow Preview */}
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
            {/* Title bar — GitHub branch style */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2 font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                <span className="ml-2">claude-code-saas/</span>
              </div>
              <div className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-zinc-500">
                main
              </div>
            </div>

            {/* Three columns — compact, real */}
            <div className="grid grid-cols-[1.3fr_1.8fr_2.2fr]">
              {/* Col 1: Repo Tree */}
              <div className="border-r border-zinc-800 p-3 font-mono text-xs leading-relaxed text-zinc-500">
                <div>app/</div>
                <div className="ml-3">(dashboard)/</div>
                <div className="ml-3">(marketing)/</div>
                <div className="ml-3 text-zinc-400">api/</div>
                <div className="mt-1.5">components/</div>
                <div className="ml-3 text-zinc-400">ui/</div>
                <div className="ml-3 text-zinc-400">shared/</div>
                <div className="mt-1.5">features/</div>
                <div className="ml-3 text-zinc-400">auth/</div>
                <div className="ml-3 text-zinc-400">billing/</div>
                <div className="ml-3">dashboard/</div>
                <div className="ml-3 text-zinc-400">settings/</div>
                <div className="mt-1.5">lib/</div>
                <div className="ml-3 text-zinc-400">db/</div>
                <div className="ml-3 text-zinc-400">stripe/</div>
                <div className="ml-3 text-zinc-400">auth/</div>
                <div className="mt-1.5 text-zinc-400">prompts/</div>
                <div className="text-zinc-400">rules/</div>
                <div className="text-zinc-400">tests/</div>
                <div className="mt-1.5">memory.md</div>
                <div className="text-zinc-400">rules.md</div>
                <div className="text-zinc-400">README.md</div>
              </div>

              {/* Col 2: rules.md */}
              <div className="border-r border-zinc-800 p-3 font-mono text-xs leading-relaxed">
                <div className="mb-2 text-zinc-500"># rules.md</div>
                <div className="text-zinc-300"># Server Components First</div>
                <div className="mt-2 text-zinc-500">
                  Always prefer server components
                </div>
                <div className="text-zinc-500">
                  unless interactivity is required.
                </div>
                <div className="mt-2 text-zinc-500">
                  Never fetch directly inside
                </div>
                <div className="text-zinc-500">client components.</div>
                <div className="mt-2 text-zinc-500">
                  Avoid duplicated hooks.
                </div>
                <div className="mt-2 text-zinc-500">
                  Prefer feature-based folders.
                </div>
                <div className="mt-2 text-zinc-500">
                  Reuse shared UI primitives.
                </div>
                <div className="mt-2 text-zinc-500">
                  Keep PRs under 300 LOC.
                </div>
              </div>

              {/* Col 3: generated code */}
              <div className="p-3 font-mono text-xs leading-relaxed">
                <div className="mb-2 text-zinc-600">
                  // pages/dashboard.tsx
                </div>
                <div>
                  <span className="text-blue-400">export default async function</span>
                </div>
                <div>
                  <span className="text-zinc-300">  DashboardPage()</span>
                </div>
                <div className="text-zinc-300">{"{"}</div>
                <div className="ml-3">
                  <span className="text-blue-400">const</span>
                  <span className="text-zinc-300"> session = </span>
                  <span className="text-blue-400">await</span>
                  <span className="text-zinc-300"> getSession()</span>
                </div>
                <div className="ml-3 text-zinc-300" />
                <div className="ml-3">
                  <span className="text-blue-400">if</span>
                  <span className="text-zinc-300"> (</span>
                  <span className="text-red-400">!</span>
                  <span className="text-zinc-300">session)</span>
                </div>
                <div className="ml-3">
                  <span className="text-zinc-300">  redirect(</span>
                  <span className="text-green-400">"/login"</span>
                  <span className="text-zinc-300">)</span>
                </div>
                <div className="ml-3 text-zinc-300" />
                <div className="ml-3">
                  <span className="text-blue-400">const</span>
                  <span className="text-zinc-300"> data = </span>
                  <span className="text-blue-400">await</span>
                </div>
                <div className="ml-3">
                  <span className="text-zinc-300">  getDashboardData(</span>
                </div>
                <div className="ml-6">
                  <span className="text-zinc-300">session.user.id</span>
                </div>
                <div className="ml-3">
                  <span className="text-zinc-300">)</span>
                </div>
                <div className="ml-3 text-zinc-300" />
                <div className="ml-3">
                  <span className="text-blue-400">return</span>
                </div>
                <div className="ml-6 text-zinc-300">
                  {"<"}DashboardLayout{">"}
                </div>
                <div className="ml-9 text-zinc-300">
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

        {/* Typical AI Problems */}
        <div className="mx-auto mt-12 max-w-7xl px-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
            <div className="mb-3 font-mono text-xs text-zinc-500">
              // typical AI coding problems
            </div>
            <div className="grid gap-x-8 gap-y-1.5 font-mono text-sm text-zinc-500 sm:grid-cols-2 lg:grid-cols-5">
              <span>- duplicated hooks</span>
              <span>- mixed client/server logic</span>
              <span>- inconsistent folder structures</span>
              <span>- oversized components</span>
              <span>- scattered utilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3">
          <div className="font-mono text-sm text-zinc-500">
            Reduce inconsistent AI output
          </div>
          <div className="font-mono text-sm text-zinc-500">
            Keep repo structures predictable
          </div>
          <div className="font-mono text-sm text-zinc-500">
            Scale AI coding across teams
          </div>
        </div>
      </div>
    </>
  );
}
