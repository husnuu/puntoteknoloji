import Link from "next/link";
import styles from "./page.module.css";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import CaseStudiesCarousel from "@/components/CaseStudiesCarousel";
import { SERVICES } from "@/lib/services";
import {
  HtmlLogo,
  CssLogo,
  JsLogo,
  ReactLogo,
  AngularLogo,
  VueLogo,
  NextjsLogo,
  NodeLogo,
  SanityLogo,
  ContentfulLogo,
  StoryblokLogo,
  CloudflareLogo,
  VercelLogo,
  NetlifyLogo,
  FirebaseLogo,
  AwsLogo,
} from "@/components/illustrations/TechLogos";
import {
  DiscoveryScene,
  DesignScene,
  ProductionScene,
  DeliveryScene,
} from "@/components/illustrations/ProcessScenes";
import {
  OriginalDesignScene,
  MobileFirstScene,
  FastDeliveryScene,
  AestheticScene,
  MaintainableScene,
} from "@/components/illustrations/PrincipleScenes";

const STACK_GROUPS = [
  {
    label: "Essentials",
    logos: [
      { Logo: HtmlLogo, label: "HTML5" },
      { Logo: CssLogo, label: "CSS3" },
      { Logo: JsLogo, label: "JavaScript" },
      { Logo: ReactLogo, label: "React" },
      { Logo: AngularLogo, label: "Angular" },
      { Logo: VueLogo, label: "Vue.js" },
    ],
  },
  {
    label: "Data Sources",
    logos: [
      { Logo: SanityLogo, label: "Sanity" },
      { Logo: ContentfulLogo, label: "Contentful" },
      { Logo: StoryblokLogo, label: "Storyblok" },
    ],
  },
  {
    label: "Build",
    logos: [
      { Logo: NextjsLogo, label: "Next.js" },
      { Logo: ReactLogo, label: "React" },
      { Logo: NodeLogo, label: "Node.js" },
    ],
  },
  {
    label: "Deploy & CDN",
    logos: [
      { Logo: CloudflareLogo, label: "Cloudflare" },
      { Logo: VercelLogo, label: "Vercel" },
      { Logo: NetlifyLogo, label: "Netlify" },
      { Logo: FirebaseLogo, label: "Firebase" },
      { Logo: AwsLogo, label: "AWS" },
    ],
  },
];

const PROCESS = [
  { Icon: DiscoveryScene, title: "Keşif", desc: "İhtiyacını, hedeflerini ve kullanıcılarını birlikte netleştiriyoruz." },
  { Icon: DesignScene, title: "Tasarım", desc: "Markana uygun, sade ve kullanılabilir bir arayüz kuruyoruz." },
  { Icon: ProductionScene, title: "Üretim", desc: "Sürdürülebilir, test edilmiş ve temiz kodla ürünü hayata geçiriyoruz." },
  { Icon: DeliveryScene, title: "Teslim", desc: "Yayına alıyor, sonrasında da yanında olmaya devam ediyoruz." },
];

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

      <section className={`${styles.altBg} section`}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="eyebrow">Neler Yapıyoruz</span>
            <h2>Fikrinizi çalışan bir ürüne dönüştürüyoruz</h2>
            <p>İster küçük bir tanıtım sitesi, ister uçtan uca bir platform olsun — ihtiyacına uygun çözümü birlikte kuruyoruz.</p>
          </div>
          <div className={styles.serviceGrid}>
            {SERVICES.map(({ slug, title, shortDesc, Scene }) => (
              <Link key={slug} href={`/hizmetler/${slug}`} className={styles.serviceCard}>
                <Scene className={styles.serviceIcon} />
                <h3>{title}</h3>
                <p>{shortDesc}</p>
                <span className={styles.serviceLink}>Detayları Gör →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.caseStudiesHeader}>
            <div>
              <span className="eyebrow">Referanslar</span>
              <h2>Vaka Çalışmaları</h2>
            </div>
            <Link href="/referanslar" className={`btnGhost ${styles.caseStudiesCta}`}>Tüm Referanslar →</Link>
          </div>
          <CaseStudiesCarousel />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="eyebrow">Süreç</span>
            <h2>Keşiften teslime, dört net aşama</h2>
            <p>Her proje aynı disiplinle ilerler: netlik, sade tasarım, temiz kod ve zamanında teslim.</p>
          </div>
          <div className={styles.processGrid}>
            {PROCESS.map((step, i) => (
              <div key={step.title} className={styles.processStep}>
                <span className={styles.processNumber}>{String(i + 1).padStart(2, "0")}</span>
                <step.Icon className={styles.processIcon} />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.altBg} section`}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="eyebrow">Stüdyo Prensipleri</span>
            <h2>Neden Punto Teknoloji</h2>
          </div>
          <div className={styles.principleGrid}>
            {PRINCIPLES.map((p) => (
              <div key={p.title} className={styles.principleCard}>
                <p.Icon className={styles.principleIcon} />
                <h3>{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className="eyebrow">Modern Teknoloji</span>
            <h2>Performans için doğru araçlar</h2>
            <p>Her proje farklıdır; işe en uygun teknolojiyi seçerek güvenilir ve ölçeklenebilir sonuçlar üretiyoruz.</p>
          </div>
          {STACK_GROUPS.map((group) => (
            <div key={group.label} className={styles.stackGroup}>
              <span className={styles.stackLabel}>{group.label}</span>
              <div className={styles.stackRow}>
                {group.logos.map(({ Logo, label }) => (
                  <Logo key={label} className={styles.stackLogo} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
