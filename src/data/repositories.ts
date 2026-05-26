export interface RepositoryMetadata {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  governanceFocus: string[];
  suggestedWorkflow?: string;
}

export interface WorkflowMetadata {
  id: string;
  title: string;
  description: string;
  stack: string[];
  relatedExamples: string[];
}

// Hardcoded stack affinity map (deterministic, not ML)
export const stackAffinity: Record<string, string[]> = {
  nextjs: ["nextjs-ai-saas", "stripe-billing", "supabase-saas"],
  react: ["nextjs-ai-saas", "ai-startup"],
  prisma: ["nextjs-ai-saas", "stripe-billing", "supabase-saas", "cursor-monorepo"],
  stripe: ["nextjs-ai-saas", "stripe-billing", "supabase-saas"],
  supabase: ["supabase-saas", "supabase-saas-workflow"],
  turborepo: ["cursor-monorepo", "ai-agent-monorepo"],
  ai_agents: ["ai-agent-monorepo", "ai-startup"],
  postgresql: ["nextjs-ai-saas", "supabase-saas", "stripe-billing"],
  zod: ["nextjs-ai-saas", "stripe-billing", "supabase-saas"],
  tailwind: ["nextjs-ai-saas", "ai-startup", "cursor-monorepo"],
  startup: ["ai-startup", "supabase-saas"],
  cicd: ["supabase-saas-workflow", "cursor-monorepo"],
  migration: ["cursor-monorepo", "supabase-saas-workflow"],
};

export const repositoryMetadata: RepositoryMetadata[] = [
  {
    slug: "nextjs-ai-saas",
    title: "Next.js AI SaaS",
    description: "Repository governance for a scalable Next.js SaaS with Stripe billing, Prisma ORM, and server-first architecture.",
    stack: ["nextjs", "prisma", "stripe", "postgresql", "zod", "tailwind"],
    governanceFocus: ["Billing isolation", "Schema migration safety", "AI agent boundaries"],
    suggestedWorkflow: "claude-code-saas",
  },
  {
    slug: "cursor-monorepo",
    title: "Cursor Monorepo",
    description: "Shared repository governance for Turborepo-based monorepos with multi-package AI workflows.",
    stack: ["nextjs", "turborepo", "prisma", "migration", "tailwind"],
    governanceFocus: ["Package boundary enforcement", "Build pipeline consistency", "Migration governance"],
    suggestedWorkflow: "cursor-monorepo",
  },
  {
    slug: "ai-startup",
    title: "AI Startup",
    description: "Lean AI coding standards for fast-moving startup teams with minimal governance overhead.",
    stack: ["nextjs", "react", "startup", "tailwind"],
    governanceFocus: ["Rapid iteration safety", "MVP architecture constraints"],
    suggestedWorkflow: "ai-startup",
  },
  {
    slug: "ai-agent-monorepo",
    title: "AI Agent Monorepo",
    description: "Agent orchestration governance for MCP server registries and shared tool definitions.",
    stack: ["nextjs", "turborepo", "ai_agents"],
    governanceFocus: ["Agent boundary isolation", "MCP server registry rules", "Tool definition consistency"],
    suggestedWorkflow: "cursor-monorepo",
  },
  {
    slug: "stripe-billing",
    title: "Stripe Billing System",
    description: "Billing-specific governance for Stripe-integrated SaaS repositories with webhook idempotency rules.",
    stack: ["nextjs", "prisma", "stripe", "zod", "postgresql"],
    governanceFocus: ["Webhook idempotency", "Billing isolation", "Payment flow safety"],
    suggestedWorkflow: "claude-code-saas",
  },
  {
    slug: "supabase-saas",
    title: "Supabase SaaS",
    description: "Full-stack governance for Supabase-based SaaS with Row-Level Security and Stripe webhooks.",
    stack: ["nextjs", "supabase", "stripe", "prisma", "postgresql", "zod"],
    governanceFocus: ["RLS policy enforcement", "SSR auth boundaries", "Stripe webhook isolation"],
    suggestedWorkflow: "claude-code-saas",
  },
  {
    slug: "supabase-saas-workflow",
    title: "Supabase SaaS Workflow",
    description: "CI/CD pipeline governance for Supabase deployments with database migration automation.",
    stack: ["supabase", "prisma", "postgresql", "migration", "cicd"],
    governanceFocus: ["Database migration safety", "Deploy preview governance", "Rollback procedures"],
    suggestedWorkflow: "ai-startup",
  },
];

export const workflowMetadata: Record<string, WorkflowMetadata> = {
  "ai-startup": {
    id: "ai-startup",
    title: "AI Startup Workflow",
    description: "Lean AI coding standards for fast-moving startup teams.",
    stack: ["nextjs", "react", "startup"],
    relatedExamples: ["ai-startup", "supabase-saas"],
  },
  "claude-code-saas": {
    id: "claude-code-saas",
    title: "Claude Code SaaS Repository System",
    description: "A structured repository workflow for scalable AI-assisted SaaS engineering.",
    stack: ["nextjs", "prisma", "stripe"],
    relatedExamples: ["nextjs-ai-saas", "stripe-billing", "supabase-saas"],
  },
  "cursor-monorepo": {
    id: "cursor-monorepo",
    title: "Cursor Monorepo Workflow",
    description: "Shared AI workflow for Turborepo and multi-package projects.",
    stack: ["nextjs", "turborepo", "react"],
    relatedExamples: ["cursor-monorepo", "ai-agent-monorepo"],
  },
};

// Score repositories by stack overlap against detected stack
export function getRelatedRepositories(
  detectedStack: string[],
  excludeSlug?: string,
  limit: number = 3
): RepositoryMetadata[] {
  const scores = repositoryMetadata
    .filter((r) => r.slug !== excludeSlug)
    .map((repo) => {
      const overlap = repo.stack.filter((s) => detectedStack.includes(s)).length;
      return { repo, score: overlap };
    })
    .sort((a, b) => b.score - a.score);

  const matched = scores.filter((s) => s.score > 0);
  const top = matched.slice(0, limit);

  // Fallback: fill remaining slots with most popular (first items in list)
  if (top.length < limit) {
    const usedSlugs = new Set(top.map((t) => t.repo.slug));
    const fallbacks = repositoryMetadata
      .filter((r) => r.slug !== excludeSlug && !usedSlugs.has(r.slug))
      .slice(0, limit - top.length);
    return [...top.map((t) => t.repo), ...fallbacks];
  }

  return top.map((t) => t.repo);
}

// Score workflows by stack overlap
export function getRelatedWorkflows(
  detectedStack: string[],
  limit: number = 2
): WorkflowMetadata[] {
  const scores = Object.values(workflowMetadata)
    .map((wf) => {
      const overlap = wf.stack.filter((s) => detectedStack.includes(s)).length;
      return { wf, score: overlap };
    })
    .sort((a, b) => b.score - a.score);

  const matched = scores.filter((s) => s.score > 0);
  return matched.slice(0, limit).map((s) => s.wf);
}

// Map flat stack tags from detect-stack format to our affinity keys
export function normalizeStackTags(stackList: string[]): string[] {
  const map: Record<string, string> = {
    "Next.js App Router": "nextjs",
    "Prisma ORM": "prisma",
    "Tailwind CSS": "tailwind",
    "Zod": "zod",
    "PostgreSQL": "postgresql",
    "Stripe": "stripe",
    "Supabase": "supabase",
    "Redis": "redis",
    "React": "react",
    "Express.js": "express",
  };
  return stackList.map((s) => map[s] || s.toLowerCase()).filter(Boolean);
}
