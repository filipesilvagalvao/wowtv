import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Poppins } from "next/font/google"
import Script from "next/script";
import Footer from "@/components/footer/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "WowTV - Canais de tv online",
  description: "Assista TV online grátis ao vivo com diversos canais, encontre seus programas favoritos e explore filmes, séries, esportes e notícias de forma rápida e fácil.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WowTV - Canais de tv online",
    description:
      "Assista tv online grátis, canais abertos tudo livre",
    url: baseUrl,
    siteName: "WowTV",
    images: [
      {
        url: "/logo/WowTV!.png.png",
        width: 1200,
        height: 630,
        alt: "WowTV! — imagem de compartilhamento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  }
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/clappr@0.3.13/dist/clappr.min.js" defer></script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z4MGJXGTGQ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z4MGJXGTGQ');
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
