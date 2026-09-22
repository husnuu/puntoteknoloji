"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";
import PuntoLogo from "./PuntoLogo";

const NAV_LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <PuntoLogo className={styles.logoMark} />
          PUN<span className={styles.logoAccent}>TO</span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <span className={styles.mobileCtaWrap}>
            <Link href="/proje-baslat" className="btnPrimary" onClick={() => setOpen(false)}>
              Projeye Başla
            </Link>
          </span>
        </nav>

        <span className={styles.desktopCtaWrap}>
          <Link href="/proje-baslat" className="btnPrimary">
            Projeye Başla
          </Link>
        </span>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
      </div>
    </header>
  );
}
