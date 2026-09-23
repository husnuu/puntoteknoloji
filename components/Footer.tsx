import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import styles from "./Footer.module.css";
import { COMPANY } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.card}>
        <div className={styles.ctaBlock}>
          <span className={styles.ctaEyebrow}>Projeye Başla</span>
          <p className={styles.ctaText}>
            Ne inşa etmek istediğini anlat — birlikte en iyi yolu bulalım.
          </p>
          <Link href="/proje-baslat" className={`btnPrimary ${styles.ctaButton}`}>
            Projeye Başla
          </Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.themeRow}>
            <ThemeToggle />
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Şirket</h3>
            <Link href="/" className={styles.link}>Anasayfa</Link>
            <Link href="/hakkimizda" className={styles.link}>Hakkımızda</Link>
            <Link href="/referanslar" className={styles.link}>Referanslar</Link>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Hizmetler</h3>
            <Link href="/hizmetler/web-sitesi" className={styles.link}>Web Sitesi</Link>
            <Link href="/hizmetler/mobil-uygulama" className={styles.link}>Mobil Uygulama</Link>
            <Link href="/hizmetler/ozel-yazilim" className={styles.link}>Özel Yazılım</Link>
            <Link href="/hizmetler/e-ticaret" className={styles.link}>E-Ticaret</Link>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Başla</h3>
            <Link href="/proje-baslat" className={styles.link}>Projeye Başla</Link>
            <Link href="/iletisim" className={styles.link}>İletişim</Link>
            <Link href="/sss" className={styles.link}>SSS</Link>
          </div>
        </div>

        <div className={styles.legal}>
          <p className={styles.copyright}>© {new Date().getFullYear()} {COMPANY.name}. Tüm hakları saklıdır. {COMPANY.location}</p>
          <nav className={styles.legalLinks}>
            <Link href="/gizlilik-politikasi" className={styles.legalLink}>Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className={styles.legalLink}>Kullanım Şartları</Link>
            <Link href="/cerez-politikasi" className={styles.legalLink}>Çerez Politikası</Link>
            <Link href="/kvkk" className={styles.legalLink}>KVKK</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
