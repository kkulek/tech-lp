/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				dark: "rgb(52, 52, 52)",
				accent: "rgb(3, 166, 144)",
			},
			lineHeight: {
				"hero-headline": "60px",
				"body-regular": "34px",
			},
			content: {
				goals: 'url("./images/icons/goals-icon.svg")',
				mentors: 'url("./images/icons/mentors-icon.svg")',
				rating: 'url("./images/icons/rating-icon.svg")',
				survey: 'url("./images/icons/survey-icon.svg")',
				squareBlue: 'url("./images/icons/point-icon-blue.svg")',
				squareDarkBlue: 'url("./images/icons/point-icon-dark-blue.svg")',
				squareYellow: 'url("./images/icons/point-icon-yellow.svg")',
			},
			boxShadow: {
				"custom-light": "0px 8px 15px rgba(34, 34, 34, 0.08)",
			},
		},
		fontFamily: {
			montserrat: ["Montserrat", "sans-serif"],
			corbel: ["Corbel", "sans-serif"],
		},
	},
	plugins: [],
};
