module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#152251'
      },
      fontFamily: {
        'primary': 'Robot'
      },
      flexGrow: {
        '2': '2',
        '3': '3',
      },
      textColor: {
        'primary': '#152251',
        'secondary': '#A58926'
      },
      borderWidth: {
        'default': '1px'
      },
      outline: {
        'primary': ['2px solid #0000ff', '1px'],
      },
      height: {
        'banner': '300px', 
        'banner-sm': '200px', 
        'banner-child': 'calc(300px / 2 - 4px)',
        'banner-child-sm': 'calc(200px / 2 - 4px)',
      },
      width: {
        'content': '500px',
        '1/8': '14%'
      },
      screens: {
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
