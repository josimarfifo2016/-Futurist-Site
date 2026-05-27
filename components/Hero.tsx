"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import TiltCard from "@/components/TiltCard";

const texts = [
  "Inteligência Artificial Avançada",
  "Analytics em Tempo Real",
  "Automação Neural",
  "Experiência Futurista",
];

export default function Hero() {

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {

    if (index === texts.length) {
      const timeout = setTimeout(() => {
        setIndex(0);
      }, 0);
      return () => clearTimeout(timeout);
    }

    if (
      subIndex === texts[index].length + 1 &&
      !deleting
    ) {

      setTimeout(() => {
        setDeleting(true);
      }, 1500);

      return;
    }

    if (subIndex === 0 && deleting) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => prev + 1);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {

      setSubIndex((prev) =>
        prev + (deleting ? -1 : 1)
      );

      setText(
        texts[index].substring(0, subIndex)
      );

    }, deleting ? 40 : 100);

    return () => clearTimeout(timeout);

  }, [subIndex, index, deleting]);

  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4 overflow-hidden">

      {/* Glow background */}

      <div className="absolute w-175 h-175 bg-cyan-500/10 blur-[140px] rounded-full" />

      {/* Title */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-black bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        NeuralOS
      </motion.h1>

      {/* Typing effect */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="h-12.5 mt-6"
      >

        <p className="text-2xl md:text-4xl font-semibold text-white">

          {text}

          <span className="animate-pulse text-cyan-400">
            |
          </span>

        </p>

      </motion.div>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 text-white/70 max-w-2xl text-lg leading-relaxed"
      >
        Plataforma futurista com inteligência artificial,
        visual premium, dashboard avançado e
        experiência imersiva para aplicações modernas.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-6 mt-10 flex-wrap justify-center"
      >

        <Link
          href="/dashboard"
          className="px-8 py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-600 hover:scale-105 transition font-bold shadow-[0_0_40px_rgba(6,182,212,0.4)]"
        >
          Abrir Dashboard
        </Link>

        <Link
          href="/ai"
          className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-bold backdrop-blur-xl"
        >
          Abrir IA
        </Link>

      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
      >

        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-xl">
          <h3 className="text-3xl font-black text-cyan-400">
            2M+
          </h3>
          <p className="text-white/50 text-sm">
            AI Requests
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-xl">
          <h3 className="text-3xl font-black text-purple-400">
            98%
          </h3>
          <p className="text-white/50 text-sm">
            Performance
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-xl">
          <h3 className="text-3xl font-black text-cyan-400">
            24/7
          </h3>
          <p className="text-white/50 text-sm">
            Analytics
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-xl">
          <h3 className="text-3xl font-black text-purple-400">
            IA
          </h3>
          <p className="text-white/50 text-sm">
            Neural Core
          </p>
        </div>

      </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-6xl">

  <TiltCard
    title="AI Analytics"
    description="Monitoramento inteligente com análise neural em tempo real."
  />

  <TiltCard
    title="Neural Processing"
    description="Sistema futurista de processamento avançado com IA."
  />

  <TiltCard
    title="Quantum Security"
    description="Arquitetura segura com tecnologia de próxima geração."
  />

</div>
    </section>
  );
}