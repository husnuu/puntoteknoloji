"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatsCounter.module.css";

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();

          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setDisplay(value);
            return;
          }

          const duration = 1100;
          const start = performance.now();

          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  return (
    <div className={styles.row}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <div className={styles.number}>
            <CountUp value={s.value} suffix={s.suffix} />
          </div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
