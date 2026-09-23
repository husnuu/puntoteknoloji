import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import Reveal from "@/components/Reveal";
import { FAQ } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular — Punto Teknoloji",
  description: "Süreç, fiyatlandırma ve destek hakkında sıkça sorulan sorular.",
};

export default function FaqPage() {
  return (
    <section className="container section">
      <Reveal className={styles.intro}>
        <span className="eyebrow">SSS</span>
        <h1>Sıkça Sorulan Sorular</h1>
        <p>Süreç, fiyatlandırma ve destek hakkında en çok merak edilenler.</p>
      </Reveal>

      <div className={styles.list}>
        {FAQ.map((item, i) => (
          <Reveal key={item.q} delay={Math.min(i * 40, 320)}>
            <details className={styles.item}>
              <summary>
                {item.q}
                <span className={styles.marker}>+</span>
              </summary>
              <p>{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>

      <div className={styles.ctaRow}>
        <Link href="/iletisim" className="btnPrimary">Başka Bir Sorun mu Var?</Link>
      </div>
    </section>
  );
}
