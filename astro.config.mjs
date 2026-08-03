// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ai-yokubari.com',
	// 記事をフォルダに移してURLが変わったときは、必ずここに古いURLを残す。
	// 残さないと、Xに投稿したリンクや外からのリンクが行き止まりになる。
	redirects: {
		// 2026-08-04: Claude Code入門シリーズを nyuumon/ にまとめたときの移動
		'/blog/claude-code-hajimekata': '/blog/nyuumon/claude-code-hajimekata',
	},
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
