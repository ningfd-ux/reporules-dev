"use client";

import Link from "next/link";

const NAV_ITEMS = [
  { label: "Workflows", href: "/workflows" },
  { label: "Rules", href: "/rules" },
  { label: "Patterns", href: "/patterns" },
  { label: "Docs", href: "/docs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-[#2a2d35] bg-[#0f1115]/80 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-mono text-sm text-blue-400">&gt;_</span>
          <span className="text-sm font-semibold tracking-tight text-zinc-100">
            reporules.dev
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-blue-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/docs"
          className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-all hover:bg-white"
        >
          Read Documentation
        </Link>
      </div>
    </header>
  );
}
