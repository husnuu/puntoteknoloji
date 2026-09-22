"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import Turnstile from "./Turnstile";
import { CONTACT_EMAIL } from "@/lib/contact";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Yeni mesaj — ${name || "İsimsiz"}`);
    const body = encodeURIComponent(
      `İsim: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Adınız *</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınız Soyadınız"
        />
      </label>
      <label className={styles.field}>
        <span>E-postanız *</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="siz@sirket.com"
        />
      </label>
      <label className={styles.field}>
        <span>Mesaj</span>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nasıl yardımcı olabilirim?"
        />
      </label>
      <Turnstile />
      <button type="submit" className="btnPrimary">Mesajı Gönder</button>
      <p className={styles.hint}>
        Gönder&apos;e tıkladığında e-posta uygulamanda hazır bir mesaj açılır.
      </p>
    </form>
  );
}
