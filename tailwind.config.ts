/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
import cn from "./src/helpers/cn";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        cabinet: ["var(--font-cabinet)"],
        hello: ["var(--font-hello)"],
      },
      animation: {
        linkunderline: "linkunderline 300ms ease-in-out",
      },
      keyframes: {
        linkunderline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        17: 68,
      },
      colors: {
        "base-border-color": colors.black,
        text: {
          light: "#fdfdfd",
          headline: "#1D1D1D",
          DEFAULT: "#1D1D1D",
          disabled: "#c3c5c4",
        },
        primaryBg: {
          DEFAULT: "#e3e3ff",
        },
        primary: {
          DEFAULT: "#00694c",
        },
        secondary: {
          DEFAULT: "#a0ebc8",
        },
        terciary: {
          DEFAULT: "#eff5f6",
        },
        appointment: {
          DEFAULT: "#ff9c09",
        },
      },
      width: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
      height: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
      minWidth: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
      minHeight: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    ({ addBase }) => {
      addBase({
        ".border-base": {
          [`@apply ${cn("border-2 border-base-border-color")} !important`]: {},
        },
        ".border-base-t": {
          [`@apply ${cn("border-base-border-color border-t-2")} !important`]:
            {},
        },
        ".border-base-r": {
          [`@apply ${cn("border-base-border-color border-r-2")} !important`]:
            {},
        },
        ".border-base-b": {
          [`@apply ${cn("border-base-border-color border-b-2")} !important`]:
            {},
        },
        ".border-base-l": {
          [`@apply ${cn("border-base-border-color border-l-2")} !important`]:
            {},
        },
      });
    },
  ],
  important: true,
};
