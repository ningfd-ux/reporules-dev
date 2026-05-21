import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Repository Governance Generator — RepoRules.dev",
  description:
    "Generate repository governance files for AI coding systems. Paste your package.json and get rules.md, memory.md, architecture constraints, and AI workflow standards.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
