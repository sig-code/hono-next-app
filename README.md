# Hono Next.js SPA アプリケーション

このプロジェクトはTurborepoを使用したモノレポ構造のNext.js SPAアプリケーションです。静的エクスポート機能を活用し、高速なSPA体験を提供します。

## 技術スタック

- [Next.js](https://nextjs.org/) 15.2.1 - Reactフレームワーク（SPAモード）
- [React](https://react.dev/) 19.1.0 - UIライブラリ
- [Turborepo](https://turbo.build/repo) - モノレポ管理ツール
- [pnpm](https://pnpm.io/) - パッケージマネージャー
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発環境

## プロジェクト構成

### アプリケーション

- `apps/web`: Next.jsを使用したSPAアプリケーション
  - ホームページとAboutページの基本構成
  - SPAとしての状態管理デモ（カウンター機能）
  - 静的エクスポート設定によるデプロイの容易さ

### パッケージ

- `packages/ui`: 共有Reactコンポーネントライブラリ
  - ボタン、カードなどの再利用可能なUIコンポーネント
- `packages/eslint-config`: プロジェクト全体で共有するESLint設定
- `packages/typescript-config`: プロジェクト全体で共有するTypeScript設定

## インストールと開発

### 必要条件

- Node.js 20以上（最新版推奨）
- pnpm 10.8.0以上

### 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone <リポジトリURL>
cd hono-next-app

# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

開発サーバーは http://localhost:3010 で起動します。

## ビルドと実行

### ビルド

```bash
pnpm build
```

### 本番環境での実行

```bash
pnpm start
```

### 型チェック

```bash
pnpm check-types
```

### リント

```bash
pnpm lint
```

## ブランド設定

このプロジェクトでは以下のブランド設定を使用しています：

### カラー

- プライマリ: `#3894FF`
- 警告: `#FF5252`
- アクセント: `#29C7C7`
- 背景:
  - イエロー: `#F7D666`
  - ホワイト: `#FFFFFF`
  - ライトグレー: `#EEEEEE`
- テキスト:
  - ダーク: `#000000`

### タイポグラフィ

- フォントファミリー: `M PLUS Rounded 1c, sans-serif`
- フォントウェイト:
  - ミディアム: 500
  - ボールド: 700

### スペーシング

- ベーススペーシング: `15px`

### ボーダー

- ボタンの角丸: `5px`

### シャドウ

- デフォルトシャドウ:
  - カラー: `#000000`
  - 不透明度: `10%`
  - オフセットX: `0`
  - オフセットY: `2px`
  - ブラー: `10px`

## リモートキャッシュ

Turborepoは[リモートキャッシング](https://turbo.build/repo/docs/core-concepts/remote-caching)機能を提供しており、ビルドキャッシュをチーム間やCI/CDパイプラインで共有できます。

Vercelアカウントを使用してリモートキャッシュを有効にするには：

```bash
npx turbo login
npx turbo link
```

## 参考リンク

- [Next.js ドキュメント](https://nextjs.org/docs)
- [Turborepo ドキュメント](https://turbo.build/repo/docs)
- [React ドキュメント](https://react.dev/)
- [TypeScript ドキュメント](https://www.typescriptlang.org/docs/)
