import Link from "next/link";
import { allExamples } from "@/data/examples";

const CARD = "rounded-xl border border-[#2a2d35] bg-[#16181d] p-6 transition-colors hover:border-zinc-600";

export default function ExamplesPage() {
  return (
    <main className="min-h-screen bg-[#0d0f14] text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
            Generated Examples
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">Real generation outputs</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Repository governance files generated from real AI-assisted engineering systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allExamples.map((ex) => (
            <Link key={ex.slug} href={`/examples/${ex.slug}`} className={CARD}>
              <div className="mb-3 font-mono text-xs text-zinc-500">
                Generated using RepoRules Generator
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-100">{ex.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{ex.description}</p>
              <div className="mt-5 space-y-2 text-sm text-zinc-300">
                {ex.signals.map((s) => (
                  <div key={s}>✓ {s}</div>
                ))}
              </div>
              <div className="mt-6 font-mono text-xs text-zinc-500">
                6 files generated
              </div>
              <div className="mt-4">
                <span className="font-mono text-sm text-zinc-400 transition-colors hover:text-zinc-200">
                  View output &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
