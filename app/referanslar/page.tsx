import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import Reveal from "@/components/Reveal";
import StatsCounter from "@/components/StatsCounter";
import { REFERENCES } from "@/lib/references";
import { STATS } from "@/lib/stats";

export const metadata: Metadata = {
  title: "Referanslar — Punto Teknoloji",
  description: "Punto Teknoloji'nin son teslim ettiği web ve mobil projeler.",
};

export default function ReferencesPage() {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <span className="eyebrow">Referanslar</span>
        <h1>Son teslim ettiklerimiz</h1>
        <p>Farklı sektörlerden işletmeler için geliştirdiğimiz web ve mobil projelerden bazıları.</p>
      </section>

      <section className="container">
        <Reveal>
          <StatsCounter stats={STATS} />
        </Reveal>
      </section>

      <section className="container section">
        <div className={styles.grid}>
          {REFERENCES.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link href={`/referanslar/${p.slug}`} className={styles.card}>
                <div className={styles.cardHead}>
                  <p.Scene className={styles.cardHeadImage} />
                </div>
                <span className={styles.badge}>{p.category} · {p.type}{p.year ? ` · ${p.year}` : ""}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className={styles.link}>Vaka Çalışmasını Gör →</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/proje-baslat" className="btnPrimary">Sıradaki Proje Sen Olabilirsin</Link>
        </div>
      </section>
    </>
  );
}
