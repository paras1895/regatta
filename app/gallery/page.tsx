"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "../globals.css";

const Gallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const images = Array.from({ length: 35 }, (_, i) => ({
    id: i + 1,
    url: `/gallery/${i + 1}.jpg`,
  }));

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedId((prev) => (prev === null || prev === 35 ? 1 : prev + 1));
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedId((prev) => (prev === null || prev === 1 ? 35 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, handleNext, handlePrev]);

  return (
    <main className="min-h-screen bg-[#f8f7f4] py-12 px-6">
      <div className="max-w-7xl mx-auto mb-16">
        <Link
          href="/"
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 hover:text-stone-900 transition-colors"
        >
          ← Back to Legacy
        </Link>
        <h1 className="font-serif text-6xl md:text-8xl text-stone-900 mt-8 italic">
          Regatta Gallery
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img) => (
            <motion.div
              key={img.id}
              layoutId={`card-${img.id}`}
              onClick={() => setSelectedId(img.id)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group overflow-hidden rounded-xl bg-stone-200 shadow-sm cursor-zoom-in"
            >
              <motion.img
                src={img.url}
                alt={`Regatta ${img.id}`}
                className="block w-full h-auto object-cover transition-transform duration-700 md:group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-stone-950/98 cursor-zoom-out"
            onClick={() => setSelectedId(null)}
          >
            <button className="absolute top-6 right-6 text-stone-400 hover:text-white z-[210] p-4 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[210] p-4 text-stone-500 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[210] p-4 text-stone-500 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <motion.div
              key={selectedId}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/gallery/${selectedId}.jpg`}
                alt="Selected"
                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl pointer-events-none"
              />

              <div className="absolute -bottom-12 left-0 w-full text-center">
                <p className="text-stone-500 font-serif italic text-sm tracking-widest">
                  Moment {selectedId.toString().padStart(2, "0")} / 35
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
