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
