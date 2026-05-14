"use client";

import Link from "next/link";
import { ArrowRight, Copy, ChevronDown } from "lucide-react";
import StackBadge from "@/components/StackBadge";

export default function HeroSection() {
  const scrollToExamples = () => {
    document.getElementById("examples")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100vh-72px)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:py-20">
        {/* LEFT: Copy + CTA */}
        <div className="flex-1">
          {/* H1 */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Production-ready AI coding
            <br />
            workflows for{" "}
            <span className="text-primary/80">Cursor, Claude Code</span>
            <br />
            and Windsurf.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Copy battle-tested rules, prompts and repo standards used to
            generate cleaner and more maintainable code.
          </p>

          {/* CTA Row */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/generator"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80"
            >
              Browse Workflows
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={scrollToExamples}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border/40 bg-card px-5 text-sm font-medium text-foreground transition-all hover:bg-accent"
            >
              <Copy className="h-4 w-4" />
              Copy Rules
            </button>
          </div>

          {/* Trust / Result bar */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground">
                Used for SaaS apps, monorepos and AI-assisted teams
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Real workflow preview */}
        <div className="flex-1 overflow-hidden rounded-xl border border-border/40 bg-zinc-950">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 border-b border-border/20 px-4 py-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-zinc-500">
              reporules — preview
            </span>
          </div>

          {/* Three-column demo */}
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] text-xs">
            {/* Col 1: repo tree */}
            <div className="border-r border-border/20 p-3 font-mono leading-relaxed text-zinc-400">
              <div className="text-zinc-600">app/</div>
              <div className="ml-3 text-zinc-500">├── components/</div>
              <div className="ml-3 text-zinc-500">├── lib/</div>
              <div className="ml-3">
                <span className="text-zinc-300">├── prompts/</span>
              </div>
              <div className="ml-3 text-zinc-500">├── rules/</div>
              <div className="ml-3">
                <span className="text-zinc-300">└── memory.md</span>
              </div>
              <div className="mt-2 text-zinc-600">rules/</div>
              <div className="ml-3">
                <span className="text-zinc-300">└── cursor.md</span>
              </div>
              <div className="ml-7 text-zinc-600">(active)</div>
            </div>

            {/* Col 2: rules.md */}
            <div className="border-r border-border/20 p-3 font-mono leading-relaxed text-zinc-400">
              <div className="mb-2 text-zinc-500"># cursor.md</div>
              <div>
                <span className="text-zinc-300">## Server Components First</span>
              </div>
              <div className="mt-1 text-zinc-500">
                Always prefer server components
              </div>
              <div className="text-zinc-500">
                unless interactivity is required.
              </div>
              <div className="mt-3">
                <span className="text-zinc-300">
                  ## Never fetch in client
                </span>
              </div>
              <div className="mt-1 text-zinc-500">
                Move all data fetching to
              </div>
              <div className="text-zinc-500">Server Components.</div>
            </div>

            {/* Col 3: AI output */}
            <div className="p-3 font-mono leading-relaxed text-zinc-400">
              <div className="mb-2 text-zinc-500">// generated output</div>
              <div>
                <span className="text-blue-400">export default async function</span>
                <span className="text-zinc-300"> Dashboard()</span>
              </div>
              <div className="text-zinc-300">{"{"}</div>
              <div className="ml-3">
                <span className="text-blue-400">const</span>
                <span className="text-zinc-300"> data = </span>
                <span className="text-blue-400">await</span>
                <span className="text-zinc-300"> getData()</span>
              </div>
              <div className="ml-3">
                <span className="text-blue-400">return</span>
                <span className="text-zinc-300"> {"<"}div{">"}{"{data.name}"}{"</"}</span>
              </div>
              <div className="mt-3 flex gap-1">
                <StackBadge label="Server Component" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <button
          onClick={scrollToExamples}
          className="flex items-center gap-1 text-xs text-muted-foreground/50 transition-colors hover:text-muted-foreground"
        >
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>
    </section>
  );
}
