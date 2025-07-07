import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import styles from "./projects.module.css";
import Link from "next/link";
import Paragraph from "../components/Paragraph/Paragraph";

export type ProjectTechnology = { hoverColor: string; title: string };

export default function ProjectCard({
  src,
  technologies,
  title,
  description,
  alt,
  githubLink,
  liveDemoLink,
  projectOverviewLink,
}: {
  src: StaticImageData;
  technologies: Array<ProjectTechnology>;
  title: string;
  description: string;
  alt: string;
  githubLink: string;
  liveDemoLink?: string;
  projectOverviewLink?: string;
}) {
  return (
    <article className={styles.project}>
      <div className={styles.imageWrapper}>
        <Image src={src} alt={alt} />
      </div>
      <h3>{title}</h3>
      <Technologies technologies={technologies} />
      <p>{description}</p>
      <Links
        githubLink={githubLink}
        liveDemoLink={liveDemoLink}
        projectOverviewLink={projectOverviewLink}
      />
    </article>
  );
}

function Technologies({ technologies }: { technologies: Array<ProjectTechnology> }) {
  return (
    <div className={styles.technologies}>
      {technologies.map(({ title, hoverColor }, index) => (
        <div
          key={index}
          className={styles.technology}
          style={{ "--hoverColor": hoverColor } as CSSProperties}
        >
          {title}
        </div>
      ))}
    </div>
  );
}

function Links({
  githubLink,
  liveDemoLink,
  projectOverviewLink,
}: {
  githubLink: string;
  liveDemoLink?: string;
  projectOverviewLink?: string;
}) {
  return (
    <Paragraph style={{ color: "var(--text-secondary)" }}>
      <Link href={githubLink} target="_blank">
        Github
      </Link>
      {liveDemoLink && (
        <>
          {" | "}
          <Link href={liveDemoLink} target="_blank">
            Live Demo
          </Link>
        </>
      )}
      {projectOverviewLink && (
        <>
          {" | "}
          <Link href={projectOverviewLink}>Project Overview</Link>
        </>
      )}
    </Paragraph>
  );
}
