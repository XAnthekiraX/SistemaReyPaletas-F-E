/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'big-stone': {
          '50': '#f5f7fa',
          '100': '#eaeef4',
          '200': '#d0dbe7',
          '300': '#a7bdd2',
          '400': '#779bb9',
          '500': '#567ea1',
          '600': '#436586',
          '700': '#37526d',
          '800': '#31455b',
          '900': '#2c3c4e',
          '950': '#24303f',
        },
        'shark': {
        '50': '#f5f7fa',
        '100': '#eaeef4',
        '200': '#d1dce6',
        '300': '#a8bed1',
        '400': '#799ab7',
        '500': '#587e9f',
        '600': '#456584',
        '700': '#39516b',
        '800': '#32465a',
        '900': '#2d3c4d',
        '950': '#1a222c',
    },
    

      },
    },
  },
  plugins: [],
}

