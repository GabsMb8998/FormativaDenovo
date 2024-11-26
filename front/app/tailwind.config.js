/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "font-nav" : "#646464",
        "hover-nav" : "#2A2A2A",
        "color-menu-selected" : "#F3F3F3",
        "color-menu": "#8E8E8E",
        "title": "#323232",
        "item-table": "#878787",
        "fundo": "#323232"
      }
    },
  },
  plugins: [],
}

