"use client";

import { useEffect, useState } from "react";
import { useTerminalTab } from "./TerminalTabContext";

export const TYPEWRITER_CHAR_MS = 48;
export const TYPEWRITER_LINE_PAUSE_MS = 420;

export function useIsTabActive(tabId: string): boolean {
  const ctx = useTerminalTab();
  return ctx?.activeTab === tabId;
}

export type TypewriterLine = {
  text: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "pre";
  prefix?: string;
  charMs?: number;
  cursorClassName?: string;
};

function TypewriterCursor({ className = "text-accent" }: { className?: string }) {
  return (
    <span className={`cursor-blink ${className}`} aria-hidden="true">
      ▋
    </span>
  );
}

function renderLine(
  line: TypewriterLine,
  text: string,
  showCursor: boolean,
) {
  const Tag = line.as ?? "span";
  const content = (
    <>
      {text}
      {showCursor ? (
        <TypewriterCursor className={line.cursorClassName ?? "text-accent"} />
      ) : null}
    </>
  );

  if (line.prefix) {
    return (
      <div className={["flex items-start gap-2", line.className].filter(Boolean).join(" ")}>
        <span className="shrink-0 text-accent">{line.prefix}</span>
        <Tag className="text-neutral-300">{content}</Tag>
      </div>
    );
  }

  return (
    <Tag className={line.className}>{content}</Tag>
  );
}

type TypewriterSequenceProps = {
  lines: TypewriterLine[];
  active: boolean;
  charMs?: number;
  linePauseMs?: number;
  className?: string;
  onComplete?: () => void;
};

export function TypewriterSequence({
  lines,
  active,
  charMs = TYPEWRITER_CHAR_MS,
  linePauseMs = TYPEWRITER_LINE_PAUSE_MS,
  className = "",
  onComplete,
}: TypewriterSequenceProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!active) {
      setLineIndex(0);
      setCharIndex(0);
    }
  }, [active]);

  useEffect(() => {
    if (!active || lines.length === 0) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setLineIndex(lines.length);
      setCharIndex(0);
      return;
    }

    if (lineIndex >= lines.length) return;

    const line = lines[lineIndex];
    const speed = line.charMs ?? charMs;

    if (charIndex < line.text.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, linePauseMs);

    return () => clearTimeout(timer);
  }, [active, lines, lineIndex, charIndex, charMs, linePauseMs]);

  useEffect(() => {
    if (!active || lineIndex < lines.length) return;
    onComplete?.();
  }, [active, lineIndex, lines.length, onComplete]);

  const allDone = lineIndex >= lines.length;

  return (
    <div className={["flex flex-col gap-1.5", className].join(" ")}>
      {lines.map((line, i) => {
        if (i > lineIndex) return null;
        const isCurrent = i === lineIndex && !allDone;
        const text = i < lineIndex ? line.text : line.text.slice(0, charIndex);
        return (
          <div key={`${line.text.slice(0, 12)}-${i}`}>
            {renderLine(line, text, isCurrent)}
          </div>
        );
      })}
    </div>
  );
}

type TypewriterTextProps = {
  text: string;
  active: boolean;
  charMs?: number;
  startDelay?: number;
  className?: string;
  as?: TypewriterLine["as"];
  cursorClassName?: string;
};

export function TypewriterText({
  text,
  active,
  charMs = TYPEWRITER_CHAR_MS,
  startDelay = 0,
  className = "",
  as = "span",
  cursorClassName = "text-accent",
}: TypewriterTextProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!active) {
      setCharIndex(0);
      setReady(false);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setCharIndex(text.length);
      setReady(true);
      return;
    }

    const timer = setTimeout(() => setReady(true), startDelay);
    return () => clearTimeout(timer);
  }, [active, text, startDelay]);

  useEffect(() => {
    if (!active || !ready) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    if (charIndex >= text.length) return;

    const timer = setTimeout(() => setCharIndex((c) => c + 1), charMs);
    return () => clearTimeout(timer);
  }, [active, ready, text, charIndex, charMs]);

  const Tag = as;
  const typing = charIndex < text.length;

  return (
    <Tag className={className}>
      {text.slice(0, charIndex)}
      {typing && active ? <TypewriterCursor className={cursorClassName} /> : null}
    </Tag>
  );
}
