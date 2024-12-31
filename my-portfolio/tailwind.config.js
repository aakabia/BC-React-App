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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow:{
        "glass-inset": "inset 0 17px 5px -9px rgba(254, 254, 91, 0.2)",
        
        "glass-sm": "5px 5px 30px 0px rgba(254, 254, 91, 0.7)"
          
      }
    },
  },
  plugins: [],
};
