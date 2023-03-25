/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        zomato: {
          red: "#E33342",
        },
      },
    },
  },
  plugins: [],
};
