import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
    backgroundImage: {
      order: 'url(/order/bg.png)',
      header: 'url(/main/header.png)',
      template: 'url(/templates/templates.png)',
      galary1: 'url(/main/galaryCard1.png)',
      galary2: 'url(/main/galaryCard2.png)',
      galary3: 'url(/main/galaryCard3.png)',
      galary4: 'url(/main/galaryCard4.png)',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
