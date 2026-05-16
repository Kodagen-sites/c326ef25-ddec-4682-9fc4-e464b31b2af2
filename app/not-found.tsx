import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-paper text-ink">
      <div className="shell text-center">
        <div className="font-display text-[clamp(80px,18vw,240px)] font-light italic leading-none text-ink/15">
          404
        </div>
        <h1 className="mt-4 font-display text-[clamp(28px,4vw,52px)] font-light tracking-editorial">
          This page was never set in type.
        </h1>
        <p className="mx-auto mt-5 max-w-[44ch] text-base leading-relaxed text-ink-muted">
          The page you asked for does not exist. Everything we have made,
          though, is one click away.
        </p>
        <Link
          href="/"
          className="mt-9 inline-block rounded-none bg-ink px-9 py-4 font-mono text-[11px] uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:bg-accent"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
