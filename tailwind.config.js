module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-image': "url('/src/bg-pattern-intro.svg')",
      })
    },
    backgroundSize: {
      '50%' : '50%',
    },
    borderRadius: {
      'large': '80px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
