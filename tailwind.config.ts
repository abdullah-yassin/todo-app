import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#7211f8",
        secondary: "#c125ff",
      },
      container: {
        screens: {
          xl: "1320px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
