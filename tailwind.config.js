/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#0c0c0f',
        surface: '#15151c',
        accent: '#28d5b3',
        accentMuted: '#1c9d84',
        textPrimary: '#f5f6f8',
        textSecondary: '#c1c6d4',
        borderSoft: '#1f1f29',
      },
      boxShadow: {
        glow: '0 24px 60px rgba(40, 213, 179, 0.15)',
      },
    },
  },
  plugins: [],
}

