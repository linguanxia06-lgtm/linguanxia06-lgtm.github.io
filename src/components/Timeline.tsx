interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l-2 border-slate-200 pl-6 ml-4">
      {items.map((item, index) => (
        <div key={index} className="mb-8 last:mb-0 relative">
          <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-slate-900" />
          <div className="pl-2">
            <span className="text-sm text-slate-400 mb-1 block">
              {item.period}
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="text-slate-500 mb-2">{item.company}</p>
            <p className="text-slate-600 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
