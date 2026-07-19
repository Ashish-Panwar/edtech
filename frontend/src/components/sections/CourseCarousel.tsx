"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { courses } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import "swiper/css";

export default function CourseCarousel() {
  return (
    <section id="courses" data-theme="light" className="bg-bg-alt py-section-mobile md:py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Our Programs"
          title="Flagship Courses"
          subtitle="Structured programs designed by industry experts to maximize your exam performance with comprehensive coverage and personalized attention."
        />
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={700}
          loop
          className="!px-4 sm:!px-6 lg:!px-8"
        >
          {courses.map((course, index) => (
            <SwiperSlide
              key={course.id}
              className="!w-[300px] md:!w-[350px] lg:!w-[calc(25%-18px)]"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 h-full border border-gray-100 flex flex-col"
              >
                {/* Card header */}
                <div className="gradient-deep-blue rounded-t-2xl px-6 py-5">
                  <span className="text-electric font-semibold text-xs uppercase tracking-widest">
                    {course.exam}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mt-1">
                    {course.title}
                  </h3>
                  <div className="flex gap-4 mt-3">
                    <span className="text-white/60 text-xs flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span className="text-white/60 text-xs flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {course.mode}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {course.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-deep-blue/70">
                        <svg className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Button variant="primary" size="sm" href={course.href} className="w-full">
                    View Details
                  </Button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}