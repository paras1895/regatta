"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const targetDate = new Date("2026-03-21T18:00:00");

const calculateTimeLeft = () => {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const NumberFlip = ({ value }: { value: number }) => {
  return (
    <div className="relative w-14 md:w-16 h-14 md:h-16 flex items-center justify-center overflow-hidden rounded-xl bg-base-100 border border-base-content/20 shadow">
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="absolute font-serif text-2xl md:text-3xl font-bold text-base-content"
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const TimeUnit = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-2">
    <NumberFlip value={value} />
    <span className="text-[10px] uppercase tracking-widest text-base-content/60">
      {label}
    </span>
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center lg:items-start gap-6">

      {/* headline */}
      <div className="flex items-center gap-4">
        <span className="h-[1px] w-8 bg-base-content/40" />
        <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-base-content">
          Legacy Arrives In
        </p>
        <span className="h-[1px] w-8 bg-base-content/40" />
      </div>

      {/* timer */}
      <div className="flex gap-4 md:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default Countdown;