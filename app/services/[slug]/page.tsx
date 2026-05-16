import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import MagneticButton from "@/components/motion/MagneticButton";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = siteConfig.services.filter((s) => s.slug !== slug);
  const index = siteConfig.services.findIndex((s) => s.slug === slug);
  const heroImage =
    "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-showcase-3.jpg";

  return (
    <>
      <PageHero
        eyebrow={`Service · ${String(index + 1).padStart(2, "0")}`}
        title={service.name}
        image={heroImage}
        intro={service.description}
      />

      <section className="bg-paper text-ink">
        <div className="shell section-pad">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <div>
              <FadeUp>
                <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
                  <span className="inline-block h-px w-12 bg-accent" />
                  The engagement
                </div>
              </FadeUp>
              <FadeUp delay={0.06}>
                <p className="max-w-[60ch] font-display text-xl font-light leading-snug text-ink md:text-2xl">
                  {service.detail}
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.12}>
              <div className="border-t border-ink/15 pt-7">
                <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.26em] text-ink/45">
                  What it includes
                </div>
                <ul className="space-y-4">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex gap-4 border-b border-ink/10 pb-4 text-base text-ink-muted"
                    >
                      <span className="font-mono text-[12px] text-accent">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="bg-clay text-ink">
        <div className="shell section-pad">
          <FadeUp>
            <div className="mb-10 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
              Other disciplines
            </div>
          </FadeUp>
          <div className="grid gap-0 md:grid-cols-3">
            {others.map((s, i) => (
              <FadeUp key={s.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full border-t border-ink/15 py-8 transition-colors duration-500 hover:border-accent md:pr-8"
                >
                  <h3 className="font-display text-2xl font-light tracking-editorial transition-transform duration-300 group-hover:translate-x-1">
                    {s.name}
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-ink-muted">
                    {s.short}
                  </p>
                  <span className="mt-5 inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-ink/45 transition-colors group-hover:text-accent">
                    Read →
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="mt-16 text-center">
              <MagneticButton
                as="a"
                href="/contact"
                className="rounded-none bg-ink px-10 py-4 font-mono text-[11px] uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:bg-accent"
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
