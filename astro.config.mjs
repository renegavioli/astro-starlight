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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Protocolo Clínico',
					items: [{ autogenerate: { directory: 'protocolo_clinico'} }],
				},
				{
					label: 'Linha de Cuidado',
					items: [{ autogenerate: { directory: 'linha_de_cuidado' } }],
				},
			],
		}),
	],
});
