"use client";

import styles from "./navigation.module.css";
import Link from "next/link";
import { Tab, useTab } from "../tabProvider";

export const DIRECTIONS: Tab[] = ["home", "projects", "contact"];

export default function Navigation() {
  const { currentTab, setCurrentTab } = useTab();

  return (
    <nav className={styles.nav}>
      <ul className={styles.items}>
        {DIRECTIONS.map((tab) => {
          return (
            <NavigationItem
              key={tab}
              href={`#${tab}`}
              onClick={() => setCurrentTab(tab)}
              isCurrent={currentTab === tab}
            >
              {tab}
            </NavigationItem>
          );
        })}
      </ul>
    </nav>
  );
}

function NavigationItem({
  href,
  isCurrent,
  children,
  onClick,
}: {
  href: string;
  isCurrent: Boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`${styles.navItem} ${isCurrent ? styles.current : ""}`}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}
