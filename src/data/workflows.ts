export interface WorkflowData {
  id: string;
  title: string;
  description: string;
}

export const allWorkflows: WorkflowData[] = [
  {
    id: "ai-startup",
    title: "AI Startup Workflow",
    description: "Lean AI coding standards for fast-moving startup teams.",
  },
  {
    id: "claude-code-saas",
    title: "Claude Code SaaS Repository System",
    description: "A structured repository workflow designed for scalable AI-assisted SaaS engineering.",
  },
  {
    id: "cursor-monorepo",
    title: "Cursor Monorepo Workflow",
    description: "Shared AI workflow for Turborepo and multi-package projects.",
  },
];
