"use client";

import { useState } from "react";
import styles from "./StartProjectForm.module.css";
import Turnstile from "./Turnstile";
import { CONTACT_EMAIL } from "@/lib/contact";

const HELP_OPTIONS = ["Web Sitesi", "Mobil Uygulama", "Özel Yazılım", "E-Ticaret", "Diğer"];
const BUDGET_OPTIONS = ["Belirtmek istemiyorum", "£1.000 – £3.000", "£3.000 – £7.000", "£7.000 – £15.000", "£15.000+"];
const TIMELINE_OPTIONS = ["Esnek", "1 ay içinde", "1–3 ay içinde", "3+ ay"];

const CHECKLIST = [
  "Taahhüt yok",
  "24 saat içinde yanıt veririm",
  "Doğrudan benimle görüşürsünüz",
];

export default function StartProjectForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [helpType, setHelpType] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Yeni proje talebi — ${name || "İsimsiz"}`);
    const body = encodeURIComponent(
      `İsim: ${name}\nE-posta: ${email}\nYardım konusu: ${helpType}\nBütçe: ${budget}\nZaman çizelgesi: ${timeline}\n\nProje detayı:\n${details}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Adınız *</span>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Adınız Soyadınız" />
      </label>

      <label className={styles.field}>
        <span>E-postanız *</span>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="siz@sirket.com" />
      </label>

      <label className={styles.field}>
        <span>Ne konuda yardıma ihtiyacınız var?</span>
        <select value={helpType} onChange={(e) => setHelpType(e.target.value)}>
          <option value="">Seçiniz</option>
          {HELP_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Ne inşa etmeye çalışıyorsunuz?</span>
        <span className={styles.helperText}>Ne yapmalı? Kimler kullanacak? Örnek veya bağlantılar var mı?</span>
        <textarea rows={5} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Projenizi anlatın..." />
      </label>

      <label className={styles.field}>
        <span>Bütçe (opsiyonel)</span>
        <select value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option value="">Seçiniz</option>
          {BUDGET_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Ne zaman ihtiyacınız var?</span>
        <select value={timeline} onChange={(e) => setTimeline(e.target.value)}>
          <option value="">Seçiniz</option>
          {TIMELINE_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </label>

      <Turnstile />

      <button type="submit" className="btnPrimary">Proje Detaylarını Gönder</button>

      <ul className={styles.checklist}>
        {CHECKLIST.map((item) => (
          <li key={item}>
            <span className={styles.check}>✓</span> {item}
          </li>
        ))}
      </ul>
    </form>
  );
}
