# GreenNest 🌿

可持续城市园艺平台（**GreenNest** —— **CityGarden** 旗下品牌）。
帮助城市居民把阳台、屋顶和室内空间，通过智能 AI 推荐和精选园艺套件，
打造成可持续的绿色环境。

A sustainable urban gardening platform built with **Astro**. Bilingual
(English + 中文), fully static, no backend.

## ✨ 功能 / Features

- 🌐 **双语 / Bilingual** — English + 中文，URL 路由 `/en/*`、`/zh/*`，带语言切换
- 🪴 **Design Your Garden** — 交互式可视化配置器：回答几个问题，生成推荐套装、推荐植物、布局示意与预估价格（基于规则的植物推荐）
- 🛒 **产品 / Products** — 三档套装（"购买"为前端演示）
- 🏙️ **屋顶花园服务 / Roof Garden Service** — 含咨询表单
- 🤝 **社区花园项目 / Community Program** — 含报名表单
- 📅 **预约咨询 / Book Consultation**、📨 **联系我们 / Contact** — 表单（前端演示）
- 🖼️ **图库 / Gallery**、📝 **博客与 DIY 指南 / Blog & DIY Guides**、ℹ️ **关于 / About**

> 所有表单为**纯前端演示**（提交后显示成功提示，不发送数据）；真实电商结算与账号系统属于后续 Phase 3，本仓库不包含。

## 🧱 技术栈 / Tech Stack

- **[Astro](https://astro.build/)** — 静态站点生成，内置 i18n
- 配置器交互为**原生 TypeScript**（Astro island，无 UI 框架）
- 设计 token 化的 CSS（绿色主题，`--primary:#2E7D32`）
- 字体 Inter + Outfit，图标 [Lucide](https://lucide.dev/)（CDN）

## 📂 项目结构 / Structure

```
src/
├── pages/
│   ├── index.astro          # 重定向 -> /en/
│   └── [lang]/              # 单一动态路由，生成 /en 与 /zh
│       ├── index.astro      # Home
│       ├── products / vertical-garden / roof-garden / community
│       ├── gallery / about / consultation / contact
│       ├── design-your-garden.astro
│       └── blog/{index,[slug]}.astro
├── components/              # Navbar, Footer, MockForm, ProductCard, ...
│   └── garden-designer/     # 配置器（GardenDesigner.astro + designer.ts）
├── layouts/BaseLayout.astro
├── data/                    # products.ts, plants.ts, team.ts
├── content/blog/{en,zh}/    # markdown 博客 / DIY 文章
├── i18n/                    # ui.ts（字典）+ utils.ts（助手）
└── styles/global.css        # 设计 token + 全部样式
```

## 🚀 快速开始 / Getting Started

需要 Node.js 18+。

```bash
# 安装依赖 / install dependencies
npm install

# 启动开发服务器 / start dev server (http://localhost:4321)
npm run dev

# 构建生产版本 / build for production (-> dist/)
npm run build

# 本地预览构建产物 / preview the build
npm run preview
```

打开浏览器访问 **http://localhost:4321**，会自动跳转到 `/en/`。

## 🌍 部署 / Deployment

`npm run build` 输出到 `dist/`，是纯静态文件，可部署到 Netlify、Vercel、
GitHub Pages 等任意静态托管平台。

## 📄 License

按「现状」提供，用于演示目的 / Provided as-is for demonstration.
