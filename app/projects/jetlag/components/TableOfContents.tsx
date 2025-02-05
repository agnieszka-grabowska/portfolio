import styles from "../page.module.css";

export default function TableOfContents() {
  return (
    <div className={styles.tableOfContent}>
      <p>Table of Contents</p>
      <ol>
        <li>
          <a href="#before-app">Before the App</a>
        </li>
        <li>
          <a href="#tech-stack">Tech Stack</a>
        </li>
        <li>
          <a href="#solved-issues">The Before-The-App Issues Solved by The App</a>
        </li>
        <li>
          <a href="#key-features">Key Features</a>
        </li>
        <li>
          <a href="#reflections-and-improvements">
            Reflections & Improvements After the First Iteration
          </a>
        </li>
        <li>
          <a href="#future-ideas">Future Ideas</a>
        </li>
      </ol>
    </div>
  );
}
