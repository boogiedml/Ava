/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        main: "#F64E4D",
        sub: "#E4ECF2",
        text: "#202B3D",
      },
    },
  },
  plugins: [],
};
