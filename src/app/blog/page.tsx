import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getPosts();

  const allTags = [...new Set(posts.flatMap((p) => p.tags))];

  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Writing & Insights
      </h1>
      <p className="text-slate-500 mb-12">
        思考、经验与行业洞察
      </p>

      <div className="flex flex-wrap gap-3 mb-12">
        <span className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium">
          All
        </span>
        {allTags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <span className="text-sm text-slate-400 shrink-0">
                {post.date}
              </span>
              <h2 className="text-lg text-slate-900 group-hover:text-slate-600 transition-colors">
                {post.title}
              </h2>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-slate-400"
                  >
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
