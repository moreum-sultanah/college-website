

import { Link } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import NoticeCard from "../components/notices/NoticeCard";
import { notices } from "../data/notices";

export default function Notices() {
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Notices" },
  ];

  return (
    <>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        label="Notices"
        title="Notice Board"
        description="Exam routines, form fill-up dates, results, and official announcements — all in one place."
      />

      {/* Notice list */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          {notices.map((notice) => (
            <Link key={notice.slug} to={`/notices/${notice.slug}`} className="group">
              <NoticeCard notice={notice} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}