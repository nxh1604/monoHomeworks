import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["var(--font-overpass)"],
      },
      colors: {
        primary: "#AA9585",
        secondary: "#291E24",
        borderPrimary: "#181B1D",
      },
    },
  },
  plugins: [],
};
export default config;
