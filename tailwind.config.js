/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "1280px", max: "1439px" },
        md: { min: "1440px", max: "1679px" },
        xl: { min: "1680px", max: "1919px" },
        xxl: { min: "1920px", max: "2560px" },
      },
      backgroundImage: {
        smStartPage: "url('./assets/startPage/background_400*720.png')",
        mdStartPage: "url('./assets/startPage/background_400*900.png')",
        xlStartPage: "url('./assets/startPage/background_400*1050.png')",
        xxlStartPage: "url('./assets/startPage/background_400*1080.png')",

        modal: "rgba(0, 0, 0, 0.8)",
        dimmed:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 46.5%), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.4) 64.76%)",
      },
      height: {
        "calc-100vh-100px": "calc(100vh - 100px)",
      },
      backgroundColor: {
        modalBack: "rgba(0, 0, 0, 0.8)",
      },
      boxShadow: {
        imageBack: "0px 2px 6px rgba(82, 82, 82, 0.25)",
        navBarBack: "0px 0px 8px rgba(157, 157, 157, 0.25)",
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
