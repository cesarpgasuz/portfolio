/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'c-marino': '#000E16',
        'c-marino-claro': '#011622',
        'c-marino-line': '#082C3F',
        'c-white': '#F2FAFF',
        'c-yellow': '#FFF900',
        'c-cyan': '#4EE4FF',
        'c-pink': '#FF0448',
        'c-blue': '#175DF2'
      }
    },
  },
  plugins: [],
}
