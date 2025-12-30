"use client";

import React, { useEffect, useRef, useState } from "react";

export interface GalleryShufflerProps {
  alts?: string[];
  interval?: number;
  transitionDuration?: number;
  className?: string;
  preload?: boolean;
}

export const GalleryShuffler: React.FC<GalleryShufflerProps> = ({
  alts = [],
  interval = 1500,
  transitionDuration = 800,
  className = "",
  preload = true,
}) => {
  const images = [
    "/section1/img1.png",
    "/section1/img2.png",
    "/section1/img3.png",
  ];

  const count = images.length;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (!preload) return;
    const imgs: HTMLImageElement[] = [];
    images.forEach((src) => {
      const i = new Image();
      i.src = src;
      imgs.push(i);
    });
    return () => {
      imgs.length = 0;
    };
  }, [preload]);

  useEffect(() => {
    if (count <= 1) return;

    function scheduleNextCycle() {
      const t1 = window.setTimeout(() => {
        setVisible(false);
        const t2 = window.setTimeout(() => {
          setIndex((i) => (i + 1) % count);
          setVisible(true);
          scheduleNextCycle();
        }, transitionDuration);
        timers.current.push(t2);
      }, interval);

      timers.current.push(t1);
    }

    scheduleNextCycle();

    return () => {
      timers.current.forEach((id) => clearTimeout(id));
    };
  }, [count, interval, transitionDuration]);

  const currentSrc = images[index];
  const currentAlt = alts[index] ?? "";

  const imgStyle: React.CSSProperties = {
    transitionProperty: "opacity",
    transitionDuration: `${transitionDuration}ms`,
    opacity: visible ? 1 : 0,
  };

  return (
    <div className={`relative overflow-hidden ${className}`} aria-live="polite">
      <img
        src={currentSrc}
        alt={currentAlt}
        style={imgStyle}
        className="w-full h-full object-cover block"
        aria-hidden={!visible}
      />
    </div>
  );
};

export default GalleryShuffler;