

import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import { programs } from "../data/programs";

// ৩ রকম data-shape কে ১ রকম shape-এ নেয় — যাতে UI সহজে আঁকা যায়
function getSubjectSections(program) {
  if (program.groups) {
    return [{ title: "Groups", items: program.groups }];
  }
  if (program.subjects) {
    return [{ title: "Subjects", items: program.subjects }];
  }

  const sections = [];
  if (program.degreeSubjects) {
    sections.push({
      title: "Degree Programs",
      items: program.degreeSubjects,
    });
  }
  if (program.professionalSubjects) {
    sections.push({
      title: "Professional Programs",
      items: program.professionalSubjects,
    });
  }
  return sections;
}

export default function ProgramPage() {
  const { programId } = useParams();
  const program = programs.find((p) => p.id === programId);

  // Guard clause: URL-এ ভুল id এলে (যেমন /academics/xyz) এখানেই থামো
  if (!program) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="font-heading text-5xl font-semibold text-primary">404</p>
        <h1 className="mt-3 font-heading text-2xl font-semibold text-ink">
          Program not found
        </h1>
        <p className="mt-2 text-ink/70">
          This program does not exist or has been moved.
        </p>
                    <Link
              to="/academics/professional"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              View Professional Programs
              <ArrowRight className="h-4 w-4" />
            </Link>
      </section>
    );
  }

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Academics", to: "/academics" },
    { label: program.name },
  ];

  const subjectSections = getSubjectSections(program);

  return (
    <>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        label="Academic Program"
        title={program.name}
        description={program.description}
      />

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-primary">
          Overview
        </h2>
        <div className="mt-6 max-w-3xl">
          {program.overview.map((paragraph) => (
            <p
              key={paragraph}
              className="leading-relaxed text-ink/70"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Subjects / Groups */}
      <section className="bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-primary">
            Subjects & Groups
          </h2>

          {subjectSections.map((section) => (
            <div key={section.title} className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink">
                {section.title}
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-ink/10 bg-white px-5 py-4"
                  >
                    <p className="font-medium text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility + Duration */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-ink/10 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">
                Eligibility
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {program.eligibility}
            </p>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">
                Duration
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {program.duration}
            </p>
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-ink/10 bg-white p-6">
          <h3 className="font-heading text-lg font-semibold text-ink">
            Important Notes
          </h3>
          <ul className="mt-4 space-y-2">
            {program.notes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2.5 text-sm text-ink/70"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-primary p-8 text-center sm:p-10">
          <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
            Interested in this program?
          </h2>
          <p className="mt-2 text-white/80">
            Explore admission details or reach out with your questions.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              View Admissions
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}