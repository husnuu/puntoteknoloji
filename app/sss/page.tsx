import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { FAQ } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular — Punto Teknoloji",
  description: "Süreç, fiyatlandırma ve destek hakkında sıkça sorulan sorular.",
};

export default function FaqPage() {
  return (
    <section className="container section">
      <div className={styles.intro}>
        <span className="eyebrow">SSS</span>
        <h1>Sıkça Sorulan Sorular</h1>
        <p>Süreç, fiyatlandırma ve destek hakkında en çok merak edilenler.</p>
      </div>

      <div className={styles.list}>
        {FAQ.map((item) => (
          <details key={item.q} className={styles.item}>
            <summary>
              {item.q}
              <span className={styles.marker}>+</span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>

      <div className={styles.ctaRow}>
        <Link href="/iletisim" className="btnPrimary">Başka Bir Sorun mu Var?</Link>
      </div>
    </section>
  );
}
