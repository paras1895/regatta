"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Events", href: "/#events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/#team" },
    { name: "Sponsors", href: "/#sponsors" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-150 transition-all duration-500 ${
          scrolled
            ? "bg-base-100/80 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="relative z-110">
            <Image
              src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
              width={100}
              height={100}
              alt="logo"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link text-[10px] font-bold uppercase text-base-content hover: transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] text-base-content transition-all group-hover:w-full" />
              </Link>
            ))}
            <ThemeSwitcher />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="relative z-120 md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-base-content block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[1.5px] bg-base-content block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-base-content block"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-base-200 z-[105] flex flex-col items-center justify-center"
            style={{ height: "100dvh" }}
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-5xl italic text-base-content"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <ThemeSwitcher />
            </div>

            <div className="absolute bottom-12 flex flex-col items-center gap-4">
              <span className="w-[1px] h-12 bg-stone-300" />
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400">
                Est. 1928
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
