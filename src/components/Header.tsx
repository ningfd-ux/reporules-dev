"use client";

import Link from "next/link";

const NAV_ITEMS = [
  { label: "Workflows", href: "/workflows/claude-code-saas" },
  { label: "Standards", href: "/generator" },
  { label: "Examples", href: "/#examples" },
  { label: "Compare", href: "/compare/cursor-vs-windsurf" },
  { label: "Docs", href: "/docs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-[#2a2d35] bg-[#0f1115]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-medium text-zinc-300">
          reporules.dev
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
          href="/workflows/claude-code-saas"
          className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-all hover:bg-white"
        >
          Browse Workflows
        </Link>
      </div>
    </header>
  );
}
