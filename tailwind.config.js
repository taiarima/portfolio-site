/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        wide: { min: "1125px" },
        md: "800px",
      },
    },
    fontFamily: {
      signature: ["Philosopher"],
    },
  },
  plugins: [],
};
