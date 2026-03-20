export interface Project {
  id: string;
  title: string;
  category: "知识付费" | "电商广告" | "AIGC";
  cover: string;
  link: string;
  metrics: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "知识付费MCN机构IP编导",
    category: "知识付费",
    cover: "/images/work1.jpg",
    link: "https://www.douyin.com/user/MS4wLjABAAAAXVyPXLuoQ3s1S6z5JjTvKRnCXV1yzz5gDd8__hhDT7fkpzuKU6FhGml8NYok-Cq1?from_tab_name=main",
    metrics: ["单月总播放量4000w+", "单月总带货量60w+"],
    tags: ["商业", "家庭教育", "大健康", "国学", "女性成长"],
  },
  {
    id: "2",
    title: "电商品牌转转广告编导",
    category: "电商广告",
    cover: "/images/work2.jpg",
    link: "https://www.douyin.com/user/MS4wLjABAAAAIljoMnBEcICfpIwq_K9QyLy2xJ0XW_zWhfrh1oy-w5E?from_tab_name=main",
    metrics: ["月GMV＞1万", "单条视频GPM＞300"],
    tags: ["定制广告", "内容营销", "编拍"],
  },
  {
    id: "3",
    title: "AIGC内容创作探索",
    category: "AIGC",
    cover: "/images/work3.jpg",
    link: "https://www.douyin.com/user/self?from_tab_name=main&showTab=post",
    metrics: ["用AI一键生成视频"],
    tags: ["Coze工作流", "批量生成", "短视频"],
  },
];

export const categories = [
  { key: "all", label: "All" },
  { key: "知识付费", label: "知识付费" },
  { key: "电商广告", label: "电商广告" },
  { key: "AIGC", label: "AIGC" },
];
