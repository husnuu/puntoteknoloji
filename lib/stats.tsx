import { SERVICES } from "@/lib/services";
import { REFERENCES } from "@/lib/references";
import { TECH_COUNT } from "@/lib/techstack";
import type { Stat } from "@/components/StatsCounter";

export const STATS: Stat[] = [
  { value: REFERENCES.length, suffix: "+", label: "Teslim Edilen Proje" },
  { value: SERVICES.length, label: "Hizmet Alanı" },
  { value: TECH_COUNT, suffix: "+", label: "Kullanılan Teknoloji" },
];
