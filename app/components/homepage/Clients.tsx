"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    logo: "/assets/logo.jpg",
    name: "Serum Institute",
    content:
      "We appreciate the efforts taken by the team in delivering our product on time with precision and strong regulatory compliance.",
  },
  {
    logo: "/assets/logo.jpg",
    name: "Dr. Reddy’s",
    content:
      "Consistent support and 100% delivery commitment reflect their operational excellence and reliability.",
  },
  {
    logo: "/assets/logo.jpg",
    name: "1mg",
    content:
      "Transparency, commitment, and quality make them a trusted long-term manufacturing partner.",
  },
  {
    logo: "/assets/logo.jpg",
    name: "Abbott",
    content:
      "Their scalability and regulatory discipline strengthen our global product strategy.",
  },
];

export default function ClientTestimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
  };

  const prev = () => {
    setIndex((prev) =>
      prev - 2 < 0 ? Math.max(testimonials.length - 2, 0) : prev - 2,
    );
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = testimonials.slice(index, index + 2);

  return (
    <section className="py-24 bg-linear-to-b from-(--secondary) to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-(--primary)">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Long-term collaborations and consistent delivery standards
              demonstrate our commitment to quality, compliance, and operational
              excellence.
            </p>
          </div>

          {/* Arrows Top Right */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white shadow-md text-(--primary) hover:bg-(--primary) hover:text-white transition"
            >
              ❮
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white shadow-md text-(--primary) hover:bg-(--primary) hover:text-white transition"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {visibleCards.map((item, i) => (
            <motion.div
              key={index + i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-3xl p-10 backdrop-blur-xl bg-white/50 border border-white/30 shadow-xl"
            >
              {/* Logo */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h4 className="font-semibold text-(--primary)">{item.name}</h4>
              </div>

              {/* Content */}
              <p className="mt-6 text-gray-700 leading-relaxed">
                “{item.content}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
