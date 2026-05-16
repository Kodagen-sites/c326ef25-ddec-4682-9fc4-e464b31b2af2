import { siteConfig } from "@/content/site-config";
import TextReveal from "@/components/motion/TextReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import ScrollHint from "@/components/motion/ScrollHint";

/**
 * Hero — Archetype F. A full-bleed background video carries the cinematic;
 * the editorial typography sits over it. The scroll-scrub frame moment is
 * not here — it lives in the "What we do" section below.
 */
export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink">
      {/* full-bleed background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={hero.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      {/* legibility scrim */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,18,16,0.58) 0%, rgba(20,18,16,0.30) 42%, rgba(20,18,16,0.80) 100%)",
        }}
      />

      <div className="shell relative w-full pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="mb-9 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-paper/70">
          <span className="inline-block h-px w-12 bg-paper/50" />
          {hero.eyebrow}
        </div>

        <h1 className="font-display font-light tracking-editorial text-paper">
          <TextReveal
            as="span"
            className="block text-[clamp(48px,10.5vw,168px)] leading-[0.96]"
          >
            {hero.h1[0].text}
          </TextReveal>
          <TextReveal
            as="span"
            delay={0.18}
            className="block text-[clamp(48px,10.5vw,168px)] italic leading-[0.96] text-paper/80"
          >
            {hero.h1[1].text}
          </TextReveal>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
          <p className="max-w-[34ch] font-display text-xl font-light leading-snug text-paper md:text-2xl">
            {hero.subhead}
          </p>
          <p className="max-w-[44ch] text-sm leading-relaxed text-paper/65 md:text-base">
            {hero.body}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-7">
          <MagneticButton
            as="a"
            href={hero.ctaPrimary.href}
            className="rounded-none bg-paper px-9 py-4 font-mono text-[11px] uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-accent hover:text-paper"
          >
            {hero.ctaPrimary.label}
          </MagneticButton>
          <a
            href={hero.ctaSecondary.href}
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-paper"
          >
            <span className="border-b border-paper/40 pb-1 transition-colors group-hover:border-accent">
              {hero.ctaSecondary.label}
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-10 gap-y-3 border-t border-paper/15 pt-7 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/45">
          <span>{siteConfig.contact.area}</span>
          <span>Est. {siteConfig.company.foundedYear}</span>
          <span>Brand identity · Packaging · Art direction · Editorial</span>
        </div>
      </div>

      <ScrollHint label="Read on" accentColor="#F4ECE0" />
    </section>
  );
}
