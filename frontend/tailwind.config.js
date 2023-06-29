/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
  theme: {

    extend: {
       width: {
        'custom': '1158px',
        'customfoot' : '364px',
      },

     
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['ui-sans-serif','sans-serif']
      },
      
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
        customTealtoggle: '#2E7C88',
        customi1: '#00AEC3',
        customi2: '#E81F76',
        customi3: '#74C8E2',
        customi4: '#1F3465',
        customi5: '#A2D7E6',
        customi6: '#592674'
      },
      spacing: {
        '158': '158px',
        '1680': '1680px',
      },
      inset: {
        '1097': '1097px',
      },
      
    },
    variants: {},
    plugins: [
      require("flowbite/plugin"),
      require("daisyui")
    ],
  },
  
  darkMode: false,
  // darkMode: "class",
};
