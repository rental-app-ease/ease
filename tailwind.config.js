/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide'], // or 'Audiowide' if that's the font you imported
      },
      colors: {
        orangeAccent: '#FF4500', // Custom color to match the logo's orange shade
      },
    },
  },
  plugins: [],
}
