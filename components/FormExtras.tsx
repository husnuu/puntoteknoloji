import { HONEYPOT_FIELD, type FormResult } from "@/lib/forms";
import styles from "./FormExtras.module.css";

/** Off-screen checkbox that humans never see; submissions that tick it are silently dropped. */
export function Honeypot() {
  return (
    <div className={styles.honeypot} aria-hidden="true">
      <label>
        Bu alanı boş bırakın
        <input type="checkbox" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function FormStatus({ result, successText }: { result: FormResult | null; successText: string }) {
  return (
    <div role="status" aria-live="polite">
      {result && (
        <p className={`${styles.status} ${result.ok ? styles.success : styles.error}`}>
          <span className={styles.statusIcon} aria-hidden="true">{result.ok ? "✓" : "!"}</span>
          {result.ok ? successText : result.error}
        </p>
      )}
    </div>
  );
}
