"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { NAV_LINKS } from "./nav-links";
import { useIsMobile, useScrollState } from "./hooks";

/**
 * Header — CENTER LOGO + SPLIT NAV (Vellum & Vine).
 * (Services  Work)   VELLUM & VINE   (About  Contact)
 * Restyled for the ink-on-vellum editorial theme: ink type, transparent at
 * the top of the page, vellum + blur once the reader scrolls.
 */
export default function HeaderCenterLogoSplit() {
  const scrolled = useScrollState(40);
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const leftLinks = NAV_LINKS.slice(1, 3); // Services, Work
  const rightLinks = NAV_LINKS.slice(3); // About, Contact

  const linkClass = (href: string) =>
    `relative font-mono text-[11px] uppercase tracking-[0.3em] transition-colors ${
      pathname === href ? "text-accent" : "text-ink/70 hover:text-ink"
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/10 bg-paper/85 py-3 backdrop-blur-xl md:py-4"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="relative flex items-center justify-between px-6 md:px-10">
          {!isMobile ? (
            <nav className="flex flex-1 gap-8">
              {leftLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="centersplit-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                    />
                  )}
                </Link>
              ))}
            </nav>
          ) : (
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex-1 text-left text-ink"
            >
              <Menu size={20} />
            </button>
          )}

          <Link
            href="/"
            className="group absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-0.5 text-ink"
          >
            <span className="font-display text-sm font-medium uppercase tracking-[0.3em] transition-all duration-500 group-hover:tracking-[0.36em] md:text-base lg:text-lg">
              {siteConfig.company.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="h-px w-2 bg-ink/30 md:w-3" />
              <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-ink/45 md:text-[9px]">
                Lisbon · est. {siteConfig.company.foundedYear}
              </span>
              <span className="h-px w-2 bg-ink/30 md:w-3" />
            </div>
          </Link>

          {!isMobile ? (
            <nav className="flex flex-1 justify-end gap-8">
              {rightLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="centersplit-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                    />
                  )}
                </Link>
              ))}
            </nav>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileOverlay onClose={() => setMenuOpen(false)} pathname={pathname} />}
      </AnimatePresence>
    </>
  );
}

function MobileOverlay({ onClose, pathname }: { onClose: () => void; pathname: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-paper md:hidden"
    >
      <div className="relative flex items-center justify-between p-6">
        <button onClick={onClose} className="text-ink" aria-label="Close menu">
          <X size={22} />
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 font-display text-sm font-medium uppercase tracking-[0.3em] text-ink">
          {siteConfig.company.name}
        </div>
        <div className="w-6" />
      </div>
      <ul className="mt-10 flex flex-col items-center gap-7 p-6 text-center">
        {NAV_LINKS.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className={`font-display text-3xl transition-colors ${
                pathname === link.href ? "text-accent" : "text-ink hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
