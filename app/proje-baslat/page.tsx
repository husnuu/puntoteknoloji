import type { Metadata } from "next";
import styles from "./page.module.css";
import Reveal from "@/components/Reveal";
import StartProjectForm from "@/components/StartProjectForm";

export const metadata: Metadata = {
  title: "Proje Başlat — Punto Teknoloji",
  description: "İhtiyacınız hakkında biraz bilgi verin, 24 saat içinde size dönüş yapalım.",
};

const NEXT_STEPS = [
  { title: "Talebini inceleriz", desc: "Paylaştığın bilgileri okuyup projenin kapsamını netleştiririz." },
  { title: "24 saat içinde dönüş yaparız", desc: "Size özel bir yol haritası ve tahmini süreçle iletişime geçeriz." },
  { title: "Birlikte planı netleştiririz", desc: "Kısa bir görüşmeyle kapsamı, zaman çizelgesini ve bütçeyi konuşuruz." },
];

export default function StartProjectPage() {
  return (
    <>
      <section className={`container ${styles.wrap}`}>
        <span className="eyebrow">Proje Başlat</span>
        <h1>Proje Başlat</h1>
        <p className={styles.subheading}>İhtiyacınız hakkında biraz bilgi verin</p>
        <p className={styles.lead}>24 saat içinde size dönüş yapacağım.</p>
        <StartProjectForm />
      </section>

      <section className="container section">
        <Reveal className={styles.sectionHeading}>
          <span className="eyebrow">Sırada Ne Var?</span>
          <h2>Formu gönderdikten sonra</h2>
        </Reveal>
        <div className={styles.stepsGrid}>
          {NEXT_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
