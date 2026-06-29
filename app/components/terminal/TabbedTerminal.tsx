"use client";

import { useState, useCallback, useEffect } from "react";
import { profile } from "../../data";
import { TypewriterPrompt, PromptLine } from "./PromptLine";
import { TerminalTabProvider } from "./TerminalTabContext";
import { CommandPalette, useCommandPalette } from "./CommandPalette";
import { SECTIONS, SECTION_MAP, DEFAULT_TAB_ID } from "./sections";

function CloseTabIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function AnimatedMenuIcon({ open }: { open: boolean }) {
  return (
    <span className="nav-fab-icon" data-open={open} aria-hidden="true">
      <span className="nav-fab-line" />
      <span className="nav-fab-line" />
      <span className="nav-fab-line" />
    </span>
  );
}

type ExplorerNavProps = {
  openTabs: string[];
  activeTab: string;
  onSelect: (id: string) => void;
  onClose?: () => void;
  showHeader?: boolean;
  variant?: "sidebar" | "center";
};

function ExplorerNav({
  openTabs,
  activeTab,
  onSelect,
  onClose,
  showHeader = true,
  variant = "sidebar",
}: ExplorerNavProps) {
  const isCenter = variant === "center";

  return (
    <>
      {showHeader ? (
        <div
          className={[
            "flex items-center justify-between border-b border-[var(--border)] px-3 py-2.5",
            isCenter ? "justify-center" : "",
          ].join(" ")}
        >
          <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-600">
            explorer
          </p>
          {onClose && !isCenter ? (
            <button
              type="button"
              onClick={onClose}
              className="flex h-7 w-7 items-center justify-center rounded-sm text-neutral-500 hover:bg-[var(--surface-subtle)] hover:text-neutral-200"
              aria-label="Close navigation"
            >
              <CloseTabIcon className="h-3.5 w-3.5" />
            </button>
          ) : null}
        </div>
      ) : null}
      <nav
        className={[
          "flex flex-col gap-0.5 overflow-y-auto p-2",
          isCenter ? "items-stretch px-1 py-3" : "flex-1",
        ].join(" ")}
        aria-label="Sections"
      >
        {SECTIONS.map((section) => {
          const isOpen = openTabs.includes(section.id);
          const isActive = activeTab === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelect(section.id)}
              className={[
                "flex w-full items-center gap-2 rounded-sm text-left font-mono transition-colors",
                isCenter ? "nav-menu-item justify-center px-4 py-3 text-sm" : "px-2.5 py-2 text-[11px] sm:text-xs",
                isActive
                  ? "bg-[var(--accent-soft)] text-accent"
                  : isOpen
                    ? "text-neutral-300 hover:bg-[var(--surface-subtle)]"
                    : "text-neutral-500 hover:bg-[var(--surface-subtle)] hover:text-neutral-300",
              ].join(" ")}
            >
              <span
                className={[
                  "h-1.5 w-1.5 shrink-0 rounded-full",
                  isOpen ? "bg-accent" : "bg-neutral-700",
                ].join(" ")}
                aria-hidden="true"
              />
              <span className={isCenter ? "" : "truncate"}>{section.navLabel}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}

export function TabbedTerminal() {
  const [openTabs, setOpenTabs] = useState<string[]>([DEFAULT_TAB_ID]);
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB_ID);
  const [navOpen, setNavOpen] = useState(false);
  const { open, setOpen, onClose } = useCommandPalette();

  const current = SECTION_MAP[activeTab] ?? SECTIONS[0];

  const openTab = useCallback((id: string) => {
    if (!SECTION_MAP[id]) return;
    setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setActiveTab(id);
    setNavOpen(false);
  }, []);

  const switchTab = useCallback((id: string) => {
    if (!SECTION_MAP[id]) return;
    setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setActiveTab(id);
  }, []);

  const closeTab = useCallback((id: string) => {
    setOpenTabs((prev) => {
      if (prev.length <= 1) return prev;

      const idx = prev.indexOf(id);
      const nextTabs = prev.filter((t) => t !== id);

      setActiveTab((active) => {
        if (active !== id) return active;
        return nextTabs[Math.min(idx, nextTabs.length - 1)];
      });

      return nextTabs;
    });
  }, []);

  useEffect(() => {
    if (!navOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navOpen]);

  useEffect(() => {
    if (!navOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [navOpen]);

  const contextValue = {
    openTab,
    switchTab,
    closeTab,
    activeTab,
    openTabs,
  };

  return (
    <TerminalTabProvider value={contextValue}>
      <CommandPalette open={open} onClose={onClose} />

      {/* Mobile floating FAB — fixed to viewport */}
      <button
        type="button"
        onClick={() => setNavOpen((o) => !o)}
        className={[
          "fixed bottom-6 left-5 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-[#0d0d0d]/90 font-mono text-accent shadow-lg shadow-black/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-accent/20 md:hidden",
          navOpen ? "scale-105 border-accent bg-[var(--accent-soft)] shadow-accent/25" : "",
        ].join(" ")}
        aria-label={navOpen ? "Close explorer" : "Open explorer"}
        aria-expanded={navOpen}
      >
        <AnimatedMenuIcon open={navOpen} />
      </button>

      {/* Mobile center menu */}
      {navOpen ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-5 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Explorer navigation"
        >
          <button
            type="button"
            className="nav-overlay-enter absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setNavOpen(false)}
            aria-label="Close navigation overlay"
          />
          <div className="nav-panel-enter relative z-10 w-full max-w-sm overflow-hidden rounded-md border border-[var(--border)] bg-[var(--card)] shadow-2xl shadow-black/50">
            <ExplorerNav
              openTabs={openTabs}
              activeTab={activeTab}
              onSelect={openTab}
              onClose={() => setNavOpen(false)}
              variant="center"
            />
          </div>
        </div>
      ) : null}

      <div className="gsap-terminal relative flex min-h-[min(82vh,900px)] overflow-hidden rounded-md border border-[var(--border)] bg-[var(--card)] shadow-2xl shadow-black/40">
        {/* Desktop sidebar */}
        <aside className="hidden w-36 shrink-0 flex-col border-r border-[var(--border)] bg-[#0a0a0c] md:flex lg:w-44">
          <ExplorerNav
            openTabs={openTabs}
            activeTab={activeTab}
            onSelect={openTab}
          />
        </aside>

        {/* Main terminal pane */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-stretch border-b border-[var(--border)] bg-[#0f0f12]">
            <div className="flex flex-none items-center gap-1.5 px-3 py-2.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--traffic-close)" }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--traffic-min)" }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--traffic-max)" }} />
            </div>

            <div
              className="flex min-w-0 flex-1 items-end overflow-x-auto"
              role="tablist"
              aria-label="Open files"
            >
              {openTabs.map((tabId) => {
                const tab = SECTION_MAP[tabId];
                if (!tab) return null;
                const isActive = activeTab === tabId;
                const canClose = openTabs.length > 1;

                return (
                  <div
                    key={tabId}
                    role="tab"
                    aria-selected={isActive}
                    id={`tab-${tabId}`}
                    aria-controls={`panel-${tabId}`}
                    className={[
                      "group/tab relative flex max-w-[200px] shrink-0 items-center border-r border-[var(--border)] transition-colors",
                      isActive
                        ? "bg-[var(--card)] text-neutral-100 after:absolute after:inset-x-0 after:top-0 after:h-[2px] after:bg-accent"
                        : "bg-transparent text-neutral-500 hover:bg-[var(--surface-subtle)] hover:text-neutral-300",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      onClick={() => switchTab(tabId)}
                      className="truncate px-3 py-2 font-mono text-[11px] sm:px-4 sm:text-xs"
                      title={tab.label}
                    >
                      {tab.label}
                    </button>
                    {canClose ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeTab(tabId);
                        }}
                        className={[
                          "mr-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm text-neutral-600 transition-all hover:bg-[var(--surface-subtle)] hover:text-neutral-200",
                          isActive ? "opacity-100" : "opacity-0 group-hover/tab:opacity-100",
                        ].join(" ")}
                        aria-label={`Close ${tab.label}`}
                      >
                        <CloseTabIcon className="h-3 w-3" />
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-b border-[var(--border)] bg-[var(--card-soft)] px-4 py-2.5">
            <TypewriterPrompt
              key={activeTab}
              tabKey={activeTab}
              command={current.command}
            />
          </div>

          <div className="flex min-h-0 flex-1 overflow-hidden">
            <div
              className="hidden flex-none select-none border-r border-[var(--border)] bg-[#0a0a0c] px-3 py-4 text-right font-mono text-[11px] leading-relaxed text-neutral-700 sm:block"
              aria-hidden="true"
            >
              {Array.from({ length: 28 }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
              {openTabs.map((tabId) => {
                const section = SECTION_MAP[tabId];
                if (!section) return null;
                const { Panel } = section;

                return (
                  <div
                    key={tabId}
                    id={`panel-${tabId}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${tabId}`}
                    hidden={activeTab !== tabId}
                    className={activeTab === tabId ? "tab-panel-active" : ""}
                  >
                    <Panel />
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex w-full items-center justify-between border-t border-[var(--border)] bg-[#0f0f12] px-4 py-2 font-mono text-[10px] transition-colors hover:bg-[#141418]"
            aria-label="Open command palette (Ctrl+K)"
          >
            <PromptLine command="_" showCursor className="text-[10px]" />
            <span className="ml-4 shrink-0 text-neutral-600">
              {profile.name} · Ctrl+K
            </span>
          </button>
        </div>
      </div>
    </TerminalTabProvider>
  );
}

export { SECTIONS as TABS };
