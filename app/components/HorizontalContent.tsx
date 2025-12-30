"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";

export default function HorizontalContent() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const galleryImages = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const desktopEnd = "-60%";
  const mobileEnd = "-80%";

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? mobileEnd : desktopEnd]
  );

  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div id="gallery" ref={containerRef} className="relative h-[400vh] w-full">
      <div
        className={`sticky top-0 h-screen overflow-hidden flex flex-col ${
          theme === "light" ? "bg-[#F9F8F6]" : "bg-gray-900"
        }`}
      >
        <div className="relative z-20 px-[10vw] pt-24 md:pt-32">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <p
              className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-1 ${
                theme === "light" ? "text-black/40" : "text-white/40"
              }`}
            >
              Gallery
            </p>
            <h3
              className={`text-2xl md:text-4xl font-light ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              97th Regatta Glimpse
            </h3>
          </motion.div>
        </div>
        <motion.div
          style={{ x: bgX }}
          className="absolute inset-0 flex items-center whitespace-nowrap pointer-events-none select-none"
        >
          <h2
            className={`text-[25vw] font-black uppercase tracking-tighter ${
              theme === "light" ? "text-black/[0.03]" : "text-white/[0.03]"
            }`}
          >
            GALLERY
          </h2>
        </motion.div>

        <div className="flex-1 flex items-center">
          <motion.div
            className="flex items-center gap-8 md:gap-16 px-[10vw] md:px-[20vw] z-10"
            style={{ x }}
          >
            {galleryImages.map((src, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="relative w-[75vw] md:w-[450px] h-[40vh] md:h-[50vh] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={src}
                    alt={`Gallery item ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}

            <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex items-center justify-center pr-[10vw]">
              <Link href="/gallery">
                <button
                  className={`px-10 py-4 border rounded-full text-xs font-medium tracking-[0.2em] whitespace-nowrap ${
                    theme === "light" ? "border-black" : "border-white"
                  }`}
                >
                  VIEW ALL IMAGES
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
