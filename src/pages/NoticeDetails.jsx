
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import { notices } from "../data/notices";

export default function NoticeDetails() {
  const { slug } = useParams();
  const notice = notices.find((n) => n.slug === slug);

  // Guard clause: ভুল slug এলে
  if (!notice) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="font-heading text-5xl font-semibold text-primary">404</p>
        <h1 className="mt-3 font-heading text-2xl font-semibold text-ink">
          Notice not found
        </h1>
        <p className="mt-2 text-ink/70">
          This notice does not exist or has been removed.
        </p>
        <Link
          to="/notices"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Back to Notices
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    );
  }

  const date = new Date(notice.published_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Related: একই category-র অন্যান্য (নিজেকে বাদ দিয়ে), সর্বোচ্চ ২টা
  const relatedNotices = notices
    .filter((n) => n.category === notice.category && n.slug !== notice.slug)
    .slice(0, 2);

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Notices", to: "/notices" },
    { label: notice.title },
  ];

  return (
    <>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        label="Notice"
        title={notice.title}
      />

      {/* Notice content */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Meta row: category + date */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {notice.category}
          </span>
          <span className="text-sm text-ink/60">Published: {formattedDate}</span>
          {notice.is_new && (
            <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
              New
            </span>
          )}
        </div>

        {/* Full content — একেকটা paragraph */}
        <div className="mt-8 space-y-4">
          {notice.content.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-ink/70">
              {paragraph}
            </p>
          ))}
        </div>

        {/* External link — Result জাতীয় */}
        {notice.externalLink && (
          <a
            href={notice.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            View Result on NU Website
            <ExternalLink className="h-4 w-4" />
          </a>
        )}

        <div className="mt-12 border-t border-ink/10 pt-6">
          <Link
            to="/notices"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            ← Back to all notices
          </Link>
        </div>
      </section>

      {/* Related notices */}
      {relatedNotices.length > 0 && (
        <section className="bg-primary/5">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-semibold text-primary">
              Related Notices
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {relatedNotices.map((related) => (
                <Link
                  key={related.slug}
                  to={`/notices/${related.slug}`}
                  className="group rounded-lg border border-ink/10 bg-white p-5 transition-colors hover:border-primary/30"
                >
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {related.category}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-ink group-hover:text-primary">
                    {related.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink/70">
                    {related.short_description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}