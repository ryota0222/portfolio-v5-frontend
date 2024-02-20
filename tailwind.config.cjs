/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#333333',
      },
      fontFamily: {
        rokkitt: ['rokkitt'],
        aoharu: ['aoharu'],
        bodoni: ['bodoni'],
      },
      backgroundImage: {
        'gradation-clip': "url('/images/gradient.webp')",
      },
      height: {
        'full-dvh': '100dvh',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
