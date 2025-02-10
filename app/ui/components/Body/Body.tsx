import React from "react";
import { onest } from "@/app/ui/fonts";
import styles from "@/app/theme.module.css";
import { getThemeCookie } from "@/app/actions";

export default async function Body({ children }: { children: React.ReactNode }) {
  const theme = await getThemeCookie();

  return (
    <body className={`${onest.className} ${theme === "dark" ? styles.dark : styles.light}`}>
      {children}
    </body>
  );
}
