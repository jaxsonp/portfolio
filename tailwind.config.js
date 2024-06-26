const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			blue: 'dodgerblue',
			white: '#faf3e9',
			'light-gray': '#ccccd0',
			gray: '#777',
			black: '#121212',
			glass: 'rgba(0, 0, 0, 0.33)',
			transparent: 'rgba(0, 0, 0, 255)',
			'transparent-white': 'rgba(255, 255, 255, 0.2)' // for box shadows
		},
		fontFamily: {
			sans: ['Lato', 'sans-serif']
		},
		screens: {
			md: '768px',
			lg: '1024px'
		},
		extend: {
			boxShadow: {
				light: '0 0 32px -12px rgba(255, 255, 255, 0.2)',
				'sm-light': '0 8px 16px -4px rgba(255, 255, 255, 0.2)'
			},
			transitionProperty: {
				height: 'height'
			},
			flexGrow: {
				2: '2',
				3: '3'
			},
			scale: {
				102: '102%'
			}
		}
	},
	plugins: [require('tailwind-gradient-mask-image')]
};
