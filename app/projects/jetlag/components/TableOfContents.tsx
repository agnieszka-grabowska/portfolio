import styles from "../page.module.css";

export default function TableOfContents() {
  return (
    <div className={styles.tableOfContent}>
      <p>Table of Contents</p>
      <ol>
        <li>Before the App</li>
        <li>Tech Stack</li>
        <li>The Before-The-App Issues Solved by The App</li>
        <li>Key Features</li>
        <li>Reflection & Improvements After First Iteration</li>
        <li>Future Ideas</li>
      </ol>
    </div>
  );
}
