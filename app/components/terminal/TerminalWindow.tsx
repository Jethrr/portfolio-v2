import type { ComponentProps, ReactNode } from "react";

type TerminalWindowProps = ComponentProps<"div"> & {
  title?: string;
  children: ReactNode;
};

export function TerminalWindow({
  title = "jeth@portfolio — zsh",
  className = "",
  children,
  ...rest
}: TerminalWindowProps) {
  return (
    <div
      className={[
        "flex flex-col overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--card)]",
        className,
      ].join(" ")}
      {...rest}
    >
      <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[var(--card-soft)] px-3 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: "var(--traffic-close)" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: "var(--traffic-min)" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: "var(--traffic-max)" }}
          />
        </div>
        <span className="flex-1 truncate text-center font-mono text-[10px] text-neutral-500">
          {title}
        </span>
        <div className="w-[52px]" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}
