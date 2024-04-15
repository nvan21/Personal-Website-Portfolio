/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/App.jsx"],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        metal: "#1f2833",
        gray: "#324153",
        cyan: "#116466",
        gold: "#a98743",
        cream: "#fefae0",
        light_gold: "#FFCb9a",
      },
      backgroundImage: {
        "intro-background": "url('/src/assets/intro-background.jpg')",
        "space-background": "url('/src/assets/space-background.jpg')",
      },
    },
  },
  plugins: [],
};
