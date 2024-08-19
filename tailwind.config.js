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
        primary: "#1f2833",
        secondary: "#324153",
        tertiary: "#a98743",
        primary_text: "#fefae0",
        secondary_text: "#FFCb9a",
      },
    },
  },
  plugins: [],
};
