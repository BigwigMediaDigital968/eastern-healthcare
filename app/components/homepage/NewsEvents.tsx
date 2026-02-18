"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    image: "/assets/hero-image.png",
    content:
      "Akums achieved EU GMP certification for Plant 2 and renewed Plant 1 at Haridwar facilities.",
    link: "#",
  },
  {
    image: "/assets/hero-image.png",
    content:
      "Akums marked a milestone with the groundbreaking of its first Zambia facility, expanding access to affordable medicines in Africa.",
    link: "#",
  },
  {
    image: "/assets/hero-image.png",
    content:
      "Arushi Jain explores how CDMOs are scaling, adapting, and partnering for the future in her PharmaClick article.",
    link: "#",
  },
  {
    image: "/assets/hero-image.png",
    content:
      "Mr. Sanjeev Jain featured in the Power List 2025, honoring influential leaders across Asia & EMEA.",
    link: "#",
  },
];

// duplicate for seamless infinite loop
const extendedNews = [...newsData, ...newsData];

export default function NewsEvents() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isVisible, setIsVisible] = useState(false);

  const total = newsData.length;

  // responsive cards
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // autoplay
  //   useEffect(() => {
  //     if (!isVisible) return;

  //     const interval = setInterval(() => {
  //       setIndex((prev) => prev + 1);
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, [isVisible]);

  // seamless reset
  useEffect(() => {
    if (index >= total) {
      setTimeout(() => {
        setIndex(0);
      }, 700);
    }
  }, [index, total]);

  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-(--secondary) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-(--primary)">
          News & Events
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Stay updated with our latest advancements, product innovations,
          industry recognitions, and global collaborations shaping the future of
          pharmaceuticals.
        </p>

        {/* Slider */}
        <div className="relative mt-16">
          {/* Overflow wrapper ONLY for cards */}
          <div className="overflow-hidden py-3">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / cardsPerView)}%)`,
              }}
            >
              {extendedNews.map((item, i) => (
                <div
                  key={i}
                  className={`px-4 shrink-0 ${
                    cardsPerView === 1
                      ? "w-full"
                      : cardsPerView === 2
                        ? "w-1/2"
                        : "w-1/4"
                  }`}
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
                    <div className="relative w-full h-56">
                      <Image
                        src={item.image}
                        alt="News"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6 flex flex-col grow text-left">
                      <p className="text-gray-600 leading-relaxed grow text-sm">
                        {item.content}
                      </p>

                      <Link
                        href={item.link}
                        className="mt-6 inline-block text-(--primary) font-medium hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2
               w-12 h-12 rounded-full bg-white shadow-lg
               flex items-center justify-center
               text-(--primary) hover:bg-(--primary) hover:text-white
               transition z-50 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2
               w-12 h-12 rounded-full bg-white shadow-lg
               flex items-center justify-center
               text-(--primary) hover:bg-(--primary) hover:text-white
               transition z-50 cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* View More Button */}
        <div className="mt-14">
          <button className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-md border-2 border-transparent bg-[#0e7490] text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#0e7490] hover:text-[#0e7490] hover:scale-105 active:scale-95 cursor-pointer">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
}
