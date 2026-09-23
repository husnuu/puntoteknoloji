import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["500", "600", "700"],
});

const interTight = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Punto Teknoloji",
  description:
    "İstanbul merkezli Punto Teknoloji; web, mobil ve özel yazılım çözümleri geliştiren bir yazılım şirketidir. Bir noktadan başlayan işler.",
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('punto-theme');
    var theme = stored === 'dark' ? 'dark' : 'light';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  } catch (e) {}
  try {
    if (!localStorage.getItem('punto-cookie-consent')) {
      document.body.classList.add('show-cookie-banner');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${lora.variable} ${interTight.variable}`}>
      <body className="light" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollTopButton />
        <CookieBanner />
      </body>
    </html>
  );
}
