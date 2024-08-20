"use client";

import React from "react";

export type Tab = "home" | "projects" | "contact";

export const TabContext = React.createContext<
  | {
      currentTab: Tab;
      setCurrentTab: React.Dispatch<React.SetStateAction<Tab>>;
    }
  | undefined
>(undefined);

export default function TabProvider({ children }: { children: React.ReactNode }) {
  const [currentTab, setCurrentTab] = React.useState<Tab>("home");

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>{children}</TabContext.Provider>
  );
}

export function useTab() {
  const tabContext = React.useContext(TabContext);

  if (tabContext === undefined) {
    throw Error("TabContext is undefined");
  }

  return tabContext;
}
