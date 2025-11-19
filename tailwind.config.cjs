/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#ecf5ff',
          100: '#d9e9ff',
          200: '#b0d0ff',
          300: '#88b7ff',
          400: '#5e9bff',
          500: '#3c7fff',
          600: '#2a62db',
          700: '#1d47b0',
          800: '#122c73',
          900: '#071538',
        },
      },
      boxShadow: {
        'soft-glow': '0 0 80px rgba(76, 165, 255, 0.35)',
      },
    },
  },
  plugins: [],
};
