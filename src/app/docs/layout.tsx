import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repository Governance Documentation — RepoRules.dev",
  description:
    "Repository governance documentation: architecture, AI constraints, testing workflow, PR governance, migration notes, and incident logs for scalable AI engineering.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
