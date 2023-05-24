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
    colors: {
      red: "#eb5454",
      cyan: "hsl(180, 62%, 55%)",
      orange: "hsl(34, 97%, 64%)",
      blue: "hsl(212, 86%, 64%)",
      black: "#000",
      dark_blue: "hsl(234, 12%, 34%)",
      grayish_blue: "hsl(229, 6%, 66%)",
      light_gray: "hsl(0, 0%, 98%)",
      white: "#fff",
    },
    spacing: {
      "0.5rem": "0.5rem",
      "1rem": "1rem",
      "1.5rem": "1.5rem",
      "2rem": "2rem",
      2: "2rem",
      12: "5rem",
      px2: "2px",
    },
    fontSize: {
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
    },
    boxShadow: {
      "2xl": "-2px 10px 31px 1px hsl(229, 6%, 66%)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
