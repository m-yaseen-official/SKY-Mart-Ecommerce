import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["ClashDisplay", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};