import { Component } from "solid-js";
import DashboardLayout from "@layouts/DashboardLayout";
import StatCards from "~/components/StatCards";
import ChartCard from "~/components/ChartCard";
import RecentOrders from "~/components/RecentOrders";
import ActivityFeed from "~/components/ActivityFeed";
import QuickActions from "~/components/QuickActions";

const Dashboard: Component = () => {
  return (
    <DashboardLayout>
      {/* Welcome Banner */}
      <div class="glass-card-strong p-6 mb-6 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-neon-violet/5 to-neon-rose/5"></div>
        <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-bold text-white mb-1">
              Welcome back, <span class="gradient-text">Alex</span> 👋
            </h1>
            <p class="text-gray-400 text-sm">Here's what's happening with your projects today.</p>
          </div>
          <div class="flex items-center gap-3">
            <button type="button" class="px-4 py-2.5 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Report
              </span>
            </button>
            <button type="button" class="px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-neon-cyan to-neon-violet hover:from-neon-cyan/90 hover:to-neon-violet/90 rounded-xl shadow-lg shadow-neon-cyan/20 transition-all duration-200">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                New Project
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Stat Cards Row */}
      <div class="mb-6">
        <StatCards />
      </div>

      {/* Chart + Activity Feed Row */}
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div class="xl:col-span-2">
          <ChartCard />
        </div>
        <div class="xl:col-span-1">
          <ActivityFeed />
        </div>
      </div>

      {/* Recent Orders - Full Width */}
      <div class="mb-6">
        <RecentOrders />
      </div>

      {/* Quick Actions & Progress */}
      <QuickActions />
    </DashboardLayout>
  );
};

export default Dashboard;
