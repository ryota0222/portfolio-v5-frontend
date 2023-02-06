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
        rokkitt: ['Rokkitt'],
      },
      backgroundImage: {
        'gradation-clip': "url('/images/gradient.png')",
      },
    },
  },
  plugins: [],
};
