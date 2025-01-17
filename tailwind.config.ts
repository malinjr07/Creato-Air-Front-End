import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        tradeGothic: ['var(--font-trade-gothic)'],
        playWriteIndia: ['var(--font-play-write-india)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
