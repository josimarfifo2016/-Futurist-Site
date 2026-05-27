"use client";

import AIChat from "@/components/chat/AIChat";

export default function IAPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white p-8">
      <h1 className="text-5xl font-black mb-8">
        NeuralOS AI
      </h1>

      <AIChat />
    </main>
  );
}