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
			// アイキャッチの代替テキスト(画像が見えない人・検索エンジンが読む文章)。
			// アイキャッチはタイトル文字が焼き込まれたバナーなので、
			// 「描かれている場面」+「画像内の文字」の両方を書く。30〜80字程度。
			heroImageAlt: z.string().optional(),
			affiliate: z.boolean().default(false),
			draft: z.boolean().default(false),
			// シリーズ分類(一覧のフィルタ・並び順に使う)。main=本編 / diet=AI×運動しないダイエット
			series: z.string().optional(),
			episode: z.number().optional(),
			// テーマ別カテゴリ(`src/consts.ts` の CATEGORIES と一致させる)。
			// 綴りを間違えたらビルドで落ちる。未設定でも通るが、カテゴリページには出てこない。
			category: z.enum(['getting-started', 'tsukutta', 'diet']).optional(),
		}),
});

export const collections = { blog };
