/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js }',
            './node_modules/tw-elements/dist/js/**/*.js'
            ],
  theme: {
    extend: {},
    fontFamily: {
      // 'space' : ['Space Grotesk', 'sans-serif']
  },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

