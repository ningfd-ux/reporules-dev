# TASKS.md — 2026-05-21 SEO: Meta Descriptions for All Pages

## Problem
Google Search Console shows reporules.dev has 27 discovered pages but only 1 indexed. Pages lack meta descriptions which affects Google's indexing decisions.

## Goal
Add unique, descriptive `<meta name="description">` tags to every page on reporules.dev.

## Pages to update
All pages from the sitemap get unique meta descriptions:

| URL | Focus |
|-----|-------|
| / (homepage) | "AI Repository Governance" positioning |
| /about | What RepoRules is |
| /compare/cursor-vs-claude-code | Comparison |
| /compare/cursor-vs-copilot | Comparison |
| /compare/cursor-vs-windsurf | Comparison |
| /docs | Intro to repository governance |
| /docs/repository-aware-generation | How it works |
| /docs/what-are-ai-coding-standards | Standards explanation |
| /docs/why-ai-generated-code-breaks | Problem analysis |
| /examples | Examples overview |
| /examples/ai-agent-monorepo | Specific example |
| /examples/ai-startup | Specific example |
| /examples/cursor-monorepo | Specific example |
| /examples/nextjs-ai-saas | Specific example |
| /examples/stripe-billing | Specific example |
| /generator | Generator tool |
| /patterns | Patterns library |
| /privacy | Privacy policy |
| /rules | Rules library |
| /workflows | Workflows overview |
| /workflows/ai-startup | Specific workflow |
| /workflows/claude-code-saas | Specific workflow |
| /workflows/cursor-monorepo | Specific workflow |

## Implementation

### For Next.js App Router
1. Add meta descriptions to each page's `metadata.export` (or `generateMetadata`)
2. Each description should be unique (50-160 chars), descriptive, and include the page's primary keyword
3. Do NOT use generic descriptions like "Learn more about..."

### Pattern example
For `/examples/nextjs-ai-saas/page.tsx`:
```tsx
export const metadata = {
  title: "...",
  description: "Next.js AI SaaS example: repository rules, memory, and architecture files for a subscription-based AI product with Stripe billing and Prisma ORM.",
};
```

### Rules
- NO UI changes — only add/modify the `description` field in metadata exports
- Each description UNIQUE — do not copy-paste
- Keep under 160 characters
- Include the page's core topic/keyword naturally

## File locations
All page files are in `src/app/` following Next.js App Router structure:
- `src/app/page.tsx` (homepage)
- `src/app/about/page.tsx`
- `src/app/compare/[slug]/page.tsx`
- `src/app/docs/[...slug]/page.tsx`
- `src/app/examples/page.tsx`
- `src/app/examples/[slug]/page.tsx`
- `src/app/generator/page.tsx`
- `src/app/patterns/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/rules/page.tsx`
- `src/app/workflows/page.tsx`
- `src/app/workflows/[slug]/page.tsx`

## Verification
After adding, verify:
1. `npm run build` succeeds
2. Homepage has a meta description tag when viewed in browser
