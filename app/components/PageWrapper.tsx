"use client";

import { useEffect, useState } from "react";
import WaterLoader from "./WaterLoader";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);
  const [fadeLoader, setFadeLoader] = useState(false);

  useEffect(() => {
    const finish = () => {
      setFadeLoader(true);

      setTimeout(() => {
        setLoaded(true);
      }, 600);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish);

    return () => window.removeEventListener("load", finish);
  }, []);

  return (
    <>
      {!loaded && (
        <div className={`waterloader-wrapper ${fadeLoader ? "hide" : ""}`}>
          <WaterLoader />
        </div>
      )}

      <div className={`page-content ${loaded ? "show" : ""}`}>
        {children}
      </div>
    </>
  );
}
