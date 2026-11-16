"use client";

import { useRef } from "react";
import Script from "next/script";
import styles from "./CalendlyEmbed.module.css";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget(options: { url: string; parentElement: HTMLElement }): void;
    };
  }
}

export default function CalendlyEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  // The widget script only auto-scans the page on its first load, so we init
  // manually in onReady, which also re-runs after client-side navigations.
  function init() {
    const el = ref.current;
    if (!el || !window.Calendly) return;
    el.replaceChildren();
    window.Calendly.initInlineWidget({ url, parentElement: el });
  }

  return (
    <div className={styles.card}>
      <div ref={ref} className={styles.widget}>
        <div className={styles.loading}>
          <span className={styles.spinner} aria-hidden="true" />
          Takvim yükleniyor…
        </div>
      </div>
      <Script
        id="calendly-widget"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onReady={init}
      />
    </div>
  );
}
