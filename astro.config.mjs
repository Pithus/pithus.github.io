// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

export default defineConfig({
	site: 'https://www.pithus.org',
	integrations: [
		starlight({
			title: 'Pithus',
			logo: {
        		src: './src/assets/logo.png',
	      	},
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pithus/bazaar' },
				{ icon: 'discord', label: 'discord', href: 'https://discord.gg/PgdKfp4VMQ' },
			],
			pagination: true,
			editLink: {
    		    baseUrl: 'https://github.com/Pithus/pithus.github.io/edit/main/docs/',
      		},
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{autogenerate: { directory: 'getting-started' } },
					],
				},
				{ label: 'Reference',
					items: [
						{ slug: 'reference/overview' },
						{label: 'Interface',
						 items: [
							{ slug: 'reference/interface/homepage' },
							{ slug: 'reference/interface/search' },
							{ label: 'Report',
								items: [
									{ autogenerate: {
											directory: 'reference/interface/report',
										},
									},
								],
							},
							{ slug: 'reference/interface/workspace' },
							{ slug: 'reference/interface/comparison' },
						]},
					{ slug: 'reference/api-client' },
					...openAPISidebarGroups,
					],
				},
			],
			components: {
        		Hero: './src/components/Hero.astro',
				Footer: './src/components/Footer.astro',
				Header: './src/components/Header.astro',
      		},
			plugins: [
				starlightOpenAPI([{
					base: 'api',
					label: 'Pithus API',
					schema: './openapi/openapi.yml',
				}]),
			],
		}),
	],
});
