/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elan: {
          bg: '#0B0B0A',
          secondary: '#151513',
          card: '#1B1A17',
          primary: '#F5F1E8',
          muted: '#A9A49A',
          gold: '#B89B62',
          goldLight: '#D2B77A',
          border: 'rgba(255, 255, 255, 0.12)',
          borderGold: 'rgba(184, 155, 98, 0.3)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(184, 155, 98, 0.15)',
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
