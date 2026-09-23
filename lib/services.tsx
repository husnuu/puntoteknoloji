import type { ComponentType } from "react";
import {
  WebScene,
  MobileScene,
  SoftwareScene,
  EcommerceScene,
  ChatbotScene,
  VoiceAssistantScene,
} from "@/components/illustrations/ServiceScenes";
import {
  HtmlLogo,
  CssLogo,
  JsLogo,
  ReactLogo,
  NextjsLogo,
  TsLogo,
  NodeLogo,
} from "@/components/illustrations/TechLogos";

export type Technology = {
  label: string;
  Logo?: ComponentType<{ className?: string }>;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  shortDesc: string;
  paragraphs: string[];
  Scene: ComponentType<{ className?: string }>;
  features: string[];
  technologies: Technology[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "web-sitesi",
    title: "Web Sitesi",
    eyebrow: "Web Geliştirme",
    shortDesc: "Performans odaklı, SEO dostu ve hızlı yüklenen kurumsal ve tanıtım siteleri.",
    paragraphs: [
      "Kurumsal tanıtım sitelerinden özel web uygulamalarına kadar, işletmenizin ihtiyacına uygun bir web varlığı kuruyoruz. Her proje performans, SEO ve kullanılabilirlik göz önünde bulundurularak sıfırdan tasarlanır.",
      "İçerik yönetimi kolay, hızlı yüklenen ve mobil uyumlu siteler geliştiriyoruz. Yayına aldıktan sonra da yanınızdayız — güncelleme ve bakım desteği sunuyoruz.",
    ],
    Scene: WebScene,
    features: [
      "Kurumsal & tanıtım siteleri",
      "Özel web uygulamaları",
      "SEO dostu mimari",
      "Yönetim paneli & içerik editörü",
      "Çoklu dil desteği",
    ],
    technologies: [
      { label: "HTML5", Logo: HtmlLogo },
      { label: "CSS3", Logo: CssLogo },
      { label: "JavaScript", Logo: JsLogo },
      { label: "TypeScript", Logo: TsLogo },
      { label: "React", Logo: ReactLogo },
      { label: "Next.js", Logo: NextjsLogo },
    ],
  },
  {
    slug: "mobil-uygulama",
    title: "Mobil Uygulama",
    eyebrow: "Mobil Geliştirme",
    shortDesc: "iOS ve Android için akıcı, kullanıcı dostu native ve hibrit uygulamalar.",
    paragraphs: [
      "iOS ve Android için akıcı, kullanıcı dostu uygulamalar tasarlıyor ve geliştiriyoruz. Fikir aşamasından mağaza yayınına kadar tüm süreci uçtan uca yönetiyoruz.",
      "Native performans gerektiren projelerde platformun kendi dilinde, çapraz platform uygun olan projelerde ise tek kod tabanıyla her iki platformu da kapsayan çözümler sunuyoruz.",
    ],
    Scene: MobileScene,
    features: [
      "iOS & Android",
      "Native ve hibrit geliştirme",
      "Uçtan uca ürün tasarımı",
      "Push bildirim & anlık senkronizasyon",
      "App Store / Play Store yayın süreci",
    ],
    technologies: [
      { label: "React", Logo: ReactLogo },
      { label: "TypeScript", Logo: TsLogo },
      { label: "React Native" },
      { label: "Swift" },
      { label: "Kotlin" },
      { label: "Expo" },
    ],
  },
  {
    slug: "ozel-yazilim",
    title: "Özel Yazılım",
    eyebrow: "Özel Yazılım Geliştirme",
    shortDesc: "İş süreçlerinize özel olarak tasarlanmış, ölçeklenebilir yazılım çözümleri.",
    paragraphs: [
      "Rezervasyon sistemleri, iç araçlar ve iş süreçlerinize özel yazılımlar geliştirerek manuel işleri azaltıyoruz. Sistemi kuran ekiple doğrudan çalışırsınız.",
      "Ekibinizin gerçekten kullandığı, bakımı kolay ve büyüyebilen sistemler kurarız — kısa vadeli hızlı çözümler değil, uzun ömürlü altyapılar inşa ederiz.",
    ],
    Scene: SoftwareScene,
    features: [
      "Rezervasyon & iş sistemleri",
      "İç araçlar ve otomasyon",
      "Süreçlere özel mimari",
      "Üçüncü parti entegrasyonlar",
      "Rol tabanlı yetkilendirme",
    ],
    technologies: [
      { label: "Node.js", Logo: NodeLogo },
      { label: "TypeScript", Logo: TsLogo },
      { label: "Next.js", Logo: NextjsLogo },
      { label: "PostgreSQL" },
      { label: "REST API" },
    ],
  },
  {
    slug: "e-ticaret",
    title: "E-Ticaret",
    eyebrow: "E-Ticaret Çözümleri",
    shortDesc: "Dönüşüm odaklı, güvenli ve yönetimi kolay satış altyapıları.",
    paragraphs: [
      "Dönüşüm odaklı, güvenli ve yönetimi kolay satış altyapıları kurarak online satışlarınızı büyütüyoruz.",
      "Ödeme, kargo ve stok süreçlerini tek bir sistemde birleştiriyor; ürün yönetiminden kampanya oluşturmaya kadar her şeyi kolayca yönetebileceğiniz bir panel sunuyoruz.",
    ],
    Scene: EcommerceScene,
    features: [
      "Ürün & sipariş yönetimi",
      "Ödeme entegrasyonları",
      "Dönüşüm odaklı tasarım",
      "Stok & kargo takibi",
      "Kampanya ve indirim kodları",
    ],
    technologies: [
      { label: "Next.js", Logo: NextjsLogo },
      { label: "Node.js", Logo: NodeLogo },
      { label: "TypeScript", Logo: TsLogo },
      { label: "Stripe" },
      { label: "PostgreSQL" },
    ],
  },
  {
    slug: "chatbot",
    title: "Chatbot",
    eyebrow: "Chatbot & AI Asistanları",
    shortDesc: "Müşteri sorularını yanıtlayan, destek yükünü azaltan yapay zeka destekli chatbotlar.",
    paragraphs: [
      "Web sitenize veya WhatsApp gibi kanallara entegre, müşteri sorularını yanıtlayan yapay zeka destekli chatbotlar geliştiriyoruz.",
      "Chatbotlar sık sorulan soruları yanıtlar, randevu ve sipariş süreçlerinde yönlendirme yapar ve destek ekibinizin yükünü azaltır — gerektiğinde konuşmayı bir insana devreder.",
    ],
    Scene: ChatbotScene,
    features: [
      "7/24 müşteri desteği",
      "WhatsApp & web entegrasyonu",
      "Sık sorulan sorular otomasyonu",
      "Randevu & sipariş asistanı",
      "Çoklu dil desteği",
    ],
    technologies: [
      { label: "Node.js", Logo: NodeLogo },
      { label: "TypeScript", Logo: TsLogo },
      { label: "OpenAI API" },
      { label: "Claude API" },
      { label: "WhatsApp Business API" },
    ],
  },
  {
    slug: "ses-asistani",
    title: "Ses Asistanı",
    eyebrow: "Sesli Yapay Zeka",
    shortDesc: "Sesli komutları anlayan ve yanıtlayan yapay zeka destekli ses asistanları.",
    paragraphs: [
      "Sesli komutları anlayan ve doğal bir şekilde yanıtlayan yapay zeka destekli ses asistanları geliştiriyoruz.",
      "Telefon üzerinden gelen çağrıları karşılama, randevu alma veya sesli komutlarla uygulama içinde gezinme gibi senaryolar için konuşma tabanlı arayüzler kurarız.",
    ],
    Scene: VoiceAssistantScene,
    features: [
      "Doğal dil ile sesli komut anlama",
      "Telefon çağrısı karşılama",
      "Metinden sese & sesten metne dönüşüm",
      "Uygulama içi sesli asistan entegrasyonu",
      "Çoklu dil desteği",
    ],
    technologies: [
      { label: "Node.js", Logo: NodeLogo },
      { label: "Speech-to-Text" },
      { label: "Text-to-Speech" },
      { label: "Claude API" },
      { label: "WebRTC" },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
