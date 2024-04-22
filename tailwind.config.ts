import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        food: "url(https://static.vecteezy.com/ti/vetor-gratis/p3/7286903-padrao-laranja-com-icones-de-fast-food-doodle-food-background-vetor.jpg)",
        gastronomy:
          "url(https://play-lh.googleusercontent.com/eafAaAaJFqETPuSjnWXMR6E2iOqCxp4ekQHdY1OJ4UwVDHrd5BI8X1tUUBEtvRsyUa8)",
      },
    },
  },
  plugins: [],
};
export default config;
