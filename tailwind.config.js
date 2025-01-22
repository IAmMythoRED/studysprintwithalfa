/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plaster:['Plaster'],
        playfairDisplayBold:['PlayfairDisplay'],
        playBold: ["PlayBold"]
      },
      animation: {
        bob: 'bob 3s ease-in-out infinite',
      },
      keyframes: {
        bob: {
          '0%, 100%': {transform: 'translateY(-5px)'},
          '50%': {transform: 'translateY(5px)'}
        }
      }
    },
  },
  plugins: [],
}

