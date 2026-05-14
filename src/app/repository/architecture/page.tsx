import Link from "next/link";

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-[#0d0f14] text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
            Repository File
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">architecture.md</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Repository architecture decisions and system design for scalable AI-assisted development.
          </p>
          <div className="mt-6 flex gap-5 font-mono text-xs text-zinc-500">
            <span>Updated 2 days ago</span>
            <span>v0.4.2</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              System Architecture
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-300">
              - Server-first architecture by default<br />
              - Feature-based folder structure<br />
              - Shared UI primitives in /components/ui<br />
              - Isolated business logic per feature<br />
              - Centralized validation layer
            </div>
          </div>
          <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Data Flow
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-300">
              - Server Components fetch data directly<br />
              - Client Components receive serialized props<br />
              - Server Actions handle mutations<br />
              - Validation happens in shared layer before processing
            </div>
          </div>
          <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Migration Constraints
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-400">
              - Dashboard migration in progress<br />
              - Old billing hooks still active<br />
              - Auth module refactor planned
            </div>
          </div>
          <div className="mt-8">
            <Link href="/docs#architecture" className="font-mono text-sm text-zinc-500 hover:text-zinc-200 transition-colors">
              &larr; Back to Documentation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
