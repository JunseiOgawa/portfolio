# Junsei Ogawa — Portfolio

Windows 95 風デザインのポートフォリオサイト。

## 技術スタック

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS + カスタム Windows 95 スタイル
- **Deploy:** Vercel

## ページ構成

| パス | 内容 |
|------|------|
| `/` | デスクトップ (ホーム) |
| `/about` | プロフィール |
| `/projects` | プロジェクト一覧 |
| `/skills` | スキル・技術スタック |

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## Vercel へのデプロイ手順

1. フォルダを GitHub にプッシュ
   ```bash
   git add .
   git commit -m "initial portfolio"
   git remote add origin https://github.com/JunseiOgawa/<repo-name>.git
   git push -u origin main
   ```

2. [vercel.com](https://vercel.com) にアクセスしてログイン

3. **"New Project"** → GitHubリポジトリを選択 → **"Deploy"**

4. Framework は **Next.js** が自動検出されます。設定変更不要。

## カスタマイズ

- [app/about/page.tsx](app/about/page.tsx) — プロフィール情報
- [app/projects/page.tsx](app/projects/page.tsx) — プロジェクト一覧
- [app/skills/page.tsx](app/skills/page.tsx) — スキルレベル
- [components/Taskbar.tsx](components/Taskbar.tsx) — ナビゲーション

