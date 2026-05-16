import { siteConfig } from "@/content/site-config";
import TextReveal from "@/components/motion/TextReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import ScrollHint from "@/components/motion/ScrollHint";

/**
 * Hero — Archetype F (Type Editorial). Typography is the hero: a two-line
 * giant manifesto on vellum, no video. Words ARE the product.
 */
export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-paper">
      {/* quiet typographic backdrop — oversized monogram, barely there */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[6vw] top-[8vh] select-none font-display text-[42vw] font-light italic leading-none text-ink/[0.035]"
      >
        &amp;
      </span>

      <div className="shell relative w-full pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="mb-9 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
          <span className="inline-block h-px w-12 bg-accent" />
          {hero.eyebrow}
        </div>

        <h1 className="font-display font-light tracking-editorial text-ink">
          <TextReveal
            as="span"
            className="block text-[clamp(48px,10.5vw,168px)] leading-[0.96]"
          >
            {hero.h1[0].text}
          </TextReveal>
          <TextReveal
            as="span"
            delay={0.18}
            className="block text-[clamp(48px,10.5vw,168px)] italic leading-[0.96] text-accent"
          >
            {hero.h1[1].text}
          </TextReveal>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
          <p className="max-w-[34ch] font-display text-xl font-light leading-snug text-ink md:text-2xl">
            {hero.subhead}
          </p>
          <p className="max-w-[44ch] text-sm leading-relaxed text-ink-muted md:text-base">
            {hero.body}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-7">
          <MagneticButton
            as="a"
            href={hero.ctaPrimary.href}
            className="rounded-none bg-ink px-9 py-4 font-mono text-[11px] uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:bg-accent"
          >
            {hero.ctaPrimary.label}
          </MagneticButton>
          <a
            href={hero.ctaSecondary.href}
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-ink"
          >
            <span className="border-b border-ink/30 pb-1 transition-colors group-hover:border-accent group-hover:text-accent">
              {hero.ctaSecondary.label}
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-10 gap-y-3 border-t border-ink/12 pt-7 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
          <span>{siteConfig.contact.area}</span>
          <span>Est. {siteConfig.company.foundedYear}</span>
          <span>Brand identity · Packaging · Art direction · Editorial</span>
        </div>
      </div>

      <ScrollHint label="Read on" accentColor="#7C2D33" />
    </section>
  );
}
