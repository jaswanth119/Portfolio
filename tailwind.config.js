/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#e8ff47',
        dark: '#0a0a0a',
        surface: '#111111',
        muted: '#666666',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'marquee-rev': 'marquee-rev 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
