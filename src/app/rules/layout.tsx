import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Repository Standards — RepoRules.dev",
  description:
    "AI repository standards for long-term maintainability: architecture rules, constraints, naming conventions, testing workflow, PR governance, and migration notes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
