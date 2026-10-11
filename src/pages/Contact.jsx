

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import { siteInfo } from "../data/site";

export default function Contact() {
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Contact" },
  ];

  const contactCards = [
    {
      id: "address",
      icon: MapPin,
      title: "Address",
      lines: [siteInfo.location],
    },
    {
      id: "phone",
      icon: Phone,
      title: "Phone",
      lines: [siteInfo.phone, "During office hours"],
    },
    {
      id: "email",
      icon: Mail,
      title: "Email",
      lines: [siteInfo.email],
    },
  ];

  return (
    <>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        label="Contact"
        title="Get in Touch"
        description="Questions about admission, programs, or anything else — the college office is here to help."
      />

      {/* Contact cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="rounded-lg border border-ink/10 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-4 font-heading text-lg font-semibold text-ink">
                  {card.title}
                </h2>
                <div className="mt-2">
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-ink/70">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Office hours */}
        <div className="mt-4 flex items-start gap-4 rounded-lg border border-ink/10 bg-white p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold text-ink">
              Office Hours
            </h2>
            {/* ⚠️ PLACEHOLDER — আসল সময়সূচি যাচাই করে বদলাও */}
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              {siteInfo.officeHours}
            </p>
          </div>
        </div>

        {/* FAQ link — Admissions-এর সাথে হাত মেলানো */}
        <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-lg border border-ink/10 bg-white p-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-ink">
                Quick answers
              </h2>
              <p className="text-sm text-ink/70">
                Many common questions are already answered in our FAQ.
              </p>
            </div>
          </div>
          <Link
            to="/admissions"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            View FAQ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}