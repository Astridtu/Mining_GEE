import type { Config } from "tailwindcss";

module.exports = {
  darkMode: 'class', // Enables dark mode via a class on the HTML element
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust as needed for your project structure
  theme: {
    extend: {},
  },
  plugins: [],
};

export default {
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
    },
  },
  plugins: [],
} satisfies Config;
