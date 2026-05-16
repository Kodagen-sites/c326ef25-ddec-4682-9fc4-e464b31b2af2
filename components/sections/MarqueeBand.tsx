import { siteConfig } from "@/content/site-config";
import Marquee from "@/components/motion/Marquee";

/**
 * MarqueeBand — Archetype F signature. Display-type phrases looping on ink.
 */
export default function MarqueeBand() {
  return (
    <section className="overflow-hidden border-y border-paper/10 bg-ink py-10 text-paper md:py-14">
      <Marquee speed={42} gap="gap-0">
        {siteConfig.marquee.map((phrase, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-[clamp(28px,4vw,56px)] font-light italic tracking-editorial text-paper/85 md:px-12">
              {phrase}
            </span>
            <span className="text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
