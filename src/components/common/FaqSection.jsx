

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/faqs";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          FAQ
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-primary sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink/70">
          Quick answers to the questions students and parents ask us most.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl flex flex-col gap-3">
        {faqs.map((faq) => {
          const isOpen = openFaq === faq.id;

          return (
            <div
              key={faq.id}
              className="rounded-lg border border-ink/10 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-heading text-base font-semibold text-ink">
                  {faq.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink/70">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}