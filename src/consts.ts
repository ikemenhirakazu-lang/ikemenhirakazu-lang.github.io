// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'AIよくばり日記';
export const SITE_DESCRIPTION =
  '土木一筋30年近く・非IT・48歳。ゲームしかしてこなかったおじさんが、Claude Codeで何をどこまでできるのか試す実験ログ。';

// テーマ別カテゴリ。`series`(読む順番の軸)とは別物で、こちらは「何について書いた記事か」の軸。
// 記事が出てきたら足す方針。あとから減らすのは難しいので、中身が無いカテゴリは先に作らない。
export const CATEGORIES = [
  {
    slug: 'getting-started',
    label: 'AIの始め方',
    description: '非ITのおじさんがAIを触り始めて、最初につまずいた所の記録。',
  },
  {
    slug: 'tsukutta',
    label: 'AIで作ってみた',
    description: 'AIと一緒に道具を作ってみた記録。うまくいかなかった話も全部。',
  },
  {
    slug: 'diet',
    label: '運動しないダイエット',
    description: 'AIをトレーナーにして、運動なしで食事だけ変えてみる実録。',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const categoryLabel = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;

// ── Claude Code入門シリーズ(全8回)の目次 ───────────────────────────
// 記事より先にここへ全8回を並べておく。まだ公開していない回は「準備中」で出る。
// 公開したら、その回の title は記事側(frontmatter)のものが優先される。
// 出どころ: docs/superpowers/specs/2026-08-03-claude-code-nyuumon-series-design.md §3
export const NYUUMON = {
  key: 'nyuumon',
  label: '非ITのClaude Code入門',
  path: '/blog/nyuumon/',
  total: 8,
  lead: 'IT経験ゼロの48歳が、Claude Codeを入れるところから順に書いていく全8回。',
  // 2026-08-04 ボス判断で順番を入れ替えた。「もっと初歩的なところからでいい。
  // CLAUDE.mdとかそういうところ」→ CLAUDE.md を4番目から3番目へ前倒し。
  // ⚠️ 第2回だけは動かせない。第1回の本文と図解24で「次の記事(操作の基本)」と読者に約束ずみ。
  episodes: [
    { n: 1, title: '入れて、動かすまで', slug: 'nyuumon/claude-code-hajimekata' },
    { n: 2, title: '操作の基本' },
    { n: 3, title: 'CLAUDE.md(毎回読ませる紙)' },
    { n: 4, title: 'フォルダと会話の分け方' },
    { n: 5, title: 'スキル' },
    { n: 6, title: 'サブエージェント' },
    { n: 7, title: '外部とつなぐ(MCP)とAPIキー' },
    { n: 8, title: 'デスクトップアプリという窓' },
  ],
} as const;
