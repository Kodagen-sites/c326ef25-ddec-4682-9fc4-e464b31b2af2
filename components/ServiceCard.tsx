import Link from "next/link";
import type { Service } from "@/content/site-config";

/**
 * ServiceCard — CV2 Oversized Number Minimal.
 * No image. Large numbered prefix + display-serif heading + refined body.
 * Restyled for the ink-on-vellum editorial theme.
 * Recommended grid: `grid grid-cols-1 md:grid-cols-2 gap-0` (border-t unifies).
 */
export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const num = String((index ?? 0) + 1).padStart(2, "0");

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full border-t border-ink/15 p-8 transition-colors duration-500 hover:border-accent md:p-10"
    >
      <div className="mb-6 font-display text-6xl font-light leading-none text-ink/20 transition-colors duration-500 group-hover:text-accent/70 md:text-7xl">
        {num}
      </div>
      <h3 className="mb-4 font-display text-2xl font-light leading-tight tracking-editorial text-ink transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
        {service.name}
      </h3>
      <p className="mb-7 max-w-sm text-sm leading-relaxed text-ink-muted md:text-base">
        {service.short}
      </p>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/45 transition-colors group-hover:text-accent">
        Read →
      </div>
    </Link>
  );
}
