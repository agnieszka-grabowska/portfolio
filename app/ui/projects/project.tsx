import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import { IconType } from "react-icons";
import styles from "./projects.module.css";
import UnderDevelopment from "../components/UnderDevelopment/UnderDevelopment";

export type ProjectIcon = { icon: IconType; hoverColor: string; title: string };

export default function ProjectCard({
  src,
  icons,
  title,
  description,
  alt,
  titleGradient,
  href,
  underDevelopment,
}: {
  src: StaticImageData;
  icons: Array<ProjectIcon>;
  title: string;
  description: string;
  alt: string;
  titleGradient: string;
  href: string;
  underDevelopment?: boolean;
}) {
  return (
    <a href={href} target="_blank" style={{ "--gradient": titleGradient } as CSSProperties}>
      <article className={styles.project}>
        <div className={styles.textWrapper}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.icons}>
            {icons.map((icon, index) => (
              <AnimatedIcon key={index} icon={icon}></AnimatedIcon>
            ))}
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={src} alt={alt}></Image>
        </div>
        {underDevelopment && <UnderDevelopment />}
      </article>
    </a>
  );
}

function AnimatedIcon({ icon: { icon: Icon, hoverColor, title } }: { icon: ProjectIcon }) {
  return (
    <div className={styles.iconWrapper} title={title}>
      <Icon className={styles.icon} />
      <Icon className={styles.iconColor} style={{ "--hoverColor": hoverColor } as CSSProperties} />
    </div>
  );
}
