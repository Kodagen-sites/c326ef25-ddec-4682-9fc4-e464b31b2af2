import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import { StaggerChildren } from "@/components/motion/FadeUp";

/**
 * Process — the four-step method, numbered editorial list. Clay (tone 3).
 */
export default function Process() {
  return (
    <section className="bg-clay text-ink">
      <div className="shell section-pad">
        <FadeUp>
          <div className="mb-14 max-w-[40ch]">
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
              <span className="inline-block h-px w-12 bg-accent" />
              How we work
            </div>
            <h2 className="font-display text-[clamp(30px,4.4vw,62px)] font-light leading-[1.07] tracking-editorial">
              Read, write, set, release.
            </h2>
          </div>
        </FadeUp>

        <StaggerChildren staggerDelay={0.1} className="grid gap-px md:grid-cols-2">
          {siteConfig.process.map((step) => (
            <div
              key={step.num}
              className="group border-t border-ink/15 py-9 transition-colors duration-500 hover:border-accent md:py-11 md:pr-10"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[12px] tracking-[0.2em] text-accent">
                  {step.num}
                </span>
                <h3 className="font-display text-3xl font-light tracking-editorial md:text-4xl">
                  {step.title}
                </h3>
              </div>
              <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
