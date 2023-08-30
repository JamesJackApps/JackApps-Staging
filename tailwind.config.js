// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      saturate: {
        1: '1%',
      },
      zIndex: {
        '10001': '10001',
        '10002': '10002',
        '20002': '20002'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}