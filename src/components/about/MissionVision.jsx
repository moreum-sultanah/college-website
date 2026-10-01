
import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Mission */}
        <div className="rounded-lg border border-ink/10 bg-white p-6 sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
            Our Mission
          </h3>
          {/* ⚠️ PLACEHOLDER — college থেকে আসল mission text নাও */}
          <p className="mt-2 leading-relaxed text-ink/70">
            To provide accessible, quality education that prepares students
            for higher studies, meaningful careers, and responsible
            citizenship.
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-lg border border-ink/10 bg-white p-6 sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Eye className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
            Our Vision
          </h3>
          {/* ⚠️ PLACEHOLDER — college থেকে আসল vision text নাও */}
          <p className="mt-2 leading-relaxed text-ink/70">
            To be a leading educational institution in the region, recognized
            for academic excellence, integrity, and student development.
          </p>
        </div>
      </div>
    </section>
  );
}