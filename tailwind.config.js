/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        modalBack: "rgba(0, 0, 0, 0.8)",
      },
      boxShadow: {
        imageBack: "0px 2px 6px rgba(82, 82, 82, 0.25)",
      },
      colors: {
        brown: {
          100: "#EAE0D6",
          200: "#D4C0AD",
          300: "#BFA185",
          400: "#A9815C",
          500: "#946233",
          600: "#764E29",
          700: "#593B1F",
          800: "#3B2714",
          900: "#1E140A",
        },
        black: {
          black: "#000000",
          100: "#E8E8EB",
          200: "#D0D2D6",
          300: "#B9BBC2",
          400: "#A1A5AD",
          500: "#8A8E99",
          600: "#6E727A",
          700: "#53555C",
          800: "#37393D",
          900: "#1C1C1F",
        },
      },
    },
  },
  plugins: [],
};
