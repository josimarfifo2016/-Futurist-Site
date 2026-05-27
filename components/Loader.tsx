"use client";

import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          return 100;
        }

        return old + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 z-9999 bg-[#050816] flex items-center justify-center overflow-hidden">

      {/* Glow */}

      <div className="absolute w-125 h-125 bg-cyan-500/20 blur-3xl rounded-full" />

      {/* Content */}

      <div className="relative z-10 text-center">

        {/* Logo */}

        <h1 className="text-6xl md:text-8xl font-black bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse">

          NeuralOS

        </h1>

        {/* Subtitle */}

        <p className="text-white/50 mt-4 tracking-[0.3em] uppercase text-sm">

          Initializing AI System

        </p>

        {/* Loading bar */}

        <div className="w-[320px] h-3 bg-white/10 rounded-full mt-10 overflow-hidden">

          <div
            ref={innerRef}
            className="h-full bg-linear-to-r from-cyan-400 to-purple-500 transition-all duration-200"
          />

        </div>

        {/* Percentage */}

        <p className="mt-4 text-cyan-400 font-bold">

          {progress}%

        </p>

      </div>
    </div>
  );
}