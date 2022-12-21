const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/*/*.js"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      cyan: colors.cyan,
      blue: colors.blue,
      pink: colors.pink,
      purple: colors.purple,
      'myPurple': {
        500:'#321446',
        900:'#110b26',
      },
      'mdtBlue': '#1c4988',
      'asuMaroon': '#8d1d40'
    },
    fontFamily: {
      sans: ['JetBrains Mono', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'macOS': "url('./../public/media/macOS.jpg')",
        'monterey': "url('https://images.macrumors.com/t/CPDEomnwSW1eVzYLmDBMh6h0BR0=/1600x0/article-new/2021/11/macOS-Monterey-missing-wallpaper.jpg')",
      }
    }
  }
}