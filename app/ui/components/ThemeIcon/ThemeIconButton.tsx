"use client";

import React from "react";
import styles from "./ThemeIcon.module.css";
import { toggleThemeCookie } from "../../../actions";

export default function ThemeIconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className={styles.iconWrapper} onClick={() => toggleThemeCookie()}>
      {children}
    </button>
  );
}
