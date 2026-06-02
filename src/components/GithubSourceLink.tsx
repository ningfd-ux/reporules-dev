"use client";

interface GithubSourceLinkProps {
  href: string;
  slug: string;
  children: React.ReactNode;
  className?: string;
}

export default function GithubSourceLink({
  href,
  slug,
  children,
  className,
}: GithubSourceLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "github_click", { example_slug: slug });
        }
      }}
      className={className}
    >
      {children}
    </a>
  );
}
