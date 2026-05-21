import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repository Architecture Patterns — RepoRules.dev",
  description:
    "Repository architecture patterns: feature-based structure, server components, validation layer, data fetching, shared UI, and monorepo patterns for AI-assisted development.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
