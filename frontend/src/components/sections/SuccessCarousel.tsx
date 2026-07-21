"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonialsApi } from "@/lib/api";

import "swiper/css";

export default function SuccessCarousel() {
  const [testimonials, setTestimonials] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await testimonialsApi.getAll();
        setTestimonials(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
        setError("Failed to load success stories");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section id="results" className="pt-[80px] pb-[80px] md:pb-[120px] bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Results"
            title="Loading success stories..."
            subtitle=""
          />
        </div>
        <div className="flex justify-center items-center h-[200px]">
          <div className="animate-pulse h-12 w-56 bg-electric/20 rounded-md" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="results" className="pt-[80px] pb-[80px] md:pb-[120px] bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Results"
            title="Error loading success stories"
            subtitle={error}
          />
        </div>
      </section>
    );
  }

  return (
    <section id="results" className="pt-[80px] pb-[80px] md:pb-[120px] bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Our Results"
          title="Proven Track Record of Excellence"
          subtitle="Year after year, our students achieve outstanding results. Join the ranks of toppers who trusted Premium Coaching Academy for their preparation."
        />
      </div>

      <div className="relative mt-12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView="auto"
          grabCursor
          watchSlidesProgress
          centeredSlides
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={600}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!px-4 sm:!px-6 lg:!px-8"
        >
          {testimonials.map((t: any) => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100"
              >
                {/* Quote icon */}
                <div className="flex items-center justify-start mb-5">
                  <div className="w-8 h-8 flex items-center justify-center bg-electric/10 rounded-full text-electric">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14a3 3 0 115.5-3 3.001 3.001 0 01-5.5 3zM3 6.5a3 3 0 116 0 3 3 0 01-6 0zM19 8a5.5 5.5 0 01-11 0v5.5a5.5 5.5 0 0111 0V8z" />
                    </svg>
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-deep-blue/80 text-lg md:text-xl leading-relaxed mb-6 italic relative pl-4">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Student info */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-navy to-navy-light rounded-full text-white text-sm font-medium">
                    {t.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-deep-blue">{t.name}</p>
                    <p className="text-sm text-deep-blue/60 flex items-center gap-2">
                      <span>{t.rank}</span>
                      <span className="mx-1">•</span>
                      <span>{t.exam}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Statistics */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* We'll fetch stats separately or leave as is for now - but we can also fetch from API */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100">
          <div className="flex items-center justify-center w-12 h-12 mb-3 bg-electric/10 rounded-full text-electric">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-deep-blue">
              25000+
            </p>
            <p className="text-deep-blue/60">
              Students Trained
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100">
          <div className="flex items-center justify-center w-12 h-12 mb-3 bg-electric/10 rounded-full text-electric">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-deep-blue">
              500+
            </p>
            <p className="text-deep-blue/60">
              Top 100 Ranks
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100">
          <div className="flex items-center justify-center w-12 h-12 mb-3 bg-electric/10 rounded-full text-electric">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-deep-blue">
              98%
            </p>
            <p className="text-deep-blue/60">
              Selection Rate
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100">
          <div className="flex items-center justify-center w-12 h-12 mb-3 bg-electric/10 rounded-full text-electric">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-deep-blue">
              20+
            </p>
            <p className="text-deep-blue/60">
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}