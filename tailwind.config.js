// const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				dark: '#111827',
				mediumgrey: '#9ca3af',
				lightgrey: '#f3f4f6',
				primary: '#ff9aa2',
				secondary: '#feb7b2',
				tertiary: '#ffd9c1',
				forth: '#e2f0cb',
				fifth: '#b5e9d7',
				sixth: '#c6ceea',
			},
			// backgroundImage: (theme) => ({
			// 	tempso: "url('./src/assets/tempso.png')",
			// }),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
