import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import ContactForm from "@/components/sections/ContactForm";
import { SocialLinks } from "@/components/social-icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Vellum & Vine — a type-led branding and design studio in Lisbon. Tell us what you are building.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const heroImage =
    "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-contact.jpg";

  const details = [
    { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { label: "Telephone", value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
    { label: "Studio", value: siteConfig.contact.area },
    { label: "Visits", value: siteConfig.contact.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Start a project"
        title="Tell us what you're building."
        image={heroImage}
        intro="Every brief begins as a sentence. Write yours below and we will tell you, plainly, whether we are the studio for it."
      />

      <section className="bg-paper text-ink">
        <div className="shell section-pad">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            {/* Details */}
            <div>
              <FadeUp>
                <div className="mb-9 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
                  <span className="inline-block h-px w-12 bg-accent" />
                  The studio
                </div>
              </FadeUp>
              <dl className="space-y-7">
                {details.map((d, i) => (
                  <FadeUp key={d.label} delay={i * 0.06}>
                    <div className="border-t border-ink/15 pt-4">
                      <dt className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/45">
                        {d.label}
                      </dt>
                      <dd className="font-display text-xl font-light tracking-editorial text-ink">
                        {d.href ? (
                          <a
                            href={d.href}
                            className="transition-colors hover:text-accent"
                          >
                            {d.value}
                          </a>
                        ) : (
                          d.value
                        )}
                      </dd>
                    </div>
                  </FadeUp>
                ))}
              </dl>
              <FadeUp delay={0.3}>
                <div className="mt-9 border-t border-ink/15 pt-6">
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink/45">
                    Elsewhere
                  </div>
                  <SocialLinks
                    socials={siteConfig.socials}
                    className="text-ink"
                  />
                </div>
              </FadeUp>
            </div>

            {/* Form */}
            <FadeUp delay={0.12}>
              <ContactForm />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
