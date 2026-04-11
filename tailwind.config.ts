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
        brand: {
          bg:       "#050505",
          bgAlt:    "#0B0F0E",
          green:    "#19F28A",
          greenLt:  "#3DFFAB",
          white:    "#F5F7F6",
          gray:     "#A7B0AC",
          border:   "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-green": "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(25,242,138,0.10) 0%, transparent 70%)",
        "radial-hero":  "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(25,242,138,0.07) 0%, transparent 65%)",
      },
    },
  },
  plugins: [],
};

export default config;
