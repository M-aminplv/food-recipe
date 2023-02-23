/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				load: {
					"0%": {
						opacity: 0,
						transform: "scale(0)",
					},
					"100%": { opacity: 1 },
					transform: "scale(1)",
				},
			},
		},
	},
	plugins: [],
};
