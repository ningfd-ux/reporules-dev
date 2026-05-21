import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Coding Workflows — RepoRules.dev",
  description:
    "Production-ready AI coding workflows: reusable repository governance systems for Claude Code, Cursor, and AI-assisted engineering teams.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
