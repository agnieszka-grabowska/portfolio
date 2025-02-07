import { kalnia } from "@/app/ui/fonts";
import React from "react";
import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link className={`${kalnia.className} ${styles.logo}`} href="/">
      <strong>AGNIESZKA</strong>
      GRABOWSKA
    </Link>
  );
}
