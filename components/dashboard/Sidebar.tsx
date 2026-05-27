"use client";

import Link from "next/link";

export default function Sidebar() {

  return (
    <aside
      className="
        w-72
        min-h-screen
        border-r
        border-white/10
        bg-black/40
        backdrop-blur-2xl
        p-6
      "
    >

      {/* Logo */}

      <div className="mb-12">

        <h1
            className="
            text-3xl
            font-black
            bg-linear-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          NeuralOS
        </h1>

        <p className="text-white/40 mt-2">
          Dashboard futurista
        </p>

      </div>

      {/* Menu */}

      <nav className="space-y-4">

        <Link
          href="/"
          className="
            block
            rounded-2xl
            px-5
            py-4
            bg-white/5
            border
            border-white/10
            hover:bg-white/10
            transition
          "
        >
          Home
        </Link>

        <Link
          href="/dashboard"
          className="
            block
            rounded-2xl
            px-5
            py-4
            bg-cyan-500/20
            border
            border-cyan-500/30
          "
        >
          Dashboard
        </Link>

        <Link
          href="/ai"
          className="
            block
            rounded-2xl
            px-5
            py-4
            bg-white/5
            border
            border-white/10
            hover:bg-white/10
            transition
          "
        >
          Neural AI
        </Link>

      </nav>

      {/* Footer */}

      <div className="absolute bottom-8 left-6 right-6">

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-5
          "
        >

          <p className="text-white/50 text-sm">
            Sistema online
          </p>

          <div className="flex items-center gap-2 mt-3">

            <div
              className="
                w-3
                h-3
                rounded-full
                bg-green-400
                animate-pulse
              "
            />

            <span className="text-sm">
              Operacional
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}