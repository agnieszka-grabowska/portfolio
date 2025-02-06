import styles from "../page.module.css";
import Item from "./Item";

export default function TableOfContents() {
  return (
    <div className={styles.tableOfContent}>
      <p>Table of Contents</p>
      <ol>
        <Item id="before-app">Before the App</Item>
        <Item id="tech-stack">Tech Stack</Item>
        <Item id="solved-issues">The Before-The-App Issues Solved by The App</Item>
        <Item id="key-features">Key Features</Item>
        <Item id="reflections-and-improvements">
          Reflections & Improvements After the First Iteration
        </Item>
        <Item id="future-ideas">Future Ideas</Item>
      </ol>
    </div>
  );
}
