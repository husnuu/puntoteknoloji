import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import {
  AboutHeroIllustration,
  CollaborationIllustration,
  BuildIllustration,
} from "@/components/illustrations/AboutIllustrations";
import {
  OriginalDesignScene,
  MobileFirstScene,
  FastDeliveryScene,
  AestheticScene,
  MaintainableScene,
} from "@/components/illustrations/PrincipleScenes";

export const metadata: Metadata = {
  title: "Hakkımızda — Punto Teknoloji",
  description: "Punto Teknoloji'nin çalışma şekli ve stüdyo prensipleri.",
};

const PRINCIPLES = [
  { Icon: OriginalDesignScene, title: "Özgün tasarım", desc: "Şablon değil, markanıza özel bir görsel dil kurarız." },
  { Icon: MobileFirstScene, title: "Mobile-first yaklaşım", desc: "Her ekran, önce mobilde kusursuz çalışacak şekilde tasarlanır." },
  { Icon: FastDeliveryScene, title: "Hızlı teslimat", desc: "Net kapsam ve düzenli iletişimle zamanında teslim ederiz." },
  { Icon: AestheticScene, title: "Estetik disiplin", desc: "Sade, tutarlı ve amaca hizmet eden bir tasarım anlayışı benimseriz." },
  { Icon: MaintainableScene, title: "Bakımı kolay çözümler", desc: "Temiz kod yazarız; sistemin geleceğini de düşünürüz." },
];

export default function AboutPage() {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <div className={styles.introInner}>
          <div>
            <span className="eyebrow">Hakkımızda</span>
            <h1>Markalar için uçtan uca dijital ürünler geliştiriyoruz</h1>
            <p className={styles.lead}>
              Merhaba, biz Punto Teknoloji ekibiyiz — İstanbul merkezli bir yazılım şirketiyiz.
            </p>
            <p>
              İşletmelerle doğrudan çalışarak gerçek problemleri çözen özel
              sistemler kuruyoruz.
            </p>
            <p>
              Web siteleri, mobil uygulamalar, rezervasyon ve iş sistemleri
              gibi pratik çözümlere odaklanıyoruz.
            </p>
            <p>
              Sadece arayüz tasarlamıyoruz. Gerçek kullanıcıları, gerçek
              veriyi ve gerçek iş akışlarını yöneten eksiksiz sistemler inşa
              ediyoruz.
            </p>
            <p>
              Çoğu müşteri, Excel tabloları veya hazır araçlar artık yeterli
              gelmediğinde bize ulaşıyor.
            </p>
            <Link href="/proje-baslat" className="btnPrimary">Projeye Başla</Link>
          </div>
          <AboutHeroIllustration className={styles.introIllustration} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.howGrid}>
            <div className={styles.howCard}>
              <CollaborationIllustration className={styles.howIllustration} />
              <h3>Doğrudan ekiple çalışırsınız</h3>
              <p>
                Aracı yok. Sisteminizi kuran ekiple doğrudan konuşursunuz —
                daha hızlı kararlar, daha net iletişim.
              </p>
            </div>
            <div className={styles.howCard}>
              <BuildIllustration className={styles.howIllustration} />
              <h3>Gerçek kullanım için inşa edilir</h3>
              <p>
                İnsanların gerçekten kullandığı sistemler kurarız — güvenilir,
                sürdürülebilir ve işinize göre tasarlanmış.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section`} style={{ backgroundColor: "var(--c-secondary)" }}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="eyebrow">Stüdyo Prensipleri</span>
            <h2>Basit, doğrudan, güvenilir</h2>
            <p>
              İşleri sade ve dürüst tutarız — jargon yok, sürpriz yok. Bir
              şey çalışmayacaksa, bunu size söyleriz.
            </p>
          </div>
          <div className={styles.principleList}>
            {PRINCIPLES.map((p) => (
              <div key={p.title} className={styles.principleItem}>
                <p.Icon className={styles.principleIllustration} />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
