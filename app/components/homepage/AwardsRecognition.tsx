"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

type TileType = "text" | "image";

interface Tile {
  id: number;
  type: TileType;
  label: string;
  image?: string | null;
}

const healthcareLabels: string[] = [
  "WHO-GMP Certified",
  "EU GMP Compliance",
  "Global Export Excellence",
  "Pharma Manufacturing Leader",
  "Quality Assurance",
  "Regulatory Excellence",
  "Innovation in Healthcare",
  "Trusted CDMO Partner",
  "Sustainable Production",
];

const recognitionImages: string[] = [
  "/assets/reward-image.png",
  "/assets/reward-image.png",
  "/assets/reward-image.png",
  "/assets/reward-image.png",
  "/assets/reward-image.png",
  "/assets/reward-image.png",
  "/assets/reward-image.png",
  "/assets/reward-image.png",
  "/assets/reward-image.png",
];

const GRID_COUNT = 9;

export default function RewardsRecognitionSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [tiles, setTiles] = useState<Tile[]>(
    Array.from({ length: GRID_COUNT }, (_, i) => ({
      id: i,
      type: "text",
      label: healthcareLabels[i % healthcareLabels.length],
      image: null,
    })),
  );

  // 👁 Detect viewport visibility
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

  // 🔁 Random swap logic
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setTiles((prev) =>
        prev.map((tile) => {
          const shouldFlip = Math.random() > 0.65;

          if (!shouldFlip) return tile;

          if (tile.type === "text") {
            const randomImage =
              recognitionImages[
                Math.floor(Math.random() * recognitionImages.length)
              ];

            return {
              ...tile,
              type: "image",
              image: randomImage,
            };
          } else {
            const randomLabel =
              healthcareLabels[
                Math.floor(Math.random() * healthcareLabels.length)
              ];

            return {
              ...tile,
              type: "text",
              label: randomLabel,
              image: null,
            };
          }
        }),
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-linear-to-br from-(--primary)/80 to-(--accent)/50 animate-gradient"
    >
      {/* Soft glow background */}
      <div className="absolute inset-0 opacity-30 blur-3xl pointer-events-none bg-[radial-gradient(circle_at_40%_30%,white,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Awards & Recognition
          </h2>

          <p className="mt-6 text-white/80 text-lg max-w-lg">
            Our commitment to quality, compliance, and global healthcare
            innovation has earned recognition across international regulatory
            and manufacturing platforms.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 auto-rows-[140px]">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.id}
              layout
              whileHover={{
                y: -6,
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                y: {
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                layout: { duration: 0.4 },
              }}
              className="rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {tile.type === "text" ? (
                  <motion.span
                    key="text"
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-semibold text-center px-4"
                  >
                    {tile.label}
                  </motion.span>
                ) : (
                  <motion.div
                    key="image"
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={tile.image as string}
                      alt="Healthcare Recognition"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient animation */}
      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
