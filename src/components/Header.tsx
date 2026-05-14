"use client";

import Link from "next/link";

const NAV_ITEMS = [
  { label: "Workflows", href: "/generator" },
  { label: "Rules", href: "/generator" },
  { label: "Examples", href: "/#examples" },
  { label: "Compare", href: "/compare/cursor-vs-windsurf" },
  { label: "Docs", href: "/docs/what-are-ai-coding-standards" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-zinc-800 bg-black">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-sm font-medium text-zinc-300">
          reporules.dev
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/generator"
          className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
        >
          Browse Workflows
        </Link>
      </div>
    </header>
  );
}
