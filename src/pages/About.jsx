
import PageHeader from "../components/common/PageHeader";
import HistorySection from "../components/about/HistorySection";
import FoundersGrid from "../components/about/FoundersGrid";
import MissionVision from "../components/about/MissionVision";
import PrincipalMessage from "../components/about/PrincipalMessage";
import campusImg from "../assets/campus.jpeg";
import { siteInfo } from "../data/site";

const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "About" },
];

export default function About() {
  return (
    <>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        label="About the College"
        title="Our Story & Mission"
        description="Get to know Cox's Bazar City College — our story, our values, and the people behind it."
      />

      {/* Intro: campus image + text */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <img
            src={campusImg}
            alt="Campus of Cox's Bazar City College"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <div>
            {/* ⚠️ PLACEHOLDER TEXT — তোমার নিজের ভাষায় লিখে বদলাবে */}
            <p className="text-lg leading-relaxed text-ink/70">
              Cox's Bazar City College is a higher secondary and degree
              college in Cox's Bazar, Bangladesh.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              {siteInfo.tagline} We believe education should build strong
              foundations — for studies, for character, and for the future
              our students will create.
            </p>
          </div>
        </div>
      </section>

      <HistorySection />
      <FoundersGrid />
      <MissionVision />
      <PrincipalMessage />
    </>
  );
}