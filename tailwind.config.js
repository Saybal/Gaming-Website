/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px", // Changed 'lg' from 1024px to 1280px
      xl: "1536px",
      "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        "zentry-regular": ["zentry-regular", "sans-serif"],
        "general-wolf": ["general-wolf", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
    },
    plugins: [],
  },
};
