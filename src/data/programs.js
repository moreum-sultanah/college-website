

// Academic programs — ৪টা program: Intermediate, Honours, Degree, Professional।
// ⚠️ PLACEHOLDER লেখা field গুলো college থেকে যাচাই করে বদলাতে হবে!
// Subject/group add-remove শুধু এই file-এই — code ছোঁয়ার দরকার নেই।

export const programs = [
  {
    id: "intermediate",
    name: "Intermediate",
    description:
      "Higher secondary education with a strong academic foundation.",
    icon: "GraduationCap",
    // ⚠️ PLACEHOLDER — আসল group list যাচাই করে ঠিক করো
    groups: ["Science", "Humanities", "Business Studies"],
    // ⚠️ PLACEHOLDER
    overview: [
      "The Intermediate program builds the academic foundation students need for higher studies — combining classroom learning with guidance, discipline, and steady support from teachers.",
    ],
    // ⚠️ PLACEHOLDER
    eligibility:
      "As per government and college admission rules (to be confirmed).",
    // ⚠️ PLACEHOLDER
    duration: "2 years (to be confirmed)",
    // ⚠️ PLACEHOLDER
    notes: [
      "Available groups may vary by session.",
      "Admission deadlines are announced in the Notices section.",
    ],
  },
  {
    id: "honours",
    name: "Honours",
    description: "Undergraduate programs across selected disciplines.",
    icon: "BookOpen",
    // ⚠️ PLACEHOLDER — আসল subject list যাচাই করে ঠিক করো
    subjects: [
      "Bangla",
      "English",
      "Islamic History",
      "Physics",
      "Chemistry",
      "Biology",
      "Business Studies",
    ],
    affiliation: "National University, Bangladesh",
    // ⚠️ PLACEHOLDER
    overview: [
      "Honours programs offer in-depth undergraduate study in a chosen discipline — building strong theoretical understanding alongside practical skills for academic and professional growth.",
    ],
    // ⚠️ PLACEHOLDER
    eligibility:
      "As per government and college admission rules (to be confirmed).",
    // ⚠️ PLACEHOLDER
    duration: "4 years (to be confirmed)",
    // ⚠️ PLACEHOLDER
    notes: [
      "Subject availability depends on seats for each session.",
      "Admission deadlines are announced in the Notices section.",
    ],
  },
  {
    id: "degree",
    name: "Degree Programs",
    description: "Undergraduate degree programs for academic advancement.",
    icon: "BookMarked",
    // ⚠️ PLACEHOLDER — আসল pass-course list যাচাই করে ঠিক করো
    degreeSubjects: ["BA", "BSS", "BSc"],
    affiliation: "National University, Bangladesh",
    // ⚠️ PLACEHOLDER
    overview: [
      "Degree programs offer undergraduate education across traditional disciplines, building academic foundations for further study and professional life.",
    ],
    // ⚠️ PLACEHOLDER
    eligibility:
      "As per government and college admission rules (to be confirmed).",
    // ⚠️ PLACEHOLDER
    duration: "3 years (to be confirmed)",
    // ⚠️ PLACEHOLDER
    notes: ["Admission deadlines are announced in the Notices section."],
  },
    {
    id: "professional",
    name: "Professional Programs",
    description:
      "Job-focused programs like CSE, THM, and BBA, affiliated with the National University.",
    icon: "Briefcase",
    // Landing card-এর ছোট tags
    tags: ["CSE", "THM", "BBA"],
    // Detail page-এর subject cards — NU official full names
    subjects: [
      "Computer Science and Engineering (CSE)",
      "Tourism and Hospitality Management (THM)",
      "Bachelor of Business Administration (BBA)",
    ],
    affiliation: "National University, Bangladesh",
    // ⚠️ PLACEHOLDER — পরে আসল overview লিখবে
    overview: [
      "Professional programs are job-focused undergraduate degrees designed to prepare students for specific careers — combining academic study with practical, industry-relevant skills.",
    ],
    // ⚠️ PLACEHOLDER
    eligibility:
      "As per government and college admission rules (to be confirmed).",
    // ⚠️ PLACEHOLDER
    duration: "4 years (to be confirmed)",
    // ⚠️ PLACEHOLDER
    notes: [
      "Professional program details are announced before each session.",
      "Admission deadlines are announced in the Notices section.",
    ],
  },
];