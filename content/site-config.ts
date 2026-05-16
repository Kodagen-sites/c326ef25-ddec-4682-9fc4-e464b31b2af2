/* ────────────────────────────────────────────────────────────────────────
 * VARIATION MANIFEST — generation fingerprint
 *   generation_id : gen-2026-05-16-vellum-and-vine
 *   archetype     : F — Type Editorial  (words ARE the product; chosen because
 *                   the studio's own brief states "our writing and typography
 *                   ARE the product". Reason logged per ARCHETYPE SELECTION.)
 *   style         : S6 — Fashion Editorial
 *   voice         : V2 — Intellectual Editorial
 *   header        : center-logo-split
 *   footer        : FT2 — Asymmetric Editorial
 *   card_variant  : CV2 — Oversized Number Minimal
 *   hero_pattern  : H1 — Giant Manifesto (two-line)
 *   contact       : CT3 — Type-only (single Lisbon location, type-led)
 *   about         : AB4 — Type-only Manifesto
 *   cta           : CTA1 — Centered Oversized Type
 *   color_variant : ink-on-vellum, oxblood-wine accent
 *   asset_mode    : prompt-only  (hero T4 still + parallax; G motion floor kept)
 *   build_mode    : landing-only (no admin)
 *   NOTE          : industry-gate misdetected "retail" — this is a creative
 *                   services agency, not a shop. No cart: there are no products.
 * ──────────────────────────────────────────────────────────────────────── */

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  detail: string;
  deliverables: string[];
};

export type WorkItem = {
  slug: string;
  title: string;
  discipline: string;
  line: string;
  year: string;
};

export type ProcessStep = {
  num: string;
  title: string;
  body: string;
};

