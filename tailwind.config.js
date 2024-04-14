/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.jsx"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Mono"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        metal: "#1f2833",
        gray: "#2c3531",
        cyan: "#116466",
        gold: "#a98743",
        cream: "#fefae0",
        light_gold: "#FFCb9a",
      },
    },
  },
  plugins: [],
};
