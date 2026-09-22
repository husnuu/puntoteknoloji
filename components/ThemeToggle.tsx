"use client";

import styles from "./ThemeToggle.module.css";

function toggleTheme() {
  const next = document.body.classList.contains("dark") ? "light" : "dark";
  document.body.classList.remove("light", "dark");
  document.body.classList.add(next);
  try {
    localStorage.setItem("punto-theme", next);
  } catch {}
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Tema değiştir"
    >
      <span className={styles.icon} aria-hidden="true">☀</span>
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
      <span className={styles.icon} aria-hidden="true">☾</span>
    </button>
  );
}
