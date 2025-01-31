"use client";

import Image from "next/image";
import styles from "./home.module.css";
import homepageBannerImage from "@/public/homepage-banner.avif";
import useObserver from "../useObserver";
import H1 from "../components/H1/H1";
import Paragraph from "../components/Paragraph/Paragraph";
import Button from "../components/Button/Button";
import Flex from "../components/Flex/Flex";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";

export default function HomeSection() {
  const ref = useObserver("home");

  return (
    <section className={styles.sectionWrapper} id="home" ref={ref}>
      <Image
        src={homepageBannerImage}
        alt="Me sitting on a wooden platform"
        className={styles.image}
      />
      <div className={styles.contentWrapper}>
        <Flex gap="34px" flexDirection="column">
          <div>
            <H1>Hi, I&apos;m Agnieszka</H1>
            <Paragraph>
              After 2 years of hands-on Flutter experience, I took time to learn new languages and
              explore the world. Now, I&apos;m back in tech, transitioning to React development with
              fresh energy and a broader perspective. Check out my{" "}
              <Link
                style={{ color: "var(--main)", textDecoration: "underline" }}
                href="/projects/jetlag"
              >
                Jet Lag Poznań
              </Link>{" "}
              project to see what I can do!
            </Paragraph>
          </div>
          <Flex gap="6px">
            <Button href="mailto:grabowskaagnieszka025@gmail.com">Email me</Button>
            <Button icon={FiGithub} href="https://github.com/Areszka" />
            <Button
              icon={FiLinkedin}
              href="https://www.linkedin.com/in/agnieszka-grabowska-b8037420a/"
            />
          </Flex>
        </Flex>
      </div>
    </section>
  );
}
