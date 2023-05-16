/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Encode Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
      }
      ,
      
      fontSize: {
        '15': '15px',
      },
      lineHeight: {
        '19': '19px',
      },
      letterSpacing: {
        '-0.015': '-0.015em',
      },
      colors: {
        customTeal: '#53B1BE',
      },
      spacing: {
        '158': '158px',
        '1680': '1680px',
      },
      inset: {
        '1097': '1097px',
      },
    },
  },
  darkMode: "class",
};
