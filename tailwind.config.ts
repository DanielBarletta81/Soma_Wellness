import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "soma-surface": "var(--soma-surface)",
        "soma-foreground": "var(--soma-foreground)",
        "soma-muted": "var(--soma-muted)",
        "soma-accent": "var(--soma-accent)",
        "soma-accent-strong": "var(--soma-accent-strong)",
        "soma-card": "var(--soma-card)"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 40px -20px var(--soma-accent), 0 0 0 1px rgba(255,255,255,0.08)"
      },
      borderRadius: {
        xl: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
