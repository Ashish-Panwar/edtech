"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const resources = [
  {
    title: "UPSC Preparation Guide 2026",
    category: "Study Material",
    description:
      "Comprehensive guide covering syllabus, strategy, book recommendations, and tips from toppers.",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "JEE Advanced Problem Bank",
    category: "Practice",
    description:
      "500+ curated problems with detailed solutions across physics, chemistry, and mathematics.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "NEET Biology Compendium",
    category: "Study Material",
    description:
      "Complete NCERT-based biology notes with diagrams, tables, and memory tricks.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Weekly Current Affairs Digest",
    category: "Blog",
    description:
      "Stay updated with weekly current affairs summaries curated for UPSC and competitive exams.",
    color: "from-purple-500 to-violet-600",
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" data-theme="light" className="py-section-mobile md:py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Resources"
          title="Free Learning Resources"
          subtitle="Access our curated collection of study materials, guides, and practice problems to boost your preparation."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100 p-6 h-full flex flex-col">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-electric uppercase tracking-wider mb-2">
                  {resource.category}
                </span>
                <h3 className="font-heading font-bold text-deep-blue text-lg mb-2">
                  {resource.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-4 flex-1">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-deep-blue font-semibold text-sm group-hover:gap-2.5 transition-all duration-300">
                  Access Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}