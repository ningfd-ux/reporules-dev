import type { ExampleData } from "./nextjs-ai-saas";

export const aiAgentMonorepoExample: ExampleData = {
  slug: "ai-agent-monorepo",
  title: "AI Agent Monorepo",
  description: "Repository governance files generated from a multi-agent AI engineering monorepo.",
  repository: "ai-agent-monorepo",
  generatedFrom: ["31 agent platforms", "19 multi-agent systems", "14 MCP server setups"],
  signals: ["Turborepo structure", "Agent orchestration layer", "MCP server registry", "Shared tool definitions"],
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
  },
};
