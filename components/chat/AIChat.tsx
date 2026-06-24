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
  const [lastMessage, setLastMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function sendMessage(messageArg?: string) {
    const messageToSend = messageArg ?? input;
    if (!messageToSend) return;

    const userMessage = messageToSend;

    setLastMessage(userMessage);
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    // clear input only when sending from the input field
    if (!messageArg) setInput("");
    setLoading(true);
    setError(null);

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

      if (!res.ok || data.error) {
        const msg = data.error || "Erro na IA";
        setError(msg);
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: msg,
          },
        ]);
        setLoading(false);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply || "Erro na IA",
        },
      ]);
    } catch (_error) {
      const msg = "Erro ao conectar com IA";
      setError(msg);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: msg,
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
          <div className="text-white/50">IA digitando...</div>
        )}
        {error && (
          <div className="mt-4 p-3 rounded-md bg-red-600/20 text-red-300 border border-red-600">
            <div className="flex items-center justify-between">
              <span>{error}</span>
              <button
                type="button"
                onClick={() => sendMessage(lastMessage)}
                className="ml-4 px-3 py-1 rounded bg-red-600/80 text-white"
              >
                Tentar novamente
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-4">
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Pergunte algo..."
          className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-4 py-3"
        />

        <button
          type="button"
          onClick={() => sendMessage()}
          disabled={!input || loading}
          className="px-6 py-3 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-600 disabled:opacity-50"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

