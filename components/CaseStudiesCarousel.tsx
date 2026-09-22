"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./CaseStudiesCarousel.module.css";
import {
  BoatTourScene,
  FitnessAppScene,
  YachtScene,
  FerryScene,
  StudioScene,
} from "./illustrations/ReferenceScenes";

const CASE_STUDIES = [
  {
    Scene: FitnessAppScene,
    category: "Sağlık & Fitness",
    title: "Kullanıcıların antrenmanlarını takip ettiği bir fitness uygulaması",
    desc: "Fikir aşamasından mağaza yayınına kadar süreci uçtan uca yönettiğimiz bir mobil uygulama.",
    url: null,
  },
  {
    Scene: BoatTourScene,
    category: "Turizm",
    title: "Çeşme'nin tekne turu işletmesi için uçtan uca bir rezervasyon deneyimi",
    desc: "Turlarını, müsaitlik takvimini, rezervasyon ve online ödeme alma sürecini tek bir yerden yönetebildikleri bir site kurduk.",
    url: "https://cesmetekneturu.net/",
  },
  {
    Scene: YachtScene,
    category: "Turizm & Yat",
    title: "Yat kiralama işini dijitalde profesyonel bir vitrine taşıdık",
    desc: "Filoyu ve charter hizmetlerini doğru şekilde temsil eden kurumsal bir web sitesi geliştirdik.",
    url: "https://cesmeyachting.com/",
  },
  {
    Scene: FerryScene,
    category: "Ulaşım",
    title: "Feribot bileti ararken yaşanan kafa karışıklığını ortadan kaldırdık",
    desc: "Sefer arama, bilet rezervasyonu ve online ödeme alma sürecini sadeleştiren bir platform tasarladık ve geliştirdik.",
    url: "https://feribotdunyasi.com/",
  },
  {
    Scene: StudioScene,
    category: "Yaratıcı Endüstri",
    title: "Bir DJ & prodüksiyon stüdyosunun işini en iyi anlatan portföy sitesi",
    desc: "Çalışmalarının öne çıktığı, sade ve etkileyici bir tanıtım sitesi kurduk.",
    url: null,
  },
];

export default function CaseStudiesCarousel() {
  const [index, setIndex] = useState(0);
  const active = CASE_STUDIES[index];

  function go(next: number) {
    setIndex((next + CASE_STUDIES.length) % CASE_STUDIES.length);
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.imageSide}>
          <active.Scene className={styles.image} />
        </div>
        <div className={styles.contentSide}>
          <span className={styles.category}>{active.category.toUpperCase()}</span>
          <h3 className={styles.title}>{active.title}</h3>
          <p className={styles.desc}>{active.desc}</p>
          {active.url ? (
            <a className={styles.learnMore} href={active.url} target="_blank" rel="noopener noreferrer">
              Devamını Gör →
            </a>
          ) : (
            <Link className={styles.learnMore} href="/referanslar">
              Devamını Gör →
            </Link>
          )}
        </div>
      </div>

      <div className={styles.pagination}>
        <button type="button" className={styles.arrow} onClick={() => go(index - 1)} aria-label="Önceki">
          ‹
        </button>
        {CASE_STUDIES.map((cs, i) => (
          <button
            key={cs.title}
            type="button"
            className={`${styles.pageNumber} ${i === index ? styles.pageNumberActive : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`${i + 1}. proje`}
            aria-current={i === index}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
        <button type="button" className={styles.arrow} onClick={() => go(index + 1)} aria-label="Sonraki">
          ›
        </button>
      </div>
    </div>
  );
}
