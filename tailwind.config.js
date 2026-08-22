/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dyuti: {
          emerald: {
            50: '#f0faf8',
            100: '#d5eee9',
            200: '#aee0d6',
            300: '#7ecebf',
            400: '#4fb4a4',
            500: '#18776f',
            600: '#13605a',
            700: '#0f4c47', /* Brand Core */
            800: '#0a3d38',
            900: '#062b27',
            950: '#031715',
          },
          primary: {
            50: '#f0faf8',
            100: '#d5eee9',
            200: '#aee0d6',
            300: '#7ecebf',
            400: '#4fb4a4',
            500: '#18776f',
            600: '#13605a',
            700: '#0f4c47',
            800: '#0a3d38',
            900: '#062b27',
            950: '#031715',
          },
          dark: {
            950: '#030f0e',
            900: '#061a18',
            850: '#082320',
            800: '#0c2e2a',
            700: '#12423d',
          },
          gold: {
            50: '#fffdf5',
            100: '#fef9e7',
            200: '#fcf0c3',
            300: '#fae395',
            400: '#f5cb5c',
            500: '#d97706', /* Brand Accent */
            600: '#b45309',
            700: '#92400e',
            800: '#78350f',
            900: '#451a03',
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
        'luxury-md': '0 8px 24px -4px rgba(0, 0, 0, 0.4), 