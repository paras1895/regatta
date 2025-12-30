"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

const Section: React.FC<{
  children: ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = "", id }) => {
  const ref = useRef(null);

  // Added "once: true" to ensure it only animates the first time
  const isInView = useInView(ref, {
    margin: "0px 0px -20% 0px",
    once: true, 
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`pb-8 text-main ${className}`}
      // This will now stay at opacity 1 / y 0 after the first trigger
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 60,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;