const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
    // fontFamily: {
    //   sans: ["Inter", ...defaultTheme.fontFamily.sans],
    //   display: ["Lexend", ...defaultTheme.fontFamily.sans],
    // },
  },
  plugins: [],
};
