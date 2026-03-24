# 🚀 VibeStack

**為 AI 時代而生的極速全端開發框架**

**Bun + Elysia + Eden Treaty + SolidStart + ArkType**

讓你用自然語言「Vibe」就能快速開發，同時擁有**接近 Zero-Hallucination** 的極致型別安全與頂級性能。

---

## ✨ 為什麼開發者都愛上 VibeStack？

- **AI Vibe Coding 真正解放**：Eden Treaty + ArkType + 嚴格鐵律，讓 AI 幾乎不可能 hallucinate  
- **性能拉滿**：Bun 運行時 + Elysia + Solid.js fine-grained reactivity，領先業界  
- **真正 Single Source of Truth**：所有資料結構只寫一份，前後端永遠同步  
- **端到端型別安全**：修改一次 schema，全專案即時紅線，AI 被迫守規矩  
- **部署極簡**：真正單一容器（Single Container），一行指令即可上線  

這不是普通的 Fullstack 框架，  
這是專為 **2026 年 AI Vibe Coding** 設計的 **終極開發武器**。

---

## 📂 專案結構

```bash
.
├── docker/                  # 單一容器部署配置
├── apps/
│   └── web/                 # SolidStart（SSR + Streaming + Islands）
├── packages/
│   ├── shared/              # ArkType Schemas（唯一真相來源）
│   └── config/              # 共用配置（tsconfig、eslint）
├── .cursor/rules/           # AI 鐵律（讓 Cursor/Claude 自動聽話）
├── turbo.json
├── package.json
└── README.md
```


🚀 30 秒快速上手
Bashbun create vibestack my-app
cd my-app
bun install
bun dev
開發指令：
Bashbun dev          # 同時啟動 Elysia + SolidStart
bun typecheck    # 每次 vibe 後強烈建議執行
bun build

🔥 Contract-First Vibe Coding 流程
這是達到 Zero-Hallucination 的核心秘訣：

修改 Schema → packages/shared/src/schemas.ts（ArkType）
更新後端 → apps/web/src/server/api.ts（Elysia + Eden Treaty）
執行型別檢查 → bun typecheck
讓 AI Vibe 前端 → SolidStart components

只要嚴格跟隨這個順序，AI 就會變得異常聽話。

----

## 🛡️ Zero-Hallucination 防護系統

* Eden Treaty：最強原生端到端型別推斷，寫錯即紅線
* ArkType：極速驗證 + 優秀 TS 推斷，作為 Single Source of Truth
* Cursor Rules：AI 的憲法，自動強制 Contract-First 與嚴格規範
* Strict TypeScript：全專案開啟 strict: true
* 小步迭代：一次只 vibe 一個 endpoint + 對應 UI

推薦 Prompt 前綴（每次讓 AI vibe 前複製）
Markdown你是 VibeStack 專家，必須嚴格遵守 .cursor/rules/ 所有鐵律。

- Contract First：先確認 shared ArkType schema 最新狀態
- 所有 schema 必須來自 @shared/schemas，並使用 ArkType
- 所有 API 必須使用 treaty<Api> from @elysiajs/eden
- 前端使用 SolidStart + Solid Query
- 嚴格 TypeScript strict mode，零 any

現在請幫我生成...

🛠 Tech Stack

| 層級 | 技術 | 亮點 |
| Runtime | Bun | 極速啟動與執行 |
| Backend | Elysia + Eden Treaty高性能 + 原生型別安全FrontendSolidStartFine-grained reactivity，極致響應SchemaArkType極速驗證 + 優秀 TS 推斷MonorepoTurborepo閃電 build 與 typecheckORMDrizzle ORM（推薦）型別安全 + Bun 原生友好Deployment單一容器 Docker簡單、輕量、生產就緒

## 📦 一鍵部署（單一容器）
```Bash
# 建置生產鏡像
docker build -f docker/Dockerfile -t vibestack:latest .

# 運行
docker run -d \
  -p 3000:3000 \
  --env-file docker/.env.prod \
  --name vibestack \
  vibestack:latest
```
支援 Docker Compose、Railway、Fly.io、Render 等平台一鍵部署。


## 📖 為什麼選擇 VibeStack？
你想要：

* 用 AI 快速開發，卻討厭修一堆 hallucination bug？
* 追求頂級性能，卻不願犧牲型別安全？
* 喜歡 Solid.js 的極致速度，又想要強大的後端保障？

VibeStack 就是答案。

它讓 AI 從「亂 generate」的工具，變成真正可靠的開發夥伴。

---

Built for developers who vibe fast and ship clean.
