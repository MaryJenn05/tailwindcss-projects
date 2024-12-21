/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {

      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },

      colors: {
        "primary": "#27AE60",
        "secondary": "#828282",
        "card-bg": "#212121",
        "background": "#171717",
        "menu-color": "#172554"
      },

      backgroundImage: {
        "open-menu": "url('../assets/menu.svg')",
        "close-menu": "url('../assets/close.svg')"
      }
    },
  },
  plugins: [],
}

