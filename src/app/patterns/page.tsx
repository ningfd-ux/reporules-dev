import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patterns — RepoRules.dev",
  description: "Repository architecture patterns: feature structure, server-first, shared UI, auth patterns.",
};

const CODE = "overflow-x-auto rounded-xl border border-[#2a2d35] bg-[#16181d] p-5 font-mono text-sm leading-relaxed";

const PATTERNS = [
  {
    title: "Feature Structure",
    desc: "Each feature owns its components, hooks, actions, schemas and tests.",
    code: `/features/auth
  /components
  /hooks
  /actions
  /schemas
  /tests

/features/billing
  /components
  /hooks
  /actions
  /schemas
  /tests

/features/dashboard
  /components
  /hooks
  /actions
  /schemas
  /tests`,
  },
  {
    title: "Server-first Pattern",
    desc: "Move data fetching to the server layer. Keep client components thin.",
    code: `// Server Component (preferred)
export default async function Page() {
  const data = await getData()
  return <UI data={data} />
}

// Client Component (when needed)
'use client'
export function UI({ data }: { data: Data }) {
  return <div>{data.name}</div>
}`,
  },
  {
    title: "Shared UI Pattern",
    desc: "Reusable UI primitives live in /components/ui. Business UI lives in features.",
    code: `/components/ui
  button.tsx
  input.tsx
  dialog.tsx
  card.tsx
  table.tsx

/components/shared
  header.tsx
  sidebar.tsx
  layout.tsx`,
  },
  {
    title: "Auth Pattern",
    desc: "Validate sessions on the server. Use middleware for protected routes.",
    code: `// middleware.ts
export async function middleware(req: Request) {
  const session = await getSession(req)
  if (!session) redirect('/login')
}

// Server Action
export async function createItem(data: FormData) {
  const session = await getSession()
  if (!session) throw new Error('Unauthorized')
  // ...
}`,
  },
];

export default function PatternsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">
        Repository Patterns
      </h1>
      <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-zinc-400">
        Architecture patterns used across AI-assisted projects.
      </p>
      <div className="mt-16 space-y-16">
        {PATTERNS.map((p) => (
          <section key={p.title}>
            <h2 className="text-2xl font-semibold text-zinc-100">{p.title}</h2>
            <p className="mt-2 font-mono text-sm text-zinc-400">{p.desc}</p>
            <div className="mt-4">
              <pre className={CODE}>
                <code className="text-zinc-400">{p.code}</code>
              </pre>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
