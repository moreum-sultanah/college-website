

import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { programs } from "../data/programs";

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Briefcase: Briefcase,
};

function ProgramTags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Academics() {
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Academics" },
  ];

  return (
    <>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        label="Academics"
        title="Programs We Offer"
        description="From higher secondary to honours and professional programs — explore the academic paths at Cox's Bazar City College."
      />

      {/* Program cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((program) => {
            const Icon = iconMap[program.icon];
            const tags =
              program.groups ||
              program.subjects ||
              [
                ...(program.degreeSubjects || []),
                ...(program.professionalSubjects || []),
              ];

            return (
              <Link
                key={program.id}
                to={`/academics/${program.id}`}
                className="group flex flex-col rounded-lg border border-ink/10 bg-white p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-heading text-xl font-semibold text-ink group-hover:text-primary">
                  {program.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                  {program.description}
                </p>
                <ProgramTags tags={tags} />
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View Program
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg border border-ink/10 bg-white p-6 text-center sm:flex-row sm:justify-between sm:p-8 sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-heading text-lg font-semibold text-ink">
                Have questions about admissions?
              </p>
              <p className="text-sm text-ink/70">
                We're here to help you choose the right program.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}