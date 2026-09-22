import type { Metadata } from "next";
import styles from "./page.module.css";
import ContactForm from "@/components/ContactForm";
import { ContactIllustration } from "@/components/illustrations/AboutIllustrations";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, INSTAGRAM_URL, INSTAGRAM_LABEL, COMPANY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "İletişim — Punto Teknoloji",
  description: "Sorular, iş birlikleri veya başka bir şey için mesaj gönderin.",
};

export default function ContactPage() {
  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.header}>
        <span className="eyebrow">İletişim</span>
        <h1>İletişim</h1>
        <p>Sorular, iş birlikleri veya başka bir şey — bize mesaj gönderin.</p>
      </div>

      <div className={styles.grid}>
        <ContactForm />

        <div>
          <ContactIllustration className={styles.illustration} />
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>E-posta</span>
              <span className={styles.infoValue}>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Telefon</span>
              <span className={styles.infoValue}>
                <a href={`tel:${CONTACT_PHONE_HREF}`}>{CONTACT_PHONE}</a>
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Instagram</span>
              <span className={styles.infoValue}>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">{INSTAGRAM_LABEL}</a>
              </span>
            </div>

            <div className={styles.companyBlock}>
              <p className={styles.companyName}>{COMPANY.name.toUpperCase()}</p>
              <p className={styles.addressLine}>{COMPANY.tagline}</p>
              <p className={styles.addressLine}>{COMPANY.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
