import SocialNav from "@/components/SocialNav";

export const metadata = {
  title: "关于我",
};

const skillCategories = [
  {
    title: "短视频编导",
    skills: ["选题策划", "脚本撰写", "摄影摄像", "灯光布景"],
  },
  {
    title: "新媒体运营",
    skills: ["秀米", "Canva", "爆款拆解", "数据分析"],
  },
  {
    title: "AIGC创作",
    skills: ["剪映", "HeyGen", "MidJourney", "Stable Diffusion"],
  },
  {
    title: "AI编程",
    skills: ["Trae", "Coze", "Cursor", "OpenClaw"],
  },
];

export default function AboutPage() {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-16 text-center">
        关于我
      </h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-slate-900 mb-12 text-center">
          技能标签
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="text-center">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
          社交媒体
        </h2>
        <SocialNav />
      </section>
    </div>
  );
}
