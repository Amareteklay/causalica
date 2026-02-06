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
        paper: "rgb(var(--paper))",
        mist: "rgb(var(--mist))",
        card: "rgb(var(--card))",
        ink: "rgb(var(--ink))",
        muted: "rgb(var(--muted))",
        border: "rgb(var(--border))",
        accent: "rgb(var(--accent))",
        "accent-strong": "rgb(var(--accent-strong))",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(2, 6, 23, 0.05), 0 12px 30px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
