/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(172, 67%, 45%)",
        pest: {
          200: "hsl(189, 41%, 97%)",
          300: "hsl(185, 41%, 84%)",
          400: "hsl(184, 14%, 56%)",
          450: "hsl(173, 61%, 77%)",
          500: "hsl(186, 14%, 43%)",
          550: "hsl(172, 69%, 45%)",
          600: "hsl(183, 100%, 15%)",
          700: "hsl(183, 100%, 10%)",
        },
      },
    },
  },
  plugins: [],
};
