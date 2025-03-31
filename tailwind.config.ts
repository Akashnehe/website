import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'altanon': {
          'dark': '#0A0F1C',
          'darker': '#050A12',
          'primary': '#00F5FF',
          'secondary': '#6B46FF',
          'accent': '#FF2E63',
          'gray': {
            800: '#1A1F2E',
            700: '#2A2F3E',
            600: '#3A3F4E',
            900: '#0F1420',
          }
        },
        'altanon-primary': '#00FFB2',
        'altanon-secondary': '#6B46FF',
        'altanon-accent': '#FF6B6B',
        'altanon-dark': '#0A0F1C',
        'altanon-darker': '#050A12',
        'altanon-gray-700': '#1A1F2C',
        'altanon-gray-800': '#141824',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'blob': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
      },
      backgroundSize: {
        '300%': '300% 100%',
      },
    },
  },
  plugins: [],
}

export default config 