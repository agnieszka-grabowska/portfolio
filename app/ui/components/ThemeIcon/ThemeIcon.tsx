"use client";

import { useThemeContext } from "@/app/providers/ThemeProvider";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import styles from "./ThemeIcon.module.css";

export default function ThemeIcon() {
  const { theme, setTheme } = useThemeContext();
  const size = 24;

  return (
    <button
      className={styles.iconWrapper}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <MdLightMode size={size} /> : <MdDarkMode size={size} />}
    </button>
  );
}
