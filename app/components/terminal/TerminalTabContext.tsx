"use client";

import { createContext, useContext, type ReactNode } from "react";

type TerminalTabContextValue = {
  openTab: (id: string) => void;
  switchTab: (id: string) => void;
  closeTab: (id: string) => void;
  activeTab: string;
  openTabs: string[];
};

const TerminalTabContext = createContext<TerminalTabContextValue | null>(null);

export function TerminalTabProvider({
  value,
  children,
}: {
  value: TerminalTabContextValue;
  children: ReactNode;
}) {
  return (
    <TerminalTabContext.Provider value={value}>
      {children}
    </TerminalTabContext.Provider>
  );
}

export function useTerminalTab() {
  return useContext(TerminalTabContext);
}
