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

type BootSequenceProps = {
  onComplete: () => void;
};

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [fading, setFading] = useState(false);

  const finish = useCallback(() => {
    setFading(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
    setTimeout(onComplete, 500);
  }, [onComplete]);

  const skip = useCallback(() => {
    setVisibleLines(BOOT_LINES.length);
    finish();
  }, [finish]);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reducedMotion) {
      onComplete();
      return;
    }

    let lineIndex = 0;
    const interval = setInterval(() => {
      lineIndex += 1;
      setVisibleLines(lineIndex);
      if (lineIndex >= BOOT_LINES.length) {
        clearInterval(interval);
        setTimeout(finish, 400);
      }
    }, 350);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", onKey);
    };
  }, [onComplete, finish, skip]);

  return (
    <div
      className={[
        "fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0d0d] transition-opacity duration-500",
        fading ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
      onClick={skip}
      role="dialog"
      aria-label="Boot sequence"
      aria-live="polite"
    >
      <div className="w-full max-w-lg px-6 font-mono text-sm">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="mb-2">
            {line.type === "prompt" ? (
              <PromptLine
                command={line.text}
                showCursor={i === visibleLines - 1 && !fading}
              />
            ) : line.type === "header" ? (
              <p className="terminal-header text-center">{line.text}</p>
            ) : (
              <p className="text-neutral-400">{line.text}</p>
            )}
          </div>
        ))}
        {!fading ? (
          <p className="mt-4 text-center text-[10px] text-neutral-600">
            click or press Esc to skip
          </p>
        ) : null}
      </div>
    </div>
  );
}
