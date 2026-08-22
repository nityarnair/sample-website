/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official Editorial White & Navy Palette
        editorial: {
          deepnavy: '#071A33',
          navy: '#12345B',
          navyLight: '#1E4A7D',
          offwhite: '#F8F8F6',
          white: '#FFFFFF',
          border: '#D9DEE5',
          borderSubtle: '#EAEFF5',
          muted: '#667085',
          text: '#101828',
          blue: '#2563EB',
          blueLight: '#EFF6FF',
          blueDark: '#1D4ED8',
        },
        navy: {
          950: '#040F1E',
          900: '#071A33',
          800: '#12345B',
          700: '#1B477A',
          600: '#255D9E',
          500: '#3477C2',
          100: '#E6EEF8',
          50: '#F0F5FC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Newsreader', 'Cormorant Garamond', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        newsreader: ['Newsreader', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(7, 26, 51, 0.05), 0 1px 2px rgba(7, 26, 51, 0.03)',
        'editorial': '0 4px 20px -2px rgba(7, 26, 51, 0.08), 0 2px 6px -1px rgba(7, 26, 51, 0.04)',
        'editorial-hover': '0 12px 32px -4px rgba(7, 26, 51, 0.12), 0 4px 12px -2px rgba(7, 26, 51, 0.06)',
        'navy-glow': '0 0 20px -2px rgba(18, 52, 91, 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
