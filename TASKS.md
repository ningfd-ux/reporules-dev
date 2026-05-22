# TASKS.md — 2026-05-22 Prompt Micro-Tune

## Task
Push commit `functions/api/generate.ts` — prompt micro-tune based on 5 test passes.

## Changes
Only one file changed:
- `functions/api/generate.ts`

Changes in prompt:
1. Strictness guidance rewritten (relaxed/strict/balanced) — more specific, less generic
2. Added 2 new CRITICAL RULES:
   - "Incident entries must include a date (e.g., YEAR-MONTH: ...) and a concrete fix"
   - "Rules must reference library-specific APIs and methods (e.g., Prisma client, Stripe webhooks, Zod schemas)"

## Steps
1. `git add functions/api/generate.ts`
2. `git commit -m "tune: prompt micro-tune - stricter non-generic enforcement + incident date format"`
3. `git config http.proxy http://127.0.0.1:17891` (if needed)
4. `git config https.proxy http://127.0.0.1:17891` (if needed)
5. `git push`
6. `git config --unset http.proxy`
7. `git config --unset https.proxy`

## Notes
- This is a safe, single-file change
- No UI, no build dependencies, no new features
