const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primaryBackground: '#5c6ac4',
      secondary: '#ecc94b',
      // ...
    },  
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
