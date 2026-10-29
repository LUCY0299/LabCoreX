# LabCoreX 實驗室網站

許文錦老師實驗室（中央大學資管系）的官方網站，使用 **Vue 3 + Vue CLI** 製作，部署在 **GitHub Pages**。

- 原始碼：https://github.com/LUCY0299/LabCoreX （`main` 分支）
- 線上網站：https://lucy0299.github.io/LabCoreX/ （`gh-pages` 分支，部署時自動產生）

---

## 1. 第一次使用：環境安裝

1. 安裝 [Node.js](https://nodejs.org/)（選 LTS 版本），裝完後在終端機輸入 `node -v` 確認有版本號。
2. 安裝 [Git](https://git-scm.com/)。
3. 下載專案並安裝套件：

```bash
git clone https://github.com/LUCY0299/LabCoreX.git
cd LabCoreX
npm install
```

> `node_modules/` 不會放在 GitHub 上，每次在新電腦都要先跑一次 `npm install`。

## 2. 在自己電腦上預覽

```bash
npm run serve
```

打開瀏覽器到 **http://localhost:8080/**。修改檔案存檔後，網頁會自動更新。按 `Ctrl + C` 停止。

## 3. 專案結構

```
LabCoreX/
├── public/                 # 不經過打包、原封不動複製的檔案（favicon、PDF）
├── src/
│   ├── locales/
│   │   ├── zh-TW.json      # ★ 中文版所有文字內容
│   │   └── en.json         # ★ 英文版所有文字內容
│   ├── assets/
│   │   ├── CMaster/        # 碩士生照片（grade1 = 碩一、grade2 = 碩二）
│   │   ├── Alumni/         # 已畢業成員照片
│   │   ├── banners/        # 各頁面頂部橫幅圖
│   │   ├── carousel/       # 首頁輪播圖
│   │   ├── data/
│   │   │   └── publications.json   # ★ 論文發表清單
│   │   └── somebody.jpg    # 沒有照片時的預設頭像
│   ├── views/              # 每一個頁面（Team、Research、Publications…）
│   ├── components/         # 共用元件（Header、Footer、Banner…）
│   ├── router/index.js     # 網址路由（新增頁面時要改）
│   └── i18n.js             # 中英文切換設定
├── vue.config.js           # 打包設定（部署路徑在這裡）
├── deploy.sh               # 一鍵部署腳本
└── package.json
```

**大部分日常更新只需要改有 ★ 的檔案和放照片，不需要動程式碼。**

| 想改的內容 | 檔案位置 |
|---|---|
| 成員名單（Team 頁） | `src/locales/*.json` 裡的 `team.categories` |
| 最新消息 | `src/locales/*.json` 裡的 `news.items` |
| 研究領域 | `src/locales/*.json` 裡的 `research.areas` |
| 聯絡資訊 | `src/locales/*.json` 裡的 `contact` |
| 論文清單 | `src/assets/data/publications.json` |
| 老師個人介紹 | `src/views/ProfessorView.vue`（內容直接寫在程式裡） |
| 導覽列選單文字 | `src/locales/*.json` 裡的 `header.nav` |

## 4. 常見更新教學

> ⚠️ 中文 `zh-TW.json` 和英文 `en.json` **兩個檔案都要改**，不然切換語言時內容會不一樣。

### 新增成員

1. 照片放到對應資料夾，例如碩一放 `src/assets/CMaster/grade1/`。
   - 檔名建議「中文名+英文名.jpg」，例如 `王小明Ming.jpg`。
   - 照片請先縮小到寬約 1000px、300 KB 左右，太大會讓網站變慢。
   - 頁面會自動裁成固定高度（220px）並置中，人臉盡量放在照片中間。
2. 在 `zh-TW.json` 找到 `"title": "Master students 碩士班"`，在 `members` 裡加一筆：

```json
{
  "name": "王小明",
  "image": "CMaster/grade1/王小明Ming.jpg",
  "title": "碩士生",
  "department": "資訊管理學系",
  "expertise": [],
  "detailUrl": "#"
}
```

3. 在 `en.json` 的 `"title": "Master Students"` 加上英文版：

```json
{
  "name": "Ming Wang (王小明)",
  "image": "CMaster/grade1/王小明Ming.jpg",
  "title": "Master Student",
  "department": "Department of Information Management",
  "expertise": [],
  "detailUrl": "#"
}
```

- `image` 是從 `src/assets/` 開始算的路徑；沒有照片就填 `"somebody.jpg"`。
- 每筆之間要用逗號 `,` 隔開，**最後一筆後面不能有逗號**，否則網站會壞掉。

### 每年升級／畢業（建議每學年 8 月做一次）

1. **碩二畢業**：把照片從 `CMaster/grade2/` 移到 `Alumni/`，資料從碩士班搬到 `Past members`，title 改成「115級 校友」/「Alumni (Class of 2026)」這種格式。
2. **碩一升碩二**：把照片從 `CMaster/grade1/` 移到 `CMaster/grade2/`，並改 JSON 裡的 `image` 路徑。
3. **新碩一**：照「新增成員」的步驟加入。

### 新增最新消息

在 `src/locales/*.json` 的 `news.items` 加一筆，新的放最前面，`id` 不要重複：

```json
{
  "id": 2,
  "date": "2026.11",
  "title": "恭賀！！ 某某榮獲某某獎"
}
```

### 新增論文

在 `src/assets/data/publications.json` 加一筆，`id` 不要跟其他筆重複：

```json
{
  "id": 99,
  "year": 2026,
  "type": "Journal",
  "title": "論文標題",
  "authors": "Wen-Chin, Hsu",
  "venue": "期刊或研討會名稱",
  "details": "卷, 期",
  "doi": null,
  "tags": ["keyword1", "keyword2"]
}
```

### 改完怎麼檢查 JSON 有沒有寫錯

```bash
node -e "for (const f of ['en','zh-TW']) JSON.parse(require('fs').readFileSync('src/locales/'+f+'.json','utf8')); console.log('JSON OK')"
```

出現 `JSON OK` 就沒問題；出現錯誤訊息通常是少了逗號、多了逗號或引號沒關。

## 5. 上傳原始碼到 GitHub

改完內容、本機預覽確認沒問題後：

```bash
git add .
git commit -m "更新成員名單"
git push
```

## 6. 部署到線上網站

在 **Git Bash** 執行（Windows 的 PowerShell 不能跑 `.sh`）：

```bash
sh deploy.sh
```

這個腳本會：
1. `npm run build` 打包成 `dist/` 資料夾
2. 把 `dist/` 強制推送到 GitHub 的 `gh-pages` 分支

推送完約 1～3 分鐘後，到 https://lucy0299.github.io/LabCoreX/ 重新整理（可按 `Ctrl + F5` 清快取）確認。

> `git push`（第 5 步）只是備份原始碼，**不會**更新線上網站；一定要跑 `deploy.sh` 網站才會變。

## 7. 注意事項

- **部署路徑**：`vue.config.js` 裡的 `publicPath` 必須和 GitHub repo 名稱一樣（目前 repo 叫 `LabCoreX`，所以要是 `'/LabCoreX/'`）。如果寫錯，線上網站會是一片空白。
- **尚未完成的部分**：
  - `Gallery`（Lab Life）頁目前只有 6 個灰色佔位框，還沒放真正的活動照片，要改 `src/views/GalleryView.vue`。
  - `src/views/EnglishView.vue`、`ReportsView.vue`（研討會相關頁面）有程式碼，但沒有加進 `router/index.js`，所以網站上看不到。`zh-TW.json` / `en.json` 裡的 `conference`、`conferenceList`、`reports` 就是給這兩頁用的。
- **`dist/` 不用管**：它是打包產物，已經寫在 `.gitignore`，不會被 commit；每次跑 `deploy.sh` 都會重新產生。
- **權限**：要推送到 GitHub，你的帳號必須被加為 repo 的 Collaborator（或 repo 轉移給實驗室帳號），請找前任管理者處理。
- **大檔案**：GitHub 單檔上限 100 MB，影片和 PDF 盡量先壓縮。
- 改壞了不要慌，可以用 `git status` 看改了哪些檔案、用 `git checkout -- 檔名` 還原尚未 commit 的修改。

## 8. 使用到的套件

- [Vue 3](https://vuejs.org/)、[Vue Router](https://router.vuejs.org/)（hash 模式，網址會有 `#/`）
- [vue-i18n](https://vue-i18n.intlify.dev/)：中英文切換
- [Bootstrap 5](https://getbootstrap.com/) + bootstrap-vue-3：版面與元件
- [Font Awesome](https://fontawesome.com/)：圖示
- [vue3-carousel](https://vue3-carousel.netlify.app/)：首頁輪播
