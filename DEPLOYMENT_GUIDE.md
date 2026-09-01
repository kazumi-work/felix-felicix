# 🚀 快速部署指南

## 第一步：準備環境

### 安裝必要工具
1. **安裝 Git**：https://git-scm.com/download/win (Windows) 或 https://git-scm.com/download/mac (Mac)
2. **安裝 Node.js**：https://nodejs.org/ (選擇 LTS 版本)
3. **GitHub 帳戶**：https://github.com/signup (免費)

驗證安裝：打開終端/命令提示字元，輸入：
```bash
node --version
npm --version
git --version
```

## 第二步：上傳到 GitHub

### 步驟 1：在 GitHub 建立新 Repository

1. 登入 [GitHub](https://github.com)
2. 點擊右上角 `+` → **New repository**
3. Repository 名稱：`kazumi-portfolio` (或任何名稱)
4. 選擇 **Public**（這樣免費用 Vercel）
5. 勾選 **Add a README file**
6. 點擊 **Create repository**

### 步驟 2：上傳專案檔案

在電腦上任選一個資料夾，打開終端/命令提示字元，輸入：

```bash
# 進入你想放專案的資料夾
cd ~/Desktop  # 或任何路徑

# 複製 GitHub Repository
git clone https://github.com/你的GitHub帳號/kazumi-portfolio.git
cd kazumi-portfolio

# 刪除舊的 README
rm README.md

# 複製所有新檔案到這個資料夾
# （把 /home/claude/kazumi-portfolio 中的所有檔案複製過來）
```

然後上傳到 GitHub：

```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

## 第三步：部署到 Vercel

### 方法一：自動部署（推薦）

1. 訪問 [Vercel](https://vercel.com)
2. 點擊 **Sign Up** → 選擇 **Continue with GitHub**
3. 授權 Vercel 訪問你的 GitHub
4. 點擊 **Import Project**
5. 選擇 `kazumi-portfolio` Repository
6. 預設設定都可以，點擊 **Deploy**
7. 等待 3-5 分鐘，部署完成！

### 方法二：手動部署

如果你想自己在電腦上測試後再部署：

```bash
# 進入專案資料夾
cd kazumi-portfolio

# 安裝依賴
npm install

# 本地測試（http://localhost:3000）
npm run dev

# 構建生產版本
npm run build

# 部署到 Vercel
npm install -g vercel
vercel
```

## 第四步：設定自訂網域（可選）

部署後 Vercel 會給你一個免費子域名，格式如：
```
kazumi-portfolio-abc123.vercel.app
```

如果你想用自己的網域（如 `kazumi.com`）：

1. 購買網域（[Namecheap](https://www.namecheap.com/) 或 [GoDaddy](https://www.godaddy.com/)）
2. 在 Vercel Dashboard → 你的專案 → **Settings** → **Domains**
3. 加入自訂網域，按照 Vercel 的指示修改 DNS 設定

## ✏️ 更新內容

編輯完 `public/content.json` 後，只需：

```bash
git add public/content.json
git commit -m "Update portfolio content"
git push origin main
```

Vercel 會自動偵測變更，約 30 秒後網站自動更新！

## 🎉 完成了！

你的作品集網站現在已經上線，可以分享給業主了。

---

## 如果遇到問題

### 問題 1：`git push` 時要求輸入密碼

使用 GitHub Personal Token 代替密碼：
1. GitHub 設定 → Developer settings → Personal access tokens → Tokens (classic)
2. 建立新 token，勾選 `repo` 權限
3. 複製 token 作為密碼

### 問題 2：Vercel 部署失敗

檢查：
- `package.json` 是否正確
- Node 版本是否相容（Vercel 預設用 Node 18）
- 是否有 TypeScript 錯誤（檢查 `.tsx` 檔案）

### 問題 3：圖片無法顯示

確保：
- 圖片 URL 以 `https://` 開頭
- 圖片伺服器允許外部連結
- 試試在瀏覽器直接開啟 URL

---

**需要幫助？隨時聯絡我！**
