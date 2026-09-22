"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollTopButton.module.css";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className={styles.button}
      aria-label="Sayfanın başına dön"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
        <path d="M10 15V5M10 5l-5 5M10 5l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
