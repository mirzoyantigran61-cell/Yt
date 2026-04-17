/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#090909',
        'bg-surface': '#0f0f13',
        'neon-cyan': '#00F0FF',
        'neon-green': '#00FF9D',
        'neon-violet': '#8B5CF6',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'glow-pulse': 'glowPulse 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px #00F0FF' },
          '50%': { boxShadow: '0 0 25px #00F0FF' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
