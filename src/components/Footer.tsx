import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Generator", href: "/generator" },
  { label: "Compare", href: "/compare/cursor-vs-windsurf" },
  { label: "Docs", href: "/docs/what-are-ai-coding-standards" },
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  {
    label: "GitHub",
    href: "https://github.com",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-foreground"
            >
              RepoRules.dev
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Repository-aware AI coding standards.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground/60 md:text-left">
          &copy; {new Date().getFullYear()} RepoRules.dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
