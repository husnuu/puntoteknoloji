import type { Metadata } from "next";
import styles from "../legal.module.css";
import { CONTACT_EMAIL, COMPANY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni — Punto Teknoloji",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme.",
};

const updated = new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });

export default function KvkkPage() {
  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.content}>
        <span className="eyebrow">KVKK</span>
        <h1>KVKK Kapsamında Aydınlatma Metni</h1>
        <p className={styles.updated}>Son güncelleme: {updated}</p>

        <p>
          İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması
          Kanunu&apos;nun (&quot;KVKK&quot;) 10. maddesi uyarınca, veri
          sorumlusu sıfatıyla {COMPANY.name} tarafından hazırlanmıştır.
        </p>

        <h2>Veri Sorumlusu</h2>
        <p>
          {COMPANY.name} ({COMPANY.location}), puntoteknoloji.com üzerinden
          bizimle iletişime geçtiğinizde paylaştığınız kişisel verileriniz
          bakımından veri sorumlusu olarak hareket eder.
        </p>

        <h2>İşlenen Kişisel Veriler</h2>
        <ul>
          <li>Kimlik bilgisi: ad ve soyad</li>
          <li>İletişim bilgisi: e-posta adresi ve varsa telefon numarası</li>
          <li>
            Talep bilgisi: proje açıklaması, bütçe ve zaman çizelgesi gibi
            paylaştığınız detaylar
          </li>
        </ul>

        <h2>İşleme Amaçları</h2>
        <ul>
          <li>Talebinizi değerlendirmek ve sizinle iletişime geçmek</li>
          <li>Proje teklifi hazırlamak</li>
          <li>Yasal yükümlülükleri yerine getirmek</li>
        </ul>

        <h2>Hukuki Sebep</h2>
        <p>
          Kişisel verileriniz, KVKK&apos;nın 5. maddesinde belirtilen
          &quot;ilgili kişinin talebi üzerine sözleşmenin kurulması veya
          ifasıyla doğrudan ilgili olması&quot; ve &quot;açık rıza&quot;
          hukuki sebeplerine dayanılarak işlenmektedir.
        </p>

        <h2>Aktarım</h2>
        <p>
          Kişisel verileriniz, formu e-posta yoluyla iletmemizi sağlayan
          hizmet sağlayıcılar dışında üçüncü kişilerle paylaşılmaz.
        </p>

        <h2>Haklarınız</h2>
        <p>
          KVKK&apos;nın 11. maddesi uyarınca; kişisel verilerinizin işlenip
          işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,
          işlenme amacını ve amacına uygun kullanılıp kullanılmadığını
          öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme,
          KVKK&apos;nın 7. maddesindeki şartlar çerçevesinde silinmesini veya
          yok edilmesini isteme haklarına sahipsiniz. Bu taleplerinizi{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> adresine
          iletebilirsiniz.
        </p>

        <div className={styles.note}>
          <p>
            Bu metin bilgilendirme amaçlıdır ve hukuki tavsiye niteliği
            taşımaz. Başvurularınız KVKK&apos;nın ilgili hükümleri
            çerçevesinde değerlendirilir.
          </p>
        </div>
      </div>
    </section>
  );
}
