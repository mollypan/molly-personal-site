/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '60px',
			nm: '410px',
      xl: '1260px',
    },
		extend: {},
	},
	plugins: [],
}
