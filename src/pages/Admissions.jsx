

import { Link } from "react-router-dom";
import { ArrowRight, Info, MessageCircle } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import FaqSection from "../components/common/FaqSection";
import { siteInfo } from "../data/site";
import { admissionSteps } from "../data/admissionSteps";

export default function Admissions() {
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Admissions" },
  ];

  return (
    <>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        label="Admissions"
        title="Join Our College"
        description="Everything you need to know about applying to Cox's Bazar City College — from eligibility to the application process."
      />

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-primary">
              Admission Overview
            </h2>
            {/* ⚠️ PLACEHOLDER — college থেকে যাচাই করা তথ্য এলে বদলাবে */}
            <p className="mt-6 leading-relaxed text-ink/70">
              Cox's Bazar City College offers admission to Intermediate,
              Honours, Degree, and Professional programs every academic
              session. Admission notices with exact dates, eligibility, and
              application procedures are published on our Notice Board as
              soon as they are announced.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              Students are advised to follow the notices regularly and
              contact the college office for any admission-related
              questions.
            </p>

            <Link
              to="/notices"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              View Admission Notices
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Honest info box */}
          <div className="flex flex-col justify-center rounded-lg border border-ink/10 bg-white p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  Admission details
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Exact admission dates, eligibility requirements, and fees
                  vary by program and session. Always confirm details from
                  the official admission notice or the college office.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  Office: {siteInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              How to Apply
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">
              Four simple steps
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {admissionSteps.map((step, index) => (
              <div key={step.id} className="relative text-center sm:text-left">
                {/* Connecting line — প্রথমটা বাদে, শুধু lg */}
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-full top-6 hidden h-px w-6 bg-ink/15 lg:block"
                  />
                )}

                <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                  Still have questions?
                </h2>
                <p className="mt-1 text-white/80">
                  Contact the college office — we're happy to help.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
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
