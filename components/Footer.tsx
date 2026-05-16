import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

/**
 * Footer — FT2 Asymmetric Editorial.
 * Oversized parting headline, an asymmetric column grid, a colophon row.
 * Server Component — closing dark (ink) tone.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="shell section-pad">
        {/* Parting headline */}
        <div className="grid gap-10 border-b border-paper/12 pb-14 md:grid-cols-[1.6fr_1fr] md:items-end md:pb-20">
          <h2 className="font-display text-[clamp(34px,5.4vw,76px)] font-light leading-[1.04] tracking-editorial">
            {siteConfig.footer.ctaHeadline}
          </h2>
          <div className="md:text-right">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-paper/80 transition-colors hover:text-accent"
            >
              Start a project
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.6fr_1fr_1fr] md:py-20">
          <div className="max-w-sm">
            <div className="font-display text-xl tracking-[0.18em] uppercase">
              {siteConfig.company.name}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-paper/55">
              {siteConfig.footer.brandStatement}
            </p>
            <div className="mt-7 space-y-1.5 font-mono text-[12px] text-paper/65">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block transition-colors hover:text-accent"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="block transition-colors hover:text-accent"
              >
                {siteConfig.contact.phone}
              </a>
              <span className="block text-paper/45">{siteConfig.contact.area}</span>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/35">
              Studio
            </div>
            {siteConfig.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-lg font-light text-paper/80 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/35">
              Legal
            </div>
            {siteConfig.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-lg font-light text-paper/80 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-5">
              <SocialLinks socials={siteConfig.socials} />
            </div>
          </nav>
        </div>

        {/* Colophon */}
        <div className="flex flex-col gap-3 border-t border-paper/12 pt-7 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {siteConfig.company.legalName}. All rights reserved.
          </span>
          <span>Set in Fraunces & Inter — {siteConfig.contact.city}</span>
        </div>
      </div>
    </footer>
  );
}
