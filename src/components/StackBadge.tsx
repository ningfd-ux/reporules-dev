import { cn } from "@/lib/utils";

interface StackBadgeProps {
  label: string;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export default function StackBadge({
  label,
  variant = "default",
  className,
}: StackBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "border border-border/40 bg-zinc-800 text-zinc-300",
        variant === "primary" &&
          "bg-primary text-primary-foreground",
        variant === "secondary" &&
          "bg-zinc-800 text-zinc-400",
        className,
      )}
    >
      {label}
    </span>
  );
}
