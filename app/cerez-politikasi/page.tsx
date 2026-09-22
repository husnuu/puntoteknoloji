import type { Metadata } from "next";
import styles from "../legal.module.css";
import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Çerez Politikası — Punto Teknoloji",
  description: "puntoteknoloji.com sitesinde kullanılan çerezler ve benzer teknolojiler.",
};

const updated = new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });

export default function CookiePolicyPage() {
  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.content}>
        <span className="eyebrow">Çerez Politikası</span>
        <h1>Çerez Politikası</h1>
        <p className={styles.updated}>Son güncelleme: {updated}</p>

        <p>
          Bu sayfa, puntoteknoloji.com sitesinde çerezleri ve benzer
          teknolojileri nasıl kullandığımızı açıklar.
        </p>

        <h2>Çerez Nedir?</h2>
        <p>
          Çerezler, bir siteyi ziyaret ettiğinizde cihazınızda saklanan küçük
          metin dosyalarıdır. Tercihlerinizi hatırlamak gibi amaçlarla
          kullanılırlar.
        </p>

        <h2>Kullandığımız Teknolojiler</h2>
        <p>Şu anda sitemizde:</p>
        <ul>
          <li>
            <strong>Tema tercihi:</strong> Açık/koyu tema seçiminizi
            hatırlamak için tarayıcınızın yerel deposunu (localStorage)
            kullanıyoruz. Bu, geleneksel bir çerez değildir ve yalnızca
            cihazınızda kalır; bize veya üçüncü taraflara iletilmez.
          </li>
          <li>
            <strong>Bot koruması:</strong> Formlarımızı istenmeyen otomatik
            gönderimlerden korumak için Cloudflare Turnstile
            kullanabiliriz; bu, gerektiğinde bir doğrulama widget&apos;ı
            yükler.
          </li>
        </ul>
        <p>
          Şu anda reklam veya izleme amaçlı çerez kullanmıyoruz. İlerleyen
          dönemde analitik araçlar eklersek, bu politikayı güncelleyeceğiz.
        </p>

        <h2>Çerezleri Yönetme</h2>
        <p>
          Tarayıcınızın ayarlarından çerezleri ve yerel depolama alanını
          istediğiniz zaman temizleyebilir veya engelleyebilirsiniz. Bunu
          yapmanız, tema tercihiniz gibi bazı özelliklerin sıfırlanmasına
          neden olabilir.
        </p>

        <h2>Değişiklikler</h2>
        <p>
          Bu politikayı zaman zaman güncelleyebiliriz. Güncel sürüm her zaman
          bu sayfada yayınlanır.
        </p>

        <h2>İletişim</h2>
        <p>
          Sorularınız için{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> adresinden
          bize ulaşabilirsiniz.
        </p>
      </div>
    </section>
  );
}
