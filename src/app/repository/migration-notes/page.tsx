export default function MigrationNotesPage() {
  return (
    <main className="min-h-screen bg-[#0d0f14] text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
            Repository File
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">migration-notes.md</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Repository migration progress and legacy architecture tracking.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Active Migration
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-400">
              - dashboard validation migration<br />
              - shared billing utilities refactor<br />
              - analytics query standardization
            </div>
          </div>
          <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-6">
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Legacy Constraints
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-400">
              - old auth hooks still active<br />
              - duplicated dashboard services<br />
              - inconsistent validator naming
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
