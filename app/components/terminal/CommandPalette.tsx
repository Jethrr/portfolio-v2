"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useTerminalTab } from "./TerminalTabContext";

export type CommandItem = {
  command: string;
  description: string;
  tabId: string;
};

export const COMMANDS: CommandItem[] = [
  { command: "open index.ts", description: "Profile", tabId: "profile" },
  { command: "cat about.txt", description: "About", tabId: "about" },
  { command: "git log experience", description: "Experience", tabId: "experience" },
  { command: "ls projects", description: "Projects", tabId: "projects" },
  { command: "npm list", description: "Tech stack", tabId: "stack" },
  { command: "tail achievements", description: "Highlights", tabId: "highlights" },
  { command: "cat papers.bib", description: "Publications", tabId: "publications" },
  { command: "cat education.json", description: "Education", tabId: "education" },
  { command: "curl contact", description: "Contact", tabId: "contact" },
  { command: "help", description: "Show available commands", tabId: "" },
];

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
};

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalTab = useTerminalTab();

  const filtered = query.trim()
    ? COMMANDS.filter(
        (c) =>
          c.command.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase()),
      )
    : COMMANDS;

  const execute = useCallback(
    (cmd: CommandItem) => {
      if (cmd.command === "help") {
        setQuery("");
        setSelected(0);
        return;
      }
      terminalTab?.openTab(cmd.tabId);
      onClose();
      setQuery("");
      setSelected(0);
    },
    [onClose, terminalTab],
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter" && filtered[selected]) {
        e.preventDefault();
        execute(filtered[selected]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, filtered, selected, execute]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9990] flex items-start justify-center bg-black/60 pt-[20vh] backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-sm border border-[var(--border-strong)] bg-[var(--card)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-[var(--border)] px-4 py-3">
          <div className="flex items-baseline gap-1 font-mono text-xs">
            <span className="terminal-prompt-user">visitor@jeth</span>
            <span className="text-neutral-500">:</span>
            <span className="text-accent">~</span>
            <span className="text-neutral-500">$</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelected(0);
              }}
              placeholder="type a command..."
              className="flex-1 bg-transparent text-neutral-200 outline-none placeholder:text-neutral-600"
              aria-label="Search commands"
            />
          </div>
        </div>
        <ul className="max-h-64 overflow-y-auto py-1">
          {filtered.length === 0 ? (
            <li className="px-4 py-3 font-mono text-xs text-neutral-500">
              command not found: {query}
            </li>
          ) : (
            filtered.map((cmd, i) => (
              <li key={cmd.command}>
                <button
                  type="button"
                  onClick={() => execute(cmd)}
                  className={[
                    "flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left font-mono text-xs transition-colors",
                    i === selected
                      ? "bg-[var(--accent-soft)] text-accent"
                      : "text-neutral-300 hover:bg-[var(--surface-subtle)]",
                  ].join(" ")}
                >
                  <span>{cmd.command}</span>
                  <span className="text-neutral-500">{cmd.description}</span>
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="border-t border-[var(--border)] px-4 py-2 font-mono text-[10px] text-neutral-600">
          ↑↓ navigate · Enter select · Esc close · Ctrl+K toggle
        </div>
      </div>
    </div>
  );
}

export function useCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return { open, setOpen, onClose: () => setOpen(false) };
}
