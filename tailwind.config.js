/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // we can add the selected font family here
      },
      fontSize: {
        "h1": "54px",
        "h2": "42px",
        "h3": "34px"
      },
      colors: {
        'black-': '#242424',
        'grayish': '#e6e6e7',
        'Footer-black': "#000000",
        'orange-': '#D18700' //untill we agree on one
      },
      boxShadow: {
        '3xl': '0px 0px 8px 0px rgba(0, 0, 0)',
      }
    },
  },
  plugins: [],
}
