import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2d35] bg-[#0c0e12] pb-16 pt-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Repository */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Repository
          </p>
          <nav className="flex flex-col gap-2.5">
            <span className="text-sm text-zinc-400">rules.md</span>
            <span className="text-sm text-zinc-400">memory.md</span>
            <span className="text-sm text-zinc-400">migration-notes.md</span>
            <span className="text-sm text-zinc-400">architecture.md</span>
          </nav>
        </div>

        {/* Workflows */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Workflows
          </p>
          <nav className="flex flex-col gap-2.5">
            <Link
              href="/workflows/claude-code-saas"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Claude Code SaaS
            </Link>
            <span className="text-sm text-zinc-600">Cursor Monorepo</span>
            <span className="text-sm text-zinc-600">AI Startup</span>
          </nav>
        </div>

        {/* Standards */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Standards
          </p>
          <nav className="flex flex-col gap-2.5">
            <Link
              href="/docs#pr-workflow"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              PR Workflow
            </Link>
            <Link
              href="/docs#testing-workflow"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Testing
            </Link>
            <Link
              href="/docs#ai-constraints"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Validation
            </Link>
            <Link
              href="/docs#security"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Security
            </Link>
          </nav>
        </div>

        {/* Docs */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Docs
          </p>
          <nav className="flex flex-col gap-2.5">
            <Link
              href="/docs#architecture"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Architecture
            </Link>
            <Link
              href="/docs#ai-constraints"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Constraints
            </Link>
            <Link
              href="/docs#testing-workflow"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Testing Workflow
            </Link>
            <Link
              href="/docs#pr-workflow"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              PR Workflow
            </Link>
            <Link
              href="/docs#migration-notes"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Migration Notes
            </Link>
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#2a2d35] px-6 pt-6">
        <p className="text-xs text-zinc-500">
          Structured repository governance for scalable AI-assisted engineering
          systems.
        </p>
      </div>
    </footer>
  );
}
