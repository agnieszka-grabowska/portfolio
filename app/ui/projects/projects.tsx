"use client";
import yookosPhoto from "@/public/yookos.png";
import tetrisPhoto from "@/public/tetris.png";
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
} from "react-icons/tb";
import useObserver from "../useObserver";

export default function ProjectsSection() {
  const projectsRef = useObserver("projects");

  return (
    <section className={styles.projects} id="projects" ref={projectsRef}>
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
        { icon: TbBrandFlutter, hoverColor: "#027DFD" },
        { icon: TbBrandFigma, hoverColor: "#A259FF" },
        { icon: TbBrandGit, hoverColor: "#f14e32" },
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
        { icon: TbBrandReact, hoverColor: "#61DAFB" },
        { icon: TbBrandTypescript, hoverColor: "#3178c6" },
        { icon: TbBrandCss3, hoverColor: "#264DE4" },
        { icon: TbBrandHtml5, hoverColor: "#E34F26" },
        { icon: TbBrandGit, hoverColor: "#f14e32" },
      ]}
      titleGradient={"var(--tetris-gradient"}
    />
  );
}
