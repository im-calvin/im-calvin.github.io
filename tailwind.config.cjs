/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        moona: {
          lightPurple: "#F0E4F7",
          purple: "#BDACE3",
          darkYellow: "#d1bd64",
          yellow: "#F5EFD4",
          lightYellow: "#F8EFE3",
          white: "#F0ECFD",
          black: "#3B3833",
          blue: "#4381B4",
          brown: "#D6AA7D",
          darkPurple: "#957FEF",
          green: "#EBf7E4",
        },
        anya: {
          darkPurple: "#413B5D",
          lightYellow: "#FBDA79",
          white: "#F5F5F5",
        },
        olive: {
          purple200: "#DEC0F1",
          beige: "#EFD9CE",
          violet: "#B79CED",
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
