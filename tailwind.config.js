/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* --- Vibrant electric amber-gold --- */
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        /* --- Teal accent --- */
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        /* --- Deep-ocean navy backgrounds --- */
        salon: {
          dark:    '#06111e',
          darker:  '#030c15',
          charcoal:'#0c1f30',
          warm:    '#071829',
        },
        /* --- Cream/warm-white for light mode --- */
        beige: {
          50:  '#fdfcfb',
          100: '#f8f4ef',
          200: '#f0e9e0',
          300: '#e5d9cc',
          400: '#d6c5b2',
          500: '#c4ad96',
          600: '#ad937a',
          700: '#917863',
          800: '#766050',
          900: '#614f42',
        },
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        /* Vibrant amber-gold gradient */
        'gold-gradient':  'linear-gradient(135deg, #d97706 0%, #f59e0b 40%, #fbbf24 70%, #d97706 100%)',
        /* Teal-to-navy gradient for sections */
        'teal-gradient':  'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
        /* Deep navy background gradient */
        'dark-gradient':  'linear-gradient(135deg, #06111e 0%, #0c1f30 100%)',
        /* Hero section gradient overlay */
        'hero-gradient':  'linear-gradient(135deg, #030c15 0%, #0c1f30 60%, #0d2840 100%)',
      },
      animation: {
        'float':   'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'gold-glow':  '0 0 30px rgba(245, 158, 11, 0.35)',
        'teal-glow':  '0 0 30px rgba(20, 184, 166, 0.30)',
        'navy-deep':  '0 20px 60px rgba(3, 12, 21, 0.60)',
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('light', '.light &');
    },
  ],
};
