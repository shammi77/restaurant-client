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
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

