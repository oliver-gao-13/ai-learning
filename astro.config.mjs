// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://oliver-gao-13.github.io',
	base: '/ai-wiki',
	integrations: [
		starlight({
			title: 'AI Learning Wiki',
			description:
				'Resources, links, and notes on AI and machine learning, with a focus on construction engineering and management.',
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Home', slug: 'index' },
				{ label: 'Learning Path', items: [{ autogenerate: { directory: 'learning-path' } }] },
				{ label: 'Notes', items: [{ autogenerate: { directory: 'notes' } }] },
				{ label: 'Practice', items: [{ autogenerate: { directory: 'practice' } }] },
				{ label: 'Resources', items: [{ autogenerate: { directory: 'resources' } }] },
				{ label: 'Update Log', slug: 'update-log' },
			],
		}),
	],
});
