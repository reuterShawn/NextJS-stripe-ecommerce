import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],


  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        cormorantGaramond: ["var(--font-cormorant-garamond)", "serif"],
        poppins: ["var(--font-poppins", "sans-serif"],
      }
    },
    // daisyui: {
    //   themes: [
    //     "light", "dark"

    //   ],
    // },
  },
};
export default config;
