# UI 设计规范文档 (UI Design Spec)

## 1. 页面布局示意图 (Wireframes)

### 1.1 首页 (Home / Index) - 桌面端

```
+-----------------------------------------------------------+
| [Name/Logo]          Works   Blog   About   [GitHub Icon] |  <-- Navbar (Glassmorphism)
+-----------------------------------------------------------+
|                                                           |
|                H1: 用 AI 赋能叙事的                         |
|                    短视频编导 & 内容策划                    |  <-- Hero Section (Centered)
|                                                           |
|             [ 查看作品 ]       [ 下载简历 ]                |  <-- CTA Buttons
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|                    --- Selected Works ---                 |
|                                                           |
|    [ All ]  [ AI Strategy ]  [ Directing ]  [ Creative ]  <-- Filter Tags
|                                                           |
|  +-------------------+    +-------------------+           |
|  |   Thumbnail 1     |    |   Thumbnail 2     |           |
|  |   (16:9 Aspect)   |    |   (16:9 Aspect)   |           |  <-- Project Grid (3 cols)
|  |                   |    |                   |           |
|  | Title / Metrics   |    | Title / Metrics   |           |
|  +-------------------+    +-------------------+           |
|                                                           |
+-----------------------------------------------------------+
```

### 1.2 首页 (Home / Index) - 移动端

```
+---------------------------+
| [Logo]          [≡ Menu] |  <-- Hamburger Menu
+---------------------------+
|                           |
|      用 AI 赋能叙事的      |
|   短视频编导 & 内容策划    |  <-- Hero (Smaller Text)
|                           |
|   [ 查看作品 ]            |
|   [ 下载简历 ]            |  <-- Stacked Buttons
|                           |
+---------------------------+
|                           |
|   --- Selected Works ---  |
|                           |
|   [ All ] [ AI ] [ Dir ]  |  <-- Filter Tags (Scrollable)
|                           |
|  +---------------------+  |
|  |    Thumbnail 1      |  |
|  |    (16:9 Aspect)    |  |  <-- Single Column
|  |    Title / Metrics  |  |
|  +---------------------+  |
|                           |
|  +---------------------+  |
|  |    Thumbnail 2      |  |
|  +---------------------+  |
|                           |
+---------------------------+
```

### 1.3 作品集页面 (Work Page)

```
+-----------------------------------------------------------+
| [Name/Logo]                                     [Back Home]|
+-----------------------------------------------------------+
|                                                           |
|  Works                                                    |  <-- Page Title
|                                                           |
|  [ All ]  [ AI Strategy ]  [ Directing ]  [ Creative ]    <-- Filter Tags
|                                                           |
|  +-------------------+  +-------------------+  +----------+
|  |   Thumbnail       |  |   Thumbnail       |  | Thumb... |
|  |   (16:9)          |  |   (16:9)          |  |          |
|  | Title / Metrics   |  | Title / Metrics   |  |          |
|  +-------------------+  +-------------------+  +----------+
|                                                           |
|                    [ Load More ]                          |  <-- Load More Button
|                                                           |
+-----------------------------------------------------------+
```

### 1.4 博客列表页 (Blog List)

```
+-----------------------------------------------------------+
| [Name/Logo]                                     [Back Home]|
+-----------------------------------------------------------+
|                                                           |
|  Writing & Insights                                       |  <-- Page Title
|                                                           |
|  [ All ]  [ AI工具 ]  [ 策划 ]  [ 思考 ]                   <-- Tag Filters
|                                                           |
|  2024-05-20   如何利用 AI 提升分镜效率 ........ [AI]       |
|  2024-04-12   短视频算法逻辑拆解 .............. [Strategy] |  <-- List Item (Minimal)
|  2024-03-05   关于内容创作的终极思考 .......... [Thoughts] |
|                                                           |
+-----------------------------------------------------------+
```

### 1.5 文章详情页 (Blog Post)

```
+-----------------------------------------------------------+
| [Name/Logo]                                     [Back]     |
+-----------------------------------------------------------+
|                                                           |
|                    2024-05-20                             |
|                                                           |
|              如何利用 AI 提升分镜效率                       |  <-- Title
|                                                           |
|              [ AI工具 ]  [ 策划 ]                          |  <-- Tags
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|  正文内容...                                              |
|                                                           |
|  ```代码块```                                             |
|                                                           |
|  更多正文...                                              |
|                                                           |
+-----------------------------------------------------------+
```

### 1.6 About 页面 (关于/简历)

