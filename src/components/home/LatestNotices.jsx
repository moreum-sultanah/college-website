
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import NoticeCard from "../notices/NoticeCard";
import { notices } from "../../data/notices";

export default function LatestNotices() {
  const latest = notices.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-3xl font-semibold text-primary">
          Latest Notices
        </h2>
        <Link
          to="/notices"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
        >
          View All Notices
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {latest.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </div>
    </section>
  );
}