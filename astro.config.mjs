// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://renegavioli.github.io',
	base: '/astro-starlight',
	integrations: [
		starlight({
			title: 'My Docs',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Português',
					lang: 'pt-BR',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Protocolos CARDIO',
					items: [{ autogenerate: { directory: 'protocolos'} }],
				},
				{
					label: 'Soluções CARDIO',
					items: [{ autogenerate: { directory: 'solucoes' } }],
				},
			],
		}),
	],
});
