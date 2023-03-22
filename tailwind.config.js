/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "#14172B",
      white: "#ECF0FF",
      gray: "#737BAE",
      graydark: "#5A5F7D",
      green: "#00FFA3",
      red: "#FF4D4D",
    },
    extend: {
      fontFamily: {
        tommorow: ["Tomorrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
