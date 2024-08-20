"use client";

import Link from "next/link";
import styles from "./contact.module.css";

import { TbBrandGithub } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import useObserver from "../useObserver";

export default function ContactSection() {
  const ref = useObserver("contact");

  return (
    <footer className={styles.wrapper} ref={ref} id="contact">
      <h2>Contact me!</h2>
      <div className={styles.iconsWrapper}>
        <Link href="https://github.com/Areszka" target="_blank" className={styles.icon}>
          <TbBrandGithub />
        </Link>
        <Link href="mailto:grabowskaagnieszka025@gmail.com" className={styles.icon}>
          <TbMail />
        </Link>
      </div>
    </footer>
  );
}
