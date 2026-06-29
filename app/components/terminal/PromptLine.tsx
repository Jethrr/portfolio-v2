import { TypewriterText } from "./Typewriter";

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

type TypewriterPromptProps = {
  command: string;
  tabKey: string;
};

export function TypewriterPrompt({ command, tabKey }: TypewriterPromptProps) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-1 font-mono text-[11px] sm:text-xs">
      <span className="terminal-prompt-user">visitor@jeth</span>
      <span className="text-neutral-500">:</span>
      <span className="text-accent">~</span>
      <span className="text-neutral-500">$</span>
      <TypewriterText
        key={tabKey}
        active
        text={command}
        charMs={42}
        className="text-neutral-200"
      />
    </div>
  );
}
