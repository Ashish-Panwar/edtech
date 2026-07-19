"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { successStories } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

import "swiper/css";
import "swiper/css/pagination";

export default function SuccessCarousel() {
  return (
    <section id="results" className="bg-bg-alt py-section-mobile md:py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Success Stories"
          title="Results That Speak Volumes"
          subtitle="Every rank, every story is a testament to our commitment to excellence. Here are some of our proudest achievements."
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={700}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} !bg-gold !opacity-40 !w-3 !h-3 [&.swiper-pagination-bullet-active]:!opacity-100 !transition-all !duration-300"></span>`,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="!pb-14"
        >
          {successStories.map((story, index) => (
            <SwiperSlide key={story.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 p-6 md:p-8 h-full border border-gray-100"
              >
                {/* Quote icon */}
                <svg
                  className="w-8 h-8 text-gold/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>

                {/* Quote */}
                <p className="text-navy/75 text-sm md:text-base leading-relaxed mb-6 italic">
                  &ldquo;{story.quote}&rdquo;
                </p>

                {/* Student info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white font-heading font-bold text-lg">
                    {story.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy text-lg">
                      {story.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-gold font-semibold text-sm">
                        {story.rank}
                      </span>
                      <span className="text-slate text-xs">•</span>
                      <span className="text-slate text-xs">{story.exam}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}