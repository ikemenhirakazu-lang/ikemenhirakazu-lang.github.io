# CLAUDE.md — ブログ本体(AIよくばり日記)

このリポジトリは「AIよくばり日記」の本体(**Astro + GitHub Pages**、公開URL https://ai-yokubari.com 、`git push origin main` で自動ビルド)。運営の主戦場・素材・記事の型は統合プロジェクト側 `C:\Users\ikeme\OneDrive\Desktop\AIブログ` にある(`CLAUDE.md` と `docs/記事の型.md`)。**記事を書く/公開する時は必ずそちらのルールに従う。**

## 公開の必須ルール(厳守)

- **実名・地名・社名を書かない。** ハンドルネーム「ジンとニックのボス」。人生ネタの地名はぼかす。
- **公開する記事は完成品ルートに乗せる**: Fable 5で草稿 → `AIブログ/docs/記事の型.md` の該当型に沿う → ボスと推敲を数往復 → 承認後に公開。たたき台のまま公開しない。
- **AIの相棒の呼び名=クロさん**(ダイエットの「ミルさん」とは別。混同しない)。
- 記事は `src/content/blog/**/*.md`(frontmatter 必須= title / description / pubDate、任意で `draft` / `affiliate`)。ダイエットシリーズは `src/content/blog/diet/`。ファイル名がURLのslugになる。
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
