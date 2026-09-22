import type { Metadata } from "next";
import styles from "./page.module.css";
import StartProjectForm from "@/components/StartProjectForm";

export const metadata: Metadata = {
  title: "Proje Başlat — Punto Teknoloji",
  description: "İhtiyacınız hakkında biraz bilgi verin, 24 saat içinde size dönüş yapalım.",
};

export default function StartProjectPage() {
  return (
    <section className={`container ${styles.wrap}`}>
      <span className="eyebrow">Proje Başlat</span>
      <h1>Proje Başlat</h1>
      <p className={styles.subheading}>İhtiyacınız hakkında biraz bilgi verin</p>
      <p className={styles.lead}>24 saat içinde size dönüş yapacağım.</p>
      <StartProjectForm />
    </section>
  );
}
