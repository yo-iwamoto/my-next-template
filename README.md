## 概要

個人的な Next.js アプリケーションのテンプレートです．

## 注意点

- Next.js は standalone を利用しているので不要なら `next.config.js` を編集する。
- Dockerfile の定義はプロダクションビルドのみを想定しているため、開発環境でもコンテナが必要な場合は編集または別途作成する。
- pageExtensions で `page.tsx`、`api.ts` を指定しているため、拡張子がこれに当てはまらないとルーティングで認識されない。
