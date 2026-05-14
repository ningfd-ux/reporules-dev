"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Generator", href: "/generator" },
  { label: "Compare", href: "/compare/cursor-vs-windsurf" },
  { label: "Docs", href: "/docs/what-are-ai-coding-standards" },
  { label: "GitHub", href: "https://github.com", external: true },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          RepoRules.dev
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTA */}
        <Link
          href="/generator"
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-primary text-primary-foreground text-sm font-medium whitespace-nowrap h-9 gap-1.5 px-4 transition-all hover:bg-primary/80 select-none"
        >
          Generate Standards
        </Link>
      </div>
    </header>
  );
}
