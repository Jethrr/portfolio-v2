import type { ComponentProps, ReactNode } from "react";

type CardProps = ComponentProps<"div"> & {
  as?: "div" | "section" | "article";
  eyebrow?: string;
  children: ReactNode;
};

export function Card({
  as: Tag = "section",
  eyebrow,
  className = "",
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "border border-[var(--border)] bg-[var(--card)]",
        "transition-colors duration-300 hover:border-[var(--border-strong)]",
        className,
      ].join(" ")}
      {...rest}
    >
      {eyebrow ? <CardEyebrow>{eyebrow}</CardEyebrow> : null}
      {children}
    </Tag>
  );
}

export function CardEyebrow({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 px-5 pt-5 pb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500 font-mono">
      <span className="inline-block h-[1px] w-4 bg-neutral-700" />
      <span>{children}</span>
      {action ? <div className="ml-auto">{action}</div> : null}
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
  return <div className={`flex flex-col gap-3 px-5 pb-5 ${className}`}>{children}</div>;
}
