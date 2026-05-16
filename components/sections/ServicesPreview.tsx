"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollCanvas from "@/components/ScrollCanvas";
import framesManifest from "@/content/frames-manifest.json";
import { siteConfig } from "@/content/site-config";

/**
 * ServicesPreview — "What we do". Archetype F's one scroll-scrub moment:
 * a pinned frame sequence the visitor scrolls through, revealing each of
 * the four disciplines in turn (frames cross-fade behind the type).
 */
export default function ServicesPreview() {
  const [progress, setProgress] = useState(0);
  const services = siteConfig.services;
  const active = Math.min(
    services.length - 1,
    Math.floor(progress * services.length),
  );

  return (
    <section className="bg-ink text-paper">
      <ScrollCanvas
        frameCount={framesManifest.frameCount}
        pattern={framesManifest.frameUrlTemplate}
        padLength={4}
        scrollDistance={4}
        onProgress={setProgress}
      >
        {/* scrim over the frames so the type reads */}
        <div aria-hidden className="absolute inset-0 bg-ink/60" />

        <div className="relative z-10 flex h-full flex-col justify-center">
          <div className="shell w-full">
            <div className="mb-9 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-paper/70">
              <span className="inline-block h-px w-12 bg-paper/50" />
              What we do
            </div>
            <h2 className="mb-12 max-w-[15ch] font-display text-[clamp(30px,4.4vw,62px)] font-light leading-[1.07] tracking-editorial text-paper">
              Four disciplines, one continuous argument.
            </h2>

            {/* the four disciplines — cross-faded by scroll progress */}
            <div className="relative min-h-[230px]">
              {services.map((service, i) => (
                <div
                  key={service.slug}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === active ? 1 : 0 }}
                  aria-hidden={i !== active}
                >
                  <div className="flex items-baseline gap-5 md:gap-8">
                    <span className="font-display text-[clamp(40px,7vw,116px)] font-light leading-none text-accent">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[clamp(24px,3vw,46px)] font-light tracking-editorial text-paper">
                        {service.name}
                      </h3>
                      <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-paper/75 md:text-base">
                        {service.short}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* progress bars — one per discipline */}
            <div className="mt-10 flex gap-3">
              {services.map((service, i) => (
                <span
                  key={service.slug}
                  className="h-[3px] w-12 transition-colors duration-300"
                  style={{
                    background:
                      i <= active ? "#7C2D33" : "rgba(244,236,224,0.18)",
                  }}
                />
              ))}
            </div>

            <Link
              href="/services"
              className="group mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-paper"
            >
              <span className="border-b border-paper/40 pb-1 transition-colors group-hover:border-accent">
                All services
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </ScrollCanvas>
    </section>
  );
}
