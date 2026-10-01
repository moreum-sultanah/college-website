
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { programs } from "../../data/programs";

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Briefcase: Briefcase,
};

export default function AcademicPrograms() {
  return (
    <section className="bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-3xl font-semibold text-primary">
            Academic Programs
          </h2>
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            View All Programs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {programs.map((program) => {
            const Icon = iconMap[program.icon];

            return (
              <Link
                key={program.id}
                to={`/academics/${program.id}`}
                className="group rounded-lg border border-ink/10 bg-white p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink group-hover:text-primary">
                  {program.name}
                </h3>
                <p className="mt-2 text-sm text-ink/70">
                  {program.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}