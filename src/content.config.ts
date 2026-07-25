import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			affiliate: z.boolean().default(false),
			draft: z.boolean().default(false),
			// シリーズ分類(一覧のフィルタ・並び順に使う)。main=本編 / diet=AI×運動しないダイエット
			series: z.string().optional(),
			episode: z.number().optional(),
		}),
});

export const collections = { blog };
