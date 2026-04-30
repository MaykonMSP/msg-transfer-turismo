/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1f3d2b',
        forestDark: '#14281d',
        gold: '#caa45c',
        cream: '#f7f2e8',
        linen: '#fbfaf6',
        ink: '#172019',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 22px 55px rgba(20, 40, 29, 0.13)',
        gold: '0 16px 35px rgba(202, 164, 92, 0.22)',
      },
      backgroundImage: {
        'hero-shade':
          'linear-gradient(90deg, rgba(20,40,29,0.92) 0%, rgba(20,40,29,0.74) 42%, rgba(20,40,29,0.28) 100%)',
      },
    },
  },
  plugins: [],
};
