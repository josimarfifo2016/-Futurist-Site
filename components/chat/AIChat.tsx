"use client";

import { useState } from "react";

interface Message {
  role: "user" | "ai";
  text: string;
}

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply || "Erro na IA",
        },
      ]);
    } catch (_error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Erro ao conectar com IA",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-6 h-150 flex flex-col">
      <h2 className="text-3xl font-black mb-4">
        NeuralOS AI
      </h2>

      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user"
                ? "ml-auto bg-cyan-500/20 p-4 rounded-2xl max-w-[80%]"
                : "mr-auto bg-purple-500/20 p-4 rounded-2xl max-w-[80%]"
            }
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="text-white/50">
            IA digitando...
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-4">
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Pergunte algo..."
          className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-4 py-3"
        />

        <button
          onClick={sendMessage}
          className="px-6 py-3 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-600"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

