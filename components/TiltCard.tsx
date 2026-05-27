"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
};

export default function TiltCard({
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="
        relative
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-8
        overflow-hidden
        shadow-[0_0_40px_rgba(0,0,0,0.3)]
      "
      style={{
        transformStyle: "preserve-3d",
      }}
    >

      {/* Glow */}

      <div
          className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-linear-to-br
          from-cyan-500/10
          to-purple-500/10
        "
      />

      {/* Content */}

      <div className="relative z-10">

        <h3 className="text-2xl font-black text-white">
          {title}
        </h3>

        <p className="mt-4 text-white/60 leading-relaxed">
          {description}
        </p>

      </div>

    </motion.div>
  );
}