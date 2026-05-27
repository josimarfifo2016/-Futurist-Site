"use client";


import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Scene3D from "../components/Scene3D";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import { useEffect, useState } from "react";
export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
     
      <ParticlesBackground />

      <Cursor />

      <Scene3D />

      <Navbar />

      <Hero />

    </main>
  );
}