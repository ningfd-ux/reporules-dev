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
            {/* Tag */}
            <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
              AI Workflow Standards
            </span>

            {/* H1 */}
            <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
              Production-ready AI workflows
              <br />
              for scalable codebases
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Copy battle-tested repo structures, prompts and rules
              <br />
              to keep AI-generated code clean and maintainable.
            </p>

            {/* CTA */}
            <div className="mt-8 flex gap-4">
              <Link
                href="/workflows/claude-code-saas"
                className="rounded-xl bg-zinc-100 px-6 py-3 font-medium text-zinc-900 transition-all hover:bg-white"
              >
                Browse Workflows
              </Link>
              <button className="rounded-xl border border-zinc-700 bg-transparent px-6 py-3 font-medium text-zinc-300 transition-colors hover:bg-zinc-900">
                <Copy className="mr-2 inline-block h-4 w-4" />
                Copy Rules
              </button>
            </div>

            {/* Trust */}
            <p className="mt-4 text-sm text-zinc-500">
              Used in scalable AI-assisted codebases
            </p>
          </div>

          {/* RIGHT: Workflow Preview */}
          <div className="overflow-hidden rounded-2xl border border-[#2a2d35] bg-[#181b21] shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-[#2a2d35] bg-[#1f232b] px-4 py-2 font-mono text-xs text-zinc-500">
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

            {/* Three columns */}
            <div className="grid grid-cols-[1.2fr_1.8fr_2.2fr]">
              {/* Col 1: Repo Tree */}
              <div className="border-r border-[#2a2d35] bg-[#14161b] p-3 font-mono text-xs leading-6 text-zinc-400">
                <div>app/</div>
                <div className="ml-3">(dashboard)/</div>
                <div className="ml-3">(marketing)/</div>
                <div className="ml-3 text-zinc-500">api/</div>
                <div className="mt-1">components/</div>
                <div className="ml-3 text-zinc-500">ui/</div>
                <div className="ml-3 text-zinc-500">shared/</div>
                <div className="mt-1">features/</div>
                <div className="ml-3 text-zinc-500">auth/</div>
                <div className="ml-3 text-zinc-500">billing/</div>
                <div className="ml-3">dashboard/</div>
                <div className="ml-3 text-zinc-500">settings/</div>
                <div className="ml-3 text-zinc-500">analytics/</div>
                <div className="ml-3 text-zinc-500">notifications/</div>
                <div className="mt-1">lib/</div>
                <div className="ml-3 text-zinc-500">db/</div>
                <div className="ml-3 text-zinc-500">stripe/</div>
                <div className="ml-3 text-zinc-500">auth/</div>
                <div className="ml-3 text-zinc-500">validators/</div>
                <div className="ml-3 text-zinc-500">utils/</div>
                <div className="mt-1 text-zinc-500">prompts/</div>
                <div className="text-zinc-500">rules/</div>
                <div className="text-zinc-500">tests/</div>
                <div className="mt-1">README.md</div>
                <div className="text-zinc-500">.env.example</div>
                <div className="text-zinc-500">memory.md</div>
                <div className="text-zinc-500">rules.md</div>
              </div>

              {/* Col 2: rules.md */}
              <div className="border-r border-[#2a2d35] p-3 font-mono text-sm leading-7">
                <div className="mb-2 text-zinc-500"># rules.md</div>
                <div className="text-zinc-300">
                  # Server Components First
                </div>
                <div className="mt-1 text-zinc-400">
                  Always prefer server components
                </div>
                <div className="text-zinc-400">
                  unless interactivity is required.
                </div>
                <div className="mt-1 text-zinc-400">
                  Never fetch directly inside
                </div>
                <div className="text-zinc-400">client components.</div>
                <div className="mt-1 text-zinc-400">
                  Avoid duplicated hooks.
                </div>
                <div className="mt-1 text-zinc-400">
                  Prefer feature-based folders.
                </div>
                <div className="mt-1 text-zinc-400">
                  Reuse shared UI primitives.
                </div>
                <div className="mt-1 text-zinc-400">
                  Keep PRs under 300 LOC.
                </div>
                <div className="mt-3 text-zinc-300">
                  ## PR Constraints
                </div>
                <div className="mt-1 text-zinc-400">
                  - avoid mixed concerns
                </div>
                <div className="text-zinc-400">
                  - avoid oversized components
                </div>
                <div className="text-zinc-400">
                  - avoid introducing new patterns
                </div>
                <div className="mt-3 text-zinc-300">## Performance</div>
                <div className="mt-1 text-zinc-400">
                  - lazy load heavy charts
                </div>
                <div className="text-zinc-400">
                  - avoid client-side waterfalls
                </div>
                <div className="text-zinc-400">- prefer streaming</div>
              </div>

              {/* Col 3: Generated code */}
              <div className="bg-[#14161b] p-3 font-mono text-sm leading-relaxed">
                <div className="mb-2 text-zinc-500">
                  // pages/billing.tsx
                </div>
                <div>
                  <span className="text-blue-400">
                    export default async function
                  </span>
                </div>
                <div>
                  <span className="text-zinc-300">  BillingPage()</span>
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
                  <span className="text-blue-400">{"{"}</span>
                </div>
                <div className="ml-6">
                  <span className="text-zinc-300">redirect(</span>
                  <span className="text-green-400">"/login"</span>
                  <span className="text-zinc-300">)</span>
                </div>
                <div className="ml-3">
                  <span className="text-blue-400">{"}"}</span>
                </div>
                <div className="ml-3 text-zinc-300" />
                <div className="ml-3">
                  <span className="text-blue-400">const</span>
                  <span className="text-zinc-300"> subscription =</span>
                </div>
                <div className="ml-3">
                  <span className="text-blue-400">  await</span>
                  <span className="text-zinc-300"> getActiveSubscription(</span>
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
                  {"<"}BillingDashboard
                </div>
                <div className="ml-9 text-zinc-300">
                  subscription={"{subscription}"}
                </div>
                <div className="ml-6 text-zinc-300">{"/"}{">"}</div>
                <div className="text-zinc-300">{"}"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Common AI Repo Problems */}
        <div className="mx-auto mt-10 max-w-7xl px-6">
          <div className="rounded-2xl border border-[#2a2d35] bg-[#16181d] p-6">
            <h3 className="mb-4 text-sm font-semibold text-zinc-200">
              Common AI Repo Problems
            </h3>
            <div className="font-mono text-sm leading-7 text-zinc-400">
              <div>- duplicated hooks across features</div>
              <div>- inconsistent naming conventions</div>
              <div>- mixed client/server logic</div>
              <div>- oversized utility files</div>
              <div>- scattered validation schemas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <div className="border-t border-[#2a2d35]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3">
          <div className="font-mono text-sm text-zinc-400">
            Reduce inconsistent AI output
          </div>
          <div className="font-mono text-sm text-zinc-400">
            Keep repo structures predictable
          </div>
          <div className="font-mono text-sm text-zinc-400">
            Scale AI coding across teams
          </div>
        </div>
      </div>
    </>
  );
}
