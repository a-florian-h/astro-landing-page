const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        transparent: "transparent",
        current: "currentColor",

        citrine_white: {
          50: "#fdfbed",
          100: "#faf6d5", // original
          200: "#f2e995",
          300: "#ecd75d",
          400: "#e7c638",
          500: "#dfa921",
          600: "#c68619",
          700: "#a46219",
          800: "#864d1a",
          900: "#6e4019",
          950: "#3f2109",
        },
        sapling: {
          50: "#faf8f0",
          100: "#f1ead4",
          200: "#dece9d", // original
          300: "#d1b878",
          400: "#c7a358",
          500: "#bc8944",
          600: "#a66e39",
          700: "#8a5533",
          800: "#72452e",
          900: "#5e3a29",
          950: "#351d13",
        },
        fern_frond: {
          50: "#f7fbea",
          100: "#ecf5d2",
          200: "#d9ecaa",
          300: "#c0de78",
          400: "#a5cd4e",
          500: "#88b230",
          600: "#688e22",
          700: "#577621", // original
          800: "#42571d",
          900: "#384a1d",
          950: "#1c280b",
        },
        saddle: {
          50: "#faf7ec",
          100: "#f3ecce",
          200: "#e9d79f",
          300: "#dcbb68",
          400: "#d0a13f",
          500: "#c18d31",
          600: "#a66e28",
          700: "#855123",
          800: "#6f4324",
          900: "#51301e", // original
          950: "#371c11",
        },
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
