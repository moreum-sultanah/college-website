
export default function NoticeCard({ notice }) {
  const date = new Date(notice.published_at);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();

  return (
    <article className="flex gap-4 rounded-lg border border-ink/10 bg-white p-4 transition-shadow hover:shadow-sm sm:p-5">
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/5">
        <span className="text-xs font-semibold uppercase text-primary/70">
          {month}
        </span>
        <span className="font-heading text-xl font-semibold text-primary">
          {day}
        </span>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-heading text-base font-semibold text-ink transition-colors group-hover:text-primary sm:text-lg">
            {notice.title}
          </h3>
          {notice.is_new && (
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
              New
            </span>
          )}
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-ink/70">
          {notice.short_description}
        </p>
      </div>
    </article>
  );
}