import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import FadeUp from "@/components/motion/FadeUp";
import CardTiltLayer from "@/components/motion/CardTiltLayer";

const ASSET_BASE =
  "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images";
const WORK_IMAGES = [
  `${ASSET_BASE}/section-showcase-1.jpg`,
  `${ASSET_BASE}/section-showcase-2.jpg`,
  `${ASSET_BASE}/section-showcase-3.jpg`,
  `${ASSET_BASE}/section-showcase-4.jpg`,
];

/**
 * SelectedWork — editorial work mosaic on oxblood-dark (tone 4).
 * Tiles are representative; individual tiles route to the Work index.
 */
export default function SelectedWork() {
  const items = siteConfig.work.slice(0, 4);

  return (
    <section className="bg-wine text-paper">
      <div className="shell section-pad">
        <FadeUp>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
                <span className="inline-block h-px w-12 bg-accent" />
                Selected work
              </div>
              <h2 className="max-w-[16ch] font-display text-[clamp(30px,4.4vw,62px)] font-light leading-[1.07] tracking-editorial">
                Brands we have set in type.
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-paper/80"
            >
              <span className="border-b border-paper/30 pb-1 transition-colors group-hover:border-accent group-hover:text-accent">
                View all work
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </FadeUp>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {items.map((item, i) => {
            const image = WORK_IMAGES[i % WORK_IMAGES.length];
            return (
              <FadeUp key={item.slug} delay={i * 0.1}>
                <Link href="/work" className="group block">
                  <CardTiltLayer intensity={0.18} lift={8}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={item.title}
                      className="aspect-[4/3] w-full border border-paper/10 object-cover transition-[filter] duration-500 group-hover:brightness-110"
                    />
                  </CardTiltLayer>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                      {item.discipline}
                    </span>
                    <span className="font-mono text-[10px] text-paper/40">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-light leading-tight tracking-editorial text-paper transition-colors group-hover:text-accent md:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-paper/55">
                    {item.line}
                  </p>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
