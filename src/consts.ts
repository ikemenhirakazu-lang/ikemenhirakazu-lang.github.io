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

// ── Claude Code入門シリーズの目次 ─────────────────────────────────
// 記事より先にここへ予定の回を並べておく。まだ公開していない回は「準備中」で出る。
// 公開したら、その回の title は記事側(frontmatter)のものが優先される。
// 出どころ: docs/superpowers/specs/2026-08-03-claude-code-nyuumon-series-design.md §3
//
// 🚨 2026-08-05 ボス判断:「全◯回」と総数を名乗らない。
//   「やることが増えれば8回以上続くので」——先に本数を約束すると、増やしたときに嘘になる。
//   だから `total` は持たない。画面に出すのは「公開済みが何本か」だけ。
//   ⚠️ 下の episodes はあくまで**いまの予定**。足してよい。足しても表示の文言は直さなくていい作りにしてある。
export const NYUUMON = {
  key: 'nyuumon',
  label: '非ITのClaude Code入門',
  path: '/blog/nyuumon/',
  lead: 'IT経験ゼロの48歳が、Claude Codeを入れるところから順に書いていくシリーズ。',
  // 2026-08-04 ボス判断で順番を入れ替えた。「もっと初歩的なところからでいい。
  // CLAUDE.mdとかそういうところ」→ CLAUDE.md を4番目から3番目へ前倒し。
  // ⚠️ 第2回だけは動かせない。第1回の本文と図解24で「次の記事(操作の基本)」と読者に約束ずみ。
  episodes: [
    { n: 1, title: '入れて、動かすまで', slug: 'nyuumon/claude-code-hajimekata' },
    { n: 2, title: '操作の基本', slug: 'nyuumon/claude-code-kyoka' },
    { n: 3, title: 'CLAUDE.md(毎回読ませる紙)' },
    { n: 4, title: 'フォルダと会話の分け方' },
    // 2026-08-05 ボス希望で追加。「コマンドの回は作りたいと思ってたよ」
    // 本人が知っているのは /context と /compact の2つだけ。公式の一覧は50個以上ある。
    // ⚠️スキルの前に置いた。ボスの自作コマンド(/公開 /草稿 など14個)は「スキル」の回の担当で、
    //   こちらは最初から入っているコマンドの回。素材は設計書 §3 に置いた。
    { n: 5, title: '最初から入っているコマンド' },
    { n: 6, title: 'スキル' },
    { n: 7, title: 'サブエージェント' },
    { n: 8, title: '外部とつなぐ(MCP)とAPIキー' },
    { n: 9, title: 'デスクトップアプリという窓' },
  ],
} as const;
