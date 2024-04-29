/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '500px'
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
}
