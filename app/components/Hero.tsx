"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import WaveText from "./WaveText";

const images = ["/events/kayak.jpg", "/events/shell.jpg", "/events/punt.jpg"];

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -60]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#f8f7f4] flex items-center justify-center overflow-hidden pt-[15vh] md:pt-0">
      <div className="hidden xl:flex absolute left-0 top-0 h-full w-20 border-r border-stone-200 flex-col items-center justify-between py-12 z-20 bg-[#f8f7f4]">
        <span className="font-bold text-[10px] tracking-[0.5em] -rotate-90 text-stone-400 uppercase">
          COEP Tech University
        </span>
        <div className="w-[1px] h-32 bg-stone-200" />
        <span className="font-bold text-[10px] tracking-[0.5em] -rotate-90 text-stone-900 uppercase">
          Est. 1928
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10 md:mx-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <span className="h-[1px] w-10 bg-stone-800" />
              <p className="text-[9px] font-bold uppercase tracking-[0.45em] text-stone-500 md:text-[11px]">
                98th Regatta Edition
              </p>
              <span className="h-[1px] w-10 bg-stone-800 md:hidden" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-space text-[20vw] sm:text-6xl md:text-7xl lg:text-[9vw] font-bold text-stone-900 leading-[0.9] mb-8"
            >
              LEGACY <br />
              <span className="font-serif italic font-light text-stone-400 inline-block">
                <WaveText text="in Motion" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="text-stone-600 text-sm max-w-xl mx-auto lg:mx-0 font-light leading-relaxed md:text-lg"
            >
              Where tradition flows forward. India's oldest college festival
              showcasing the spirit of generations on the Mula River.
            </motion.p>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-16 -left-16 w-44 h-44 hidden md:block"
            >
              <svg viewBox="0 0 100 100" className="fill-stone-900">
                <path
                  id="circlePath"
                  d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                  fill="none"
                />
                <text className="text-[5.5px] uppercase font-bold tracking-[0.22em]">
                  <textPath href="#circlePath">
                    Mashaal • Punt • Kayak • Telematches • Shell •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            <motion.div
              style={{ y: y1 }}
              className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl bg-stone-200"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
