import { Component, For } from "solid-js";
import { Title } from "@solidjs/meta";
import NestedPageLayout from "@layouts/NestedPageLayout";
import Card from "~/components/ui/Card";

interface KPI {
  label: string;
  value: string;
  change: string;
  up: boolean;
  glow: "cyan" | "violet" | "emerald" | "rose";
  bgColor: string;
  textColor: string;
  icon: JSXIcon;
}

type JSXIcon = "cart" | "dollar" | "receipt" | "return";

const kpis: KPI[] = [
  { label: "Total Sales", value: "12,847", change: "+14.2%", up: true, glow: "cyan", bgColor: "bg-neon-cyan/10", textColor: "text-neon-cyan", icon: "cart" },
  { label: "Revenue", value: "$284,320", change: "+8.7%", up: true, glow: "violet", bgColor: "bg-neon-violet/10", textColor: "text-neon-violet", icon: "dollar" },
  { label: "Avg Order Value", value: "$22.13", change: "-2.4%", up: false, glow: "emerald", bgColor: "bg-neon-emerald/10", textColor: "text-neon-emerald", icon: "receipt" },
  { label: "Refund Rate", value: "1.8%", change: "-0.3%", up: true, glow: "rose", bgColor: "bg-neon-rose/10", textColor: "text-neon-rose", icon: "return" },
];

const icons: Record<JSXIcon, () => any> = {
  cart: () => (
    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
  dollar: () => (
    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  receipt: () => (
    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
    </svg>
  ),
  return: () => (
    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>
  ),
};

const chartDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const revenueData = [65, 82, 45, 93, 78, 60, 88];

const categoryBars = [
  { name: "Electronics", pct: 42, gradient: "from-neon-cyan to-neon-violet" },
  { name: "Accessories", pct: 28, gradient: "from-neon-violet to-neon-rose" },
  { name: "Storage", pct: 18, gradient: "from-neon-emerald to-neon-cyan" },
  { name: "Office", pct: 12, gradient: "from-neon-amber to-neon-rose" },
];

const topProducts = [
  { rank: 1, name: "Wireless Pro Headphones", units: 342, revenue: "$102,558", up: true },
  { rank: 2, name: "USB-C Hub Pro", units: 289, revenue: "$23,108", up: true },
  { rank: 3, name: "Ergonomic Keyboard", units: 198, revenue: "$37,422", up: false },
  { rank: 4, name: "Portable SSD 2TB", units: 156, revenue: "$23,398", up: true },
  { rank: 5, name: "Desk Lamp LED", units: 134, revenue: "$6,699", up: false },
];

const Analytics: Component = () => {
  return (
    <NestedPageLayout>
      <Title>Analytics — VibeStack</Title>

      <div class="mb-6">
        <h1 class="text-2xl font-bold text-white mb-1">Analytics</h1>
        <p class="text-sm text-gray-400">Track your store's performance metrics</p>
      </div>

      {/* KPI Cards */}
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <For each={kpis}>
          {(kpi) => (
            <Card glow={kpi.glow} class="hover:scale-[1.02] transition-transform duration-200 cursor-default">
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-sm text-gray-400 mb-1">{kpi.label}</p>
                  <p class="text-2xl font-bold text-white">{kpi.value}</p>
                </div>
                <div class={`p-2.5 rounded-xl ${kpi.bgColor}`}>
                  <span class={kpi.textColor}>{icons[kpi.icon]()}</span>
                </div>
              </div>
              <div class="mt-3 flex items-center gap-2">
                <span class={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-md ${kpi.up ? "bg-neon-emerald/10 text-neon-emerald" : "bg-neon-rose/10 text-neon-rose"}`}>
                  {kpi.up ? "▲" : "▼"} {kpi.change}
                </span>
                <span class="text-xs text-gray-500">vs last month</span>
              </div>
            </Card>
          )}
        </For>
      </div>

      {/* Charts Row */}
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        {/* Revenue Trend */}
        <Card title="Revenue Trend" subtitle="Last 7 days — hover bars for values">
          <div class="flex items-end gap-3 h-48 mt-4 px-2">
            <For each={chartDays}>
              {(day, i) => (
                <div class="flex-1 flex flex-col items-center gap-2">
                  <div class="w-full relative group cursor-pointer">
                    <div
                      class="w-full bg-gradient-to-t from-neon-cyan/80 to-neon-violet/60 rounded-t-lg chart-bar hover:from-neon-cyan hover:to-neon-violet"
                      style={`height: ${revenueData[i()] * 1.7}px`}
                    />
                    <div class="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark-700 text-neon-cyan text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap z-10">
                      ${(revenueData[i()] * 480).toLocaleString()}
                    </div>
                  </div>
                  <span class="text-xs text-gray-500">{day}</span>
                </div>
              )}
            </For>
          </div>
        </Card>

        {/* Category Breakdown */}
        <Card title="Sales by Category" subtitle="Revenue distribution this month">
          <div class="space-y-4 mt-4">
            <For each={categoryBars}>
              {(cat) => (
                <div>
                  <div class="flex justify-between mb-1.5">
                    <span class="text-sm text-gray-300">{cat.name}</span>
                    <span class="text-sm font-semibold text-gray-200">{cat.pct}%</span>
                  </div>
                  <div class="w-full bg-dark-700 rounded-full h-2.5">
                    <div
                      class={`bg-gradient-to-r ${cat.gradient} h-2.5 rounded-full transition-all duration-700`}
                      style={`width: ${cat.pct}%`}
                    />
                  </div>
                </div>
              )}
            </For>
          </div>
        </Card>
      </div>

      {/* Top Products Table */}
      <Card title="Top Selling Products" subtitle="Ranked by units sold this month">
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left mt-2">
            <thead>
              <tr class="border-b border-white/10">
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">#</th>
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Product</th>
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Units Sold</th>
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Revenue</th>
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Trend</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              <For each={topProducts}>
                {(p) => (
                  <tr class="futuristic-table-row transition-colors">
                    <td class="px-4 py-3 text-gray-500 font-mono text-xs">0{p.rank}</td>
                    <td class="px-4 py-3 font-medium text-gray-200">{p.name}</td>
                    <td class="px-4 py-3 text-gray-400">{p.units.toLocaleString()}</td>
                    <td class="px-4 py-3 font-medium text-gray-200">{p.revenue}</td>
                    <td class="px-4 py-3">
                      <span class={`text-sm font-bold ${p.up ? "text-neon-emerald" : "text-neon-rose"}`}>
                        {p.up ? "↑" : "↓"}
                      </span>
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </Card>
    </NestedPageLayout>
  );
};

export default Analytics;
