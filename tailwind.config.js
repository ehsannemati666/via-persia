/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./via-persia.html'],
  theme: {
    extend: {
      colors: {
        saffron:     '#E8951F',
        saffronDark: '#C47A10',
        cream:       '#F8F3EA',
        espresso:    '#0F0A05',
        mocha:       '#1E1007',
        charcoal:    '#161009',
        gold:        '#C9A84C',
        rust:        '#C25B2A',
        sand:        '#E8D9C0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Lato', 'sans-serif'],
        farsi: ['Amiri', 'serif'],
      },
    }
  },
  plugins: [],
}
