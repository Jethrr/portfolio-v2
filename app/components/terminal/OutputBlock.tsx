import type { ReactNode } from "react";

type OutputBlockProps = {
  children: ReactNode;
  prefix?: string;
  className?: string;
};

export function OutputBlock({
  children,
  prefix = ">",
  className = "",
}: OutputBlockProps) {
  return (
    <div className={["terminal-output text-sm leading-relaxed", className].join(" ")}>
      {prefix ? (
        <span className="mr-2 text-accent">{prefix}</span>
      ) : null}
      <span className="text-neutral-300">{children}</span>
    </div>
  );
}
