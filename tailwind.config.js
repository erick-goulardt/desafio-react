/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mainprimary: '#05478A',
      mainsecundary: '#FFFFFF',
      backgroundrepository: '#ECEFF5'
    },
    backgroundImage: {
      'logo': "url('/assets/wtech.svg')",
      'logo-thumbnail': "url('/assets/Subtract.svgg')"
    },
    extend: {},
  },
  plugins: [],
}

