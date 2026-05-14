export default function RepositoryMemoryPage() {
  return (
    <main className="min-h-screen bg-[#0d0f14] text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
            Repository File
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">memory.md</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Shared repository context and engineering memory used across AI workflows.
          </p>
        </div>
        <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
          <div className="font-mono text-sm leading-7 text-zinc-400">
            - billing system migrated in Q2<br />
            - old dashboard hooks still pending cleanup<br />
            - analytics modules still use legacy fetching<br />
            - shared validators standardized across repositories<br />
            - server actions introduced in v0.4.0
          </div>
        </div>
      </div>
    </main>
  );
}
