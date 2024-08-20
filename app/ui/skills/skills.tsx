import styles from "./skills.module.css";

export default function SkillsSection() {
  return (
    <section className={styles.wrapper}>
      <h2>Skills</h2>
      <ul className={styles.skills}>
        <Skill>ReactJS</Skill>
        <Skill>TypeScript</Skill>
        <Skill>CSS</Skill>
        <Skill>HTML</Skill>
        <Skill>Git</Skill>
      </ul>
    </section>
  );
}

function Skill({ children }: { children: string }) {
  return <li className={styles.skill}>{children}</li>;
}
