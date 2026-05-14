"use client";

import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  className?: string;
  maxHeight?: string;
}

export default function CodeBlock({
  children,
  className,
  maxHeight,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border/40 bg-zinc-950",
        className,
      )}
    >
      <div
        className="overflow-auto p-4 text-xs leading-relaxed text-zinc-300"
        style={maxHeight ? { maxHeight } : undefined}
      >
        <pre className="font-mono">{children}</pre>
      </div>
    </div>
  );
}
