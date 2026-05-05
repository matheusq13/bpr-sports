import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rubra: {
          black:    "#081A15",
          dark:     "#0E2620",
          graphite: "#15302A",
          gray:     "#9AB0A8",
          white:    "#FFFFFF",
          green:    "#2EE584",
          greenLt:  "#4FF09A",
          red:      "#B91D2F",
          redLt:    "#D62A40",
          border:   "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-green": "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(46,229,132,0.12) 0%, transparent 70%)",
        "radial-red":   "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(185,29,47,0.14) 0%, transparent 70%)",
        "radial-hero":  "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(46,229,132,0.08) 0%, transparent 65%)",
        "grid-lines":   "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(46,229,132,0.5)" },
          "50%":      { boxShadow: "0 0 0 14px rgba(46,229,132,0)" },
        },
        "shine": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.4s ease-out infinite",
        "shine":      "shine 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
