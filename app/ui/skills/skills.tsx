import styles from "./skills.module.css";

export default function SkillsSection() {
  return (
    <section className={styles.wrapper}>
      <h2>Skills</h2>
      <ul className={styles.skills}>
        <Skill>ReactJS</Skill>
        <Skill>NextJS</Skill>
        <Skill href="https://res.cloudinary.com/total-typescript/image/upload/v1734703026/certificate/94433164-9d5c-4027-b09a-f59f821ef9ea/beginners-typescript.png">
          TypeScript
        </Skill>
        <Skill>CSS</Skill>
        <Skill>HTML</Skill>
        <Skill>Git</Skill>
      </ul>
    </section>
  );
}

function Skill({ children, href }: { children: string; href?: string }) {
  if (href) {
    return (
      <li className={styles.skill}>
        <a href={href} target="_blank">
          {children}
        </a>
      </li>
    );
  }
  return <li className={styles.skill}>{children}</li>;
}
