import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.company.name} collects, uses and protects personal information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "1. Who we are",
    p: [
      `${siteConfig.company.legalName} ("${siteConfig.company.name}", "we", "us") is a branding and design studio based in ${siteConfig.contact.city}, ${siteConfig.contact.country}. We are the data controller for personal information collected through this website.`,
    ],
  },
  {
    h: "2. What we collect",
    p: [
      "We collect only the information you choose to give us — typically your name, email address, company or brand name, and the details of a project you describe when you contact the studio.",
      "We do not run advertising trackers on this site. Standard server logs (IP address, browser type, pages requested) may be retained for security and to keep the site running.",
    ],
  },
  {
    h: "3. How we use it",
    p: [
      "We use the information you send us to respond to your enquiry, to scope and discuss potential work, and to keep a record of our correspondence. We do not sell personal information, and we do not share it with third parties except where required to operate the site (for example, our hosting provider) or by law.",
    ],
  },
  {
    h: "4. Legal basis and retention",
    p: [
      "We process enquiry information on the basis of legitimate interest in responding to prospective clients, and our contractual relationship with clients we go on to work with. We keep enquiry correspondence for as long as needed for that purpose, then delete it.",
    ],
  },
  {
    h: "5. Your rights",
    p: [
      "Under the EU General Data Protection Regulation, you may request access to the personal information we hold about you, ask us to correct or delete it, or object to our processing of it. To exercise any of these rights, write to us at the address below.",
    ],
  },
  {
    h: "6. Contact",
    p: [
      `Questions about this policy, or requests concerning your information, can be sent to ${siteConfig.contact.email}. We aim to respond within two working days.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-paper text-ink">
      <div className="shell pb-24 pt-40 md:pb-32 md:pt-48">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
          <span className="inline-block h-px w-10 bg-accent" />
          Legal
        </div>
        <h1 className="font-display text-[clamp(36px,6vw,80px)] font-light leading-[1.04] tracking-editorial">
          Privacy Policy
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
