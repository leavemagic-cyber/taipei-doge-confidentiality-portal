# 公務機密智能輔助系統入口頁｜專案現況與續作紀錄

最後更新：2026-09-21（臺北時間）  
紀錄責任：每次有實質修改或發布，負責該次工作的代理必須在結束前同步更新本檔。

## 一、目前結論

- 本專案是一個獨立的 GitHub Pages 靜態入口頁；不存放公務機密知識庫來源、使用者資料或對話內容。
- 公開網址：<https://leavemagic-cyber.github.io/taipei-doge-confidentiality-portal/>
- GitHub 儲存庫：<https://github.com/leavemagic-cyber/taipei-doge-confidentiality-portal>
- 正式分支：`main`
- 入口按鈕固定連至：<https://hungyu.pse.is/9hffd6>
- 最近一次改變頁面行為的 commit：`55ca3e4423001ccf974e53579fafa33758d1dba9`
- 2026-09-21 重建紀錄前，工作目錄乾淨，`main` 與 `origin/main` 同步於上述 commit。
- 入口頁及官方處徽的使用均已由使用者明示取得機關授權。

## 二、使用者已裁定的需求

下列內容是本入口頁的固定設計基準，除非使用者日後明確改變：

1. 採「獨立靜態網頁＋GitHub Pages」，不是 Notion 頁面。
2. 標題顯示「臺北市政府政風處」，並使用正式處徽。
3. 主按鈕顯示「進入本系統」，連結為 `https://hungyu.pse.is/9hffd6`。
4. 「製作：鄭宏宇」要小且不顯眼，放在頁面右下角。
5. 保留淡紫色蓮花背景；中間卡片不可純白，必須讓蓮花透出。
6. 蓮花要比初版縮小，造型採政風處處徽中的蓮花語彙。
7. 不顯示「點選後將前往 NotebookLM」，也不以新平台名稱取代；入口頁避免綁定會改名的平台名稱。
8. 網站之後可以撤除；暫時下架不必刪除儲存庫。

## 三、目前畫面與檔案對應

| 項目 | 目前內容 | 實作位置 |
|---|---|---|
| 系統名稱 | 公務機密智能輔助系統 | `app/page.tsx` |
| 主標題 | 臺北市政府政風處 | `app/page.tsx` |
| 說明 | 公務機密維護法規與實務知識入口 | `app/page.tsx` |
| 主按鈕 | 進入本系統 | `app/page.tsx` |
| 按鈕網址 | `https://hungyu.pse.is/9hffd6` | `app/page.tsx` |
| 製作人 | 製作：鄭宏宇 | `app/page.tsx`、`app/globals.css` |
| 官方處徽 | `public/doge-emblem.png` | `app/page.tsx` |
| 淡紫蓮花背景 | `public/lotus-backdrop-v2.png` | `app/page.tsx`、`app/globals.css` |
| 社群分享預覽圖 | `public/og.png` | `app/layout.tsx` |
| 自動部署 | GitHub Actions → GitHub Pages | `.github/workflows/deploy-pages.yml` |

目前視覺參數：蓮花桌面寬度 `max(840px, 92vw)`、最大 `1360px`、透明度 `0.86`；內容卡片使用 `rgba(246, 241, 255, 0.48)` 與 `4px` 背景模糊，因此不是純白遮蓋。

## 四、完整變更時間線

| 時間（臺北） | commit | 內容 | 驗收意義 |
|---|---|---|---|
| 2026-08-28 13:06 | `e8732b4` | 建立 Next.js 靜態入口、正式處徽、入口按鈕、低調製作人署名及 GitHub Pages 工作流程 | 第一版可部署入口頁 |
| 2026-08-28 13:32 | `3bda974` | 加回淡紫色蓮花背景 | 回應使用者要求恢復蓮花 |
| 2026-08-28 13:36 | `2b69c54` | 將中央卡片改為半透明，讓蓮花穿透顯示 | 回應「中間不要純白」 |
| 2026-08-28 13:42 | `3a70339` | 換成較小、取材自處徽蓮花語彙的 `lotus-backdrop-v2.png` | 回應蓮花縮小及造型要求 |
| 2026-08-28 13:47 | `55ca3e4` | 移除「點選後將前往 NotebookLM」及其樣式 | 不再顯示已改名平台名稱 |
| 2026-09-21 | 本次紀錄更新 | 補建本檔、補上強制續作規則，並把 README 改成平台中性說明 | 修正先前未建立完整交接紀錄的缺失；不改變頁面畫面或按鈕 |

完整 commit 雜湊可用 `git log --reverse` 查閱；上表短雜湊只供閱讀。

## 五、發布方式與驗證標準

推送到 `main` 後，`.github/workflows/deploy-pages.yml` 會使用 Node.js 22 執行：

1. `npm ci`
2. `npm run build`
3. 上傳 `./out`
4. 由 `actions/deploy-pages@v5` 發布至 GitHub Pages

每次頁面有實質修改，必須完成並記錄：

1. 本機 `npm run build` 成功。
2. `git diff --check` 無錯誤。
3. GitHub Pages workflow 的 run ID、commit、結論為 `success`。
4. 以不使用舊快取的網址開啟正式站，確認狀態碼及畫面。
5. 確認主按鈕文字與 `href` 正確、處徽與蓮花資產可載入、製作人文字存在。
6. 確認頁面未再出現「點選後將前往 NotebookLM」或其他未經要求的平台名稱。

只有完成上述適用項目，才能對使用者宣告「已發布完成」。若網路或 GitHub 無法查驗，必須明記為 `未驗證`，不可用本機建置結果代替線上發布證據。

## 六、每次工作的必填紀錄格式

每次實質修改或部署，直接在本節上方新增一筆，不得只留在對話中：

```text
日期時間：
使用者要求：
實際修改檔案：
commit：
本機建置：PASS / FAIL / 不適用（原因）
GitHub Pages run：run ID、commit、success / failure / 未驗證
正式站查驗：網址、查驗項目、PASS / FAIL / 未驗證
未完成事項或風險：
```

## 七、範圍與風險

- 本儲存庫只負責公開入口頁，不代表後端知識系統內容已更新、已測試或可用。
- 按鈕使用外部短網址；短網址的最終導向可在本儲存庫之外變更。需要對外發布前，應另行查驗最終導向。
- GitHub Pages 是公開網站；下架後，搜尋引擎或瀏覽器快取不一定立即消失。
- 官方處徽僅記錄為本專案已獲授權使用，本儲存庫不授權第三人另行使用。

## 八、撤除方式

- 暫時撤除：在 GitHub Pages 設定中選擇 **Unpublish site**。程式與歷史仍保留，可再發布。
- 永久移除：刪除儲存庫，或移除 Pages 發布來源。這是破壞性操作，必須由使用者再次明確要求後才能執行。

## 九、目前待辦

- 沒有尚未實作的畫面修改。
- 本次紀錄完成後，仍須完成 GitHub Pages workflow 與正式網址的當次線上查驗，結果應寫入本檔或在本次交付中明確標示。
