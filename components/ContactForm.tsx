"use client";

import { useState, useTransition } from "react";
import styles from "./ContactForm.module.css";
import Turnstile from "./Turnstile";
import { FormStatus, Honeypot } from "./FormExtras";
import { LIMITS, submitForm, type FormResult } from "@/lib/forms";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<FormResult | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setResult(null);
    startTransition(async () => {
      const res = await submitForm(data, {
        subject: `Yeni iletişim mesajı — ${name.trim()}`,
        fields: { Mesaj: message },
      });
      setResult(res);
      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Adınız *</span>
        <input
          type="text"
          name="name"
          required
          maxLength={LIMITS.name}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınız Soyadınız"
        />
      </label>
      <label className={styles.field}>
        <span>E-postanız *</span>
        <input
          type="email"
          name="email"
          required
          maxLength={LIMITS.email}
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="siz@sirket.com"
        />
      </label>
      <label className={styles.field}>
        <span>Mesaj</span>
        <textarea
          name="message"
          rows={5}
          maxLength={LIMITS.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nasıl yardımcı olabilirim?"
        />
      </label>
      <Honeypot />
      <Turnstile />
      <button type="submit" className="btnPrimary" disabled={pending}>
        {pending ? "Gönderiliyor…" : "Mesajı Gönder"}
      </button>
      <FormStatus
        result={result}
        successText="Teşekkürler! Mesajınız bize ulaştı, en kısa sürede dönüş yapacağız."
      />
    </form>
  );
}
