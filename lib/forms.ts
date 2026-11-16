import { CONTACT_EMAIL } from "@/lib/contact";

// Form submissions are delivered by Web3Forms (https://web3forms.com) to CONTACT_EMAIL.
// The access key is public by design: Web3Forms' free plan only accepts submissions
// sent from the visitor's browser, so the key always ends up in client code.
const WEB3FORMS_ACCESS_KEY = "50746d47-15b9-4d3c-9342-0dda689139dd";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const HELP_OPTIONS = ["Web Sitesi", "Mobil Uygulama", "Özel Yazılım", "E-Ticaret", "Diğer"];
export const BUDGET_OPTIONS = ["Belirtmek istemiyorum", "₺25.000 – ₺75.000", "₺75.000 – ₺150.000", "₺150.000 – ₺300.000", "₺300.000+"];
export const TIMELINE_OPTIONS = ["Esnek", "1 ay içinde", "1–3 ay içinde", "3+ ay"];

export const LIMITS = {
  name: 120,
  email: 254,
  message: 5000,
} as const;

/** Web3Forms' honeypot: a hidden checkbox that only bots tick. */
export const HONEYPOT_FIELD = "botcheck";

export type FormResult = { ok: true } | { ok: false; error: string };

const SEND_FAILED = `Mesajınız şu anda gönderilemedi. Lütfen biraz sonra tekrar deneyin veya doğrudan ${CONTACT_EMAIL} adresine yazın.`;

/**
 * Sends a form to our inbox via Web3Forms. `name` and `email` are Web3Forms' own
 * fields (email becomes the Reply-To); `fields` are listed in the email as-is.
 */
export async function submitForm(
  formData: FormData,
  { subject, fields }: { subject: string; fields: Record<string, string> }
): Promise<FormResult> {
  // Bots that tick the hidden checkbox get a fake success and nothing is sent.
  if (formData.get(HONEYPOT_FIELD)) return { ok: true };

  const value = (key: string) => String(formData.get(key) ?? "").trim();

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject,
        from_name: "Punto Teknoloji Web Sitesi",
        name: value("name"),
        email: value("email"),
        ...Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, v.trim() || "Belirtilmedi"])),
        botcheck: false,
      }),
      signal: AbortSignal.timeout(20_000),
    });
    const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
    if (res.ok && data?.success) return { ok: true };
    if (res.status === 429) {
      return { ok: false, error: "Kısa sürede çok fazla gönderim yapıldı. Lütfen birkaç dakika sonra tekrar deneyin." };
    }
    console.error("[forms] Web3Forms hatası:", res.status, data?.message);
    return { ok: false, error: SEND_FAILED };
  } catch (err) {
    console.error("[forms] gönderim başarısız:", err);
    return { ok: false, error: SEND_FAILED };
  }
}
