const withAnimations = require('animated-tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = withAnimations({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx,scss}',
    './app/**/*.{js,ts,jsx,tsx}',
    './styles/globals.css',
  ],
  theme: {
    extend: {
      colors:{
        myblack: 'rgb(28 29 37)'
      },
      fontFamily: {
        belle: ['La Belle Aurore'],
        russon: ['RussoOne'],
        orbitron: ['Orbitron'],
        play: ['Play'],
        outfit: ['Outfit'],
        zhtw: ['Play', 'MSBlack'],
      },
      height: {
        navbar: 'var(--navbar-height)',
        footer: 'var(--footer-height)',
        section: 'calc(100vh - var(--navbar-height)'
      },
      minHeight: {
        section: 'calc(100vh - var(--navbar-height) - var(--footer-height))',
      },
      screens: {
        xs: '360px',
      },
      keyframes: {
        spin: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        },
        sky400: {
          to: { color: "rgb(56 189 248)"}
        },
        rotating: {
          "0%": { "transform": "rotate(0deg)" },
          "100%": { "transform": "rotate(360deg)" },
        },
        rocketdot: {
          '0%': {
            "opacity": 1,
            "transform": "scale(0)",
          },
          '10%': {
            "transform": "scale(1.2)"
          },
          '80%, 100%': {
            "opacity": 0,
            "transform": "scale(0)"
          }
        }
      },
    },
  },
  plugins: [],
});
