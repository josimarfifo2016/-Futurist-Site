"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";

export default function AnalyticsChart() {

  const [data, setData] = useState([
    { name: "Jan", users: 400 },
    { name: "Feb", users: 900 },
    { name: "Mar", users: 1200 },
    { name: "Apr", users: 2200 },
    { name: "May", users: 3400 },
  ]);

  useEffect(() => {

    const interval = setInterval(() => {

      setData((prev) => {

        const random =
          Math.floor(Math.random() * 1000);

        const updated = [
          ...prev.slice(1),
          {
            name: `T${Date.now() % 100}`,
            users: random + 1000,
          },
        ];

        return updated;

      });

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-6
        backdrop-blur-xl
        h-[320px]
      "
    >

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-black">
            Live Analytics
          </h2>

          <p className="text-white/40 text-sm mt-1">
            Dados atualizando em tempo real
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

          <span className="text-sm text-white/50">
            LIVE
          </span>

        </div>

      </div>

      {/* Chart */}

      {mounted ? (

        <ResponsiveContainer
          width="100%"
          height="100%"
          minHeight={200}
        >

          <LineChart data={data}>

            <XAxis
              dataKey="name"
              stroke="#ffffff55"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#06b6d4"
              strokeWidth={4}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      ) : (

        <div className="h-full" />

      )}

    </div>
  );
}