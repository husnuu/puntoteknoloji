import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import TechPill from "@/components/TechPill";
import { REFERENCES, getReferenceBySlug } from "@/lib/references";

export function generateStaticParams() {
  return REFERENCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const reference = getReferenceBySlug(slug);
  if (!reference) return {};
  return {
    title: `${reference.title} — Punto Teknoloji`,
    description: reference.desc,
  };
}

export default async function ReferenceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reference = getReferenceBySlug(slug);
  if (!reference) notFound();

  const otherReferences = REFERENCES.filter((r) => r.slug !== reference.slug);

  return (
    <>
      <section className={`container ${styles.hero}`}>
        <p className={styles.breadcrumb}>
          <Link href="/referanslar">Referanslar</Link> / {reference.title}
        </p>
        <span className={styles.badge}>{reference.category} · {reference.type}</span>
        <h1>{reference.title}</h1>
        <p className={styles.lead}>{reference.desc}</p>
        <div className={styles.heroActions}>
          {reference.url && (
            <a className="btnPrimary" href={reference.url} target="_blank" rel="noopener noreferrer">
              Siteyi Görüntüle
            </a>
          )}
          <Link href="/proje-baslat" className="btnGhost">Benzer Bir Proje Başlat</Link>
        </div>

        <div className={styles.imageWrap}>
          <reference.Scene className={styles.image} />
        </div>
      </section>

      <section className="container section">
        <div className={styles.body}>
          <div className={styles.bodyCard}>
            <h2>Zorluk</h2>
            <p>{reference.challenge}</p>
          </div>
          <div className={styles.bodyCard}>
            <h2>Çözüm</h2>
            <p>{reference.solution}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--c-secondary)" }}>
        <div className="container">
          <h2>Kullanılan Teknolojiler</h2>
          <div className={styles.techRow}>
            {reference.technologies.map((t) => (
              <TechPill key={t.label} label={t.label} Logo={t.Logo} />
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>Diğer Projeler</h2>
        <div className={styles.otherProjects}>
          {otherReferences.map((r) => (
            <Link key={r.slug} href={`/referanslar/${r.slug}`} className={styles.otherProjectCard}>
              {r.title}
            </Link>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/proje-baslat" className="btnPrimary">Sıradaki Proje Sen Olabilirsin</Link>
        </div>
      </section>
    </>
  );
}
