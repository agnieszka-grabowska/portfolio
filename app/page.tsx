import styles from "./page.module.css";

import ProjectsSection from "./ui/projects/projects";
import SkillsSection from "./ui/skills/skills";
import HomeSection from "./ui/home/home";
import ContactSection from "./ui/contact/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
