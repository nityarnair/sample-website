/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        editorial: {
          emerald: '#073B35',
          black: '#101716',
          ivory: '#F7F4EC',
          gold: '#C89B3C',
          white: '#FFFFFF',
          darkgreen: '#042320',
          border: 'rgba(200, 155, 60, 0.25)',
          muted: '#8A9996',
        },
        dyuti: {
          emerald: {
            50: '#f0faf8',
            100: '#d5eee9',
            200: '#aee0d6',
            300: '#7ecebf',
            400: '#4fb4a4',
            500: '#18776f',
            600: '#13605a',
            700: '#073B35', /* Deep Emerald */
            800: '#052a26',
            900: '#041f1c',
            950: '#101716', /* Almost Black */
          },
          primary: {
            50: '#f0faf8',
            100: '#d5eee9',
            200: '#aee0d6',
            300: '#7ecebf',
            400: '#4fb4a4',
            500: '#18776f',
            600: '#13605a',
            700: '#073B35',
            800: '#052a26',
            900: '#041f1c',
            950: '#101716',
          },
          dark: {
            950: '#101716',
            900: '#0a1413',
            850: '#072421',
            800: '#073B35',
            700: '#0c4a43',
          },
          gold: {
            50: '#fffdf5',
            100: '#fef9e7',
            200: '#fcf0c3',
            300: '#fae395',
            400: '#e5b85a',
            500: '#C89B3C', /* Muted Gold */
            600: '#b0842f',
            700: '#926a23',
            800: '#78531c',
            900: '#452e0f',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury-sm': '0 2px 8px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(217, 119, 6, 0.05)',
        'luxury-md': '0 8px 24px -4px rgba(0, 0, 0, 0.4), 0 0 12px 1px rgba(217, 119, 6, 0.12)',
        'luxury-lg': '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 24px 2px rgba(217, 119, 6, 0.18)',
        'gold-glow': '0 0 25px -3px rgba(245, 158, 11, 0.35)',
        'emerald-glow': '0 0 30px -4px rgba(24, 119, 111, 0.4)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #fcd34d 0%, #d97706 50%, #b45309 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(254, 243, 199, 0.4), transparent)',
        'luxury-mesh': 'radial-gradient(at 0% 0%, #0a3d38 0px, transparent 50%), radial-gradient(at 100% 100%, #031715 0px, transparent 50%)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}

