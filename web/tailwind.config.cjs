/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   transparent: "transparent",
    //   white: "#ffffff",
    //   softpink: "#F9EBF6",
    //   analysts: "#88619a",
    //   diplomats: "#2c8b62",
    //   sentinels: "#4198b4",
    //   explorers: "#f3d65c",
    // },
    extend: {},
  },
  fontFamily: {
    prompt: ["PROMPT", "cursive"],
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5F2B9E",
          secondary: "#473EAE",
          accent: "#28EA83",
          neutral: "#2D2B6C",
          "base-100": "#FFFFFF",
          info: "#F9EBF6",
          success: "#28EA83",
          warning: "#FBBD23",
          error: "#E02727",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
