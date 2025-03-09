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
        background: "#272727",
        foreground: "#2e2e2e",
        secondary: '#d1e8e2',
        primary: '#376e6f'
      },
    },
  },
  plugins: [],
};
export default config;
