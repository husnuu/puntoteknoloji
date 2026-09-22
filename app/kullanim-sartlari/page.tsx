import type { Metadata } from "next";
import styles from "../legal.module.css";
import { CONTACT_EMAIL, COMPANY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Kullanım Şartları — Punto Teknoloji",
  description: "puntoteknoloji.com sitesini kullanırken geçerli olan şartlar.",
};

const updated = new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });

export default function TermsPage() {
  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.content}>
        <span className="eyebrow">Kullanım Şartları</span>
        <h1>Kullanım Şartları</h1>
        <p className={styles.updated}>Son güncelleme: {updated}</p>

        <p>
          Bu şartlar, puntoteknoloji.com (&quot;Site&quot;) adresini
          kullanımınızı düzenler. Siteyi kullanarak bu şartları kabul etmiş
          olursunuz.
        </p>

        <h2>Site Hakkında</h2>
        <p>
          Bu site, {COMPANY.name} tarafından sunulan hizmetleri tanıtmak
          amacıyla yayınlanmaktadır. Sitedeki içerikler bilgilendirme
          amaçlıdır ve bir teklif veya garanti oluşturmaz.
        </p>

        <h2>Hizmetler</h2>
        <p>
          Web sitesi, mobil uygulama, özel yazılım ve e-ticaret geliştirme
          hizmetleri, ayrı olarak üzerinde anlaşılan bir proje kapsamı ve
          sözleşme çerçevesinde sunulur. Bu sitedeki bilgiler, nihai bir proje
          teklifi yerine geçmez.
        </p>

        <h2>Fikri Mülkiyet</h2>
        <p>
          Sitedeki metin, tasarım, logo ve görseller aksi belirtilmedikçe{" "}
          {COMPANY.name}&apos;e aittir ve izinsiz kopyalanamaz veya
          çoğaltılamaz.
        </p>

        <h2>Sorumluluk Sınırlaması</h2>
        <p>
          Site &quot;olduğu gibi&quot; sunulmaktadır. İçeriklerin doğruluğu
          için makul çaba gösterilse de, sitenin kesintisiz veya hatasız
          olacağı garanti edilmez.
        </p>

        <h2>Üçüncü Taraf Bağlantıları</h2>
        <p>
          Site, üçüncü taraf platformlara (ör. Instagram) bağlantılar
          içerebilir. Bu platformların içeriğinden veya gizlilik
          uygulamalarından sorumlu değiliz.
        </p>

        <h2>Uygulanacak Hukuk</h2>
        <p>
          Bu şartlar, Türkiye Cumhuriyeti hukukuna tabidir ve buna göre
          yorumlanır. Uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri
          yetkilidir.
        </p>

        <h2>İletişim</h2>
        <p>
          Sorularınız için{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> adresinden
          bize ulaşabilirsiniz.
        </p>

        <div className={styles.note}>
          <p>
            Bu metin bilgilendirme amaçlıdır ve hukuki tavsiye niteliği
            taşımaz.
          </p>
        </div>
      </div>
    </section>
  );
}
