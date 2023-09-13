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
        'orange-': '#ce8908b2' //untill we agree on one
      },
      boxShadow: {
        '3xl': '0px 0px 8px 0px rgba(36, 36, 36)',
        '4xl': ' 2.5px 2.5px 1px 0px rgba(36, 36, 36, 0.788), -2.5px -2.5px 2px 1px rgba(206, 137, 8, 0.698)',
        '5xl': '4px 4px 1px 0px rgba(36, 36, 36, 0.788), -4px -4px 3px 2px rgba(206, 137, 8, 0.698)'
      }
    },
  },
  plugins: [],
}
