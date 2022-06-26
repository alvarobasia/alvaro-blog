/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Lexend Deca, sans-serif',
        serif: 'DM Serif Display, serif',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
