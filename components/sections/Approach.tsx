import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import ImageRevealMask from "@/components/motion/ImageRevealMask";

/**
 * Approach — point-of-view section. Editorial paragraphs + one quiet image
 * (the single ImageRevealMask per page). Clay background (tone 3).
 */
export default function Approach() {
  const { approach } = siteConfig;
  const image =
    "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-about.jpg";

  return (
    <section className="bg-clay text-ink">
      <div className="shell section-pad">
        <FadeUp>
          <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
            <span className="inline-block h-px w-12 bg-accent" />
            {approach.eyebrow}
          </div>
        </FadeUp>

        <TextReveal
          as="h2"
          className="max-w-[16ch] font-display text-[clamp(30px,4.6vw,64px)] font-light leading-[1.07] tracking-editorial text-ink"
        >
          {approach.title}
        </TextReveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_0.82fr] md:gap-16">
          <div className="space-y-7">
            {approach.paragraphs.map((para, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <p className="max-w-[58ch] text-base leading-relaxed text-ink-muted md:text-lg">
                  {para}
                </p>
              </FadeUp>
            ))}
          </div>

          <ImageRevealMask
            src={image}
            alt="Vellum & Vine studio — type and editorial work in progress"
            direction="bottom"
            aspectClass="aspect-[3/4]"
            className="border border-ink/10"
          />
        </div>
      </div>
    </section>
  );
}
