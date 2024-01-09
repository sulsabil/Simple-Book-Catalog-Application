/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

