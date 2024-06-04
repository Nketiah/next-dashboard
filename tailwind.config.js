/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          "50" : "#98A3CA",
          "100": "#7887BA",
          "200": "#6575B0",
          "300": "#596CAD",
          "400": "#4A5B99",
          "500": "#405189",
          "600": "#34467A"
        },
        secondary: "#F3F3F9",
        light: "#ABB9E8",
        navLight: "#ABB9E8",
        sidebarTitle: "#838fb9"
      },
      fontFamily:{}
    },
  },
  plugins: [],
}
