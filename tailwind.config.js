/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'sm':{'max':'640px'},
      'md':{'max':'768px'},
      'lg':{'max':'1024px'},
      'xl':{'max':'1280px'},
      '2xl':{'max':'1536px'}
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

