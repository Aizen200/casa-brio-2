/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#0d0c0a', // primary obsidian canvas
          900: '#16140f', // card surface
          850: '#1a1813', // elevated surface
          800: '#221f19', // border / input bg
          700: '#2a261f',
          600: '#3a352c',
        },
        ivory: {
          50: '#ffffff',
          100: '#f7f3ec', // primary bright text
          200: '#f2ede4', // heading text
          300: '#eee8dd', // soft text
          400: '#c9c0b2', // secondary text
        },
        muted: {
          warm: '#a39c8f', // warm muted grey
          deep: '#6b655a', // darker muted
        },
        gold: {
          DEFAULT: '#b9966a', // signature champagne gold
          light: '#dfc59e',
          dark: '#a6835a',
          dim: 'rgba(185, 150, 106, 0.15)',
        },
        sage: '#6e8b6a',
        terracotta: '#a65a4e',
      },
      fontFamily: {
        serif: ['Boska', 'Times New Roman', 'serif'],
        sans: ['Satoshi', 'Inter', '-apple-system', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widestLuxury: '0.22em',
        tightLuxury: '-0.02em',
      },
      transitionTimingFunction: {
        'framer-glide': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'framer-spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        float: 'floatSlow 6s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
};

