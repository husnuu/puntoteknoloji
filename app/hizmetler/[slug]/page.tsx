import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Reveal from "@/components/Reveal";
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
        <Reveal className={styles.body}>
          {service.paragraphs.slice(1).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <h2 className={styles.sectionTitle}>Neler Sunuyoruz</h2>
        <div className={styles.featureGrid}>
          {service.features.map((f, i) => (
            <Reveal key={f} delay={i * 50} className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              {f}
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`section`} style={{ backgroundColor: "var(--c-secondary)" }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Kullandığımız Teknolojiler</h2>
          <div className={styles.techRow}>
            {service.technologies.map((t, i) => (
              <Reveal key={t.label} delay={i * 50}>
                <TechPill label={t.label} Logo={t.Logo} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className={styles.sectionTitle}>Diğer Hizmetler</h2>
        <div className={styles.otherServices}>
          {otherServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link href={`/hizmetler/${s.slug}`} className={styles.otherServiceCard}>
                {s.title}
              </Link>
            </Reveal>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/proje-baslat" className="btnPrimary">Projeni Anlat</Link>
        </div>
      </section>
    </>
  );
}
