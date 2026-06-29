type PromptLineProps = {
  user?: string;
  host?: string;
  command: string;
  showCursor?: boolean;
  className?: string;
};

export function PromptLine({
  user = "visitor",
  host = "jeth",
  command,
  showCursor = false,
  className = "",
}: PromptLineProps) {
  return (
    <div
      className={[
        "flex flex-wrap items-baseline gap-x-1 font-mono text-xs sm:text-sm",
        className,
      ].join(" ")}
    >
      <span className="terminal-prompt-user">
        {user}@{host}
      </span>
      <span className="text-neutral-500">:</span>
      <span className="text-accent">~</span>
      <span className="text-neutral-500">$</span>
      <span className="text-neutral-200">{command}</span>
      {showCursor ? (
        <span className="cursor-blink text-accent" aria-hidden="true">
          ▋
        </span>
      ) : null}
    </div>
  );
}
