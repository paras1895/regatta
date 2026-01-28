"use client";

import React from "react";
import { motion } from "framer-motion";

const EVENTS = [
  {
    id: "01",
    title: "Kayak Ballet",
    desc: "Graceful synchronized kayaking performances on water.",
    img: "/events/kayak.jpg",
    category: "Artistry",
  },
  {
    id: "02",
    title: "Shell Games",
    desc: "Precision and power in the fastest boats on the Mula.",
    img: "/events/shell.jpg",
    category: "Racing",
  },
  {
    id: "03",
    title: "Punt Formation",
    desc: "Creative formations showcasing balance and coordination.",
    img: "/events/punt.jpg",
    category: "Tradition",
  },
  {
    id: "04",
    title: "Telematches",
    desc: "Exciting team challenges testing speed and agility.",
    img: "/events/telematches.jpg",
    category: "Competitive",
  },
  {
    id: "05",
    title: "Mashaal Dance",
    desc: "A luminous spectacle where flaming torches glide across the water.",
    img: "/events/mashaal.jpg",
    category: "Signature",
  },
];

const Events: React.FC = () => {
  return (
    <section
      id="events"
      className="bg-[#f8f7f4] py-16 md:py-24 px-5 sm:px-6 md:px-16 lg:px-24 border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-10 h-[1px] bg-stone-800" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500">
                Our Events
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl text-stone-900"
            >
              Signature <br />
              <span className="italic text-stone-400">Performances</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-stone-500 text-sm uppercase tracking-widest font-bold max-w-[220px] leading-relaxed border-l border-stone-300 pl-6 hidden md:block"
          >
            A curated selection of legacy events since 1928.
          </motion.p>
        </div>

        <div className="flex flex-col">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group border-b border-stone-200 py-10 md:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-colors duration-500 hover:bg-stone-50/60"
            >
              <div className="hidden lg:block lg:col-span-1">
                <span className="font-serif text-2xl italic text-stone-300 group-hover:text-stone-800 transition-colors">
                  {event.id}
                </span>
              </div>

              <div className="lg:col-span-5 text-center lg:text-left space-y-4 px-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  {event.category}
                </span>
                <h3 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 uppercase group-hover:translate-x-2 transition-transform duration-500">
                  {event.title}
                </h3>
                <p className="text-stone-600 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
                  {event.desc}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.04, y: -8 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="lg:col-span-6 relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px] overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl bg-stone-200"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-stone-900/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-24 text-center">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-xl md:text-2xl italic text-stone-400">
              Experience the flow of tradition.
            </p>
            <div className="mt-4 flex justify-center gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-1 h-1 bg-stone-300 rounded-full" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Events;
