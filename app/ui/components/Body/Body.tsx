"use client";

import React from "react";
import { onest } from "@/app/ui/fonts";
import { useThemeContext } from "@/app/providers/ThemeProvider";
import styles from "./theme.module.css";

export default function Body({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext();

  return (
    <body className={`${onest.className} ${theme === "dark" ? styles.dark : ""}`}>{children}</body>
  );
}
