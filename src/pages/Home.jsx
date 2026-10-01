
import Hero from "../components/home/Hero";
import LatestNotices from "../components/home/LatestNotices";
import AcademicPrograms from "../components/home/AcademicPrograms";
import AboutSection from "../components/home/AboutSection";
import StatsSection from "../components/home/StatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestNotices />
      <AcademicPrograms />
      <AboutSection />
      <StatsSection />
      {/* বাকি: Admission CTA → Footer */}
    </>
  );
}