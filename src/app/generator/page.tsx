"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Download,
  Copy,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react";
import StackBadge from "@/components/StackBadge";
import CodeBlock from "@/components/CodeBlock";
import { detectStack, formatStackSummary } from "@/lib/detect-stack";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ToolTarget = "cursor" | "claude-code" | "copilot" | "generic";
type Strictness = "relaxed" | "balanced" | "strict";

const DEFAULT_JSON = `{
  "dependencies": {
    "next": "15",
    "react": "19",
    "tailwindcss": "^4",
    "prisma": "^6",
    "zod": "^4"
  }
}`;

const EXPORT_FORMATS: Record<ToolTarget, string> = {
  cursor: "rules.json",
  "claude-code": "CLAUDE.md",
  copilot: ".github/copilot-instructions.md",
  generic: "AGENTS.md",
};

const EXPORT_INSTRUCTIONS: Record<ToolTarget, string> = {
  cursor:
    'Create a `.cursor/rules` directory in your repo root and save the rules there.',
  "claude-code": 'Save as `CLAUDE.md` in your repo root.',
  copilot: 'Save as `.github/copilot-instructions.md` in your repo root.',
  generic: 'Save as `AGENTS.md` in your repo root and reference it in AI tool prompts.',
};

export default function GeneratorPage() {
  const [packageJson, setPackageJson] = useState("");
  const [toolTarget, setToolTarget] = useState<ToolTarget>("cursor");
  const [strictness, setStrictness] = useState<Strictness>("balanced");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    detectedStack: string[];
    standards: string;
    explanation: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const parsedDeps = useCallback(() => {
    try {
      const json = JSON.parse(packageJson || DEFAULT_JSON);
      return json.dependencies || json.devDependencies || json;
    } catch {
      return null;
    }
  }, [packageJson]);

  const currentStack = useCallback(() => {
    const deps = parsedDeps();
    if (!deps) return [];
    return formatStackSummary(detectStack(deps));
  }, [parsedDeps]);

  const stackList = currentStack();

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageJson: packageJson || DEFAULT_JSON,
          toolTarget,
          strictness,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Generation failed");
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result.standards);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[calc(100vh-72px)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">
        {/* LEFT COLUMN — Input */}
        <div className="border-border/40 p-6 lg:border-r lg:p-10">
          <div className="lg:sticky lg:top-[88px]">
            {/* Section 1: Package JSON */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Paste your package.json
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We analyze your stack and generate repository-aware AI coding
                standards.
              </p>
              <Textarea
                value={packageJson}
                onChange={(e) => setPackageJson(e.target.value)}
                placeholder={DEFAULT_JSON}
                className="mt-4 min-h-[300px] font-mono text-xs lg:min-h-[400px]"
              />
            </div>

            {/* If JSON parses, show detected stack */}
            {stackList.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-medium text-foreground">
                  Detected stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stackList.map((tech) => (
                    <StackBadge key={tech} label={tech} />
                  ))}
                </div>
              </div>
            )}

            <Separator className="my-8" />

            {/* Section 2: AI Tool Target */}
            <div>
              <h3 className="text-sm font-medium text-foreground">
                AI Tool Target
              </h3>
              <RadioGroup
                value={toolTarget}
                onValueChange={(v) => setToolTarget(v as ToolTarget)}
                className="mt-3 flex flex-wrap gap-3"
              >
                {(["cursor", "claude-code", "copilot", "generic"] as const).map(
                  (tool) => (
                    <div key={tool} className="flex items-center gap-2">
                      <RadioGroupItem value={tool} id={`tool-${tool}`} />
                      <Label
                        htmlFor={`tool-${tool}`}
                        className="text-sm capitalize"
                      >
                        {tool === "claude-code"
                          ? "Claude Code"
                          : tool === "generic"
                            ? "Generic"
                            : tool.charAt(0).toUpperCase() + tool.slice(1)}
                      </Label>
                    </div>
                  ),
                )}
              </RadioGroup>
            </div>

            <Separator className="my-8" />

            {/* Section 3: Strictness Level */}
            <div>
              <h3 className="text-sm font-medium text-foreground">
                Strictness Level
              </h3>
              <RadioGroup
                value={strictness}
                onValueChange={(v) => setStrictness(v as Strictness)}
                className="mt-3 flex flex-wrap gap-3"
              >
                {(["relaxed", "balanced", "strict"] as const).map((level) => (
                  <div key={level} className="flex items-center gap-2">
                    <RadioGroupItem value={level} id={`strict-${level}`} />
                    <Label
                      htmlFor={`strict-${level}`}
                      className="text-sm capitalize"
                    >
                      {level}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator className="my-8" />

            {/* Section 4: Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              size="lg"
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Standards
                </>
              )}
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN — Results */}
        <div className="p-6 lg:p-10">
          {/* Zero state */}
          {!result && !isGenerating && !error && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Code2 className="mb-4 h-12 w-12 text-muted-foreground/40" />
              <h3 className="text-lg font-medium text-foreground">
                Paste and generate
              </h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Paste your package.json on the left, choose your preferences, and
                click Generate Standards to see results here.
              </p>
            </div>
          )}

          {/* Loading state */}
          {isGenerating && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Loader2 className="mb-4 h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">
                Analyzing your stack and generating standards...
              </p>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <AlertCircle className="mb-4 h-12 w-12 text-destructive" />
              <h3 className="text-lg font-medium text-foreground">
                Generation failed
              </h3>
              <p className="mt-2 max-w-sm text-sm text-destructive">
                {error}
              </p>
              <Button
                variant="outline"
                onClick={handleGenerate}
                className="mt-6"
              >
                Try Again
              </Button>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="space-y-8">
              {/* Detected Stack */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-foreground">
                  Detected Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.detectedStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Generated Standards */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-medium text-foreground">
                    Generated Standards
                  </h3>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <CodeBlock maxHeight="600px">
                  {result.standards}
                </CodeBlock>
              </div>

              {/* Why These Standards */}
              <div className="rounded-xl border border-border/40 bg-card p-5">
                <h3 className="mb-2 text-sm font-medium text-foreground">
                  Why These Standards?
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {result.explanation}
                </p>
              </div>

              {/* Export Formats */}
              <div>
                <h3 className="mb-4 text-sm font-medium text-foreground">
                  Export
                </h3>
                <div className="space-y-3">
                  {Object.entries(EXPORT_FORMATS).map(([key, filename]) => (
                    <div
                      key={key}
                      className={cn(
                        "rounded-lg border p-4 transition-colors",
                        key === toolTarget
                          ? "border-primary/40 bg-primary/5"
                          : "border-border/40",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-foreground">
                            {filename}
                          </span>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {EXPORT_INSTRUCTIONS[key as ToolTarget]}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" onClick={handleCopy}>
                          <Download className="mr-1 h-3 w-3" />
                          Copy
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
