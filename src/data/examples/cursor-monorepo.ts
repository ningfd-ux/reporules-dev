import type { ExampleData } from "./nextjs-ai-saas";

export const cursorMonorepoExample: ExampleData = {
  slug: "cursor-monorepo",
  title: "Cursor Monorepo",
  description: "Repository governance files generated from a scalable monorepo engineering system.",
  repository: "cursor-monorepo",
  generatedFrom: ["37 monorepo systems", "22 AI coding workflows", "14 package architectures"],
  signals: ["Turborepo structure", "Shared validation layer", "Cursor AI workflows", "Migration governance"],
  files: {
    rules: `# Repository Rules

- preserve package boundaries
- avoid circular imports
- keep shared packages isolated
- avoid oversized shared utilities
- maintain dependency direction

## Repository Constraints

- avoid breaking shared validators
- preserve workspace consistency
- reduce architecture drift between packages
- reuse validation schemas across apps

## Common Incidents

2026-05-06
- shared validator migration broke analytics package

2026-05-01
- duplicated hooks introduced during billing refactor`,
    memory: `# Repository Memory

- turborepo pipeline optimized in v0.4.0
- shared ui package migrated to new patterns
- analytics service still uses legacy hooks
- pnpm workspace standardized across all packages
- technical debt: duplicated build configurations`,
    architecture: `# Architecture

apps/
  web/
  admin/
packages/
  ui/
  config/
  shared/
  validators/
pnpm-workspace.yaml
turbo.json

## System Architecture

- Package-based monorepo with clear boundaries
- Shared validation layer across all apps
- Independent deployability per package
- Centralized build pipeline via Turborepo

## Migration Notes

- old analytics hooks pending cleanup
- billing package refactor in progress
- dashboard migration planned for Q3`,
    cursorRules: `# Cursor Rules

Preserve package isolation.
Avoid importing across package boundaries.
Reuse shared validation schemas.
Keep PRs under 300 LOC per package.
Document breaking changes before refactoring.`,
    claude: `# Project Memory for Claude Code

Prioritize package boundary consistency.
Avoid duplicated business logic across packages.
Prefer shared primitives over copy-paste.
Keep workspace dependencies explicit.
Document legacy patterns before migration.

## Legacy Notes

- analytics package still uses old patterns
- billing migration partially completed
- shared validators need standardization`,
    testingWorkflow: `# Testing Workflow

1. validate package boundaries
2. run per-package unit tests
3. verify cross-package integration
4. execute e2e tests on affected apps
5. confirm build pipeline consistency

## Common Failures

- cross-package test pollution
- oversized integration test suites
- flaky e2e tests due to shared state`,
    migrationNotes: `# Migration Notes

## Active Migration

- dashboard package refactor
- shared validator standardization
- build pipeline optimization

## Legacy Constraints

- analytics package still uses old patterns
- billing migration partially completed
- shared validators need standardization`,
  },
};
