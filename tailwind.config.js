/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        galaxy: ["SF Distant Galaxy", "regular"],
      },
      backgroundImage: {
        'star-wars-1': "url('/src/assets/star-wars.jpg')",
      },
    },
  },
  plugins: [],
}
