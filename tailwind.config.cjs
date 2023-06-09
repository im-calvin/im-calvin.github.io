/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        moona: {
          lightPurple: "#dec0f1",
          purple: "#BDACE3",
          yellow: "#F5EFD4",
          lightYellow: "#F8EFE3",
          white: "#F0ECFD",
          black: "#3B3833",
          blue: "#4381B4",
          brown: "#D6AA7D",
          darkPurple: "#4B39B3",
        },
        anya: {
          darkPurple: "#413B5D",
          lightYellow: "#FBDA79",
        },
      },
      keyframes: {
        fall: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
