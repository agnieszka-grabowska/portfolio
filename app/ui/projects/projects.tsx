"use client";
import yookosPhoto from "@/public/yookos.avif";
import tetrisPhoto from "@/public/tetris.avif";
import jetlagPhoto from "@/public/jetlag-poznan.avif";
import styles from "./projects.module.css";
import Project from "./project";
import {
  TbBrandTypescript,
  TbBrandCss3,
  TbBrandFlutter,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandReact,
  TbBrandFigma,
  TbBrandNextjs,
} from "react-icons/tb";
import useObserver from "../useObserver";

export default function ProjectsSection() {
  const projectsRef = useObserver("projects");

  return (
    <section className={styles.projects} id="projects" ref={projectsRef}>
      <Jetlag />
      <Tetris />
      <Yookos />
    </section>
  );
}

function Yookos() {
  return (
    <Project
      title="Yookos"
      href="https://app.yookos.com"
      description="A social media platform where you can create personalized spaces, share custom posts, and build communities. It also features a marketplace for buying and selling items."
      src={yookosPhoto}
      alt=""
      icons={[
        { icon: TbBrandFlutter, hoverColor: "#027DFD", title: "Flutter" },
        { icon: TbBrandFigma, hoverColor: "#A259FF", title: "Figma" },
        { icon: TbBrandGit, hoverColor: "#f14e32", title: "Git" },
      ]}
      titleGradient={"var(--yookos-gradient"}
    />
  );
}

function Tetris() {
  return (
    <Project
      title="Tetris"
      href="https://awesometetris.netlify.app"
      description="A simplified version of the classic game where you strategically place and rotate shapes to clear lines and score points."
      src={tetrisPhoto}
      alt=""
      icons={[
        { icon: TbBrandReact, hoverColor: "#61DAFB", title: "React" },
        { icon: TbBrandTypescript, hoverColor: "#3178c6", title: "TypeScript" },
        { icon: TbBrandCss3, hoverColor: "#264DE4", title: "CSS3" },
        { icon: TbBrandHtml5, hoverColor: "#E34F26", title: "HTML5" },
        { icon: TbBrandGit, hoverColor: "#f14e32", title: "Git" },
      ]}
      titleGradient={"var(--tetris-gradient"}
    />
  );
}

function Jetlag() {
  return (
    <Project
      title="Jetlag Poznań"
      href="https://jetlag-poznan.vercel.app"
      description="An application providing an interface to play the Jetlag game, where you can create teams, ask questions, and cast curses."
      src={jetlagPhoto}
      alt=""
      icons={[
        { icon: TbBrandNextjs, hoverColor: "#a4a4a4", title: "Next.js" },
        { icon: TbBrandTypescript, hoverColor: "#3178c6", title: "TypeScript" },
        { icon: TbBrandCss3, hoverColor: "#264DE4", title: "CSS3" },
        { icon: TbBrandHtml5, hoverColor: "#E34F26", title: "HTML5" },
        { icon: TbBrandGit, hoverColor: "#f14e32", title: "Git" },
      ]}
      titleGradient={"var(--jetlag-gradient"}
      underDevelopment={true}
    />
  );
}
