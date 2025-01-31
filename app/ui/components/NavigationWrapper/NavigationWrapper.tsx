import { ReactNode } from "react";
import { k2D } from "@/app/ui/fonts";
import styles from "./NavigationWrapper.module.css";

export default function NavigationWrapper({ children }: { children: ReactNode }) {
  return <header className={`${k2D.className} ${styles.header}`}>{children}</header>;
}
