import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site-config";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import FilmGrain from "@/components/motion/FilmGrain";
import Vignette from "@/components/motion/Vignette";
import ScrollProgress from "@/components/motion/ScrollProgress";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.metaTitle,
    template: `%s — ${siteConfig.company.name}`,
  },
  description: siteConfig.seo.metaDescription,
  applicationName: siteConfig.company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: siteConfig.seo.metaTitle,
    description: siteConfig.seo.metaDescription,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.company.name,
    locale: siteConfig.seo.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.metaTitle,
    description: siteConfig.seo.metaDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-paper text-ink antialiased">
        <ScrollProgress color="#7C2D33" thickness={2} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FilmGrain opacity={0.03} speed="slow" />
        <Vignette color="#2A1416" strength={0.22} innerStop={62} />
      </body>
    </html>
  );
}
