import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import {
  WebIcon,
  MobileIcon,
  SoftwareIcon,
  EcommerceIcon,
  ChatbotIcon,
  AiIcon,
} from "@/components/illustrations/ServiceIcons";

export const metadata: Metadata = {
  title: "Hizmetler — Punto Teknoloji",
  description: "Punto Teknoloji'nin sunduğu web, mobil, özel yazılım, e-ticaret, chatbot ve yapay zeka hizmetleri.",
};

const SERVICES = [
  {
    Icon: WebIcon,
    title: "Web Sitesi",
    desc: "Kurumsal siteden özel web uygulamalarına kadar, performans ve SEO odaklı çözümler geliştiriyoruz. Her site, hızlı yüklenmesi ve arama motorlarında görünür olması için sıfırdan optimize edilir.",
    features: [
      "Kurumsal & tanıtım siteleri",
      "Özel web uygulamaları",
      "SEO dostu mimari",
      "Yönetim paneli & içerik editörü",
      "Çoklu dil desteği",
    ],
  },
  {
    Icon: MobileIcon,
    title: "Mobil Uygulama",
    desc: "iOS ve Android için akıcı, kullanıcı dostu native ve hibrit uygulamalar tasarlıyor ve geliştiriyoruz. Fikir aşamasından mağaza yayınına kadar süreci uçtan uca yönetiyoruz.",
    features: [
      "iOS & Android",
      "Native ve hibrit geliştirme",
      "Uçtan uca ürün tasarımı",
      "Push bildirim & anlık senkronizasyon",
      "App Store / Play Store yayın süreci",
    ],
  },
  {
    Icon: SoftwareIcon,
    title: "Özel Yazılım",
    desc: "Rezervasyon sistemleri, iç araçlar ve iş süreçlerinize özel yazılımlar geliştirerek manuel işleri azaltıyoruz. Ekibinizin gerçekten kullandığı, bakımı kolay sistemler kurarız.",
    features: [
      "Rezervasyon & iş sistemleri",
      "İç araçlar ve otomasyon",
      "Süreçlere özel mimari",
      "Üçüncü parti entegrasyonlar",
      "Rol tabanlı yetkilendirme",
    ],
  },
  {
    Icon: EcommerceIcon,
    title: "E-Ticaret",
    desc: "Dönüşüm odaklı, güvenli ve yönetimi kolay satış altyapıları kurarak online satışlarınızı büyütüyoruz. Ödeme, kargo ve stok süreçlerini tek bir sistemde birleştiriyoruz.",
    features: [
      "Ürün & sipariş yönetimi",
      "Ödeme entegrasyonları",
      "Dönüşüm odaklı tasarım",
      "Stok & kargo takibi",
      "Kampanya ve indirim kodları",
    ],
  },
  {
    Icon: ChatbotIcon,
    title: "Chatbot & AI Asistanları",
    desc: "Web sitenize veya uygulamanıza entegre, müşteri sorularını yanıtlayan ve destek yükünü azaltan yapay zeka destekli chatbotlar geliştiriyoruz.",
    features: [
      "7/24 müşteri desteği",
      "WhatsApp & web entegrasyonu",
      "Sık sorulan sorular otomasyonu",
      "Randevu & sipariş asistanı",
      "Çoklu dil desteği",
    ],
  },
  {
    Icon: AiIcon,
    title: "Yapay Zeka Entegrasyonları",
    desc: "Mevcut sistemlerinize yapay zeka destekli otomasyon ekleyerek tekrarlayan işleri azaltıyor, karar süreçlerinizi hızlandırıyoruz.",
    features: [
      "İş süreci otomasyonu",
      "İçerik & metin üretimi",
      "Veri analizi ve raporlama",
      "Mevcut yazılıma AI entegrasyonu",
      "Özel model & API entegrasyonları",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <span className="eyebrow">Hizmetler</span>
        <h1>İşine uygun sistemi birlikte kuruyoruz</h1>
        <p>Her proje farklıdır. İhtiyacına göre doğru teknolojiyi seçer, uçtan uca sen adına yönetiriz.</p>
      </section>

      <section className="container section">
        <div className={styles.list}>
          {SERVICES.map(({ Icon, title, desc, features }) => (
            <div key={title} className={styles.row}>
              <Icon className={styles.icon} />
              <div>
                <h2>{title}</h2>
                <p>{desc}</p>
                <ul className={styles.features}>
                  {features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/proje-baslat" className="btnPrimary">Projeni Anlat</Link>
        </div>
      </section>
    </>
  );
}
