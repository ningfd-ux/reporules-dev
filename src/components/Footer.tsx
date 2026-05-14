import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2d35] bg-[#0c0e12] pb-16 pt-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-3">
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
            <span className="text-sm text-zinc-600">
              AI Startup Workflow
            </span>
          </nav>
        </div>

        {/* Resources */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Resources
          </p>
          <nav className="flex flex-col gap-2.5">
            <span className="text-sm text-zinc-400">rules.md</span>
            <span className="text-sm text-zinc-400">memory.md</span>
            <span className="text-sm text-zinc-400">prompts</span>
            <span className="text-sm text-zinc-400">repo standards</span>
          </nav>
        </div>

        {/* Docs */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Docs
          </p>
          <nav className="flex flex-col gap-2.5">
            <Link
              href="/docs/repository-aware-generation"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Architecture
            </Link>
            <Link
              href="/docs/what-are-ai-coding-standards"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Constraints
            </Link>
            <Link
              href="/docs/what-are-ai-coding-standards"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              Testing Workflow
            </Link>
            <Link
              href="/docs/what-are-ai-coding-standards"
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              PR Workflow
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-[#2a2d35] px-6 pt-6">
        <p className="text-xs text-zinc-500">
          Built for Cursor, Claude Code and AI-assisted development.
        </p>
      </div>
    </footer>
  );
}
