"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const snapshots = [
  {
    title: "World-Class R&D Infrastructure",
    description:
      "Our well-designed and well-equipped R&D labs reflect our focus on innovation, excellence, and continuous improvement.",
    image:
      "https://cdn.pixabay.com/photo/2014/12/10/20/48/laboratory-563423_1280.jpg",
  },
  {
    title: "cGMP Compliant Manufacturing",
    description:
      "State-of-the-art manufacturing facilities built to meet global regulatory standards.",
    image:
      "https://cdn.pixabay.com/photo/2020/05/14/02/31/covid-19-5169689_1280.jpg",
  },
  {
    title: "Global Quality Standards",
    description:
      "Quality systems aligned with USFDA, EU GMP, and WHO guidelines.",
    image:
      "https://cdn.pixabay.com/photo/2020/04/19/20/10/test-tube-5065426_1280.jpg",
  },
];

const SLIDE_DURATION = 3000;

export default function WhatWeDoSnapshots() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % snapshots.length);
      setProgressKey((prev) => prev + 1); // reset progress animation
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {snapshots.map((item, index) => (
        <div
          key={index}
          className={clsx(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-20 h-full flex items-center md:px-16">
            <div className="max-w-3xl px-6 md:px-16 text-white">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-base md:text-lg mb-6 leading-relaxed">
                {item.description}
              </p>
              <button className="border cursor-pointer border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* 🔘 Progress Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {snapshots.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setProgressKey((prev) => prev + 1);
            }}
            className="relative w-10 h-2 rounded-full bg-white/80 overflow-hidden cursor-pointer"
          >
            {index === activeIndex && (
              <span
                key={progressKey}
                className="absolute left-0 top-0 h-full bg-[#0891B2] animate-progress"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
