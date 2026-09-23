import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import TechPill from "@/components/TechPill";
import { SERVICES, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — Punto Teknoloji`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className={`container ${styles.hero}`}>
        <p className={styles.breadcrumb}>
          <Link href="/hizmetler">Hizmetler</Link> / {service.title}
        </p>
        <div className={styles.heroInner}>
          <div>
            <span className="eyebrow">{service.eyebrow}</span>
            <h1>{service.title}</h1>
            <p className={styles.lead}>{service.paragraphs[0]}</p>
            <div className={styles.heroActions}>
              <Link href="/proje-baslat" className="btnPrimary">Projeye Başla</Link>
              <Link href="/hizmetler" className="btnGhost">Tüm Hizmetler</Link>
            </div>
          </div>
          <service.Scene className={styles.illustration} />
        </div>
      </section>

      <section className="container section">
        <div className={styles.body}>
          {service.paragraphs.slice(1).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Neler Sunuyoruz</h2>
        <ul className={styles.featureGrid}>
          {service.features.map((f) => (
            <li key={f}>
              <span className={styles.checkIcon}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className={`section`} style={{ backgroundColor: "var(--c-secondary)" }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Kullandığımız Teknolojiler</h2>
          <div className={styles.techRow}>
            {service.technologies.map((t) => (
              <TechPill key={t.label} label={t.label} Logo={t.Logo} />
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className={styles.sectionTitle}>Diğer Hizmetler</h2>
        <div className={styles.otherServices}>
          {otherServices.map((s) => (
            <Link key={s.slug} href={`/hizmetler/${s.slug}`} className={styles.otherServiceCard}>
              {s.title}
            </Link>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/proje-baslat" className="btnPrimary">Projeni Anlat</Link>
        </div>
      </section>
    </>
  );
}
