// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: "https://dumbnoxx.github.io/goxe-doc/",
	integrations: [
		starlight({
			title: "Goxe",
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dumbnoxx/goxe' }],
			defaultLocale: "root",
			locales: {
				root: {
					lang: "en",
					label: "English"
				},
				es: {
					lang: "es",
					label: "Español"
				}
			},
			sidebar: [
				{
					label: 'Star Here',
					translations: {
						es: "Empieza Aquí"
					},
					autogenerate: { directory: "getting-started" }
				},
				{
					label: 'Reference',
					translations: {
						es: "Referencia"
					},
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
