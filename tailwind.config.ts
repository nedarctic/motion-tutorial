import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        khaki: "#C19A6B",     // main buttons & accents
        gold: "#E4C07A",      // headings & light text
        brown: "#3D2F1A",     // section backgrounds
        dark: "#1C150F",      // main page background
        "khaki-hover": "#d4b085",   // optional lighter hover state
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;