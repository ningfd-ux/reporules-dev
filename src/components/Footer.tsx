import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2d35] bg-[#0c0e12] pb-16 pt-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">

        {/* Product */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">Product</p>
          <nav className="flex flex-col gap-2.5">
            <Link href="/generator" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">Generator</Link>
            <Link href="/examples" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">Examples</Link>
            <Link href="/workflows" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">Workflows</Link>
            <Link href="/docs" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">Docs</Link>
          </nav>
        </div>

        {/* Resources */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">Resources</p>
          <nav className="flex flex-col gap-2.5">
            <Link href="/rules" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">Rules</Link>
            <Link href="/patterns" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">Patterns</Link>
            <Link href="/compare" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">Compare</Link>
          </nav>
        </div>

        {/* Standards */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">Standards</p>
          <nav className="flex flex-col gap-2.5">
            <a href="https://aicodingstandards.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">AI Coding Standards</a>
            <a href="https://aicodingstandards.com/standards/react" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">React Standards</a>
            <a href="https://aicodingstandards.com/standards/typescript" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">TypeScript Standards</a>
          </nav>
        </div>

        {/* Company */}
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">Company</p>
          <nav className="flex flex-col gap-2.5">
            <Link href="/about" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">About</Link>
            <Link href="/privacy" className="text-sm text-zinc-400 transition-colors hover:text-blue-300">Privacy</Link>
          </nav>
        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#2a2d35] px-6 pt-6">
        <p className="text-xs text-zinc-500">
          Structured repository governance for scalable AI-assisted engineering systems.
        </p>
      </div>
    </footer>
  );
}
