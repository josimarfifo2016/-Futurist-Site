use client;

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { motion } from "framer-motion";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50"
    >

      <div className="mx-auto max-w-7xl px-6 py-5">

        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl px-8 py-4 shadow-[0_0_40px_rgba(0,0,0,0.3)]">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-black bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            NeuralOS
          </Link>

          {/* Navigation */}

          <nav className="hidden md:flex items-center gap-8 text-white/70 font-medium">

            <Link
              href="/"
              className="hover:text-cyan-400 transition"
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="hover:text-cyan-400 transition"
            >
              Dashboard
            </Link>

            <Link
              href="/ai"
              className="hover:text-cyan-400 transition"
            >
              IA
            </Link>

            <Link
              href="/dashboard"
              className="hover:text-cyan-400 transition"
            >
              Analytics
            </Link>

          </nav>

          {/* CTA */}

          {session?.user ? (
            <div className="flex items-center gap-4">
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || "Avatar"}
                  className="w-8 h-8 rounded-full"
                />
              )}

              <span className="hidden sm:inline text-white font-medium">
                {session.user.name ?? session.user.email}
              </span>

              <button
                type="button"
                onClick={() => signOut()}
                className="px-4 py-2 rounded-2xl bg-red-500 hover:scale-105 transition font-bold"
              >
                Sair
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => signIn("google")}
              className="px-6 py-3 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-600 hover:scale-105 transition font-bold shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              Entrar
            </button>
          )}

        </div>

      </div>

    </motion.header>
  );
}