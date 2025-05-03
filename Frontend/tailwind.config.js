/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#4F46E5", // Indigo
          "secondary": "#14B8A6", // Teal
          "accent": "#F59E0B", // Amber
          "neutral": "#18181B",
          "base-100": "#0F172A", // Slate dark
          "base-200": "#0B1222",
          "base-300": "#070D1A",
          "info": "#06B6D4",
          "success": "#22C55E", 
          "warning": "#F97316",
          "error": "#EF4444",
        }
      },
      "light",
      "cupcake"
    ],
  },
  plugins: [require("daisyui")],
  darkMode: ['class', '[data-theme="dark"]']
}

