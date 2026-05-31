/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef4ff',
          100: '#dae6ff',
          200: '#bcd1ff',
          300: '#8eb3ff',
          400: '#5a8aff',
          500: '#3464f5',
          600: '#1f47db',
          700: '#1a39b0',
          800: '#19318c',
          900: '#192e72'
        },
        ink: {
          900: '#0b1220',
          700: '#243049',
          500: '#4a5876',
          300: '#8a93ab'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(31, 71, 219, 0.18)'
      }
    }
  },
  plugins: []
};
