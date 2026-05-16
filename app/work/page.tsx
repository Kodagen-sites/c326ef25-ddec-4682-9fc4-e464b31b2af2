import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import CardTiltLayer from "@/components/motion/CardTiltLayer";
import MagneticButton from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected branding, packaging, art direction and editorial work by Vellum & Vine — identities built for premium consumer brands.",
  alternates: { canonical: "/work" },
};

const WORK_ASSET_BASE =
  "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images";
const WORK_IMAGES = [
  `${WORK_ASSET_BASE}/section-showcase-1.jpg`,
  `${WORK_ASSET_BASE}/section-showcase-2.jpg`,
  `${WORK_ASSET_BASE}/section-showcase-3.jpg`,
  `${WORK_ASSET_BASE}/section-showcase-4.jpg`,
  `${WORK_ASSET_BASE}/section-process.jpg`,
  `${WORK_ASSET_BASE}/section-services.jpg`,
];

export default function WorkPage() {
  const heroImage =
    "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-showcase-1.jpg";

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="A decade of brands, set in type."
        image={heroImage}
        intro="A representative selection across disciplines. Each began the same way — with reading, then writing, then form. Project detail is shared on request."
      />

      <section className="bg-paper text-ink">
        <div className="shell section-pad">
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {siteConfig.work.map((item, i) => {
              const image = WORK_IMAGES[i % WORK_IMAGES.length];
              return (
                <FadeUp key={item.slug} delay={(i % 2) * 0.1}>
                  <article className="group">
                    <CardTiltLayer intensity={0.16} lift={8}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt={item.title}
                        className="aspect-[4/3] w-full border border-ink/10 object-cover transition-[filter] duration-500 group-hover:brightness-105"
                      />
                    </CardTiltLayer>
                    <div className="mt-5 flex items-baseline justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                        {item.discipline}
                      </span>
                      <span className="font-mono text-[10px] text-ink/40">
                        {item.year}
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-[clamp(24px,2.6vw,34px)] font-light leading-tight tracking-editorial">
                      {item.title}
                    </h2>
                    <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-ink-muted">
                      {item.line}
                    </p>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-wine text-paper">
        <div className="shell section-pad text-center">
          <FadeUp>
            <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(28px,4.4vw,62px)] font-light leading-[1.08] tracking-editorial">
              Your brand could be the next line in this list.
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
        </div>
      </section>
    </>
  );
}
