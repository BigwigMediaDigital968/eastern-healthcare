"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Real Estate Investor",
    image: "/assets/user.jpg",
    rating: 5,
    content:
      "Eastern Healthcare has consistently delivered quality and compliance beyond expectations. Their professionalism and reliability are unmatched.",
  },
  {
    name: "Anita Sharma",
    role: "Pharma Distributor",
    image: "/assets/user.jpg",
    rating: 5,
    content:
      "Working with their team has been seamless. Production timelines and regulatory processes are handled with exceptional precision.",
  },
  {
    name: "Vikram Singh",
    role: "Healthcare Brand Owner",
    image: "/assets/user.jpg",
    rating: 4,
    content:
      "Strong infrastructure and dependable delivery standards. A trusted long-term manufacturing partner.",
  },
  {
    name: "Sneha Kapoor",
    role: "Global Export Partner",
    image: "/assets/user.jpg",
    rating: 5,
    content:
      "Their scalability and quality assurance processes make international collaboration effortless.",
  },
];

export default function ClientTestimonials() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Detect screen size
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

  const total = testimonials.length;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto Slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index, cardsPerView]);

  return (
    <section className="py-24 bg-(--secondary) overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-(--primary)">
          What Our Clients Say
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our commitment to quality, regulatory excellence, and scalable
          healthcare manufacturing is reflected in the trust our partners place
          in us.
        </p>

        {/* Slider Wrapper */}
        <div className="relative mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / cardsPerView)}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`px-4 ${
                  cardsPerView === 1 ? "w-full" : "w-1/3"
                } shrink-0 flex`}
              >
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300 flex flex-col w-full mb-2">
                  {/* Profile */}
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

                  {/* Rating */}
                  <div className="flex justify-center mt-4 text-(--accent)">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Content (flex-grow makes equal height) */}
                  <p className="mt-4 text-gray-600 leading-relaxed grow">
                    {item.content}
                  </p>

                  {/* Name */}
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

        {/* Controls Below Center */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center cursor-pointer justify-center text-(--primary) hover:bg-(--primary) hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center cursor-pointer justify-center text-(--primary) hover:bg-(--primary) hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
