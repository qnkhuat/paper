module.exports = {
  important:true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'a4': '29.7cm', // 300dpi
        'a3': '42cm',
      },
      height: {
        'a4': '21cm',
        'a3': '29.7cm'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
