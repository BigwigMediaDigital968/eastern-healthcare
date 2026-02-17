"use client";

import Image from "next/image";

const logo1 = [
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
];

const logo2 = [
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
  "/assets/logo.jpg",
];

export default function BusinessPartners() {
  return (
    <section className="py-20 bg-(--secondary) overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-(--primary)">
          Partnerships & Collaborations
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We collaborate with leading pharmaceutical and healthcare brands
          across India and globally, delivering end-to-end manufacturing and
          development solutions driven by quality, innovation, and regulatory
          excellence.
        </p>

        <div className="mt-14 space-y-10">
          {/* ROW 1 - LEFT TO RIGHT */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-10 animate-marquee">
              {[...logo1, ...logo1].map((logo, index) => (
                <div
                  key={index}
                  className="min-w-30 bg-white rounded-xl shadow-sm p-6 flex items-center justify-center hover:shadow-md transition"
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={120}
                    height={60}
                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 - RIGHT TO LEFT */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-10 animate-marquee-reverse">
              {[...logo2, ...logo2].map((logo, index) => (
                <div
                  key={index}
                  className="min-w-30 bg-white rounded-xl shadow-sm p-6 flex items-center justify-center hover:shadow-md transition"
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={120}
                    height={60}
                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
