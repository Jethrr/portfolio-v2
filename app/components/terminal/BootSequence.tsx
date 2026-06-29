"use client";

import { useEffect, useState, useCallback } from "react";
import { PromptLine } from "./PromptLine";

const BOOT_LINES = [
  { type: "prompt" as const, text: "ssh visitor@jeth.me" },
  { type: "output" as const, text: "Connecting to jeth.me..." },
  { type: "output" as const, text: "Authenticated." },
  { type: "header" as const, text: "=== Welcome to jeth.me ===" },
  { type: "output" as const, text: "Loading profile..." },
];

const STORAGE_KEY = "jeth-boot-seen";
const CHAR_MS = 55;
const LINE_PAUSE_MS = 850;
const END_PAUSE_MS = 1100;

type BootSequenceProps = {
  onComplete: () => void;
};

function BootLine({
  line,
  text,
  showCursor,
}: {
  line: (typeof BOOT_LINES)[number];
  text: string;
  showCursor: boolean;
}) {
  if (line.type === "prompt") {
    return <PromptLine command={text} showCursor={showCursor} />;
  }
  if (line.type === "header") {
    return (
      <p className="terminal-header text-center">
        {text}
        {showCursor ? (
          <span className="cursor-blink text-accent-header" aria-hidden="true">
            ▋
          </span>
        ) : null}
      </p>
    );
  }
  return (
    <p className="text-neutral-400">
      {text}
      {showCursor ? (
        <span className="cursor-blink text-accent" aria-hidden="true">
          ▋
        </span>
      ) : null}
    </p>
  );
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  const finish = useCallback(() => {
    setFading(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
    setTimeout(onComplete, 600);
  }, [onComplete]);

  const skip = useCallback(() => {
    setLineIndex(BOOT_LINES.length);
    setCharIndex(0);
    setDone(true);
    finish();
  }, [finish]);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reducedMotion) {
      onComplete();
      return;
    }

    if (done) return;

    if (lineIndex >= BOOT_LINES.length) {
      const timer = setTimeout(finish, END_PAUSE_MS);
      return () => clearTimeout(timer);
    }

    const line = BOOT_LINES[lineIndex];

    if (charIndex < line.text.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), CHAR_MS);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, LINE_PAUSE_MS);

    return () => clearTimeout(timer);
  }, [lineIndex, charIndex, done, onComplete, finish]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [skip]);

  const allComplete = lineIndex >= BOOT_LINES.length;

  return (
    <div
      className={[
        "fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0d0d] transition-opacity duration-700",
        fading ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
      onClick={skip}
      role="dialog"
      aria-label="Boot sequence"
      aria-live="polite"
    >
      <div className="w-full max-w-lg px-6 font-mono text-sm">
        {BOOT_LINES.map((line, i) => {
          if (i > lineIndex) return null;

          const isCurrent = i === lineIndex && !allComplete;
          const text = i < lineIndex ? line.text : line.text.slice(0, charIndex);
          const showCursor = isCurrent && !fading;

          return (
            <div key={line.type + line.text} className="mb-2">
              <BootLine line={line} text={text} showCursor={showCursor} />
            </div>
          );
        })}

        {!fading ? (
          <p className="mt-6 text-center text-[10px] text-neutral-600 animate-pulse">
            click or press Esc to skip
          </p>
        ) : null}
      </div>
    </div>
  );
}
