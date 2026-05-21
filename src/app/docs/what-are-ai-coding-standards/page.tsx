import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Are AI Coding Standards? — RepoRules.dev",
  description:
    "AI coding standards explained: structured guidelines that tell AI tools how to generate repository-aware, maintainable code.",
};

const SIDEBAR_LINK = "block text-sm text-zinc-400 transition-colors hover:text-blue-300";

const SECTIONS = [
  { label: "Getting Started", href: "/docs/what-are-ai-coding-standards" },
  { label: "Workflows", href: "/workflows" },
  { label: "Rules", href: "/rules" },
  { label: "Constraints", href: "/docs/what-are-ai-coding-standards" },
  { label: "Testing", href: "/docs/why-ai-generated-code-breaks" },
  { label: "PR Workflow", href: "/docs/why-ai-generated-code-breaks" },
  { label: "Migration Notes", href: "/docs/why-ai-generated-code-breaks" },
];

export default function WhatAreAICodingStandards() {
  return (
    <div className="mx-auto flex max-w-7xl gap-12 px-6 py-20">
      <aside className="hidden w-56 shrink-0 lg:block">
        <nav className="sticky top-24 space-y-3">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">Docs</p>
          {SECTIONS.map((s) => (
            <Link key={s.label} href={s.href} className={SIDEBAR_LINK}>
              {s.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="min-w-0 flex-1 space-y-12">
        <div>
          <Link href="/docs" className="mb-8 inline-block font-mono text-sm text-zinc-500 hover:text-blue-300">
            &larr; Back to Docs
          </Link>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">
            What Are AI Coding Standards?
          </h1>
          <p className="mt-4 font-mono text-sm leading-relaxed text-zinc-400">
            AI coding standards are structured guidelines that tell AI coding tools how to generate code
            for your specific repository. They bridge the gap between an AI model's general knowledge and
            your project's specific requirements.
          </p>
        </div>

        <div className="space-y-8 font-mono text-sm leading-relaxed text-zinc-400">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-zinc-100">Why standards matter</h2>
            <div className="space-y-3">
              <p>Without explicit guidance, AI tools generate code based on general patterns. This leads to:</p>
              <ul className="space-y-1">
                {[
                  "Inconsistent code style across files",
                  "Wrong framework patterns (Pages Router in an App Router project)",
                  "Missing error handling specific to your stack",
                  "Security anti-patterns your project avoids",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-zinc-100">Linters vs AI Standards</h2>
            <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2a2d35]">
                    <th className="px-4 py-3 text-left font-medium text-zinc-100">Aspect</th>
                    <th className="px-4 py-3 text-left font-medium text-zinc-100">Linter</th>
                    <th className="px-4 py-3 text-left font-medium text-zinc-100">AI Standards</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  {[["Formatting","Enforces","Not needed"],["Syntax errors","Catches","Prevents"],["Architecture","Limited","Full guidance"],["Framework patterns","Not applicable","Specific rules"],["Data flow","Not applicable","Detailed"],["Security","Basic","Context-aware"]].map(([a,l,s]) => (
                    <tr key={a} className="border-b border-[#2a2d35] last:border-0">
                      <td className="px-4 py-3">{a}</td>
                      <td className="px-4 py-3">{l}</td>
                      <td className="px-4 py-3">{s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-zinc-100">Example: Before and after</h2>
            <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-4">
              <div className="text-xs text-zinc-500 mb-2">// without standards</div>
              <pre className="font-mono text-sm text-zinc-400">{"export default function Page() {\n  const [data, setData] = useState(null)\n  useEffect(() => { fetch('/api/data').then(...) }, [])\n  return <div>{data?.name}</div>\n}"}</pre>
            </div>
            <div className="mt-4 rounded-xl border border-[#2a2d35] bg-[#16181d] p-4">
              <div className="text-xs text-zinc-500 mb-2">// with standards (server-first)</div>
              <pre className="font-mono text-sm text-zinc-400">{"export default async function Page() {\n  const data = await getData()\n  return <div>{data.name}</div>\n}"}</pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
