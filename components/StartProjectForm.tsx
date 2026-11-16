"use client";

import { useState, useTransition } from "react";
import styles from "./StartProjectForm.module.css";
import Turnstile from "./Turnstile";
import { FormStatus, Honeypot } from "./FormExtras";
import { BUDGET_OPTIONS, HELP_OPTIONS, LIMITS, TIMELINE_OPTIONS, submitForm, type FormResult } from "@/lib/forms";

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
  const [result, setResult] = useState<FormResult | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setResult(null);
    startTransition(async () => {
      const res = await submitForm(data, {
        subject: `Yeni proje talebi — ${name.trim()}${helpType ? ` (${helpType})` : ""}`,
        fields: {
          Konu: helpType,
          Bütçe: budget,
          Zaman: timeline,
          "Proje detayı": details,
        },
      });
      setResult(res);
      if (res.ok) {
        setName("");
        setEmail("");
        setHelpType("");
        setDetails("");
        setBudget("");
        setTimeline("");
      }
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Adınız *</span>
        <input type="text" name="name" required maxLength={LIMITS.name} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Adınız Soyadınız" />
      </label>

      <label className={styles.field}>
        <span>E-postanız *</span>
        <input type="email" name="email" required maxLength={LIMITS.email} autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="siz@sirket.com" />
      </label>

      <label className={styles.field}>
        <span>Ne konuda yardıma ihtiyacınız var?</span>
        <select name="helpType" value={helpType} onChange={(e) => setHelpType(e.target.value)}>
          <option value="">Seçiniz</option>
          {HELP_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Ne inşa etmeye çalışıyorsunuz?</span>
        <span className={styles.helperText}>Ne yapmalı? Kimler kullanacak? Örnek veya bağlantılar var mı?</span>
        <textarea name="details" rows={5} maxLength={LIMITS.message} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Projenizi anlatın..." />
      </label>

      <label className={styles.field}>
        <span>Bütçe (opsiyonel)</span>
        <select name="budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option value="">Seçiniz</option>
          {BUDGET_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Ne zaman ihtiyacınız var?</span>
        <select name="timeline" value={timeline} onChange={(e) => setTimeline(e.target.value)}>
          <option value="">Seçiniz</option>
          {TIMELINE_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </label>

      <Honeypot />
      <Turnstile />

      <button type="submit" className="btnPrimary" disabled={pending}>
        {pending ? "Gönderiliyor…" : "Proje Detaylarını Gönder"}
      </button>

      <FormStatus
        result={result}
        successText="Teşekkürler! Proje talebiniz bize ulaştı, 24 saat içinde size dönüş yapacağız."
      />

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
