import type { Metadata } from "next";
import styles from "../legal.module.css";
import { CONTACT_EMAIL, COMPANY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Punto Teknoloji",
  description: "Punto Teknoloji'nin kişisel verilerinizi nasıl topladığı ve kullandığı.",
};

const updated = new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });

export default function PrivacyPolicyPage() {
  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.content}>
        <span className="eyebrow">Gizlilik Politikası</span>
        <h1>Gizlilik Politikası</h1>
        <p className={styles.updated}>Son güncelleme: {updated}</p>

        <p>
          {COMPANY.name} (&quot;biz&quot;) olarak gizliliğinize önem
          veriyoruz. Bu sayfa, puntoteknoloji.com üzerinden bizimle iletişime
          geçtiğinizde kişisel verilerinizi nasıl topladığımızı,
          kullandığımızı ve koruduğumuzu açıklar.
        </p>

        <h2>Topladığımız Bilgiler</h2>
        <p>İletişim veya proje başlatma formlarını doldurduğunuzda aşağıdaki bilgileri toplayabiliriz:</p>
        <ul>
          <li>Adınız ve soyadınız</li>
          <li>E-posta adresiniz</li>
          <li>Paylaştığınız proje detayları, bütçe ve zaman çizelgesi bilgileri</li>
          <li>Sitedeki tema tercihiniz (tarayıcınızın yerel deposunda saklanır)</li>
        </ul>

        <h2>Bilgileri Nasıl Kullanıyoruz</h2>
        <p>Topladığımız bilgileri yalnızca aşağıdaki amaçlarla kullanırız:</p>
        <ul>
          <li>Talebinizi yanıtlamak ve sizinle iletişime geçmek</li>
          <li>Proje teklifi veya öneri hazırlamak</li>
          <li>Yasal yükümlülüklerimizi yerine getirmek</li>
        </ul>
        <p>Bilgilerinizi pazarlama amacıyla üçüncü taraflara satmıyor veya kiralamıyoruz.</p>

        <h2>Bilgi Paylaşımı</h2>
        <p>
          Kişisel verileriniz yalnızca formu e-posta yoluyla iletmemizi sağlayan
          hizmet sağlayıcılar (örneğin e-posta istemciniz) ile paylaşılır. Bu
          sağlayıcılar dışında verileriniz üçüncü taraflarla paylaşılmaz.
        </p>

        <h2>Veri Saklama</h2>
        <p>
          Kişisel verilerinizi yalnızca talebinizi yanıtlamak ve olası bir iş
          ilişkisini yürütmek için gerekli olduğu sürece saklarız. Talebiniz
          sonuçlandıktan sonra makul bir süre içinde verileriniz silinir.
        </p>

        <h2>Haklarınız</h2>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
          kapsamındaki haklarınız için{" "}
          <a href="/kvkk">KVKK Aydınlatma Metnimizi</a> inceleyebilirsiniz. Bu
          haklarınızı kullanmak için{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> adresinden
          bize ulaşabilirsiniz.
        </p>

        <h2>Çerezler</h2>
        <p>
          Sitede kullandığımız çerezler ve benzeri teknolojiler hakkında detaylı
          bilgi için <a href="/cerez-politikasi">Çerez Politikamıza</a> göz
          atabilirsiniz.
        </p>

        <h2>Değişiklikler</h2>
        <p>
          Bu politikayı zaman zaman güncelleyebiliriz. Güncel sürüm her zaman
          bu sayfada yayınlanır.
        </p>

        <h2>İletişim</h2>
        <p>
          Gizlilikle ilgili sorularınız için{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> adresinden
          bize ulaşabilirsiniz.
        </p>

        <div className={styles.note}>
          <p>
            Bu metin bilgilendirme amaçlıdır ve hukuki tavsiye niteliği
            taşımaz. İşinize özel bir gizlilik politikası için bir hukuk
            danışmanına başvurmanızı öneririz.
          </p>
        </div>
      </div>
    </section>
  );
}
