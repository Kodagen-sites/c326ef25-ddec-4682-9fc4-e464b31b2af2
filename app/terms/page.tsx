import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms governing use of the ${siteConfig.company.name} website.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "1. About these terms",
    p: [
      `This website is published by ${siteConfig.company.legalName} ("${siteConfig.company.name}"). By using the site you accept these terms. If you do not accept them, please do not use the site.`,
    ],
  },
  {
    h: "2. The content here",
    p: [
      "The text, design, photography and other material on this site are owned by or licensed to the studio and are provided for general information about our work. Selected work shown here is representative; project detail is shared on request and remains confidential to the client.",
      "You may view and share pages of this site for personal, non-commercial purposes. You may not reproduce, republish or repurpose the studio's content without written permission.",
    ],
  },
  {
    h: "3. Enquiries are not a contract",
    p: [
      "Contacting the studio through this site does not create a client relationship. Any engagement begins only when scope, fees and timing are agreed in a separate written proposal signed by both parties.",
    ],
  },
  {
    h: "4. No warranty",
    p: [
      "The site is provided as is. We take care to keep it accurate and available, but we do not warrant that it will be uninterrupted or error-free, and we are not liable for any loss arising from reliance on its content.",
    ],
  },
  {
    h: "5. Links to other sites",
    p: [
      "Where this site links to third-party sites, those sites are outside our control and we are not responsible for their content or practices.",
    ],
  },
  {
    h: "6. Governing law",
    p: [
      `These terms are governed by the laws of ${siteConfig.contact.country}. Any dispute will be subject to the exclusive jurisdiction of the courts of ${siteConfig.contact.city}.`,
    ],
  },
  {
    h: "7. Contact",
    p: [
      `Questions about these terms can be sent to ${siteConfig.contact.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="bg-paper text-ink">
      <div className="shell pb-24 pt-40 md:pb-32 md:pt-48">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
          <span className="inline-block h-px w-10 bg-accent" />
          Legal
        </div>
        <h1 className="font-display text-[clamp(36px,6vw,80px)] font-light leading-[1.04] tracking-editorial">
          Terms of Use
        </h1>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">
          Last updated — May 2026
        </p>

        <div className="mt-14 max-w-[68ch] space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl font-light tracking-editorial">
                {s.h}
              </h2>
              {s.p.map((para, i) => (
                <p
                  key={i}
                  className="mt-4 text-base leading-relaxed text-ink-muted"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
