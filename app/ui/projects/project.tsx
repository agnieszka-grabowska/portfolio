import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import { IconType } from "react-icons";
import styles from "./projects.module.css";
import Link from "next/link";
import Paragraph from "../components/Paragraph/Paragraph";
import { SiPrismic } from "react-icons/si";

export type ProjectIcon = { icon: IconType; hoverColor: string; title: string };

export default function ProjectCard({
  src,
  icons,
  title,
  description,
  alt,
  titleGradient,
  href,
  detailsPageExists,
}: {
  src: StaticImageData;
  icons: Array<ProjectIcon>;
  title: string;
  description: string;
  alt: string;
  titleGradient: string;
  href: string;
  detailsPageExists?: boolean;
}) {
  return (
    <Link href={href} target="_blank" style={{ "--gradient": titleGradient } as CSSProperties}>
      <article className={styles.project}>
        <div className={styles.textWrapper}>
          <h3>{title}</h3>
          <Paragraph>{description}</Paragraph>
          {detailsPageExists && <p className={styles.readMore}>Read project details {">"}</p>}
          <div className={styles.icons}>
            {icons.map((icon, index) => (
              <AnimatedIcon key={index} icon={icon}></AnimatedIcon>
            ))}
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={src} alt={alt}></Image>
        </div>
      </article>
    </Link>
  );
}

function AnimatedIcon({ icon: { icon: Icon, hoverColor, title } }: { icon: ProjectIcon }) {
  return (
    <div
      className={styles.iconWrapper}
      title={title}
      style={{
        // Adjusted size to match Tb icons
        fontSize: Icon === SiPrismic ? "32px" : "40px",
        margin: Icon === SiPrismic ? "4px" : "0px",
      }}
    >
      <Icon className={styles.icon} />
      <Icon className={styles.iconColor} style={{ "--hoverColor": hoverColor } as CSSProperties} />
    </div>
  );
}
