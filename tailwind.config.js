/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
			'walk': 'walk 2s linear 0s 1',
			'walkInv': 'walkInv 2s linear 0s 1'
		},
		keyframes:{
			walk:{
				'0%':{
					transform: 'translateX(-100vw)'
				},
				'100%':{
					transform: 'translateX(0vw)'
				}
			},
			walkInv:{
				'100%':{
					transform: 'translateX(0vw)'
				},
				'0%':{
					transform: 'translateX(100vw)'
				}
			}
		},
    },
  },
  plugins: [],
}

