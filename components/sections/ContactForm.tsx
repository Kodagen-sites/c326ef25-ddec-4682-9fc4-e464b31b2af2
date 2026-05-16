"use client";
import { useState } from "react";
import { siteConfig } from "@/content/site-config";

/**
 * ContactForm — landing-mode inquiry form. No backend: composing a project
 * brief opens the visitor's mail client, pre-addressed to the studio.
 * Editorial underline inputs to match the type-led theme.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [project, setProject] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project enquiry — ${brand || name || "new brand"}`;
    const body = [
      `Name: ${name}`,
      `Brand / company: ${brand}`,
      `Email: ${email}`,
      "",
      "About the project:",
      project,
    ].join("\n");
    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  const fieldClass =
    "w-full border-b border-ink/25 bg-transparent py-3 font-sans text-base text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-accent";
  const labelClass =
    "mb-1.5 block font-mono text-[10px] uppercase tracking-[0.24em] text-ink/50";

  if (sent) {
    return (
      <div className="border-t border-ink/15 pt-10">
        <p className="font-display text-2xl font-light leading-snug tracking-editorial text-ink md:text-3xl">
          Your brief is on its way.
        </p>
        <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-ink-muted">
          We have opened your mail client with the enquiry drafted. Send it
          when you are ready — we read every one and reply within two working
          days. If nothing opened, write to us directly at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="border-b border-accent/50 text-accent transition-colors hover:border-accent"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-ink/15 pt-10">
      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Your name
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Marques"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@brand.com"
            className={fieldClass}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-brand" className={labelClass}>
            Brand or company
          </label>
          <input
            id="cf-brand"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="The brand you are building"
            className={fieldClass}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-project" className={labelClass}>
            Tell us about the project
          </label>
          <textarea
            id="cf-project"
            required
            rows={4}
            value={project}
            onChange={(e) => setProject(e.target.value)}
            placeholder="What you are building, and what you need from a studio."
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-9 rounded-none bg-ink px-9 py-4 font-mono text-[11px] uppercase tracking-[0.24em] text-paper transition-colors duration-300 hover:bg-accent"
      >
        Send the brief →
      </button>
    </form>
  );
}
