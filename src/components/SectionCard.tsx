type Props = {
  title: string;
  description: string;
  tags?: string[];
  action?: React.ReactNode;
};

export function SectionCard({ title, description, tags = [], action }: Props) {
  return (
    <div className="glass rounded-2xl p-6 shadow-glow h-full">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-2xl text-soma-foreground">{title}</h3>
          <p className="text-sm text-soma-muted mt-2 leading-relaxed">{description}</p>
        </div>
        {action}
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-soma-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
