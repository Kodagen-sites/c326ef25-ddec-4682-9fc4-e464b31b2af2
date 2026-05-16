import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Approach from "@/components/sections/Approach";
import ServicesPreview from "@/components/sections/ServicesPreview";
import SelectedWork from "@/components/sections/SelectedWork";
import Process from "@/components/sections/Process";
import MarqueeBand from "@/components/sections/MarqueeBand";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  description: siteConfig.seo.metaDescription,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.company.name,
  legalName: siteConfig.company.legalName,
  description: siteConfig.seo.metaDescription,
  url: siteConfig.seo.siteUrl,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  foundingDate: String(siteConfig.company.foundedYear),
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.city,
    addressCountry: "PT",
  },
  sameAs: Object.values(siteConfig.socials),
  knowsAbout: siteConfig.services.map((s) => s.name),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Manifesto />
      <Approach />
      <ServicesPreview />
      <SelectedWork />
      <Process />
      <MarqueeBand />
      <CtaSection />
    </>
  );
}
