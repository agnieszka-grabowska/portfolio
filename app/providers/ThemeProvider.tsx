"use client";

import React, { Dispatch, SetStateAction } from "react";

type Theme = "light" | "dark";

type ThemeContextType = { setTheme: Dispatch<SetStateAction<Theme>>; theme: Theme };

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("light");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw Error("ThemeContext is undefined");
  }

  return context;
}
