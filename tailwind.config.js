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
      '60%' : '60%',
      '65%' : '65%',
      '70%' : '70%',
      '75%' : '75%',
      '100%': '100%',
      '150%': '150%',
      '170%': '170%',
      '200%': '200%',
      '220%': '220%',
      '280%': '280%',
      '300%': '300%',
    },
    borderRadius: {
      'none': '0',
      'large': '80px',
      '40' : '40px',
      '30' : '30px',
      '10' : '10px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
