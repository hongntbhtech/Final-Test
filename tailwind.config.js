/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{html,js}", flowbite.content(),],
  theme: {
    extend: {
      screens: {
        'max-xxl': { 'max': '1350px' },
        'max-xl': { 'max': '1280px' },
        'max-lg': { 'max': '1023px' },
        'max-md': { 'max': '768px' },
        'max-ssm': { 'max': '425px' },
        'max-sssm': { 'max': '375px' },
      },

      boxShadow: {
        // Service
        'custom-hover': '0px 0px 50px 25px #f6f7ff',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}