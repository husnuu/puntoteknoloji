import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import {
  BoatTourScene,
  FitnessAppScene,
  YachtScene,
  FerryScene,
  StudioScene,
} from "@/components/illustrations/ReferenceScenes";

export const metadata: Metadata = {
  title: "Referanslar — Punto Teknoloji",
  description: "Punto Teknoloji'nin son teslim ettiği web ve mobil projeler.",
};

const PROJECTS = [
  {
    Scene: FitnessAppScene,
    title: "NetFitApp",
    type: "Mobil",
    desc: "Kullanıcıların antrenman programlarını takip edebildiği bir fitness uygulaması.",
    url: "https://netfitapp.com/",
  },
  {
    Scene: BoatTourScene,
    title: "Çeşme Tekne Turu",
    type: "Web",
    desc: "Çeşme'de tekne turu rezervasyonu ve online ödeme alınabilen bir tanıtım ve rezervasyon sitesi.",
    url: "https://cesmetekneturu.net/",
  },
  {
    Scene: YachtScene,
    title: "Çeşme Yachting",
    type: "Web",
    desc: "Yat kiralama ve charter hizmetleri sunan bir işletme için kurumsal site.",
    url: "https://cesmeyachting.com/",
  },
  {
    Scene: FerryScene,
    title: "Feribot Dünyası",
    type: "Web",
    desc: "Feribot bilet arama, rezervasyon ve online ödeme alınabilen bir platform.",
    url: "https://feribotdunyasi.com/",
  },
  {
    Scene: StudioScene,
    title: "Bora Avcı Stüdyo",
    type: "Web",
    desc: "DJ ve prodüksiyon stüdyosu için hazırlanan tanıtım ve portföy sitesi.",
    url: "https://www.boraavci.com/",
  },
];

export default function ReferencesPage() {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <span className="eyebrow">Referanslar</span>
        <h1>Son teslim ettiklerimiz</h1>
        <p>Farklı sektörlerden işletmeler için geliştirdiğimiz web ve mobil projelerden bazıları.</p>
      </section>

      <section className="container section">
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardHead}>
                <p.Scene className={styles.cardHeadImage} />
              </div>
              <span className={styles.badge}>{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.url && (
                <a className={styles.link} href={p.url} target="_blank" rel="noopener noreferrer">
                  Siteyi Görüntüle →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/proje-baslat" className="btnPrimary">Sıradaki Proje Sen Olabilirsin</Link>
        </div>
      </section>
    </>
  );
}
