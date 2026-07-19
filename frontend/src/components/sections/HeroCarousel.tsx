"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/content";
import Button from "@/components/ui/Button";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.autoplay.start();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-navy z-0" />

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/3 rounded-full blur-2xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212, 160, 23, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 160, 23, 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={1000}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} !bg-gold !opacity-40 !w-3 !h-3 [&.swiper-pagination-bullet-active]:!opacity-100 !transition-all !duration-300"></span>`,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="hero-swiper h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="min-h-[calc(100vh-80px)] flex items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto w-full pt-24 pb-16">
                  <div className="max-w-4xl">
                    {/* Subtitle */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        activeIndex === index
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <span className="inline-block text-gold font-semibold text-sm md:text-base uppercase tracking-[0.25em] mb-6 border border-gold/30 rounded-full px-5 py-2">
                        {slide.subtitle}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={
                        activeIndex === index
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 40 }
                      }
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        activeIndex === index
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.6, delay: 0.35 }}
                      className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        activeIndex === index
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex flex-wrap gap-4"
                    >
                      <Button variant="primary" size="lg" href={slide.ctaPrimary.href}>
                        {slide.ctaPrimary.text}
                      </Button>
                      <Button variant="outline" size="lg" href={slide.ctaSecondary.href}>
                        {slide.ctaSecondary.text}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}