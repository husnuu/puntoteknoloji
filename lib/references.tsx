import type { ComponentType } from "react";
import {
  BoatTourScene,
  FitnessAppScene,
  YachtScene,
  FerryScene,
  StudioScene,
} from "@/components/illustrations/ReferenceScenes";
import { NextjsLogo, ReactLogo, TsLogo, NodeLogo } from "@/components/illustrations/TechLogos";
import type { Technology } from "@/lib/services";

export type Reference = {
  slug: string;
  title: string;
  headline: string;
  type: string;
  category: string;
  desc: string;
  challenge: string;
  solution: string;
  url: string | null;
  Scene: ComponentType<{ className?: string }>;
  technologies: Technology[];
};

export const REFERENCES: Reference[] = [
  {
    slug: "netfitapp",
    title: "NetFitApp",
    headline: "Kullanıcıların antrenmanlarını takip ettiği bir fitness uygulaması",
    type: "Mobil",
    category: "Sağlık & Fitness",
    desc: "Kullanıcıların antrenman programlarını takip edebildiği bir fitness uygulaması.",
    challenge:
      "Kullanıcıların antrenman programlarını tek bir yerden takip edebileceği, kullanımı kolay bir mobil deneyime ihtiyaç vardı.",
    solution:
      "iOS ve Android için, antrenman takibi ve ilerleme görselleştirmesi içeren bir fitness uygulaması geliştirdik. Fikir aşamasından mağaza yayınına kadar süreci uçtan uca yönettik.",
    url: "https://netfitapp.com/",
    Scene: FitnessAppScene,
    technologies: [
      { label: "React", Logo: ReactLogo },
      { label: "TypeScript", Logo: TsLogo },
      { label: "React Native" },
      { label: "Node.js", Logo: NodeLogo },
    ],
  },
  {
    slug: "cesme-tekne-turu",
    title: "Çeşme Tekne Turu",
    headline: "Çeşme'nin tekne turu işletmesi için uçtan uca bir rezervasyon deneyimi",
    type: "Web",
    category: "Turizm",
    desc: "Çeşme'de tekne turu rezervasyonu ve online ödeme alınabilen bir tanıtım ve rezervasyon sitesi.",
    challenge:
      "Tekne turu rezervasyonları telefon ve mesajlar üzerinden takip ediliyordu; bu da karışıklığa ve zaman kaybına yol açıyordu.",
    solution:
      "Turlarını, müsaitlik takvimini, rezervasyon ve online ödeme alma sürecini tek bir yerden yönetebildikleri bir site kurduk.",
    url: "https://cesmetekneturu.net/",
    Scene: BoatTourScene,
    technologies: [
      { label: "Next.js", Logo: NextjsLogo },
      { label: "TypeScript", Logo: TsLogo },
      { label: "Stripe" },
    ],
  },
  {
    slug: "cesme-yachting",
    title: "Çeşme Yachting",
    headline: "Yat kiralama işini dijitalde profesyonel bir vitrine taşıdık",
    type: "Web",
    category: "Turizm & Yat",
    desc: "Yat kiralama ve charter hizmetleri sunan bir işletme için kurumsal site.",
    challenge:
      "Yat kiralama filosunu ve charter hizmetlerini doğru şekilde yansıtan profesyonel bir dijital vitrin eksikti.",
    solution:
      "Filoyu ve hizmetleri kurumsal kimliğe uygun şekilde temsil eden, keşif ve iletişimi kolaylaştıran bir web sitesi tasarladık.",
    url: "https://cesmeyachting.com/",
    Scene: YachtScene,
    technologies: [
      { label: "Next.js", Logo: NextjsLogo },
      { label: "React", Logo: ReactLogo },
    ],
  },
  {
    slug: "feribot-dunyasi",
    title: "Feribot Dünyası",
    headline: "Feribot bileti ararken yaşanan kafa karışıklığını ortadan kaldırdık",
    type: "Web",
    category: "Ulaşım",
    desc: "Feribot bilet arama, rezervasyon ve online ödeme alınabilen bir platform.",
    challenge:
      "Kullanıcılar feribot bileti ararken sefer saatlerine ve fiyat bilgisine kolayca ulaşamıyordu.",
    solution:
      "Sefer arama, bilet rezervasyonu ve online ödeme alma sürecini sadeleştiren bir platform tasarladık ve geliştirdik.",
    url: "https://feribotdunyasi.com/",
    Scene: FerryScene,
    technologies: [
      { label: "Next.js", Logo: NextjsLogo },
      { label: "TypeScript", Logo: TsLogo },
      { label: "Stripe" },
    ],
  },
  {
    slug: "bora-avci-studyo",
    title: "Bora Avcı Stüdyo",
    headline: "Bir DJ & prodüksiyon stüdyosunun işini en iyi anlatan portföy sitesi",
    type: "Web",
    category: "Yaratıcı Endüstri",
    desc: "DJ ve prodüksiyon stüdyosu için hazırlanan tanıtım ve portföy sitesi.",
    challenge:
      "DJ ve prodüksiyon stüdyosunun çalışmalarını ve kimliğini yansıtan bir portföy sitesi yoktu.",
    solution:
      "Çalışmalarının öne çıktığı, sade ve etkileyici bir tanıtım ve portföy sitesi tasarladık.",
    url: "https://www.boraavci.com/",
    Scene: StudioScene,
    technologies: [
      { label: "Next.js", Logo: NextjsLogo },
      { label: "React", Logo: ReactLogo },
    ],
  },
];

export function getReferenceBySlug(slug: string) {
  return REFERENCES.find((r) => r.slug === slug);
}
