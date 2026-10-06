
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import NoticeCard from "../components/notices/NoticeCard";
import { notices } from "../data/notices";

const categories = ["All", "Admission", "Examination", "Result", "General"];

export default function Notices() {
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Notices" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNotices = notices.filter((notice) => {
    if (activeCategory === "All") return true;
    return notice.category === activeCategory;
  });

  return (
    <>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        label="Notices"
        title="Notice Board"
        description="Exam routines, form fill-up dates, results, and official announcements — all in one place."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Category filter */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "border border-ink/10 bg-white text-ink/70 hover:border-primary/30 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="mt-6 text-sm text-ink/60">
          Showing {filteredNotices.length}{" "}
          {filteredNotices.length === 1 ? "notice" : "notices"}
        </p>

        {/* Notice list */}
        <div className="mt-4 flex flex-col gap-4">
          {filteredNotices.map((notice) => (
            <Link key={notice.slug} to={`/notices/${notice.slug}`} className="group">
              <NoticeCard notice={notice} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}