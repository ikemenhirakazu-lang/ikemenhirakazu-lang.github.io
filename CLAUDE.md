# CLAUDE.md — ブログ本体(AIよくばり日記)

このリポジトリは「AIよくばり日記」の本体(**Astro + GitHub Pages**、公開URL https://ai-yokubari.com 、`git push origin main` で自動ビルド)。運営の主戦場・素材・記事の型は統合プロジェクト側 `C:\Users\ikeme\OneDrive\Desktop\AIブログ` にある(`CLAUDE.md` と `docs/記事の型.md`)。**記事を書く/公開する時は必ずそちらのルールに従う。**

## 公開の必須ルール(厳守)

- **実名・地名・社名を書かない。** ハンドルネーム「ジンとニックのボス」。人生ネタの地名はぼかす。
- **公開する記事は完成品ルートに乗せる**: `草稿係`(Opus 5)が草稿を書く(**本体は文章を書かない**。2026-08-05にFable 5から変更) → `AIブログ/docs/記事の型.md` の該当型に沿う → ボスと推敲を数往復 → **出す直前に `公開前点検係` を通す**(自分で点検しない) → 承認後に公開。たたき台のまま公開しない。
- **AIの相棒の呼び名=クロさん**(ダイエットの「ミルさん」とは別。混同しない)。
- 記事は `src/content/blog/**/*.mdx`(frontmatter 必須= title / description / pubDate、任意で `draft` / `affiliate`)。ダイエットシリーズは `src/content/blog/diet/`。ファイル名がURLのslugになる。
- 🚨**新しい記事も `.mdx` で作る。`.md` で作らない**(あとから吹き出し `Balloon`・囲み `Callout`・手順 `Steps` を入れられなくなる)。2026-08-01に全記事を `.mdx` に統一ずみ(実測: `.md` 0本 / `.mdx` 35本)。
- ⚠️**ファイル名は変えない。**ファイル名がそのまま公開URLなので、変えると既存リンクが切れて検索評価もやり直しになる。
- **軸が2本ある。混同しない。** `series`(読む順番= main / diet。`episode` と対で使い、記事一覧の絞り込みに効く)と `category`(テーマ= `src/consts.ts` の `CATEGORIES`。`/blog/category/<slug>/` のページになる)。**新しい記事には必ず `category` を書く**(未設定でもビルドは通るが、カテゴリページから漏れる)。カテゴリを増やすときは `consts.ts` と `content.config.ts` の両方に足す。あとから減らすのは難しいので、記事が無いカテゴリは作らない。
- ボスはターミナル操作に不慣れ。**git操作は代行**し、本人操作(ブラウザ認証等)だけ案内する。

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
