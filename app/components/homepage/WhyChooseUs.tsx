"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const features = [
  {
    title: "Pharmaceutical",
    description:
      "Advanced pharma manufacturing backed by strict regulatory compliance, precision formulation, and scalable production capabilities for global markets.",
    link: "/pharmaceutical",
    image: "/assets/hero-image.png",
  },
  {
    title: "Nutraceutical",
    description:
      "Science-driven nutraceutical solutions combining natural ingredients and innovation to create safe, effective, and scalable wellness products.",
    link: "/nutraceutical",
    image: "/assets/hero-image.png",
  },
  {
    title: "Cosmetic",
    description:
      "Premium cosmetic and derma manufacturing powered by modern R&D, trend-driven formulations, and uncompromised quality standards.",
    link: "/cosmetic",
    image: "/assets/hero-image.png",
  },
  {
    title: "API",
    description:
      "High-purity Active Pharmaceutical Ingredients engineered with precision, regulatory excellence, and reliable global supply systems.",
    link: "/api",
    image: "/assets/hero-image.png",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // cubic-bezier
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-linear-to-b from-white to-(--secondary)">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-(--primary)">
            Why Choose Us?
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            We combine scientific excellence, regulatory precision, and scalable
            manufacturing to deliver world-class pharmaceutical, nutraceutical,
            cosmetic, and API solutions. Our commitment to innovation,
            compliance, and long-term partnerships ensures consistent quality
            and global competitiveness.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group rounded-2xl overflow-hidden"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl p-0.5 bg-linear-to-r from-(--primary) via-(--accent) to-(--primary) opacity-0 group-hover:opacity-100 transition duration-500 animate-gradient"></div>

              <div className="relative rounded-2xl overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition duration-700"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Glass Overlay */}
                <div className="absolute inset-0" />

                {/* Dark Layer for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-8 min-h-95 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover Button */}
                  <Link
                    href={item.link}
                    className="mt-6 inline-block bg-orange-500 text-white px-5 py-2 rounded-md text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
