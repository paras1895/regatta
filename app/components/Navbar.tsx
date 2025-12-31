"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const sections = [
  { id: "events", label: "Events", type: "scroll" },
  { id: "team", label: "Team", type: "scroll" },
  { id: "sponsors", label: "Sponsors", type: "scroll" },
  { id: "gallery", label: "Gallery", type: "route", href: "/gallery" },
];

export default function Navbar() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const [dark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sec: any) => {
    if (sec.type === "route" && sec.href) {
      router.push(sec.href);
      setMenuOpen(false);
      return;
    }

    const elem = document.getElementById(sec.id);
    if (elem) {
      const offset = elem.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={theme === "light" ? "logo-dark.png" : "logo-light.png"}
            alt="Regatta Logo"
            className="h-10 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleNavClick(sec)}
              className="cursor-pointer text-main transition-colors hover-underline"
            >
              {sec.label}
            </button>
          ))}

          <button onClick={toggleTheme} className="p-2 text-main transition">
            {theme === "light" ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800 px-6 py-4 flex flex-col gap-4">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="text-left text-gray-700 dark:text-gray-300 text-lg font-medium"
            >
              {sec.label}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="mt-2 w-fit px-4 py-2 rounded"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
