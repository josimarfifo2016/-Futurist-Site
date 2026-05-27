"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {

  const mainRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (mainRef.current) {
        mainRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}

      <div
        ref={mainRef}
        className="fixed top-0 left-0 z-50 pointer-events-none w-5 h-5 rounded-full bg-cyan-400 mix-blend-screen shadow-[0_0_20px_rgba(34,211,238,0.9)] transition-transform duration-75"
      />

      {/* Glow */}

      <div
        ref={glowRef}
        className="fixed top-0 left-0 z-40 pointer-events-none w-20 h-20 rounded-full bg-cyan-400/20 blur-3xl"
      />
    </>
  );
}