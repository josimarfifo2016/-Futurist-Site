"use client";
import AIChat from "@/components/chat/AIChat";
import Sidebar from "@/components/dashboard/Sidebar";
import KPI from "@/components/dashboard/KPI";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex">
      <Sidebar />
<div className="mt-10">
  <AIChat />
</div>
      <section className="flex-1 p-8">
        <h1 className="text-5xl font-black">
          Dashboard IA
        </h1>

        <p className="text-white/50 mt-2">
          Plataforma NeuralOS Analytics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <KPI title="Usuários" value="12.4K" />
          <KPI title="Receita" value="$84K" />
          <KPI title="IA Requests" value="2.1M" />
        </div>

        <div className="mt-10">
          <AnalyticsChart />
        </div>
      </section>
    </main>
  );
}