/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "at-light-green": "#42D392",
        "at-light-purple": "#647EFF",
        "moonlit-black": "#213547",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
};
