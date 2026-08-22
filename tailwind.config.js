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
        display: ['DM Serif Display', 'Georgia', 'serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'editorial-tight': '-0.03em',
        'editorial-wide': '0.15em',
      },
      borderRadius: {
        'pill': '999px',
        'img': '12px',
        'container': '16px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(7, 26, 51, 0.04), 0 1px 2px rgba(7, 26, 51, 0.02)',
        'editorial': '0 10px 30px -4px rgba(7, 26, 51, 0.08), 0 4px 12px -2px rgba(7, 26, 51, 0.03)',
        'pill': '0 4px 14px rgba(7, 26, 51, 0.12)',
      },
    },
  },
  plugins: [],
}
