

// Dummy notices — তোমার দেওয়া বাস্তবতা অনুযায়ী:
// NU-র খবর (result/routine/form fill-up) + College/Board-এর (HSC/admission)।
// ⚠️ সব তারিখ/বিষয় PLACEHOLDER — আসল notice এলে বদলাবে।
// Phase 20-তে এই file-এর কাজ শেষ — Supabase থেকে data আসবে।

export const notices = [
  {
    id: 1,
    slug: "degree-1st-year-result-published",
    title: "Degree (Pass) 1st Year Examination Result Published",
    category: "Result",
    short_description:
      "The results of the Degree (Pass) 1st Year examination have been published. Check your result on the National University website.",
    published_at: "2025-10-05",
    is_new: true,
  },
  {
    id: 2,
    slug: "honours-4th-year-form-fill-up",
    title: "Honours 4th Year Form Fill-Up Notice",
    category: "Examination",
    short_description:
      "Form fill-up for the Honours 4th Year examination begins soon. Contact the college office with required documents.",
    published_at: "2025-09-28",
    is_new: true,
  },
  {
    id: 3,
    slug: "degree-1st-year-exam-routine",
    title: "Degree 1st Year Examination Routine",
    category: "Examination",
    short_description:
      "The routine for the Degree 1st Year examination has been published by the National University.",
    published_at: "2025-09-20",
    is_new: false,
  },
  {
    id: 4,
    slug: "hsc-test-exam-routine",
    title: "HSC Test Examination Routine",
    category: "Examination",
    short_description:
      "The test examination routine for HSC candidates has been published by the college.",
    published_at: "2025-09-10",
    is_new: false,
  },
  {
    id: 5,
    slug: "admission-open-2025-26",
    title: "Admissions Open for 2025-26 Session",
    category: "Admission",
    short_description:
      "Application forms are now available for Intermediate and Honours programs.",
    published_at: "2025-08-24",
    is_new: false,
  },
  {
    id: 6,
    slug: "hsc-classes-resume-notice",
    title: "HSC Classes Resume After Holiday",
    category: "General",
    short_description:
      "Regular classes for HSC candidates will resume as per the normal routine.",
    published_at: "2025-08-15",
    is_new: false,
  },
];