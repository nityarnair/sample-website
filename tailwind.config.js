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
          deepnavy: '#071A33',
          navy: '#12345B',
          navyLight: '#1E4A7D',
          offwhite: '#F7F7F4',
          white: '#FFFFFF',
          lightblue: '#EEF3F8',
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
          100: '#EEF3F8',
          50: '#F7F7F4',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'editorial-tight': '-0.03em',
        'editorial-wide': '0.15em',
      },
      borderRadius: {
        'pill': '999px',
        'img': '18px',
        'card': '20px',
        'container': '24px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(7, 26, 51, 0.03), 0 1px 2px rgba(7, 26, 51, 0.02)',
        'editorial': '0 12px 36px -6px rgba(7, 26, 51, 0.07), 0 4px 12px -2px rgba(7, 26, 51, 0.03)',
        'pill': '0 4px 14px rgba(7, 26, 51, 0.10)',
        'float': '0 16px 40px -8px rgba(7, 26, 51, 0.12)',
      },
    },
  },
  plugins: [],
}
