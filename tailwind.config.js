const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        darkBG: "#170B0B",
        coffee: "#9A5E32",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
