import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            foreground: "#fff",
            DEFAULT: "#05668d"
          },
          secondary: {
            foreground: "#fff",
            DEFAULT: "#679436"
          }
        }
      }
    }
  })],
};
export default config;
