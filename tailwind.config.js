/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js }',
            './node_modules/tw-elements/dist/js/**/*.js'
            ],
  theme: {
    extend: {},
    fontFamily: {
      'arab' : ['IBM Plex Sans Arabic', 'sans-serif'],
      'kali' : ['Birthstone Bounce', 'cursive'],
      'kali2' : ['Norican', 'regular400']
  },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

