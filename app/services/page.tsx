import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import PageHero from "@/components/sections/PageHero";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import CardTiltLayer from "@/components/motion/CardTiltLayer";
import ServiceCard from "@/components/ServiceCard";
import MagneticButton from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity, packaging design, art direction and editorial design — the four disciplines of Vellum & Vine, a type-led studio in Lisbon.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const heroImage = resolveImage({
    industry: "agency",
    keyword: "typography specimen",
    brandColor: "#E4D8C6",
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four disciplines, set in one voice."
        image={heroImage}
        intro="We work across the life of a brand — from the first sentence to the printed object. Each discipline can stand alone; together they keep a brand coherent."
      />

      <section className="bg-paper text-ink">
        <div className="shell section-pad">
          <StaggerChildren
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-0 md:grid-cols-2"
          >
            {siteConfig.services.map((service, i) => (
              <CardTiltLayer key={service.slug} intensity={0.15} lift={6}>
                <ServiceCard service={service} index={i} />
              </CardTiltLayer>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="shell section-pad text-center">
          <FadeUp>
            <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(28px,4.2vw,58px)] font-light leading-[1.08] tracking-editorial">
              Not sure which discipline you need? Start with a sentence.
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
          <FadeUp delay={0.2}>
            <Link
              href="/work"
              className="mt-7 inline-block font-mono text-[11px] uppercase tracking-[0.24em] text-paper/55 transition-colors hover:text-accent"
            >
              Or see selected work →
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
