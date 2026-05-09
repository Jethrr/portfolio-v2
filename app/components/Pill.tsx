import type { ReactNode } from "react";

export function Pill({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "muted";
}) {
  const variants: Record<string, string> = {
    default:
      "border-[var(--border-strong)] bg-white/[0.03] text-neutral-200 hover:bg-white/[0.06]",
    accent:
      "border-amber-300/20 bg-amber-300/10 text-amber-200 hover:bg-amber-300/15",
    muted:
      "border-[var(--border)] bg-transparent text-neutral-400 hover:text-neutral-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium font-mono tracking-tight transition-colors ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
