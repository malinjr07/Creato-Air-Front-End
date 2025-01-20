import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1360px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '8px',
        sm: '10px',
        md: '15px',
        lg: '20px',
        xl: '64px',
      },
    },
    fontSize: {
      xs: ['10px', { lineHeight: '10px' }],
      sm: ['0.75rem', { lineHeight: '1' }],
      base: ['0.875rem', { lineHeight: '1' }],
      lg: ['1rem', { lineHeight: '1' }],
      xl: ['1.25rem', { lineHeight: '1' }],
      '2xl': ['1.5rem', { lineHeight: '1' }],
      '3xl': ['2rem', { lineHeight: '1' }],
      '4xl': ['2.25rem', { lineHeight: '1' }],
      '5xl': ['2.5rem', { lineHeight: '1' }],
    },
    extend: {
      // colors: {
      //   background: 'var(--background)',
      //   foreground: 'var(--foreground)',
      // },
      backgroundImage: {
        hero: "url('/img/banner-bg.jpg')",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        tradeGothic: ['var(--font-trade-gothic)'],
        playWriteIndia: ['var(--font-play-write-india)'],
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
    aspectRatio: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
      23: '23',
      24: '24',
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/aspect-ratio')],
} satisfies Config;
