/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        OBO: "#0B0D17",
        DOD: "#D0D6F9",
      },
      fontFamily: {
        bellefair: ["'Bellefair'", "sans-serif"],
        barlow: ["'Barlow'", "sans-serif"],
        barlowCondensed: ["'Barlow Condensed'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
