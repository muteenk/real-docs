/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "background": "#f9fbfd",
      "surface": "#ffffff",
      "border-pri": "#a2a4a3",
      "primary": "#2684fc",
    }
  },
  plugins: [],
}

