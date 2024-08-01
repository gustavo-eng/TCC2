/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '670px',  // Adiciona um breakpoint para 670px
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}