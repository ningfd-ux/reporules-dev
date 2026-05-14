import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-base font-semibold tracking-tight text-zinc-300">
              reporules.dev
            </Link>
            <p className="mt-1 text-sm text-zinc-600">
              AI workflows for cleaner codebases.
            </p>
          </div>

          {/* Workflows */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Workflows
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/workflows/claude-code-saas"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Claude Code SaaS
              </Link>
              <span className="text-sm text-zinc-700">Cursor Monorepo (coming soon)</span>
              <span className="text-sm text-zinc-700">AI Startup (coming soon)</span>
            </nav>
          </div>

          {/* Compare */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Compare
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/compare/cursor-vs-windsurf"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Cursor vs Windsurf
              </Link>
              <Link
                href="/compare/cursor-vs-claude-code"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Cursor vs Claude Code
              </Link>
              <Link
                href="/compare/cursor-vs-copilot"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Cursor vs Copilot
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
              Company
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/docs"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Docs
              </Link>
              <Link
                href="/about"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Privacy
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-700">
          &copy; {new Date().getFullYear()} reporules.dev
        </div>
      </div>
    </footer>
  );
}
