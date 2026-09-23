import { SERVICES } from "@/lib/services";
import { TECH_COUNT } from "@/lib/techstack";
import type { Stat } from "@/components/StatsCounter";

export const STATS: Stat[] = [
  { value: 20, suffix: "+", label: "Teslim Edilen Proje" },
  { value: SERVICES.length, label: "Hizmet Alanı" },
  { value: TECH_COUNT, suffix: "+", label: "Kullanılan Teknoloji" },
];
