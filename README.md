# Kazumi's Portfolio Website

完全客製化的作品集網站，建在 Next.js + React + Tailwind CSS。

## 🚀 快速開始

### 本地開發
```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看網站。

### 部署到 Vercel

1. 將此專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中連接 GitHub 帳戶
3. 選擇此專案並點擊「Deploy」
4. 完成！網站將在 Vercel 上自動部署與更新

## 📝 內容管理指南

### 編輯網站內容

所有文字內容都存放在 `public/content.json` 中。妳可以直接編輯這個檔案，網站會自動更新。

#### 1. 編輯基本資訊

```json
{
  "site": {
    "name": "Kazumi",
    "tagline": "文化為脈絡，創意為羽翼",
    "description": "設計的吟唱者，故事的雕琢者...",
    "about": "以文化為脈絡，創意為羽翼...",
    "contact": {
      "email": "你的信箱",
      "instagram": "你的 Instagram 連結",
      "threads": "你的 Threads 連結",
      "dcard": "你的 Dcard 連結"
    }
  }
}
```

#### 2. 添加新作品

在 `portfolio` 陣列中加入新物件：

```json
{
  "id": "work-name",
  "title": "作品名稱",
  "category": "brand-design",
  "year": 2025,
  "description": "作品描述（在作品集卡片上顯示）",
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  "tags": ["標籤1", "標籤2", "標籤3"],
  "featured": true
}
```

**參數說明：**
- `id`: 作品的唯一識別符（英文+連字號，如 `fucha-fuxisi`）
- `category`: 分類 ID（見下方列表）
- `year`: 完成年份
- `description`: 作品簡介
- `images`: 作品圖片 URL 陣列（可多張）
- `tags`: 最多 5 個標籤
- `featured`: `true` 時在首頁精選作品展示，`false` 時只在作品集頁面

**可用的分類 ID：**
- `brand-design` - 品牌設計
- `web-design` - 網頁設計
- `social-content` - 社群內容
- `print-design` - 平面設計
- `packaging` - 商品包裝
- `video-motion` - 影音設計

#### 3. 編輯服務項目

在 `services` 陣列中修改各項服務：

```json
{
  "id": "service-id",
  "name": "服務名稱",
  "description": "服務描述",
  "icon": "palette"
}
```

**可用的圖標：**
- `palette` - 🎨
- `camera-video` - 📹
- `box` - 📦
- `layout-2` - 🏗️
- `social` - 📱
- `bulb` - 💡
- `pencil` - ✍️
- `calendar-event` - 📅
- `link` - 🔗

### 上傳圖片

#### 方法 1：使用免費圖片雲端（推薦）
- 上傳到 [Imgbb](https://imgbb.com/)（免費，無需註冊）
- 或 [Cloudinary](https://cloudinary.com/)
- 取得圖片 URL，貼入 `content.json` 中

#### 方法 2：使用 Google Drive
1. 上傳圖片到 Google Drive
2. 右鍵 → 取得連結 → 改為「任何有連結的人都可以查看」
3. 從連結中取出檔案 ID（`/d/` 和 `/view` 之間）
4. 使用格式：`https://drive.google.com/uc?export=view&id=<FILE_ID>`

#### 方法 3：使用 GitHub
1. 在 GitHub 專案中新增 `images` 資料夾
2. 上傳圖片
3. 使用 Raw 連結：`https://raw.githubusercontent.com/<username>/<repo>/main/images/<filename>`

## 🎨 客製化設計

### 修改色系

編輯 `tailwind.config.js` 中的顏色定義：

```javascript
colors: {
  primary: {
    500: '#cc8c54', // 主色
    600: '#b87641',
    700: '#9d6235',
  },
  // ... 其他色系
}
```

### 修改字體

在 `app/globals.css` 中的 `@import url()` 修改 Google Fonts：

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Playfair+Display:wght@700&display=swap');
```

### 修改排版和間距

編輯 `app/globals.css` 中的 CSS 變數和樣式。

## 📱 頁面結構

- `/` - 首頁（Hero + 精選作品 + 關於我）
- `/portfolio` - 作品集頁面（含分類篩選）
- `/portfolio/[id]` - 作品詳情頁
- `/services` - 服務頁面

## 🔧 技術棧

- **框架**: Next.js 14
- **樣式**: Tailwind CSS
- **字體**: Noto Sans TC + Playfair Display（Google Fonts）
- **部署**: Vercel

## 📊 檔案結構

```
kazumi-portfolio/
├── app/
│   ├── layout.tsx           # 主布局
│   ├── page.tsx             # 首頁
│   ├── globals.css          # 全域樣式
│   ├── portfolio/
│   │   ├── page.tsx         # 作品集列表
│   │   └── [id]/
│   │       └── page.tsx     # 作品詳情
│   └── services/
│       └── page.tsx         # 服務頁面
├── components/
│   ├── Navbar.tsx           # 導航列
│   └── Footer.tsx           # 頁腳
├── public/
│   └── content.json         # 📌 所有內容資料
├── package.json
├── tailwind.config.js
└── vercel.json
```

## 🚀 部署後的更新流程

1. 編輯 `public/content.json`
2. 提交 Git commit
3. 推送到 GitHub (`git push`)
4. Vercel 自動偵測變更並重新部署
5. 約 30 秒後，網站更新完成

## ❓ 常見問題

**Q: 我如何添加新的作品分類？**
A: 在 `content.json` 的 `portfolioCategories` 陣列中添加新分類即可。

**Q: 可以改變網站的配色嗎？**
A: 可以。編輯 `tailwind.config.js` 中的 `colors` 部分，或直接編輯 `app/globals.css` 中的 CSS 變數。

**Q: 如何添加新頁面（如部落格）？**
A: 在 `app/` 中新建資料夾與 `page.tsx` 檔案即可。更多資訊見 [Next.js 文檔](https://nextjs.org/docs/app)。

**Q: 為什麼圖片沒有顯示？**
A: 檢查 URL 是否正確，確保圖片伺服器允許外部連結。試試用瀏覽器直接開啟 URL。

## 📞 需要幫助？

如有問題，隨時聯絡我。所有更新都可以透過編輯 JSON 檔案完成——無需修改任何程式碼！

---

**Made with ❤️ for Kazumi**
