"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { exams } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

import "swiper/css";

export default function ExamCarousel() {
  return (
    <section id="exams" data-theme="light" className="py-section-mobile md:py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Exams We Cover"
          title="Comprehensive Exam Preparation"
          subtitle="Expert coaching for India's most competitive examinations with tailored curriculum and proven methodologies."
        />
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={600}
          loop
          className="!px-4 sm:!px-6 lg:!px-8"
        >
          {exams.map((exam, index) => (
            <SwiperSlide key={exam.id} className="!w-[280px] md:!w-[320px]">
              <motion.a
                href={exam.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group block"
              >
                <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 h-full border border-gray-100">
                  {/* Icon circle */}
                  <div className="w-16 h-16 rounded-xl bg-deep-blue flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {exam.icon}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-deep-blue mb-1">
                    {exam.name}
                  </h3>
                  <p className="text-xs text-slate font-medium mb-4 uppercase tracking-wider">
                    {exam.fullName}
                  </p>
                  <p className="text-slate text-sm leading-relaxed mb-6">
                    {exam.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-electric font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Explore Program
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}