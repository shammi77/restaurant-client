/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_g0rWf5vu5il4jQNXOsYNn22zgs9dvLiBQ&s"
      }
    },
  },

  daisyui: {
    themes: [
      {
        theme: {
          "primary": "#8e7cc3",
          "secondary": "#50C878",
          "accent": "#3A4256",
          "neutral": "#d9d2e9",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

