// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// 1. Importa as configurações gerenciadas pelo CMS
import configSidebar from './src/sidebar.json';

// 2. Converte a lista simples do CMS para o formato aninhado do Starlight
const sidebarGroups = configSidebar.menu.map(group => ({
	label: group.label,
	items: [{ autogenerate: { directory: group.directory } }]
}));

// https://astro.build/config
export default defineConfig({
	site: 'https://renegavioli.github.io',
	base: '/astro-starlight',
	integrations: [
		starlight({
			title: 'CARDIO',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Português',
					lang: 'pt-BR',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			// 3. Aplica a variável gerada
			//sidebar: sidebarGroups,
		}),
	],
});
