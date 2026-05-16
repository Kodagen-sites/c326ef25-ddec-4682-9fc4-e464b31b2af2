import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import MagneticButton from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vellum & Vine is a small, type-led branding and design studio in Lisbon. We read before we draw — and we keep the studio small on purpose.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    num: "01",
    title: "Read first.",
    body: "We do not start drawing until we can describe the brand in a single sentence. If the sentence is wrong, the logo will be too.",
  },
  {
    num: "02",
    title: "Small on purpose.",
    body: "Four people, no juniors handed the difficult page. The person who reads your brief is the person who sets your last line of copy.",
  },
  {
    num: "03",
    title: "Type is the argument.",
    body: "A typeface is a position on tone, and so is a sentence. We choose them in the same pass, because they have to agree.",
  },
];

export default function AboutPage() {
  const heroImage = resolveImage({
    industry: "agency",
    keyword: "design studio lisbon",
    brandColor: "#E4D8C6",
  });

  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title="A studio that reads before it draws."
        image={heroImage}
        intro={`${siteConfig.company.name} is a branding and design studio in ${siteConfig.contact.city}, working with premium consumer brands since ${siteConfig.company.foundedYear}.`}
      />

      {/* AB4 — type-only manifesto */}
      <section className="bg-ink text-paper">
        <div className="shell section-pad">
          <TextReveal
            as="p"
            className="max-w-[22ch] font-display text-[clamp(30px,5vw,76px)] font-light leading-[1.08] tracking-editorial"
          >
            We believe a brand is a sentence before it is a logo.
          </TextReveal>
          <div className="mt-14 grid gap-7 md:grid-cols-2 md:gap-12">
            {siteConfig.approach.paragraphs.map((para, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <p className="max-w-[56ch] text-base leading-relaxed text-paper/60 md:text-lg">
                  {para}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-paper text-ink">
        <div className="shell section-pad">
          <FadeUp>
            <div className="mb-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
              <span className="inline-block h-px w-12 bg-accent" />
              How we hold ourselves
            </div>
          </FadeUp>
          <div className="grid gap-0 md:grid-cols-3">
            {principles.map((p, i) => (
              <FadeUp key={p.num} delay={i * 0.1}>
                <div className="h-full border-t border-ink/15 py-9 transition-colors duration-500 hover:border-accent md:pr-8">
                  <span className="font-mono text-[12px] tracking-[0.2em] text-accent">
                    {p.num}
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-light tracking-editorial">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-ink-muted">
                    {p.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <div className="mt-16 flex flex-wrap gap-x-12 gap-y-3 border-t border-ink/12 pt-7 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
              <span>{siteConfig.contact.area}</span>
              <span>Established {siteConfig.company.foundedYear}</span>
              <span>A studio of four</span>
              <span>{siteConfig.contact.hours}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-wine text-paper">
        <div className="shell section-pad text-center">
          <FadeUp>
            <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(28px,4.4vw,62px)] font-light leading-[1.08] tracking-editorial">
              {siteConfig.footer.ctaHeadline}
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="mt-10">
              <MagneticButton
                as="a"
                href="/contact"
                className="rounded-none bg-paper px-10 py-4 font-mono text-[11px] uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-accent hover:text-paper"
              >
                Start a project
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
