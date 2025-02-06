"use client";

import { SECTIONS } from "@/app/const";
import React, { Dispatch, SetStateAction } from "react";

type SectionContextType = {
  section: (typeof SECTIONS)[number];
  setSection: Dispatch<SetStateAction<(typeof SECTIONS)[number]>>;
};

const SectionContext = React.createContext<undefined | SectionContextType>(undefined);

export default function SectionProvider({ children }: { children: React.ReactNode }) {
  const [section, setSection] = React.useState<(typeof SECTIONS)[number]>("before-app");

  return (
    <SectionContext.Provider value={{ section, setSection }}>{children}</SectionContext.Provider>
  );
}

export function useSectionContext() {
  const sectionContext = React.useContext(SectionContext);

  if (sectionContext === undefined) {
    throw Error("SectionContext is undefined");
  }

  return sectionContext;
}
