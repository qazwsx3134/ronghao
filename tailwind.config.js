/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        mocha: {
          100: "#fffdf6",
          200: "#fffcee",
          300: "#fffae5",
          400: "#fff9dd",
          500: "#fff7d4",
          600: "#ccc6aa",
          700: "#99947f",
          800: "#666355",
          900: "#33312a"
        },
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["dracula"]
  }
};
