import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial paper-and-ink palette — Vellum & Vine
        paper: "#F2EDE3", // vellum cream — primary background
        ink: "#16130E", // deep warm near-black — secondary background
        clay: "#E4D8C6", // soft clay — tertiary background
        wine: "#2A1416", // deep oxblood-dark — fourth background tone
        accent: "#7C2D33", // oxblood — highlight / line / text only
        primary: "#7C2D33", // alias consumed by card + header templates
        "ink-muted": "#5C5347", // muted body text on paper
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        editorial: "-0.025em",
      },
    },
  },
  plugins: [],
};

export default config;
