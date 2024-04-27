/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        maxWidth: "1320px"
      },
      colors: {
        primary: "#00a7ac"
      }
    },
  },
  plugins: [],
}