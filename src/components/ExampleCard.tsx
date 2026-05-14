interface ExampleCardProps {
  input: string;
  output: string;
  title: string;
}

export default function ExampleCard({ input, output, title }: ExampleCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/40 bg-card">
      <div className="border-b border-border/40 px-4 py-3">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Input */}
        <div className="border-b border-border/40 bg-zinc-950 p-4 md:border-b-0 md:border-r">
          <span className="mb-2 block text-xs text-zinc-500">Input</span>
          <pre className="font-mono text-xs leading-relaxed text-zinc-300">
{input}
          </pre>
        </div>
        {/* Output */}
        <div className="bg-zinc-900 p-4">
          <span className="mb-2 block text-xs text-zinc-500">Generated</span>
          <pre className="font-mono text-xs leading-relaxed text-zinc-300">
{output}
          </pre>
        </div>
      </div>
    </div>
  );
}
