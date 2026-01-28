"use client";

import { useEffect, useState } from "react";
import WaterLoader from "./WaterLoader";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [fadeLoader, setFadeLoader] = useState(false);

  useEffect(() => {
    setMounted(true);

    const LOADER_DURATION = 1000;
    const FADE_DURATION = 600;

    const timer = setTimeout(() => {
      setFadeLoader(true);

      setTimeout(() => {
        setLoaded(true);
      }, FADE_DURATION);
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {!loaded && (
        <div className={`waterloader-wrapper ${fadeLoader ? "hide" : ""}`}>
          <WaterLoader />
        </div>
      )}

      <div className={`page-content ${loaded ? "show" : ""}`}>{children}</div>
    </>
  );
}
