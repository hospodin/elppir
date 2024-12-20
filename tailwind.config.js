/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        elppir: {
          50: 'rgb(51, 163, 255)',    // Ultra Light Blue
          100: 'rgb(0, 140, 255)',    // Light Blue
          200: 'rgb(0, 103, 229)',    // Medium Blue
          300: 'rgb(0, 91, 204)',     // Standard Blue
          400: 'rgb(0, 61, 153)',     // Deep Blue
          500: 'rgb(0, 38, 102)',     // Dark Blue
          600: 'rgb(0, 17, 51)',      // Navy Blue
        }
      }
    },
  },
  plugins: [],
};