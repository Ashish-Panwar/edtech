"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { faculty } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

import "swiper/css";

const avatarColors = [
  "from-amber-500 to-orange-600",
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-rose-500 to-pink-600",
  "from-purple-500 to-violet-600",
  "from-cyan-500 to-blue-600",
];

export default function FacultyCarousel() {
  return (
    <section id="faculty" className="py-section-mobile md:py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Our Faculty"
          title="Learn from the Best Minds"
          subtitle="Our distinguished faculty brings decades of teaching excellence, with qualifications from India's top institutions and a passion for mentoring."
        />
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView="auto"
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          speed={600}
          loop
          className="!px-4 sm:!px-6 lg:!px-8"
        >
          {faculty.map((member, index) => (
            <SwiperSlide
              key={member.id}
              className="!w-[300px] md:!w-[350px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 h-full border border-gray-100 p-8 text-center">
                  {/* Avatar */}
                  <div
                    className={`w-24 h-24 rounded-full mx-auto mb-5 bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-3xl font-heading font-bold group-hover:scale-110 transition-transform duration-500`}
                  >
                    {member.name.charAt(0)}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-semibold text-sm mb-1">
                    {member.subject}
                  </p>
                  <p className="text-slate text-xs mb-4">
                    {member.qualification}
                  </p>

                  <div className="inline-flex items-center gap-1.5 bg-bg rounded-full px-3.5 py-1 mb-4">
                    <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-navy/60 text-xs font-medium">
                      {member.experience} experience
                    </span>
                  </div>

                  <p className="text-slate text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}