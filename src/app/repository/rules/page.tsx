export default function RepositoryRulesPage() {
  return (
    <main className="min-h-screen bg-[#0d0f14] text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
            Repository File
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">rules.md</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Repository governance rules for scalable AI-assisted engineering systems.
          </p>
          <div className="mt-6 flex gap-5 font-mono text-xs text-zinc-500">
            <span>Updated 2 days ago</span>
            <span>v0.4.2</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Architecture Rules
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-300">
              - preserve feature boundaries<br />
              - avoid duplicated business logic<br />
              - keep validation isolated<br />
              - avoid oversized shared utilities<br />
              - preserve server/client boundaries
            </div>
          </div>
          <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-6">
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Repository Constraints
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-300">
              - avoid large rewrites<br />
              - preserve migration consistency<br />
              - reduce architectural drift<br />
              - reuse validation schemas
            </div>
          </div>
          <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-6">
            <div className="mb-3 font-mono text-xs uppercase tracking-wide text-zinc-500">
              Common Incidents
            </div>
            <div className="font-mono text-sm leading-7 text-zinc-400">
              2026-05-08<br />
              - duplicated auth hooks introduced during billing migration<br /><br />
              2026-05-04<br />
              - analytics module bypassed validation layer
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
