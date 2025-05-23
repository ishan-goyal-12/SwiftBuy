/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.25)',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.18)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      colors: {
        abc: "#A855F7"
      }
    }
  },
  plugins: [],
} 