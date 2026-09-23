"use client";

import Link from "next/link";
import styles from "./CookieBanner.module.css";

function acceptCookies() {
  document.body.classList.remove("show-cookie-banner");
  try {
    localStorage.setItem("punto-cookie-consent", "accepted");
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
      <button type="button" className={`btnPrimary ${styles.button}`} onClick={acceptCookies}>
        Anladım
      </button>
    </div>
  );
}
