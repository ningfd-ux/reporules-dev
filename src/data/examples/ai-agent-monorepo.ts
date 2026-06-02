import type { ExampleData } from "./nextjs-ai-saas";

export const aiAgentMonorepoExample: ExampleData = {
  slug: "ai-agent-monorepo",
  title: "AI Agent Monorepo",
  description: "Repository governance files generated from a multi-agent AI engineering monorepo.",
  repository: "ai-agent-monorepo",
  generatedFrom: ["31 agent platforms", "19 multi-agent systems", "14 MCP server setups"],
  signals: ["Turborepo structure", "Agent orchestration layer", "MCP server registry", "Shared tool definitions"],
  engineeringDecisions: [
    "MCP server registry uses a JSON configuration file (servers.json) instead of dynamic discovery. Reason: deterministic startup order is critical when Server A depends on Tool B exposed by another MCP server. Dynamic discovery caused race conditions where an agent would call a tool before its parent MCP server finished registering.",
    "Agent tool definitions are co-located with their implementation, not in a central registry. Reason: when tools were defined in a single packages/agents/tools.ts file, PR reviews could not tell which tools belonged to which agent. Co-location maps agent ownership directly to tool definitions.",
    "Shared MCP client (packages/mcp-client/) exposes a strict type-safe interface instead of generic invoke(). Reason: generic invoke() allowed agents to call any tool on any server, bypassing governance. Type-safe interfaces enforce that an agent can only call tools explicitly listed in its capability manifest.",
    "Package boundaries are enforced at build time (Turborepo pipeline) not runtime. Reason: runtime boundary enforcement added ~150ms overhead per agent call in a previous iteration. Build-time enforcement catches violations during CI with zero runtime cost.",
  ],
  aiFailureCases: [
    "AI agent attempted to share a single .env across all packages in the monorepo. This caused the database migration package to read the production DATABASE_URL instead of the staging one — because the shared .env was loaded at a higher scope than the package-specific override. Fix: each package must have its own .env.local or use Turborepo's environment variable scoping.",
    "Claude Code generated an MCP server that imported utility functions from an adjacent package's internals (not the public API). When the package was refactored, the MCP server broke silently — no build error because TypeScript allowed deep imports. Fix: enforce exports field in package.json to prevent deep imports; add ESLint rule import/no-internal-modules.",
    "Cursor agent suggested registering all MCP tools as a single 'super-agent' capability. This broke the governance model where Customer Support Agent should only have read tools while Admin Agent has write tools. Fix: capability manifests are per-agent, not global. No agent should have access to tools it doesn't need.",
    "AI model duplicated 3 Zod validation schemas across 2 agent packages instead of importing from the shared types package. These copies diverged over 2 weeks — one accepted 'pending' as a status value, the other required 'in_progress'. An agent call between packages failed silently. Fix: enforce a single source of truth for shared types with import lint rules.",
  ],
  files: {
    rules: `# Repository Rules

- preserve agent isolation boundaries
- avoid shared agent state
- keep tool definitions with their agent
- avoid bloated orchestrator logic
- maintain clear MCP server contracts

## Repository Constraints

- avoid breaking agent contracts during refactors
- preserve orchestration flow consistency
- reduce duplicated tool schemas between agents
- reuse MCP server connection pools

## Common Incidents

2026-05-14
- shared agent state caused cross-agent hallucination cascade in production

2026-05-10
- MCP server registry updated without bumping tool contract versions — broke 2 downstream agents`,
    memory: `# Repository Memory

- agent isolation introduced in v0.5.0 after cascade incident
- MCP server registry migrated to typed contracts in Q2
- orchestrator still handles both v1 and v2 agent interfaces
- tool definitions duplicated across 3 agents (known tech debt)
- pnpm workspace with 8 agent packages, 4 shared packages
- technical debt: agent health check logic is duplicated per package`,
    architecture: `# Architecture

apps/
  orchestrator/
  dashboard/
agents/
  code-reviewer/
  docs-writer/
  test-generator/
  security-scanner/
packages/
  mcp-client/
  tool-registry/
  agent-sdk/
  shared-schemas/
pnpm-workspace.yaml
turbo.json

## System Architecture

- Agent-isolated monorepo with clear orchestration boundaries
- MCP protocol as the universal agent communication layer
- Shared tool-definition schemas for cross-agent consistency
- Orchestrator routes tasks via typed contracts, not shared state
- Each agent owns its MCP server definitions and tool implementations

## Migration Notes

- orchestrator dual-interface shim in place (v1 + v2)
- tool-registry migration to typed schemas in progress
- security-scanner agent still uses legacy MCP client`,
    cursorRules: `# Cursor Rules

Keep agent implementations independent.
Avoid shared state between agents.
Reuse MCP connection pools, not agent logic.
Preserve orchestrator contract backward-compatibility.
Keep PRs under 300 LOC per agent package.
Document tool schema changes in the registry first.`,
    claude: `# Project Memory for Claude Code

Prioritize agent isolation and contract stability.
Avoid cross-agent logic sharing.
Prefer typed MCP schemas over raw JSON.
Keep orchestrator backward-compatible during migration.
Document agent contracts before modifying them.

## Legacy Notes

- orchestrator has v1/v2 dual shim
- tool-registry migration to typed schemas pending
- security-scanner agent on legacy MCP client
- agent health checks duplicated across all 8 agents`,
    testingWorkflow: `# Testing Workflow

1. validate agent isolation (no shared state leaks)
2. run MCP contract compatibility tests
3. verify orchestrator routing for v1 + v2 agents
4. execute cross-agent integration tests in isolated env
5. confirm tool schema registry consistency

## Common Failures

- cross-agent test pollution from shared MCP connection pools
- flaky orchestration tests due to timed agent responses
- outdated tool schema fixtures in security-scanner package`,
    migrationNotes: `# Migration Notes

## Active Migration

- orchestrator v2 migration (dual shim active)
- tool-registry typed schema upgrade
- agent health check deduplication

## Legacy Constraints

- security-scanner still on legacy MCP client
- cross-agent logging consolidated in v0.3
- shared agent-definition packages need versioning`,
  },
};
