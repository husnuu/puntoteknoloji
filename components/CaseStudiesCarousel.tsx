"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./CaseStudiesCarousel.module.css";
import { REFERENCES } from "@/lib/references";

export default function CaseStudiesCarousel() {
  const [index, setIndex] = useState(0);
  const active = REFERENCES[index];

  function go(next: number) {
    setIndex((next + REFERENCES.length) % REFERENCES.length);
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.imageSide}>
          <active.Scene className={styles.image} />
        </div>
        <div className={styles.contentSide}>
          <span className={styles.category}>{active.category.toUpperCase()}</span>
          <h3 className={styles.title}>{active.headline}</h3>
          <p className={styles.desc}>{active.solution}</p>
          <Link className={styles.learnMore} href={`/referanslar/${active.slug}`}>
            Devamını Gör →
          </Link>
        </div>
      </div>

      <div className={styles.pagination}>
        <button type="button" className={styles.arrow} onClick={() => go(index - 1)} aria-label="Önceki">
          ‹
        </button>
        {REFERENCES.map((cs, i) => (
          <button
            key={cs.slug}
            type="button"
            className={`${styles.pageNumber} ${i === index ? styles.pageNumberActive : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`${i + 1}. proje`}
            aria-current={i === index}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
        <button type="button" className={styles.arrow} onClick={() => go(index + 1)} aria-label="Sonraki">
          ›
        </button>
      </div>
    </div>
  );
}
