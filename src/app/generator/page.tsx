"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2, AlertCircle } from "lucide-react";
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
  testingWorkflow?: string;
}

const FILE_TABS = [
  { key: "rules", label: "rules.md" },
  { key: "memory", label: "memory.md" },
  { key: "architecture", label: "architecture.md" },
  { key: "cursorRules", label: ".cursorrules" },
  { key: "claude", label: "claude.md" },
  { key: "testingWorkflow", label: "testing-workflow.md" },
];

export default function GeneratorPage() {
  const [packageJson, setPackageJson] = useState("");
  const [toolTarget, setToolTarget] = useState<ToolTarget>("cursor");
  const [strictness, setStrictness] = useState<Strictness>("balanced");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GenerateResult | null>(null);
  const [activeFile, setActiveFile] = useState("rules");

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

  const getFileContent = (): string => {
    if (!result) return "";
    const map: Record<string, string | undefined> = {
      rules: result.rules,
      memory: result.memory,
      architecture: result.architecture,
      cursorRules: result.cursorRules,
      claude: result.claude,
      testingWorkflow: result.testingWorkflow,
    };
    return map[activeFile] || result.standards;
  };

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
    if (result.rules) zip.file("rules.md", result.rules);
    if (result.memory) zip.file("memory.md", result.memory);
    if (result.architecture) zip.file("architecture.md", result.architecture);
    if (result.cursorRules) zip.file(".cursorrules", result.cursorRules);
    if (result.claude) zip.file("claude.md", result.claude);
    if (result.testingWorkflow) zip.file("testing-workflow.md", result.testingWorkflow);
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
              <h3 className="text-sm font-medium text-zinc-100">AI Tool Target</h3>
              <RadioGroup
                value={toolTarget}
                onValueChange={(v) => setToolTarget(v as ToolTarget)}
                className="mt-3 flex flex-wrap gap-3"
              >
                {(["cursor", "claude-code", "copilot", "generic"] as const).map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <RadioGroupItem value={tool} id={`tool-${tool}`} />
                    <Label htmlFor={`tool-${tool}`} className="text-sm capitalize text-zinc-300">
                      {tool === "claude-code" ? "Claude Code" : tool === "generic" ? "Generic" : tool.charAt(0).toUpperCase() + tool.slice(1)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator className="my-8" />

            <div>
              <h3 className="text-sm font-medium text-zinc-100">Strictness Level</h3>
              <RadioGroup
                value={strictness}
                onValueChange={(v) => setStrictness(v as Strictness)}
                className="mt-3 flex flex-wrap gap-3"
              >
                {(["relaxed", "balanced", "strict"] as const).map((level) => (
                  <div key={level} className="flex items-center gap-2">
                    <RadioGroupItem value={level} id={`strict-${level}`} />
                    <Label htmlFor={`strict-${level}`} className="text-sm capitalize text-zinc-300">{level}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator className="my-8" />

            <Button onClick={handleGenerate} disabled={isGenerating} size="lg" className="w-full">
              {isGenerating ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating...</>
              ) : (
                <><Sparkles className="mr-2 h-5 w-5" /> Generate Governance Files</>
              )}
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN — Results */}
        <div className="p-6 lg:p-10">
          {/* Zero state */}
          {!result && !isGenerating && !error && (
            <div className="rounded-xl border border-dashed border-[#2a2d35] bg-[#151922] p-10 text-center">
              <div className="mb-3 text-lg font-medium text-zinc-100">Generate repository governance files</div>
              <p className="mx-auto max-w-xl leading-7 text-zinc-500">
                Analyze repository structure and generate rules.md, memory.md, architecture constraints and AI workflow standards.
              </p>
            </div>
          )}

          {/* Loading state */}
          {isGenerating && (
            <div className="space-y-4">
              <div className="text-sm font-medium text-zinc-100">Analyzing repository architecture...</div>
              <div className="font-mono text-xs leading-7 text-zinc-500">
                ✓ detecting repository boundaries<br />
                ✓ analyzing validation layers<br />
                ✓ checking migration patterns<br />
                ✓ generating governance files
              </div>
            </div>
          )}

          {/* Error state */}
          {error && (
            error.includes("limit") ? (
              <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-6 mt-6">
                <div className="text-lg font-medium mb-3 text-zinc-100">Generation limit reached</div>
                <p className="text-zinc-500 leading-7">
                  Repository generation is temporarily limited to prevent abuse. Please try again later.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
                <h3 className="text-lg font-medium text-zinc-100">Generation failed</h3>
                <p className="mt-2 max-w-sm text-sm text-red-400">{error}</p>
                <Button variant="outline" onClick={handleGenerate} className="mt-6">Try Again</Button>
              </div>
            )
          )}

          {/* Results */}
          {result && (
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
                  Repository Governance Generated
                </div>
                <div className="mt-5 flex gap-5 font-mono text-xs text-zinc-500">
                  <span>6 files generated</span>
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
                <h3 className="mb-3 text-sm font-medium text-zinc-100">Detected Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {result.detectedStack.map((tech) => (
                    <span key={tech} className="rounded-md border border-[#2a2d35] bg-[#16181d] px-2.5 py-1 font-mono text-xs text-zinc-400">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Repository Signals */}
              <div className="rounded-xl border border-[#2a2d35] bg-[#151922] p-5">
                <div className="mb-4 text-sm font-medium text-zinc-100">Repository Signals Detected</div>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div>✓ Next.js App Router</div>
                  <div>✓ Shared validation layer</div>
                  <div>✓ Monorepo structure</div>
                  <div>✓ AI workflow conventions</div>
                </div>
              </div>

              {/* File Tabs */}
              <div className="flex gap-2 overflow-x-auto">
                {FILE_TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveFile(tab.key)}
                    className={`h-9 whitespace-nowrap rounded-lg border px-4 text-sm transition-colors ${
                      activeFile === tab.key
                        ? "border-zinc-500 bg-zinc-800/50 text-zinc-100"
                        : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* File Content */}
              <CodeBlock maxHeight="500px">{getFileContent()}</CodeBlock>

              {/* Export */}
              <div>
                <div className="mb-4 text-sm font-medium text-zinc-100">Export Repository Files</div>
                <div className="flex flex-wrap gap-3">
                  <button onClick={downloadZip} className="h-11 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200">
                    Download ZIP
                  </button>
                  {FILE_TABS.map((tab) => {
                    const content = result[tab.key as keyof GenerateResult];
                    if (typeof content !== "string") return null;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => downloadSingleFile(tab.label, content)}
                        className="h-11 rounded-lg border border-zinc-700 px-5 text-sm text-zinc-300 transition-colors hover:border-zinc-500"
                      >
                        Export {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
