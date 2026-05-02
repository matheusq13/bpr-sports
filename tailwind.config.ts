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
          black:    "#050505",
          dark:     "#0B0F0E",
          graphite: "#15191B",
          gray:     "#A7B0AC",
          white:    "#F5F7F6",
          green:    "#19F28A",
          greenLt:  "#3DFFAB",
          red:      "#E10A1C",
          redLt:    "#FF2A3A",
          border:   "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-green": "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(25,242,138,0.10) 0%, transparent 70%)",
        "radial-red":   "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(225,10,28,0.12) 0%, transparent 70%)",
        "radial-hero":  "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(25,242,138,0.07) 0%, transparent 65%)",
        "grid-lines":   "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(25,242,138,0.5)" },
          "50%":      { boxShadow: "0 0 0 14px rgba(25,242,138,0)" },
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
