
import { GraduationCap, User, Users } from "lucide-react";
import { stats } from "../../data/stats";

const iconMap = {
  Users: Users,
  GraduationCap: GraduationCap,
  User: User,
};

export default function StatsSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Heading — label দুপাশে সরু রেখা সহ */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              At a Glance
            </p>
            <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
          </div>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
            College at a Glance
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];

            return (
              <div
                key={stat.id}
                className={`text-center ${
                  index > 0 ? "sm:border-l sm:border-white/15" : ""
                }`}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="mt-4 font-heading text-5xl font-semibold text-white sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/70">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}