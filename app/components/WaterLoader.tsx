"use client";

import Lottie from "lottie-react";
import animationData from "@/../public/lottie/wave-loader.json";
import "./WaterLoader.css";

export default function WaterLoader() {
  return (
    <div className="waterloader-wrapper">
      <Lottie
        animationData={animationData}
        loop
        className="lottie-animation"
      />
    </div>
  );
}
