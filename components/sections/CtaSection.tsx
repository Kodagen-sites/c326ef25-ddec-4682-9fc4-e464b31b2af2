import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import MagneticButton from "@/components/motion/MagneticButton";

/**
 * CtaSection — CTA1 Centered Oversized Type, on oxblood-dark (tone 4).
 */
export default function CtaSection() {
  const { cta } = siteConfig;

  return (
    <section className="bg-wine text-paper">
      <div className="shell section-pad text-center">
        <FadeUp>
          <div className="mb-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
            <span className="inline-block h-px w-12 bg-accent" />
            {cta.eyebrow}
            <span className="inline-block h-px w-12 bg-accent" />
          </div>
        </FadeUp>

        <h2 className="mx-auto max-w-[18ch] font-display font-light tracking-editorial">
          <TextReveal
            as="span"
            className="block text-[clamp(36px,6.4vw,104px)] leading-[1.04]"
          >
            {cta.headline[0]}
          </TextReveal>
          <TextReveal
            as="span"
            delay={0.16}
            className="block text-[clamp(36px,6.4vw,104px)] italic leading-[1.04] text-accent"
          >
            {cta.headline[1]}
          </TextReveal>
        </h2>

        <FadeUp delay={0.1}>
          <p className="mx-auto mt-9 max-w-[52ch] text-base leading-relaxed text-paper/60 md:text-lg">
            {cta.body}
          </p>
        </FadeUp>

        <FadeUp delay={0.18}>
          <div className="mt-12">
            <MagneticButton
              as="a"
              href={cta.button.href}
              className="rounded-none bg-paper px-10 py-4 font-mono text-[11px] uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-accent hover:text-paper"
            >
              {cta.button.label}
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
