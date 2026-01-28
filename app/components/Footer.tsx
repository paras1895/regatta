"use client";

import React from "react";
import { motion } from "framer-motion";

const Social = [
  {
    id: 1,
    name: "Instagram",
    href: "https://www.instagram.com/coepregatta",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/coepregatta/",
  },
  {
    id: 3,
    name: "Twitter(X)",
    href: "https://x.com/CoepRegatta",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0a09] text-stone-200 pt-20 pb-10 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-stone-800 pb-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-space text-[12vw] lg:text-[10vw] font-bold leading-none tracking-tighter text-stone-100"
              >
                REGATTA
                <span className="font-serif italic font-light text-stone-500">
                  .
                </span>
              </motion.h2>
              <p className="mt-6 text-stone-400 max-w-md font-light text-lg">
                The flow of tradition continues. Witness the 98th edition of
                India's most prestigious boating heritage.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Events", "Team", "Sponsors", "Gallery"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-stone-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500">
              Get in Touch
            </h4>
            <div className="space-y-4 text-sm text-stone-400 leading-relaxed">
              <p>
                COEP Boat Club, <br /> Shivajinagar, Pune 411005
              </p>
              <a
                href="mailto:boatclub@coeptech.ac.in"
                className="block text-stone-200 hover:underline decoration-stone-500 underline-offset-4 transition-all"
              >
                boatclub@coeptech.ac.in
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500">
              Socials
            </h4>
            <ul className="space-y-4">
              {Social.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    className="text-stone-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 bg-stone-900/50 p-6 border border-stone-800 rounded-xl">
            <h3 className="text-[15px] font-bold uppercase tracking-[0.4em] text-stone-200">
              98 Years Strong
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed italic font-serif">
              "Every stroke a story, every wave a memory. Be part of the legacy
              that has defined COEP since 1928."
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
              © 2026 COEP Regatta
            </span>
            <span className="w-1 h-1 bg-stone-800 rounded-full"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
              Designed for Excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
