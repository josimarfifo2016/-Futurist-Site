"use client";
import LiveNotifications from "@/components/dashboard/LiveNotifications";

import Sidebar from "@/components/dashboard/Sidebar";

import KPI from "@/components/dashboard/KPI";

import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export default function DashboardPage() {

  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
        flex
      "
    >

      <Sidebar />

      {/* Content */}

      <section className="flex-1 p-10">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-5xl font-black">
            Neural Dashboard
          </h1>

          <p className="text-white/50 mt-3">
            Monitoramento analítico futurista
          </p>

        </div>

        {/* KPI */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-6
        ">

          <KPI
            title="Usuários"
            value="24850"
          />

          <KPI
            title="IA Requests"
            value="182000"
          />

          <KPI
            title="Performance"
            value="99"
          />

          <KPI
            title="Analytics"
            value="87400"
          />

        </div>

        {/* Chart */}

        <div className="mt-10">

          <AnalyticsChart />
<div className="mt-10">

  <LiveNotifications />

</div>
        </div>

        {/* Activity */}

        <div
          className="
            mt-10
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-8
          "
        >

          <h2 className="text-2xl font-black mb-6">
            Atividade Recente
          </h2>

          <div className="space-y-4">

            <div className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-black/30
              p-4
            ">
              <span>Nova análise IA concluída</span>
              <span className="text-white/40">
                2 min atrás
              </span>
            </div>

            <div className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-black/30
              p-4
            ">
              <span>Usuário conectado</span>
              <span className="text-white/40">
                5 min atrás
              </span>
            </div>

            <div className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-black/30
              p-4
            ">
              <span>Atualização neural aplicada</span>
              <span className="text-white/40">
                12 min atrás
              </span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}