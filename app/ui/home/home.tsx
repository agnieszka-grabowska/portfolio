"use client";

import Image from "next/image";
import styles from "./home.module.css";
import photo from "@/public/photo.avif";
import useObserver from "../useObserver";
import { pacifico } from "../fonts";

export default function HomeSection() {
  const ref = useObserver("home");

  return (
    <section className={styles.sectionWrapper} id="home" ref={ref}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageBorder}>
          <Image src={photo} alt="Me sitting on a wooden platform" className={styles.image} />
          <p className={pacifico.className}>Gamcheon, Busan, South Korea</p>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <h1>Hi, I&apos;m Agnieszka</h1>
        <p>
          After 2 years of hands-on Flutter experience, I took time to learn new languages and
          explore the world. Now, I&apos;m back in tech, transitioning to React development with
          fresh energy and a broader perspective. I&apos;m a quick learner, adaptable, and eager to
          tackle new challenges in web development.
        </p>
      </div>
    </section>
  );
}
