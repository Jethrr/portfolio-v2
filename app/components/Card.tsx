import type { ComponentProps, ReactNode } from "react";
import { TerminalWindow } from "./terminal/TerminalWindow";
import { PromptLine } from "./terminal/PromptLine";

type CardProps = ComponentProps<"section"> & {
  title?: string;
  children: ReactNode;
};

export function Card({
  title,
  className = "",
  children,
  ...rest
}: CardProps) {
  const windowTitle = title ?? "jeth@portfolio — zsh";

  return (
    <section
      className={["col-span-12", className].join(" ")}
      {...rest}
    >
      <TerminalWindow
        title={windowTitle}
        className="transition-colors duration-300 hover:border-[var(--border-strong)]"
      >
        {children}
      </TerminalWindow>
    </section>
  );
}

export function CardEyebrow({
  children,
  command,
  action,
}: {
  children?: ReactNode;
  command?: string;
  action?: ReactNode;
}) {
  const cmd =
    command ??
    (typeof children === "string"
      ? children.toLowerCase().includes("git")
        ? children
        : `cat ${children.toLowerCase().replace(/&amp;/g, "and").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}.txt`
      : "");

  return (
    <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
      <PromptLine command={cmd} className="flex-1 text-[11px] sm:text-xs" />
      {action ? <div className="ml-auto flex-shrink-0">{action}</div> : null}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5 ${className}`}>
      {children}
    </div>
  );
}
