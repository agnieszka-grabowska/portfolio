"use client";

import { usePathname } from "next/navigation";
import React from "react";

export type Tab = "home" | "projects" | "contact";

export const TabContext = React.createContext<
  | {
      currentTab: Tab | null;
      setCurrentTab: React.Dispatch<React.SetStateAction<Tab | null>>;
    }
  | undefined
>(undefined);

export default function TabProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = React.useState<Tab | null>(() =>
    pathname === "/" ? "home" : null
  );

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
