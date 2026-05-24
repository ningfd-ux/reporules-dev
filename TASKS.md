# TASKS.md — Internal Linking Graph

Goal: Add cross-page links to create a crawl graph for Google. Each change is adding a section at the bottom of pages — NO redesign, NO layout changes, just content links.

## Task 1: Example pages — Add Related Examples

**File:** `src/app/examples/[slug]/page.tsx`

After the repository signals section and before the closing `</main>`, add:

```tsx
{/* Related Examples */}
{(() => {
  const all = allExamples.filter(e => e.slug !== slug);
  const related = all.slice(0, 3);
  return (
    <div className="mt-16 border-t border-zinc-800 pt-12">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Related Examples</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {related.map((ex) => (
          <Link
            key={ex.slug}
            href={`/examples/${ex.slug}`}
            className="rounded-xl border border-zinc-800 bg-[#151922] p-5 transition-colors hover:border-zinc-600"
          >
            <div className="text-sm font-medium">{ex.title}</div>
            <div className="mt-2 text-xs text-zinc-500 line-clamp-2">{ex.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
})()}
```

Import `allExamples` from data (already imported at top of file).

## Task 2: Workflow pages — Add Related Workflows

**Files:** Each workflow page under `src/app/workflows/*/page.tsx`

At the bottom of each workflow page, add a "Related Workflows" section with cards linking to other workflow pages (skip self-link). Style: rounded-xl border border-zinc-800 bg-[#151922] p-5.

Create a shared list of all workflows that can be filtered per page.

## Task 3: Workflows listing page — Add link to examples

**File:** `src/app/workflows/page.tsx`

At the bottom, add a "See Generated Examples" section with a link to /examples.

## Task 4: Build & push

```bash
npm run build
```
Must pass. Then git commit & push.

## Styling Rules
- Keep existing design tokens: bg-[#151922], border-zinc-800, rounded-xl
- Title: text-2xl font-semibold tracking-tight
- Card title: text-sm font-medium
- Card description: text-xs text-zinc-500 line-clamp-2
- Section divider: border-t border-zinc-800 pt-12 mt-16
