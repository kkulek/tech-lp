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
				'hero-headline': '60px',
				'body-regular': '34px'
			}
		},
		fontFamily: {
			montserrat: ["Montserrat", "sans-serif"],
			corbel: ["Corbel", "sans-serif"],
		},
	},
	plugins: [],
};
