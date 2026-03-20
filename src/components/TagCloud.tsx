interface TagCloudProps {
  tags: string[];
}

export default function TagCloud({ tags }: TagCloudProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors cursor-default"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
