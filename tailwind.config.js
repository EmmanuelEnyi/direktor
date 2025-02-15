/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via a class
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scans all files in the `app` directory
    "./components/**/*.{js,ts,jsx,tsx}", // Scans all components
    "./styles/**/*.css", // Ensures Tailwind applies styles correctly
  ],

  theme: {
    extend: {
      colors: {
        'lemon-green': '#ccff00', // Custom color for buttons and highlights
        'dark-bg': '#000000', // Consistent dark background color
        'light-bg': '#ffffff', // Optional light mode background color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font for consistency
      },
      spacing: {
        '128': '32rem', // Additional spacing utility for large sections
      },
    },
  },

  plugins: [],
};
