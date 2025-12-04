/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F4CE14",
          dark: "#495E57",
        },
        secondary: {
          light: "#FBDABB",
          dark: "#EE9972",
        },
        highlight: {
          light: "#EDEFEE",
          dark: "#333333",
        },
      },
      fontFamily: {
        primary: ['Markazi Text', 'serif'],
        secondary: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
