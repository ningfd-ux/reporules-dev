"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DEFAULT_JSON = `{
  "dependencies": {
    "next": "15",
    "react": "19",
    "tailwindcss": "^4",
    "prisma": "^6",
    "zod": "^4"
  }
}`;

export default function HeroSection() {
  const router = useRouter();
  const [heroInput, setHeroInput] = useState(DEFAULT_JSON);

  const handleHeroGenerate = () => {
    sessionStorage.setItem("generator_input", heroInput);
    router.push("/generator");
  };

  return (
    <section className="min-h-[82vh] bg-[#0d0f14]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-16 lg:grid-cols-2 lg:pt-20">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
            AI Coding Guardrails
          </span>

          <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
            Stop AI Coding Agents From Breaking Your Codebase
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Generate repository rules, memory, and architecture context that keep Claude Code, Cursor, and AI agents aligned with your system.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/generator"
              className="inline-flex h-11 items-center rounded-lg bg-zinc-100 px-6 text-sm font-medium text-zinc-900 transition-all duration-200 hover:bg-zinc-200"
            >
              Open Generator
            </Link>
            <Link
              href="/examples"
              className="inline-flex h-11 items-center rounded-lg border border-zinc-700 px-6 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500"
            >
              Browse Examples
            </Link>
          </div>

          <div className="mt-6 font-mono text-xs text-zinc-500">
            Maintained by RepoRules · Updated continuously
          </div>
        </div>

        {/* RIGHT: Mini Generator Widget */}
        <div className="overflow-hidden rounded-xl border border-[#2a2d35] bg-[#181b21]">
          <div className="flex h-10 items-center justify-between border-b border-[#2a2d35] bg-[#1f232b] px-4 font-mono text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="ml-2">reporules — generator</span>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-2 text-sm font-medium text-zinc-100">
              Paste package.json or repository structure
            </div>

            <textarea
              value={heroInput}
              onChange={(e) => setHeroInput(e.target.value)}
              className="w-full rounded-lg border border-[#2a2d35] bg-[#14161b] p-3 font-mono text-xs leading-relaxed text-zinc-300 placeholder:text-zinc-600 outline-none min-h-[140px]"
              placeholder={DEFAULT_JSON}
            />

            <div className="mt-4">
              <div className="mb-2 text-xs font-medium text-zinc-500">
                Detected Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {["Next.js App Router", "React", "Tailwind CSS", "Prisma ORM", "Zod"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-xs font-medium text-zinc-500">
                AI Tool Target
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="hero-tool" defaultChecked className="accent-zinc-500" />
                  Cursor
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="hero-tool" className="accent-zinc-500" />
                  Claude Code
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="hero-tool" className="accent-zinc-500" />
                  Copilot
                </label>
              </div>
            </div>

            <button
              onClick={handleHeroGenerate}
              className="mt-5 w-full rounded-lg bg-zinc-100 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
            >
              Generate Repository Files
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
