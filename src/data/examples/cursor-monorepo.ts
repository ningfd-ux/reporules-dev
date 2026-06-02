import type { ExampleData } from "./nextjs-ai-saas";

export const cursorMonorepoExample: ExampleData = {
  slug: "cursor-monorepo",
  title: "Cursor Monorepo",
  description: "Repository governance files generated from a scalable monorepo engineering system.",
  repository: "cursor-monorepo",
  generatedFrom: ["37 monorepo systems", "22 AI coding workflows", "14 package architectures"],
  signals: ["Turborepo structure", "Shared validation layer", "Cursor AI workflows", "Migration governance"],
  engineeringDecisions: [
    "Using Turborepo pipeline scoping instead of manual package build ordering. Reason: manual ordering required updating a build script every time a new package was added. Turborepo's dependency graph automatically infers build order from package.json workspace references. This eliminated the 'package X not built before package Y' class of CI failures.",
    "Shared ESLint config as a package instead of per-package duplicate configs. Reason: when ESLint rules were copied across 5 packages, one team updated their rules for the new React 19 JSX transform while others didn't. The shared @repo/eslint-config package ensures consistent rule enforcement across all packages.",
    "Build artifacts ignored at git level to prevent CI cache poisoning. Reason: a developer committed dist/ output from their local machine (different Node version). CI picked up the stale artifacts instead of rebuilding, causing a production deploy with incorrect module resolution. .gitignore with dist/ in the root prevented recurrence.",
  ],
  aiFailureCases: [
    "AI attempted to flatten all Turborepo pipeline tasks into a single script, losing parallel build benefits. The AI model saw the turbo.json pipeline definition and 'simplified' it into a sequential npm run script. This increased CI build time from 2 minutes to 11 minutes. Fix: never let AI restructure turbo.json. Pipeline parallelization is intentional.",
    "Cursor agent duplicated .eslintrc across 5 packages instead of importing from @repo/eslint-config. The agent was asked to 'add React hooks lint rules' and independently modified each package's ESLint config. When the shared config was later updated, the 5 copies were out of sync. Fix: set root ESLint config with overrides and ignore per-package configs.",
  ],
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
