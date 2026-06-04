/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B2A1B',
        secondary: '#2D5A3D',
        sunset: {
          orange: '#FF9F1C',
          gold: '#FFB830',
          amber: '#F77F00',
          coral: '#FF5400',
          red: '#FF3C38',
          honey: '#F5C16C',
          peach: '#F2A65A',
          burnt: '#D96545',
          brown: '#573A2B',
          purple: '#2D1F3C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        dancing: ['var(--font-dancing)'],
        pacifico: ['var(--font-pacifico)'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease forwards',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
        'button': '8px',
      },
    },
  },
  plugins: [],
};
