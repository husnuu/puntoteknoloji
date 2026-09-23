import Link from "next/link";
import styles from "./page.module.css";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import CaseStudiesCarousel from "@/components/CaseStudiesCarousel";
import Reveal from "@/components/Reveal";
import StatsCounter from "@/components/StatsCounter";
import { SERVICES } from "@/lib/services";
import { FAQ } from "@/lib/faq";
import { PROCESS } from "@/lib/process";
import { STACK_GROUPS } from "@/lib/techstack";
import { STATS } from "@/lib/stats";
import {
  OriginalDesignScene,
  MobileFirstScene,
  FastDeliveryScene,
  AestheticScene,
  MaintainableScene,
} from "@/components/illustrations/PrincipleScenes";

const PRINCIPLES = [
  { Icon: OriginalDesignScene, title: "Özgün tasarım" },
  { Icon: MobileFirstScene, title: "Mobile-first yaklaşım" },
  { Icon: FastDeliveryScene, title: "Hızlı teslimat" },
  { Icon: AestheticScene, title: "Estetik disiplin" },
  { Icon: MaintainableScene, title: "Bakımı kolay çözümler" },
];

export default function Home() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <span className={`${styles.heroBlob} ${styles.heroBlob1}`} aria-hidden="true" />
        <span className={`${styles.heroBlob} ${styles.heroBlob2}`} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div>
            <span className="eyebrow">İstanbul Merkezli Yazılım Şirketi</span>
            <h1 className={styles.heroTitle}>
              <span className="gradientText">Bir noktadan başlayan</span> dijital ürünler.
            </h1>
            <p className={styles.heroText}>
              Web, mobil ve özel yazılım geliştiriyoruz. Markana özel mimari,
              hızlı teslimat ve sürdürülebilir kod — fikirden çalışan ürüne
              kadar uçtan uca.
            </p>
            <div className={styles.heroActions}>
              <Link href="/proje-baslat" className="btnPrimary">Projeye Başla</Link>
              <Link href="/hizmetler" className="btnGhost">Hizmetleri İncele</Link>
            </div>
          </div>
          <HeroIllustration className={styles.heroIllustration} />
        </div>
      </section>

      <section className="container">
        <Reveal>
          <StatsCounter stats={STATS} />
        </Reveal>
      </section>

      <section className={`${styles.altBg} section`}>
        <div className="container">
          <Reveal className={styles.sectionHeading}>
            <span className="eyebrow">Neler Yapıyoruz</span>
            <h2>Fikrinizi çalışan bir ürüne dönüştürüyoruz</h2>
            <p>İster küçük bir tanıtım sitesi, ister uçtan uca bir platform olsun — ihtiyacına uygun çözümü birlikte kuruyoruz.</p>
          </Reveal>
          <div className={styles.serviceGrid}>
            {SERVICES.map(({ slug, title, shortDesc, Scene }, i) => (
              <Reveal key={slug} delay={i * 70}>
                <Link href={`/hizmetler/${slug}`} className={styles.serviceCard}>
                  <Scene className={styles.serviceIcon} />
                  <h3>{title}</h3>
                  <p>{shortDesc}</p>
                  <span className={styles.serviceLink}>Detayları Gör →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.caseStudiesHeader}>
            <div>
              <span className="eyebrow">Referanslar</span>
              <h2>Vaka Çalışmaları</h2>
            </div>
            <Link href="/referanslar" className={`btnGhost ${styles.caseStudiesCta}`}>Tüm Referanslar →</Link>
          </Reveal>
          <Reveal delay={100}>
            <CaseStudiesCarousel />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionHeading}>
            <span className="eyebrow">Süreç</span>
            <h2>Keşiften teslime, dört net aşama</h2>
            <p>Her proje aynı disiplinle ilerler: netlik, sade tasarım, temiz kod ve zamanında teslim.</p>
          </Reveal>
          <div className={styles.processGrid}>
            {PROCESS.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className={styles.processStep}>
                  <span className={styles.processNumber}>{String(i + 1).padStart(2, "0")}</span>
                  <step.Icon className={styles.processIcon} />
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.altBg} section`}>
        <div className="container">
          <Reveal className={styles.sectionHeading}>
            <span className="eyebrow">Stüdyo Prensipleri</span>
            <h2>Neden Punto Teknoloji</h2>
          </Reveal>
          <div className={styles.principleGrid}>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className={styles.principleCard}>
                  <p.Icon className={styles.principleIcon} />
                  <h3>{p.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.sectionHeading}>
            <span className="eyebrow">Modern Teknoloji</span>
            <h2>Performans için doğru araçlar</h2>
            <p>Her proje farklıdır; işe en uygun teknolojiyi seçerek güvenilir ve ölçeklenebilir sonuçlar üretiyoruz.</p>
          </Reveal>
          {STACK_GROUPS.map((group, i) => (
            <Reveal key={group.label} delay={i * 90} className={styles.stackGroup}>
              <span className={styles.stackLabel}>{group.label}</span>
              <div className={styles.stackRow}>
                {group.logos.map(({ Logo, label }) => (
                  <Logo key={label} className={styles.stackLogo} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`${styles.altBg} section`}>
        <div className="container">
          <Reveal className={styles.sectionHeading}>
            <span className="eyebrow">SSS</span>
            <h2>Aklınıza Takılanlar</h2>
          </Reveal>
          <Reveal className={styles.faqList}>
            {FAQ.slice(0, 4).map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>
                  {item.q}
                  <span className={styles.faqMarker}>+</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </Reveal>
          <div className={styles.ctaRow}>
            <Link href="/sss" className="btnGhost">Tüm Soruları Gör →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
