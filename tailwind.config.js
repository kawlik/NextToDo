/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx}"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["emerald"],
	},
};
