import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      {/* SECTION 1: Hero + Results + AI Constraints */}
      <HeroSection />

      {/* SECTION 2: Featured Workflow */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Featured Workflows
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-500">
            Copy battle-tested AI workflows for your next project.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/workflows/claude-code-saas"
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Featured Workflow
              </span>
              <span className="ml-2 rounded border border-zinc-700 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                Production-ready setup
              </span>
              <h3 className="mt-3 text-base font-semibold text-white group-hover:text-zinc-200">
                Claude Code SaaS Workflow
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Scalable Next.js architecture for long-term AI-assisted
                development.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "Cursor", "Claude Code", "Supabase"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded border border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono text-[11px] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <div className="mt-4 border-t border-zinc-800 pt-4">
                <p className="text-xs font-medium text-zinc-500">Includes:</p>
                <div className="mt-2 space-y-1 text-sm text-zinc-500">
                  {["rules.md", "memory.md", "prompts", "testing workflow", "repo structure"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-green-500">&check;</span>
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300">
                  View Full Workflow &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
