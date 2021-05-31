module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({

        'bg-img1': "url('/img/1.png')",
        'bg-img2': "url('/img/2.png')",
        'bg-img3': "url('/img/3.png')",

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
