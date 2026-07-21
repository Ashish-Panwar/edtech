"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { statsApi } from "@/lib/api";

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const displayValue = isInView ? value : 0;

  // Format large numbers
  const formatted =
    displayValue >= 1000
      ? Math.floor(displayValue / 1000) + "K"
      : displayValue.toString();

  return (
    <span className="number-counter font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums">
      {formatted}
      <span className="text-electric">{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  const [stats, setStats] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await statsApi.getAll();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
        setError("Failed to load statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section ref={ref} data-theme="dark" className="gradient-deep-blue relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric/3 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section-mobile md:py-section">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Placeholder cards */}
            {[1, 2, 3, 4].map((_, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center"
                >
                  <span className="number-counter font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white/20 tabular-nums">
                    --
                    <span className="text-electric/20">+</span>
                  </span>
                  <p className="text-white/70 text-sm md:text-base mt-3 font-medium tracking-wide">
                    Loading...
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section ref={ref} data-theme="dark" className="gradient-deep-blue relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric/3 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section-mobile md:py-section">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Placeholder cards */}
            {[1, 2, 3, 4].map((_, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center"
                >
                  <span className="number-counter font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white/20 tabular-nums">
                    --
                    <span className="text-electric/20">+</span>
                  </span>
                  <p className="text-white/70 text-sm md:text-base mt-3 font-medium tracking-wide">
                    Error loading stats
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} data-theme="dark" className="gradient-deep-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric/3 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section-mobile md:py-section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat: any, index: number) => {
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
                <p className="text-white/70 text-sm md:text-base mt-3 font-medium tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}