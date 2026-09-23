"use client";

import Link from "next/link";
import styles from "./CookieBanner.module.css";

function setConsent(value: "accepted" | "rejected") {
  document.body.classList.remove("show-cookie-banner");
  try {
    localStorage.setItem("punto-cookie-consent", value);
  } catch {}
}

export default function CookieBanner() {
  return (
    <div className={styles.banner} role="dialog" aria-label="Çerez bildirimi">
      <p className={styles.text}>
        Sitemizde yalnızca tema tercihiniz gibi temel işlevler için tarayıcı
        depolamasını kullanıyoruz. Detaylar için{" "}
        <Link href="/cerez-politikasi">Çerez Politikamıza</Link> göz
        atabilirsiniz.
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.reject} onClick={() => setConsent("rejected")}>
          Reddet
        </button>
        <button type="button" className={`btnPrimary ${styles.button}`} onClick={() => setConsent("accepted")}>
          Kabul Et
        </button>
      </div>
    </div>
  );
}
