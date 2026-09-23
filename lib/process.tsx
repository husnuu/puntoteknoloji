import type { ComponentType } from "react";
import {
  DiscoveryScene,
  DesignScene,
  ProductionScene,
  DeliveryScene,
} from "@/components/illustrations/ProcessScenes";

export type ProcessStep = {
  title: string;
  desc: string;
  Icon: ComponentType<{ className?: string }>;
};

export const PROCESS: ProcessStep[] = [
  { Icon: DiscoveryScene, title: "Keşif", desc: "İhtiyacını, hedeflerini ve kullanıcılarını birlikte netleştiriyoruz." },
  { Icon: DesignScene, title: "Tasarım", desc: "Markana uygun, sade ve kullanılabilir bir arayüz kuruyoruz." },
  { Icon: ProductionScene, title: "Üretim", desc: "Sürdürülebilir, test edilmiş ve temiz kodla ürünü hayata geçiriyoruz." },
  { Icon: DeliveryScene, title: "Teslim", desc: "Yayına alıyor, sonrasında da yanında olmaya devam ediyoruz." },
];
