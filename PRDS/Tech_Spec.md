# 技术架构与部署文档 (Technical & Deployment Spec)

## 1. 核心技术栈 (Tech Stack)

- **框架**: Next.js 14+ (App Router)
- **样式**: Tailwind CSS
- **动效**: Framer Motion
- **内容**: 本地 Markdown (用于博客) + TypeScript Constants (用于作品集)
- **部署**: GitHub Pages (静态导出)
- **Markdown 解析**: gray-matter + react-markdown
- **代码高亮**: rehype-highlight 或 prism-react-renderer

---

## 2. 数据管理策略 (Data Management)

### 2.1 作品集数据 (Static Data)

由于作品集更新频率中等，直接维护一个配置文件，方便 Trae 读取和渲染。

- **路径**: `src/config/projects.ts`
- **结构**:

```typescript
export interface Project {
  id: string;
  title: string;
  category: 'AI-Strategy' | 'Directing' | 'Creative';
  cover: string;
  link: string;
  metrics: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "某品牌AI数字人短视频策划",
    category: "AI-Strategy",
    cover: "/images/work1.jpg",
    link: "https://v.douyin.com/xxx",
    metrics: "全网播放50w+",
    tags: ["Midjourney", "HeyGen", "编剧"]
  },
  // ...
];
```

### 2.2 博客内容 (Markdown)

采用本地 Markdown 文件管理，无需数据库。

- **路径**: `content/posts/*.md`
- **解析逻辑**: 使用 `gray-matter` 解析 Frontmatter，`react-markdown` 渲染正文
- **标签分类**: 支持，在 Frontmatter 中定义 tags 数组

```markdown
---
title: "如何利用 AI 提升分镜效率"
date: "2024-05-20"
tags: ["AI工具", "策划"]
summary: "本文探讨如何利用 AI 工具优化分镜创作流程..."
---

Markdown 正文内容...
```

---

## 3. 核心逻辑实现 (Core Logic)

### 3.1 标签过滤逻辑

在 `ProjectGrid.tsx` 中实现：

- 使用 `useState` 管理 `activeTag`。
- 点击标签时，执行 `projects.filter(p => p.category === activeTag)`。
- **关键**: 必须配合 `framer-motion` 的 `layout` 属性，实现卡片位移的平滑动画。

```tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const filteredProjects = activeTag 
    ? projects.filter(p => p.category === activeTag) 
    : projects;

  return (
    <div>
      {/* Filter Tags */}
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Project Card */}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
```

### 3.2 静态路由兼容

由于 GitHub Pages 不支持真正的服务端路由，必须配置静态导出。

- **Next Config**:

```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
};
export default nextConfig;
```

### 3.3 博客标签分类

在 `/blog` 页面实现标签筛选：

```tsx
const allTags = [...new Set(posts.flatMap(p => p.tags))];

const filteredPosts = selectedTag 
  ? posts.filter(p => p.tags.includes(selectedTag)) 
  : posts;
```

---

## 4. 响应式设计实现

### 4.1 Tailwind 断点配置

```javascript
// tailwind.config.ts
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
}
```

### 4.2 作品网格响应式

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map(project => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>
```

### 4.3 移动端导航 (Hamburger Menu)

```tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      {/* Desktop Nav */}
      <div className="hidden md:flex">
        {/* Nav Links */}
      </div>
      
      {/* Mobile Hamburger */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Icon */}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            {/* Mobile Menu Links */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
```

---

## 5. SEO 配置

### 5.1 Metadata 配置

```tsx
// src/app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: '名字 | 编剧 & AI 策划',
    template: '%s | 名字',
  },
  description: '用 AI 赋能叙事的短视频编导 & 内容策划，专注于 AI 驱动的创意内容制作。',
  keywords: ['短视频', 'AI策划', '编导', '内容创作', '数字人'],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title: '名字 | 编剧 & AI 策划',
    description: '用 AI 赋能叙事的短视频编导 & 内容策划',
    siteName: '个人作品集',
  },
  twitter: {
    card: 'summary_large_image',
    title: '名字 | 编剧 & AI 策划',
    description: '用 AI 赋能叙事的短视频编导 & 内容策划',
  },
};
```

### 5.2 页面级 Metadata

```tsx
// src/app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.summary,
  };
}
```

---

## 6. 部署工作流 (Deployment Workflow)

### 6.1 GitHub Actions 配置

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

---

## 7. 项目目录结构

```
personal-website/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── content/
│   └── posts/
│       └── *.md
├── public/
│   ├── images/
│   ├── resume.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── work/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── about/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── BlogList.tsx
│   │   ├── Timeline.tsx
│   │   └── TagCloud.tsx
│   ├── config/
│   │   └── projects.ts
│   └── lib/
│       ├── posts.ts
│       └── utils.ts
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 8. 简历下载实现

```tsx
// Hero 区域按钮
<a 
  href="/resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-slate-100 text-slate-900 hover:bg-slate-200 px-8 py-3 rounded-full transition-all"
>
  下载简历
</a>
```

PDF 文件存放在 `/public/resume.pdf`，点击后直接在新标签页打开。
