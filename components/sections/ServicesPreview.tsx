import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { StaggerChildren } from "@/components/motion/FadeUp";
import FadeUp from "@/components/motion/FadeUp";
import CardTiltLayer from "@/components/motion/CardTiltLayer";
import ServiceCard from "@/components/ServiceCard";

/**
 * ServicesPreview — CV2 oversized-number card grid on vellum (tone 1).
 */
export default function ServicesPreview() {
  return (
    <section className="bg-paper text-ink">
      <div className="shell section-pad">
        <FadeUp>
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
                <span className="inline-block h-px w-12 bg-accent" />
                What we do
              </div>
              <h2 className="max-w-[15ch] font-display text-[clamp(30px,4.4vw,62px)] font-light leading-[1.07] tracking-editorial">
                Four disciplines, one continuous argument.
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-ink"
            >
              <span className="border-b border-ink/30 pb-1 transition-colors group-hover:border-accent group-hover:text-accent">
                All services
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </FadeUp>

        <StaggerChildren
          staggerDelay={0.08}
          className="mt-6 grid grid-cols-1 gap-0 md:grid-cols-2"
        >
          {siteConfig.services.map((service, i) => (
            <CardTiltLayer key={service.slug} intensity={0.15} lift={6}>
              <ServiceCard service={service} index={i} />
            </CardTiltLayer>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
