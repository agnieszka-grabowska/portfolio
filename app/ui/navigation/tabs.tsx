"use client";

import styles from "./navigation.module.css";
import { Tab, useTab } from "../tabProvider";
import { motion } from "motion/react";
import React from "react";

export const DIRECTIONS: Tab[] = ["home", "projects", "contact"];

export default function Tabs() {
  const { currentTab, setCurrentTab } = useTab();
  const [hoveredNavItem, setHoveredNavItem] = React.useState<Tab | null>(currentTab);

  React.useEffect(() => {
    setHoveredNavItem(currentTab);
  }, [currentTab]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.items} onMouseLeave={() => setHoveredNavItem(currentTab)}>
        {DIRECTIONS.map((tab) => {
          const isCurrent = currentTab === tab;
          return (
            <li
              key={tab}
              className={`${styles.navigationItem} ${isCurrent ? styles.current : ""}`}
              onMouseEnter={() => setHoveredNavItem(tab)}
            >
              <a href={`/#${tab}`} onClick={() => setCurrentTab(tab)}>
                {tab}
              </a>
              {hoveredNavItem === tab && (
                <motion.div layoutId="tab" className={styles.underline}></motion.div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
