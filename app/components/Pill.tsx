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
      "border-[var(--border-strong)] bg-[var(--surface-subtle)] text-neutral-200 hover:bg-[var(--surface-subtle-hover)]",
    accent:
      "border-accent/30 bg-[var(--accent-soft)] text-accent hover:border-accent/50",
    muted:
      "border-[var(--border)] bg-transparent text-neutral-400 hover:text-neutral-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-mono tracking-tight transition-colors ${variants[variant]}`}
    >
      [{children}]
    </span>
  );
}
