import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Surfaces */
        paper: "rgb(var(--paper) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",

        /* Text */
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",

        /* Lines */
        border: "rgb(var(--border) / <alpha-value>)",

        /* Causalica Brand */
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          strong: "rgb(var(--brand-strong) / <alpha-value>)",
          soft: "rgb(var(--brand-soft) / <alpha-value>)",
        },
        brand2: {
          DEFAULT: "rgb(var(--brand-2) / <alpha-value>)",
          strong: "rgb(var(--brand-2-strong) / <alpha-value>)",
          soft: "rgb(var(--brand-2-soft) / <alpha-value>)",
        },
        brandDark: {
          DEFAULT: "rgb(var(--brand-dark) / <alpha-value>)",
          strong: "rgb(var(--brand-dark-strong) / <alpha-value>)",
          soft: "rgb(var(--brand-dark-soft) / <alpha-value>)",
        },

        /* Backwards-compatible (keep existing component classes working) */
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-strong": "rgb(var(--accent-strong) / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(2, 6, 23, 0.05), 0 12px 30px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
