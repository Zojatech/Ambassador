const path = require('path');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#222B88',
        'gray-bg': '#F8FAFC',
        'gray-text': '#5E6366',
        'gray-border': ' #E7E7E7',
        'blue-bg': 'rgba(34, 43, 136, 0.1)',
      },
      backgroundImage: {
        'stroke-blue': `url('${path.resolve(
          __dirname,
          'src/assets/images/custom-image.jpg'
        )}')`,
      },
    },
  },
  plugins: [],
};
