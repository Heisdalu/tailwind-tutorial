/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    spacing: {
      1: "1rem",
      rn: "1.5rem",
      2: "2rem",
      12: "5rem",
      px2: "2px",
    },
    fontSize: {
      2: "2rem",
    },
    extend: {
      colors: {
        divine: {
          300: "#00d0ff",
          400: "#00ff3c",
        },
      },
    },
  },
  plugins: [],
};
