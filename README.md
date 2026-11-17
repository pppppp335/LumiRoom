# Secret Base｜同好秘密基地

一個溫柔復古的 2D 同好交流空間。Vite + React + TypeScript，靜態部署至 Vercel 即可。

## 開始使用

```bash
npm install
npm run dev
```

正式建置：`npm run build`，輸出位於 `dist/`。Vercel 可自動偵測 Vite，Build Command 使用 `npm run build`，Output Directory 使用 `dist`。

## 資料

角色護照、外觀、貼文與互動反應保存在瀏覽器 `localStorage`。資料存取集中於 `src/data/storage.ts`，未來可替換為 Supabase service。

角色由獨立 SVG 元件圖層構成，不依賴外部圖片資源。
