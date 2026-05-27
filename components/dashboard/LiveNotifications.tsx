"use client";

import { useEffect, useState } from "react";

const notifications = [
  "Nova análise neural concluída",
  "Usuário conectado ao sistema",
  "IA processou nova requisição",
  "Atualização do servidor aplicada",
  "Nova métrica registrada",
  "Sistema neural sincronizado",
];

export default function LiveNotifications() {

  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {

    const interval = setInterval(() => {

      const random =
        notifications[
          Math.floor(
            Math.random() * notifications.length
          )
        ];

      setItems((prev) => [
        random,
        ...prev.slice(0, 4),
      ]);

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-6
      "
    >

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-black">
            Live Notifications
          </h2>

          <p className="text-white/40 text-sm mt-1">
            Eventos do sistema em tempo real
          </p>

        </div>

        <div className="flex items-center gap-2">

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-green-400
              animate-pulse
            "
          />

          <span className="text-white/50 text-sm">
            ONLINE
          </span>

        </div>

      </div>

      {/* Notifications */}

      <div className="space-y-4">

        {items.map((item, index) => (

          <div
            key={index}
            className="
              rounded-2xl
              border
              border-cyan-500/10
              bg-black/30
              p-4
              animate-pulse
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-cyan-400
                "
              />

              <span className="text-white/80">
                {item}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}