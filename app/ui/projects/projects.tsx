"use client";

import tetrisPhoto from "@/public/preview-tetris.avif";
import chillPhoto from "@/public/preview-dance-school-chill.avif";
import botcPhoto from "@/public/preview-botc-companion.avif";
import jetlagPhoto from "@/public/preview-jetlag-poznan.avif";
import styles from "./projects.module.css";
import Project from "./project";
import useObserver from "../useObserver";

export default function ProjectsSection() {
  const projectsRef = useObserver("projects");

  return (
    <section className={styles.projects} id="projects" ref={projectsRef}>
      <Jetlag />
      <DanceSchoolChill />
      <BloodOnTheClocktower />
      <Tetris />
    </section>
  );
}

function DanceSchoolChill() {
  return (
    <Project
      title="Dance School Chill"
      githubLink="https://github.com/agnieszka-grabowska/szkola-tanca-chill"
      liveDemoLink="https://szkola-tanca-chill.vercel.app"
      description="Landing page for a dance school, featuring information about classes, instructor, and contact details."
      src={chillPhoto}
      alt=""
      technologies={[
        { hoverColor: "#a4a4a4", title: "Next.js" },
        { hoverColor: "#3178c6", title: "TypeScript" },
        { hoverColor: "#264DE4", title: "CSS3" },
        { hoverColor: "#E34F26", title: "HTML5" },
        { hoverColor: "#8e44ec", title: "Prismic" },
        { hoverColor: "#A259FF", title: "Figma" },
      ]}
    />
  );
}

function BloodOnTheClocktower() {
  return (
    <Project
      title="Blood on the Clocktower Companion"
      githubLink="https://github.com/agnieszka-grabowska/blood-on-the-clocktower"
      liveDemoLink="https://blood-on-the-clocktower-ten.vercel.app"
      description="A login-free player and character management app created in just a few days for a friend’s game gathering. It allows random or manual character assignment, provides character descriptions, and saves all data locally in the browser for easy access."
      src={botcPhoto}
      alt=""
      technologies={[
        { hoverColor: "#a4a4a4", title: "Next.js" },
        { hoverColor: "#3178c6", title: "TypeScript" },
        { hoverColor: "#264DE4", title: "CSS3" },
        { hoverColor: "#E34F26", title: "HTML5" },
      ]}
    />
  );
}

function Tetris() {
  return (
    <Project
      title="Tetris"
      githubLink="https://github.com/agnieszka-grabowska/Tetris"
      liveDemoLink="https://awesometetris.netlify.app"
      description="A simplified version of the classic game where you strategically place and rotate shapes to clear lines and score points."
      src={tetrisPhoto}
      alt=""
      technologies={[
        { hoverColor: "#61DAFB", title: "React" },
        { hoverColor: "#3178c6", title: "TypeScript" },
        { hoverColor: "#264DE4", title: "CSS3" },
        { hoverColor: "#E34F26", title: "HTML5" },
        { hoverColor: "#f14e32", title: "Git" },
      ]}
    />
  );
}

function Jetlag() {
  return (
    <Project
      title="Jet Lag Poznań"
      githubLink="https://github.com/agnieszka-grabowska/jetlag-poznan"
      liveDemoLink="https://jetlag-poznan.vercel.app"
      projectOverviewLink="projects/jetlag"
      description="An application providing an interface to play the Jet Lag game, where you can create teams, ask questions, and cast curses."
      src={jetlagPhoto}
      alt=""
      technologies={[
        { hoverColor: "#a4a4a4", title: "Next.js" },
        { hoverColor: "#3178c6", title: "TypeScript" },
        { hoverColor: "#264DE4", title: "CSS3" },
        { hoverColor: "#E34F26", title: "HTML5" },
        { hoverColor: "#16a394", title: "Prisma" },
        { hoverColor: "#f14e32", title: "Git" },
      ]}
    />
  );
}
