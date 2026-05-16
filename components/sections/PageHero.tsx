import type { ReactNode } from "react";

/**
 * PageHero — full-bleed editorial hero band for inner pages.
 * Server Component (no event handlers, no "use client").
 *
 * Light treatment to match the ink-on-vellum theme: a full-bleed textured
 * field with a vellum wash, ink type, and a hairline accent rule. The fixed
 * header floats over it, so the page <main> needs NO top padding.
 */
type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  image: string;
  intro?: string;
};

export default function PageHero({ eyebrow, title, image, intro }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-clay md:min-h-[60vh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      {/* Vellum wash — keeps the field soft and the ink type legible. */}
      <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/80 to-paper/55" />

      <div className="relative w-full px-5 pb-14 pt-44 md:px-10 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
            <span className="inline-block h-px w-10 bg-accent" />
            {eyebrow}
          </div>
          <h1 className="max-w-[20ch] font-display text-[clamp(40px,7vw,92px)] font-light leading-[1.02] tracking-editorial text-ink">
            {title}
          </h1>
          {intro ? (
            <p className="mt-8 max-w-[640px] text-lg leading-relaxed text-ink-muted">
              {intro}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
