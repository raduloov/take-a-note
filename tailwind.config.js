module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '200px',
      md: '440px',
    },
    extend: {
      colors: {
        glass: 'rgba(255, 255, 255, 0.8)',
        'glass-light': 'rgba(255, 255, 255, 0.6)',
        'glass-lighter': 'rgba(255, 255, 255, 0.05)',
        backdrop: 'rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        'slide-down': {
          '0%': {
            opacity: 0,
            transform: 'translate(-50%, -3rem)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%, 0)',
          },
        },
      },
    },
  },
  plugins: [],
};
