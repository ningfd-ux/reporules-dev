import { cn } from "@/lib/utils";

interface CompareRow {
  capability: string;
  left: string;
  right: string;
}

interface CompareTableProps {
  leftName: string;
  rightName: string;
  rows: CompareRow[];
}

export default function CompareTable({
  leftName,
  rightName,
  rows,
}: CompareTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/40">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border/40 bg-card">
            <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
              Capability
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
              {leftName}
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
              {rightName}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.capability}
              className={cn(
                "border-b border-border/20",
                i === rows.length - 1 && "border-b-0",
              )}
            >
              <td className="px-4 py-3 text-sm text-foreground">
                {row.capability}
              </td>
              <td className="px-4 py-3 text-sm text-muted-foreground">
                {row.left}
              </td>
              <td className="px-4 py-3 text-sm text-muted-foreground">
                {row.right}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
