"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Real Estate Investor",
    image: "/assets/dummy-client.jpg",
    rating: 5,
    content:
      "Eastern Healthcare has consistently delivered quality and compliance beyond expectations. Their professionalism and reliability are unmatched.",
  },
  {
    name: "Anita Sharma",
    role: "Pharma Distributor",
    image: "/assets/dummy-client.jpg",
    rating: 5,
    content:
      "Working with their team has been seamless. Production timelines and regulatory processes are handled with exceptional precision.",
  },
  {
    name: "Vikram Singh",
    role: "Healthcare Brand Owner",
    image: "/assets/dummy-client.jpg",
    rating: 4,
    content:
      "Strong infrastructure and dependable delivery standards. A trusted long-term manufacturing partner.",
  },
  {
    name: "Sneha Kapoor",
    role: "Global Export Partner",
    image: "/assets/dummy-client.jpg",
    rating: 5,
    content:
      "Their scalability and quality assurance processes make international collaboration effortless.",
  },
];

// Duplicate array for seamless loop
const extendedTestimonials = [...testimonials, ...testimonials];

export default function ClientTestimonials() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  const total = testimonials.length;

  // Responsive cards
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Detect section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Infinite autoplay only when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Reset index seamlessly
  useEffect(() => {
    if (index >= total) {
      setTimeout(() => {
        setIndex(0);
      }, 700); // match transition duration
    }
  }, [index, total]);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-(--secondary) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-(--primary)">
          What Our Clients Say
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our commitment to quality and regulatory excellence is reflected in
          the trust our partners place in us.
        </p>

        <div className="relative mt-16 overflow-hidden py-3">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / cardsPerView)}%)`,
            }}
          >
            {extendedTestimonials.map((item, i) => (
              <div
                key={i}
                className={`px-4 ${
                  cardsPerView === 1 ? "w-full" : "w-1/3"
                } shrink-0 flex`}
              >
                <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col w-full">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-(--primary)">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-4 text-(--accent)">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <p className="mt-4 text-gray-600 leading-relaxed grow text-sm">
                    {item.content}
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-(--primary)">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-(--primary) hover:bg-(--primary) hover:text-white transition cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-(--primary) hover:bg-(--primary) hover:text-white transition cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
