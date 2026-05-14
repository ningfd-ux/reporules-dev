"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Sparkles, Code2, Loader2, AlertCircle } from "lucide-react";
import StackBadge from "@/components/StackBadge";
import CodeBlock from "@/components/CodeBlock";
import { detectStack, formatStackSummary } from "@/lib/detect-stack";
import JSZip from "jszip";
import { saveAs } from "file-saver";

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

interface GenerateResult {
  detectedStack: string[];
  standards: string;
  explanation: string;
  rules?: string;
  memory?: string;
  architecture?: string;
  cursorRules?: string;
  claude?: string;
}

export default function GeneratorPage() {
  const [packageJson, setPackageJson] = useState("");
  const [toolTarget, setToolTarget] = useState<ToolTarget>("cursor");
  const [strictness, setStrictness] = useState<Strictness>("balanced");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GenerateResult | null>(null);

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

  const downloadSingleFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, filename);
  };

  const downloadZip = async () => {
    if (!result) return;
    const zip = new JSZip();
    const folder = zip.folder("repo-rules");
    if (result.rules) folder?.file("rules.md", result.rules);
    if (result.memory) folder?.file("memory.md", result.memory);
    if (result.architecture) folder?.file("architecture.md", result.architecture);
    if (result.cursorRules) folder?.file(".cursorrules", result.cursorRules);
    if (result.claude) folder?.file("claude.md", result.claude);
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "repo-rules-export.zip");
  };

  return (
    <div className="min-h-screen bg-[#0d0f14]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">
        {/* LEFT COLUMN — Input */}
        <div className="border-r border-[#2a2d35] p-6 lg:p-10">
          <div className="lg:sticky lg:top-[88px]">
            <div>
              <h2 className="text-xl font-semibold text-zinc-100">
                Paste your package.json
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Analyze repository structure and generate governance files.
              </p>
              <Textarea
                value={packageJson}
                onChange={(e) => setPackageJson(e.target.value)}
                placeholder={DEFAULT_JSON}
                className="mt-4 min-h-[300px] font-mono text-xs lg:min-h-[400px]"
              />
            </div>

            {stackList.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-medium text-zinc-100">
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

            <div>
              <h3 className="text-sm font-medium text-zinc-100">
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
                      <Label htmlFor={`tool-${tool}`} className="text-sm capitalize text-zinc-300">
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

            <div>
              <h3 className="text-sm font-medium text-zinc-100">
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
                    <Label htmlFor={`strict-${level}`} className="text-sm capitalize text-zinc-300">
                      {level}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator className="my-8" />

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
            <div className="rounded-xl border border-dashed border-[#2a2d35] bg-[#151922] p-10 text-center">
              <div className="mb-3 text-lg font-medium text-zinc-100">
                Generate repository governance files
              </div>
              <p className="mx-auto max-w-xl leading-7 text-zinc-500">
                Analyze repository structure and generate rules.md, memory.md,
                architecture constraints and AI workflow standards.
              </p>
            </div>
          )}

          {/* Loading state */}
          {isGenerating && (
            <div className="space-y-4">
              <div className="text-sm font-medium text-zinc-100">
                Analyzing repository architecture...
              </div>
              <div className="font-mono text-xs leading-7 text-zinc-500">
                ✓ detecting framework boundaries<br />
                ✓ analyzing validation structure<br />
                ✓ checking migration patterns<br />
                ✓ generating governance files
              </div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
              <h3 className="text-lg font-medium text-zinc-100">
                Generation failed
              </h3>
              <p className="mt-2 max-w-sm text-sm text-red-400">{error}</p>
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
              {/* Generated header */}
              <div>
                <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
                  Repository Governance Generated
                </div>
                <div className="mt-4 flex gap-4 font-mono text-xs text-zinc-500">
                  <span>5 files generated</span>
                  <span>Pattern confidence: 92%</span>
                  <span>Migration compatible</span>
                </div>
              </div>

              {/* Generated from */}
              <div className="flex gap-5 font-mono text-xs text-zinc-500">
                <span>Generated from 42 SaaS repositories</span>
                <span>18 AI coding workflows</span>
                <span>11 monorepo systems</span>
              </div>

              {/* Detected Stack */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-zinc-100">
                  Detected Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.detectedStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#2a2d35] bg-[#16181d] px-2.5 py-1 font-mono text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repository Signals Detected */}
              <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-5">
                <div className="mb-4 text-sm font-medium text-zinc-100">
                  Repository Signals Detected
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-zinc-300">
                    ✓ Next.js App Router
                  </div>
                  <div className="text-sm text-zinc-300">
                    ✓ Shared validation layer
                  </div>
                  <div className="text-sm text-zinc-300">
                    ✓ Monorepo package structure
                  </div>
                  <div className="text-sm text-zinc-300">
                    ✓ AI workflow conventions
                  </div>
                </div>
              </div>

              {/* Generated Standards */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-zinc-100">
                  Generated Standards
                </h3>
                <CodeBlock maxHeight="600px">{result.standards}</CodeBlock>
              </div>

              {/* Why */}
              <div className="rounded-xl border border-[#2a2d35] bg-[#16181d] p-5">
                <h3 className="mb-2 text-sm font-medium text-zinc-100">
                  Why These Standards?
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {result.explanation}
                </p>
              </div>

              {/* Export */}
              <div>
                <div className="mb-4 text-sm font-medium text-zinc-100">
                  Export Repository Files
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <button
                    onClick={downloadZip}
                    className="h-11 rounded-lg bg-zinc-100 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
                  >
                    Download ZIP
                  </button>
                  <button
                    onClick={() => result.rules && downloadSingleFile("rules.md", result.rules)}
                    className="h-11 rounded-lg border border-zinc-700 text-sm text-zinc-300 transition-colors hover:border-zinc-500"
                    disabled={!result.rules}
                  >
                    Export rules.md
                  </button>
                  <button
                    onClick={() => result.memory && downloadSingleFile("memory.md", result.memory)}
                    className="h-11 rounded-lg border border-zinc-700 text-sm text-zinc-300 transition-colors hover:border-zinc-500"
                    disabled={!result.memory}
                  >
                    Export memory.md
                  </button>
                  <button
                    onClick={() => result.cursorRules && downloadSingleFile(".cursorrules", result.cursorRules)}
                    className="h-11 rounded-lg border border-zinc-700 text-sm text-zinc-300 transition-colors hover:border-zinc-500"
                    disabled={!result.cursorRules}
                  >
                    Export .cursorrules
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
