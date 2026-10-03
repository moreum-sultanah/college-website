

// Academic programs — তোমার দেওয়া তথ্য + placeholders।
// ⚠️ যে জিনিসগুলোর পাশে PLACEHOLDER লেখা, সেগুলো college থেকে
//    যাচাই করে বদলাতে হবে। Subject গুলো add/remove করো এখানেই —
//    code কোথাও ছোঁয়ার দরকার নেই।

export const programs = [
  {
    id: "intermediate",
    name: "Intermediate",
    description:
      "Higher secondary education with a strong academic foundation.",
    icon: "GraduationCap",
    groups: [
      // ⚠️ PLACEHOLDER — আসল group list যাচাই করে ঠিক করো
      "Science",
      "Humanities",
      "Business Studies",
    ],
  },
  {
    id: "honours",
    name: "Honours",
    description: "Undergraduate programs across selected disciplines.",
    icon: "BookOpen",
    subjects: [
      // ⚠️ PLACEHOLDER — আসল subject list যাচাই করে ঠিক করো
      "Bangla",
      "English",
      "Islamic History",
      "Physics",
      "Chemistry",
      "Biology",
      "Business Studies",
    ],
  },
  {
    id: "degree",
    name: "Degree & Professional Programs",
    description:
      "Career-focused programs for academic and professional growth.",
    icon: "Briefcase",
    degreeSubjects: [
      // ⚠️ PLACEHOLDER — আসল pass-course list যাচাই করে ঠিক করো
      "BA",
      "BSS",
      "BSc",
    ],
    professionalSubjects: [
      // ✅ তোমার বলা দুটো
      "Computer Science & Engineering",
      "Tourism",
    ],
  },
];