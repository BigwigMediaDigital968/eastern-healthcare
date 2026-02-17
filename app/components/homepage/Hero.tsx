"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Castle, Globe, FlaskConical, Droplet } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type HeroProps = {
  backgroundType?: "image" | "video";
};

const infoItems = [
  {
    title: "Great Place to Work",
    desc: "Certified for creating a supportive and inclusive workplace.",
    icon: Castle,
  },
  {
    title: "Global Healthcare Partner",
    desc: "Trusted by healthcare professionals in 85+ countries.",
    icon: Globe,
  },
  {
    title: "Dynamic Product Basket",
    desc: "Strong R&D-driven portfolio across multiple therapies.",
    icon: FlaskConical,
  },
  {
    title: "Plasma Therapy for Life",
    desc: "India’s leading plasma fractionation expertise.",
    icon: Droplet,
  },
];

export default function Hero({ backgroundType = "video" }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % infoItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-[95vh] w-full overflow-hidden">
        {/* Background */}
        {backgroundType === "video" ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/assets/hero-image.png"
            alt="Eastern Healthcare Background"
            fill
            priority
            className="object-cover"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(14,116,144,0.9)] via-[rgba(14,116,144,0.75)] to-transparent" />

        {/* Main Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pb-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Eastern Healthcare
              </h1>

              <p className="mt-4 text-lg md:text-xl text-white max-w-xl">
                Delivering advanced healthcare solutions with trust, innovation,
                and compassion.
              </p>

              <div className="mt-8 flex gap-4">
                {/* <button className="rounded-full bg-accent px-8 py-3 text-white font-medium cursor-pointer hover:opacity-90 transition">
                Explore Services
              </button> */}

                <button className="rounded-full border border-white px-8 py-3 text-white cursor-pointer hover:bg-white hover:text-[#0E7490] transition">
                  Contact Us
                </button>
              </div>
            </motion.div>

            {/* Right Visual */}
            {/* <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden md:block"
          >
            <Image
              src="/assets/hero-image.png"
              alt="Healthcare Visual"
              width={520}
              height={520}
              className="drop-shadow-2xl"
            />
          </motion.div> */}
          </div>
        </div>

        {/* Bottom Info Strip */}
        {/* Bottom Info Strip */}
        <div className="absolute bottom-5 left-0 w-full z-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* DESKTOP GRID */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:grid grid-cols-4 overflow-hidden rounded-xl shadow-xl bg-white"
            >
              {infoItems.map((item, i) => {
                const isActive = i === activeIndex;

                return (
                  <motion.div
                    key={i}
                    animate={{
                      backgroundColor: isActive ? "#0E7490" : "#ffffff",
                      color: isActive ? "#ffffff" : "#0F172A",
                    }}
                    transition={{ duration: 0.4 }}
                    className="p-6 text-center border-r last:border-r-0"
                  >
                    <div className="mb-4 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 260 }}
                      >
                        <item.icon
                          size={42}
                          className={isActive ? "text-white" : "text-[#0E7490]"}
                        />
                      </motion.div>
                    </div>

                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p
                      className={`mt-2 text-sm ${isActive ? "text-white/90" : "text-gray-600"}`}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* MOBILE SLIDER */}
            <div className="lg:hidden relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="rounded-xl shadow-xl bg-[#0E7490] text-white p-6 text-center  border-2 border-amber-50"
                >
                  <div className="mb-4 flex justify-center">
                    <motion.div
                      animate={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {(() => {
                        const Icon = infoItems[activeIndex].icon;
                        return <Icon size={42} />;
                      })()}
                    </motion.div>
                  </div>

                  <h4 className="text-lg font-semibold">
                    {infoItems[activeIndex].title}
                  </h4>

                  <p className="mt-2 text-sm text-white/90">
                    {infoItems[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e7490] uppercase">
            Eastern Healthcare Ltd.
          </h2>

          {/* Divider */}
          <div className="w-24 h-1 bg-[#00B4C6] mx-auto mt-4 mb-8" />

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            Eastern Healthcare is a fast-growing, multinational healthcare
            organization focused on the development, manufacturing, and global
            distribution of high-quality pharmaceutical and healthcare
            solutions. With a strong presence across international markets,
            Eastern Healthcare partners with healthcare professionals and
            institutions in more than 85 countries worldwide.
          </p>

          <button className="inline-flex items-center justify-center px-8 py-3 text-white font-semibold bg-[#0e7490] hover:bg-transparent hover:border-2 hover:border-[#0e7490] hover:text-[#0e7490] cursor-pointer transition rounded-md">
            READ MORE
          </button>
        </div>
      </section>
    </>
  );
}
