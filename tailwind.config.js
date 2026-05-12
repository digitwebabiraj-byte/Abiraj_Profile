/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#0a1628',
          card: '#1e3a5f',
          light: '#243b6e',
        },
        gold: '#f59e0b',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-delay': 'fadeInUp 0.8s ease-out 0.3s forwards',
        'fade-in-delay-2': 'fadeInUp 0.8s ease-out 0.6s forwards',
        'fade-in-delay-3': 'fadeInUp 0.8s ease-out 0.9s forwards',
      },
      boxShadow: {
        'gold-glow': '0 8px 30px rgba(245, 158, 11, 0.35)',
        'gold-glow-lg': '0 12px 40px rgba(245, 158, 11, 0.5)',
      },
    },
  },
  plugins: [],
}
