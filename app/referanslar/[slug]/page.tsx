import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { SearchIcon, CodeIcon, RocketIcon } from "@/components/illustrations/LineIcons";
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

        <div className={styles.metaRow}>
          <span className={styles.badge}>{reference.category} · {reference.type}</span>
          <span className={styles.status}>
            <span className={styles.statusDot} />
            {reference.status}
          </span>
        </div>

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
      </section>

      <section className="container">
        <div className={styles.imageWrap}>
          <reference.Scene className={styles.image} />
        </div>

        <div className={styles.layout}>
          <div>
            <div className={styles.narrative}>
              <div className={styles.narrativeItem}>
                <span className={styles.narrativeIcon}><SearchIcon /></span>
                <div>
                  <h2>Zorluk</h2>
                  <p>{reference.challenge}</p>
                </div>
              </div>
              <div className={styles.narrativeItem}>
                <span className={styles.narrativeIcon}><CodeIcon /></span>
                <div>
                  <h2>Çözüm</h2>
                  <p>{reference.solution}</p>
                </div>
              </div>
              <div className={styles.narrativeItem}>
                <span className={styles.narrativeIcon}><RocketIcon /></span>
                <div>
                  <h2>Sonuç</h2>
                  <p>{reference.outcome}</p>
                </div>
              </div>
            </div>

            <h2 className={styles.highlightsTitle}>Öne Çıkan Özellikler</h2>
            <ul className={styles.highlightGrid}>
              {reference.highlights.map((h) => (
                <li key={h}>
                  <span className={styles.checkIcon}>✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.infoCard}>
              <h3>Proje Bilgileri</h3>
              <div className={styles.infoList}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Sektör</span>
                  <span className={styles.infoValue}>{reference.category}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Proje Türü</span>
                  <span className={styles.infoValue}>{reference.type}</span>
                </div>
                {reference.year && (
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Yıl</span>
                    <span className={styles.infoValue}>{reference.year}</span>
                  </div>
                )}
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Durum</span>
                  <span className={styles.infoValue}>{reference.status}</span>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Teknolojiler</span>
              </div>
              <div className={styles.techTags} style={{ marginTop: "0.5rem" }}>
                {reference.technologies.map((t) => (
                  <span key={t.label} className={styles.techTag}>{t.label}</span>
                ))}
              </div>
            </div>

            <div className={styles.ctaCard}>
              <p>Böyle bir projeniz mi var?</p>
              <Link href="/proje-baslat" className="btnPrimary">Projeye Başla</Link>
            </div>
          </aside>
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