export const siteConfig = {
  company: {
    name: "Vellum & Vine",
    shortName: "V&V",
    legalName: "Vellum & Vine Lda.",
    tagline: "A branding and design studio in Lisbon.",
    foundedYear: 2014,
  },

  industry: "design-studio",
  headerVariant: "center-logo-split",
  templateId: "creative-agency-v1",

  contact: {
    email: "hello@vellumandvine.com",
    phone: "+351 21 000 0000",
    phoneHref: "tel:+351210000000",
    city: "Lisbon",
    country: "Portugal",
    area: "Bairro Alto, Lisbon, Portugal",
    hours: "Studio visits by appointment, Tuesday to Friday.",
  },

  seo: {
    siteUrl: "https://vellumandvine.com",
    metaTitle: "Vellum & Vine — Branding & Design Studio, Lisbon",
    metaDescription:
      "Vellum & Vine is a type-led branding and design studio in Lisbon, building brand identity, packaging, art direction and editorial design for premium consumer brands.",
    locale: "en_PT",
  },

  socials: {
    instagram: "https://instagram.com/vellumandvine",
    linkedin: "https://linkedin.com/company/vellumandvine",
    x: "https://x.com/vellumandvine",
  },

  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],

  hero: {
    eyebrow: "Branding & design — Lisbon",
    videoUrl:
      "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/videos/final.mp4",
    h1: [{ text: "Brands, written" }, { text: "before they're drawn." }],
    subhead:
      "Vellum & Vine builds identities for premium consumer brands — beginning with the words, then the type, then everything the eye reaches after.",
    body: "Most studios draw a mark and write the copy to fit it. We work the other way around: a brand's voice and its typography are decided together, in the first week, because they are the same decision.",
    ctaPrimary: { label: "Start a project", href: "/contact" },
    ctaSecondary: { label: "See selected work", href: "/work" },
  },

  manifesto: {
    eyebrow: "Point of view",
    statement:
      "Typography is not decoration. It is the brand speaking before anyone has read a word.",
  },

  approach: {
    eyebrow: "The way we work",
    title: "A studio that reads before it draws.",
    paragraphs: [
      "Every engagement opens the same way — with reading. The old copy, the founder's emails, the words customers use without being asked. A brand already has a voice; most of the time nobody has written it down.",
      "From that we set the typographic palette and the language in the same pass, because a typeface is an argument about tone and a sentence is an argument about tone, and they have to agree. Only then does form follow — the mark, the colour, the system.",
      "We keep the studio small on purpose. Four people, no juniors handed the difficult page. The person who reads your brief is the person who sets the last line of your packaging.",
    ],
  },

  services: [
    {
      slug: "brand-identity",
      name: "Brand Identity",
      short: "Name, voice, logotype, and the typographic system beneath them.",
      description:
        "The core system — naming, voice, logotype, and a typographic palette with rules that hold as the brand grows. We design the parts that have to survive a decade of use, not a single launch.",
      detail:
        "An identity engagement produces the spine of the brand: how it is named, how it sounds, how it is set. We treat the logotype as the last decision rather than the first — it should be the natural consequence of a voice and a typeface already chosen, not a shape the rest of the brand is asked to obey. The deliverable is a system a future designer can extend without calling us.",
      deliverables: [
        "Naming and verbal identity",
        "Logotype and monogram",
        "Typographic palette and type rules",
        "Colour and a usage system",
        "A written brand book",
      ],
    },
    {
      slug: "packaging-design",
      name: "Packaging Design",
      short: "Structure, surface, and copy for the shelf moment.",
      description:
        "Structure, surface, and copy for products that are picked up before they are read. We design the shelf moment and the unboxing as one continuous sequence.",
      detail:
        "Packaging is the only part of a brand a customer holds. We design the box, the label, and the words on both as a single object — the front panel that earns the pick-up, the back panel that rewards the turn, the inner surface nobody is contractually required to consider. Production-ready artwork, specified for the printer you will actually use.",
      deliverables: [
        "Primary and secondary packaging",
        "Label and panel copy",
        "Material and finish specification",
        "Print-ready artwork and dielines",
        "Unboxing sequence",
      ],
    },
    {
      slug: "art-direction",
      name: "Art Direction",
      short: "A consistent visual argument across every image.",
      description:
        "A consistent visual argument across photography, campaign, and launch — directed so every image reads as the same brand, shot by shot.",
      detail:
        "Art direction is the discipline that keeps a brand recognisable when it is no longer being designed by us. We set the rules a photographer, a retoucher, and a social team can all follow: framing, light, distance, what is allowed in the background. The output is not a moodboard but a working brief — specific enough that the next shoot looks like the last one on purpose.",
      deliverables: [
        "Photographic direction and briefs",
        "Campaign concept and key visuals",
        "Image library and grading notes",
        "Layout and grid system",
        "Launch art direction",
      ],
    },
    {
      slug: "editorial-design",
      name: "Editorial Design",
      short: "Books, lookbooks, and the long-form a brand earns belief with.",
      description:
        "Books, lookbooks, reports, and the long-form pieces where a brand earns belief — typeset with the patience the format deserves.",
      detail:
        "Some arguments cannot be made on a single panel. Editorial design is the long-form work — the book, the lookbook, the annual report — where a brand is given enough room to be read rather than scanned. We handle structure, typesetting, and the editing it takes to make a long document worth finishing, then prepare it for print or screen.",
      deliverables: [
        "Books and lookbooks",
        "Reports and long-form documents",
        "Typesetting and grid design",
        "Editing and sequencing",
        "Print and digital production",
      ],
    },
  ] as Service[],

  process: [
    {
      num: "01",
      title: "Read",
      body: "We begin with everything the brand already has — old copy, founder notes, the words customers use unprompted. The voice is usually there; it has just never been written down.",
    },
    {
      num: "02",
      title: "Write",
      body: "Naming, voice, and the verbal system come before form. A brand that cannot describe itself in a sentence cannot be designed into one.",
    },
    {
      num: "03",
      title: "Set",
      body: "Typography and identity are decided in the same pass. The typeface and the sentence are arguments about the same tone, so they are settled together.",
    },
    {
      num: "04",
      title: "Release",
      body: "Packaging, art direction, and editorial work carry the system into the world — and a written book hands it to whoever maintains the brand next.",
    },
  ] as ProcessStep[],

  work: [
    {
      slug: "douro-wine-estate",
      title: "Identity for a Douro wine estate",
      discipline: "Brand identity · Packaging",
      line: "A heritage estate renaming three generations of wine under one typographic mark.",
      year: "2025",
    },
    {
      slug: "single-origin-chocolate",
      title: "Packaging for a single-origin chocolate maker",
      discipline: "Packaging · Art direction",
      line: "A bar wrapper designed as a short essay on the cacao's origin — read on the unfold.",
      year: "2024",
    },
    {
      slug: "design-quarterly",
      title: "Editorial system for a design quarterly",
      discipline: "Editorial design",
      line: "A grid and type system flexible enough to outlast a rotating cast of guest editors.",
      year: "2024",
    },
    {
      slug: "lisbon-perfumer",
      title: "Art direction for a Lisbon perfumer",
      discipline: "Art direction · Brand identity",
      line: "A photographic language for scent — light and distance standing in for the unphotographable.",
      year: "2023",
    },
    {
      slug: "ceramics-atelier",
      title: "Naming and identity for a ceramics atelier",
      discipline: "Brand identity",
      line: "A name and logotype for a studio whose work was already quiet, confident, and unhurried.",
      year: "2023",
    },
    {
      slug: "olive-oil-house",
      title: "Brand and packaging for an olive oil house",
      discipline: "Brand identity · Packaging",
      line: "A label that treats provenance as the headline and the harvest date as the proof.",
      year: "2022",
    },
  ] as WorkItem[],

  marquee: [
    "Set in Lisbon",
    "Written before drawn",
    "Type-led from the first brief",
    "For premium consumer brands",
    "Vellum & Vine",
  ],

  cta: {
    eyebrow: "Start here",
    headline: ["Every brand", "starts with a sentence."],
    body: "Tell us what you are building. We will tell you, plainly, whether we are the studio for it.",
    button: { label: "Start a project", href: "/contact" },
  },

  footer: {
    variant: "FT2",
    brandStatement:
      "A type-led branding and design studio in Lisbon, building identities for premium consumer brands since 2014.",
    ctaHeadline: "Let's begin with a sentence.",
  },

  nav: [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
export default siteConfig;
