const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted:"rgb(var(--muted))",
        accent:"rgb(var(--accent))",

      },
      boxShadow:{
        "glass-inset": "inset 0 17px 5px -9px rgba(254, 254, 91, 0.2)",
        
        "glass-sm": "5px 5px 30px 0px rgba(254, 254, 91, 0.7)"
          
      },
      keyframes:{
        "spin-reverse":{
          "0%":{transform:"rotate(0deg)"},
          "100%":{transform:"rotate(-360deg)"}
        }
      },
      animation:{
        "spin-slow": "spin 40s linear infinite",
        "spin-slow-reverse": "spin-reverse 40s linear infinite"

      }
    },
  },
  plugins: [],
};
