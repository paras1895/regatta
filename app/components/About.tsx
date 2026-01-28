"use client";

import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-16 lg:px-24 bg-[#f8f7f4] overflow-hidden"
    >
      <div className="absolute right-0 top-20 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[15rem] font-serif leading-none italic uppercase">
          Since 1928
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-5xl md:text-7xl text-stone-900 italic leading-tight">
                What is <br /> Regatta?
              </h2>

              <div className="p-8 border-l border-stone-200 bg-stone-100/50 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="text-sm tracking-widest uppercase text-stone-400 font-bold mb-2">
                    Heritage
                  </div>
                  <div className="text-4xl font-serif text-stone-900 mb-1">
                    98<sup>th</sup> Edition
                  </div>
                  <div className="text-stone-500 italic font-serif text-lg">
                    Legacy in Motion
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-stone-800 font-light leading-relaxed">
                COEP Technological University, Asia&apos;s third-oldest academic
                institution, proudly hosts the{" "}
                <span className="font-bold border-b border-stone-800">
                  COEP Regatta
                </span>
                —India&apos;s longest-running college festival.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-stone-200">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
                    Record
                  </h4>
                  <p className="text-sm text-stone-700 leading-snug">
                    Recognized in the Limca Book of Records as India&apos;s
                    Oldest College Festival.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
                    Attendance
                  </h4>
                  <p className="text-sm text-stone-700 leading-snug">
                    Attracting over 12,000 spectators annually to the banks of
                    the Mula River.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-stone-600 leading-relaxed font-light">
                <div className="relative p-6 md:p-10 bg-stone-900 text-stone-100 rounded-2xl overflow-hidden group">
                  <p className="relative z-10 text-lg italic font-serif leading-relaxed">
                    "From the elegance of and the precision of Kayak Ballet,
                    Shell Games to the artistic Punt Formations and thrilling
                    Tele-matches, the event is a seamless blend of athleticism
                    and artistry. The iconic Mashaal Dance remains the soul of
                    the Regatta—a luminous spectacle where flaming torches glide
                    across the water, symbolizing unity and the unbroken flow of
                    tradition."
                  </p>
                </div>

                <p className="text-lg">
                  As the Regatta enters its 98th edition,{" "}
                  <strong className="font-bold text-stone-900 italic font-serif underline decoration-stone-300 underline-offset-4">
                    Legacy in Motion
                  </strong>{" "}
                  reflects a journey where history propels movement, and every
                  stroke carries the spirit of generations past into the future.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