```
+-----------------------------------------------------------+
| [Name/Logo]                                     [Back Home]|
+-----------------------------------------------------------+
|                                                           |
|  About                                                    |  <-- Page Title
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|  [ 头像照片 ]                                              |
|                                                           |
|  个人简介                                                 |  <-- Section 1
|  -----------------                                        |
|  用 AI 赋能叙事的短视频编导 & 内容策划...                  |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|  工作经历                                                 |  <-- Section 2 (Timeline)
|  -----------------                                        |
|                                                           |
|  ●──── 2024 - 至今                                        |
|  │    某公司 | 高级内容策划                                |
|  │    - 负责AI数字人短视频项目...                          |
|  │                                                        |
|  ●──── 2022 - 2024                                        |
|       某公司 | 视频编导                                    |
|       - 主导多个爆款短视频策划...                          |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|  AI 工具栈                                                |  <-- Section 3 (Tag Cloud)
|  -----------------                                        |
|                                                           |
|  [ Midjourney ]  [ ChatGPT ]  [ HeyGen ]                  |
|  [ Runway ]  [ Stable Diffusion ]  [ Claude ]             |
|  [ 剪映 ]  [ D-ID ]  [ ElevenLabs ]                       |
|                                                           |
+-----------------------------------------------------------+
```

---

## 2. 设计细节与 Tailwind 样式定义 (Style Tokens)

### 2.1 核心风格 (The "Apple" Look)

- **背景**: `bg-[#FFFFFF]` (纯白)
- **字体**: `font-sans` (优先使用 SF Pro, Inter 或 萍方)
- **间距**: 模块间距使用 `py-24` 或 `py-32`，保持呼吸感。

### 2.2 导航栏 (Navbar)

- **样式**: `sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md`
- **交互**: 导航链接 `text-slate-500 hover:text-slate-900 transition-colors`
- **移动端**: Hamburger Menu，点击展开/收起动画

### 2.3 Hero 区域

- **标题**: `text-5xl md:text-7xl font-bold tracking-tight text-slate-900`
- **按钮 (Primary)**: `bg-slate-900 text-white hover:bg-slate-800 px-8 py-3 rounded-full transition-all`
- **按钮 (Secondary)**: `bg-slate-100 text-slate-900 hover:bg-slate-200 px-8 py-3 rounded-full transition-all`

### 2.4 作品卡片 (Work Card)

- **容器**: `group overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all hover:shadow-2xl`
- **封面图**: `aspect-video object-cover transition-transform duration-500 group-hover:scale-105`
- **标签**: `inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600`

### 2.5 时间轴 (Timeline)

- **容器**: `relative border-l-2 border-slate-200 pl-6`
- **节点**: `absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-900`
- **内容**: `mb-8 last:mb-0`

### 2.6 标签云 (Tag Cloud)

- **容器**: `flex flex-wrap gap-3`
- **标签**: `px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors cursor-default`

---

## 3. 交互逻辑 (Micro-interactions)

### 3.1 标签过滤 (Framer Motion)

- 使用 `<AnimatePresence>` 包装作品网格。
- 点击 Tag 时，不匹配的项目淡出 (`opacity: 0`)，匹配项目平滑重排 (`layout` prop)。

### 3.2 外链跳转

- 作品卡片点击后，通过 `window.open(url, '_blank')` 弹出。
- 鼠标悬浮卡片时，右上角显示 `ArrowUpRight` 图标。

### 3.3 移动端菜单

- 点击汉堡图标，菜单从顶部滑入。
- 使用 `AnimatePresence` 实现平滑的展开/收起动画。

### 3.4 加载更多

- 点击"加载更多"按钮，显示下一批作品。
- 新作品使用淡入动画进入视图。

---

## 4. 响应式断点

| 断点 | 宽度 | 作品网格 | 导航栏 |
|------|------|----------|--------|
| Mobile | < 768px | 1 列 | Hamburger Menu |
| Tablet | ≥ 768px | 2 列 | 水平导航 |
| Desktop | ≥ 1024px | 3 列 | 水平导航 |

---

## 5. 图标规范

使用 `lucide-react` 图标库：

| 场景 | 图标 |
|------|------|
| 外链跳转 | `ArrowUpRight` |
| GitHub | `Github` |
| 菜单 | `Menu` / `X` |
| 返回 | `ArrowLeft` |
| 日历 | `Calendar` |
| 标签 | `Tag` |

---

## 6. 动画配置

```typescript
// 推荐动画配置
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```
