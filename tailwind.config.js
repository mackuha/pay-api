/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      black: "hsl(var(--black))",
      white: "hsl(var(--white))",
      pink: {
        500: "hsl(var(--pink-500))",
        700: "hsl(var(--pink-700))",
      },
      blue: {
        100: "hsl(var(--blue-100))",
        700: "hsl(var(--blue-700))",
        900: "hsl(var(--blue-900))",
      },
    },
    fontFamily: {
      sans: ["Public Sans, sans-serif"],
      display: ["DM Serif Display, serif"],
    },
    extend: {},
  },
  plugins: [],
}
