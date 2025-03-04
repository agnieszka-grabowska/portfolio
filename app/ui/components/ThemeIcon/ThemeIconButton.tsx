"use client";

import React from "react";
import styles from "./ThemeIcon.module.css";
import { toggleThemeCookie } from "../../../actions";
import { AnimatePresence, motion } from "motion/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeIconButton({ theme }: { theme: string }) {
  const size = 24;

  return (
    <button
      className={styles.iconWrapper}
      onClick={() => toggleThemeCookie()}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {theme === "dark" ? (
          <AnimatedIcon theme="light">
            <MdLightMode size={size} />
          </AnimatedIcon>
        ) : (
          <AnimatedIcon theme="dark">
            <MdDarkMode size={size} />
          </AnimatedIcon>
        )}
      </AnimatePresence>
    </button>
  );
}

function AnimatedIcon({ children, theme }: { children: React.ReactNode; theme: string }) {
  const iconVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      initial={iconVariants.hidden}
      animate={iconVariants.visible}
      exit={iconVariants.hidden}
      key={theme}
    >
      {children}
    </motion.div>
  );
}
