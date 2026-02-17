"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const statsTop = [
  { value: 12, suffix: "+", label: "Advanced Healthcare Facilities" },
  { value: 900, suffix: "+", label: "Regulatory Approvals" },
  { value: 120, suffix: "+", label: "Patents & Innovations" },
  { value: 60, suffix: "+", label: "Countries Served" },
];

const statsBottom = [
  {
    value: 35,
    suffix: "",
    label: "Billion Units – Annual Manufacturing Capacity",
  },
  { value: 3800, suffix: "+", label: "Commercialized Products" },
  { value: 1200, suffix: "+", label: "Global Healthcare Partners" },
];

export default function AboutStatsSection() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full">
      {/* ABOUT HEADER */}
      <div className="bg-linear-to-r from-[#0E7490] via-[#0891B2] to-[#22D3EE] py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="max-w-4xl mx-auto text-base md:text-lg opacity-95">
          Eastern Healthcare is committed to advancing global health through
          innovation, quality-driven manufacturing, and trusted partnerships
          across regulated healthcare markets.
        </p>
      </div>

      {/* STATS GRID */}
      <div ref={statsRef} className="max-w-7xl mx-auto px-6 py-20">
        {/* TOP ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b pb-16">
          {statsTop.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#0E7490]">
                {isInView && <CountUp end={stat.value} duration={2} />}
                {stat.suffix}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {statsBottom.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#0E7490]">
                {isInView && <CountUp end={stat.value} duration={2} />}
                {stat.suffix}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xs mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA STRIP */}
      <div className="bg-linear-to-r from-[#0E7490] via-[#0891B2] to-[#22D3EE] py-10 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
            Partner with a trusted healthcare innovator
          </h3>
          <button className="bg-white text-[#0E7490] px-8 py-3 cursor-pointer rounded-md font-medium hover:opacity-90 transition">
            Let’s Connect
          </button>
        </div>
      </div>
    </section>
  );
}
