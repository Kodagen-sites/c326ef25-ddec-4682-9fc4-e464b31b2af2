import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";

/**
 * Manifesto — value-prop section. Single oversized claim on ink (tone 2).
 */
export default function Manifesto() {
  const { manifesto } = siteConfig;

  return (
    <section className="bg-ink text-paper">
      <div className="shell section-pad">
        <FadeUp>
          <div className="mb-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
            <span className="inline-block h-px w-12 bg-accent" />
            {manifesto.eyebrow}
          </div>
        </FadeUp>
        <TextReveal
          as="p"
          className="max-w-[20ch] font-display text-[clamp(32px,5.6vw,82px)] font-light leading-[1.06] tracking-editorial"
        >
          {manifesto.statement}
        </TextReveal>
      </div>
    </section>
  );
}
