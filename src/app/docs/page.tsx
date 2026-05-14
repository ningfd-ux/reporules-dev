import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Cpu, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Docs — RepoRules.dev",
  description:
    "Learn about AI coding standards, repository-aware generation, and how to keep AI-generated code maintainable.",
};

const DOCS = [
  {
    title: "What Are AI Coding Standards?",
    description:
      "Learn how AI coding standards help AI agents generate consistent, maintainable code.",
    href: "/docs/what-are-ai-coding-standards",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Repository-Aware Generation",
    description:
      "How we analyze your dependencies to generate context-specific guidelines.",
    href: "/docs/repository-aware-generation",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Why AI-Generated Code Breaks",
    description:
      "Common failure modes in AI-generated code and how standards prevent them.",
    href: "/docs/why-ai-generated-code-breaks",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Docs
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Learn about AI coding standards and how RepoRules helps you generate
        repository-aware guidelines for your AI tools.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DOCS.map((doc) => (
          <Link
            key={doc.title}
            href={doc.href}
            className="group rounded-xl border border-border/40 bg-card p-6 transition-colors hover:border-border/60"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {doc.icon}
            </div>
            <h2 className="mb-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
              {doc.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {doc.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
