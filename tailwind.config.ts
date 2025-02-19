import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
      fontFamily:{
        geistSans: ["GeistVF", "sans-serif"],
        geistMono: ["GeistMonoVF", "monospace"],
        ivyPresto: ['var(--ivy-presto-headline)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
