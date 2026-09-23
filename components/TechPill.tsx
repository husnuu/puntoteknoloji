import type { ComponentType } from "react";
import styles from "./TechPill.module.css";

export default function TechPill({
  label,
  Logo,
}: {
  label: string;
  Logo?: ComponentType<{ className?: string }>;
}) {
  return (
    <span className={styles.pill}>
      {Logo && <Logo className={styles.logo} />}
      <span>{label}</span>
    </span>
  );
}
