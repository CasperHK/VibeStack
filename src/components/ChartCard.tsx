import { Component, createSignal, For } from "solid-js";

type TimeRange = "weekly" | "monthly" | "yearly";

interface ChartData {
  label: string;
  value: number;
  revenue: string;
}

const weeklyData: ChartData[] = [
  { label: "Mon", value: 65, revenue: "$4,280" },
  { label: "Tue", value: 78, revenue: "$5,120" },
  { label: "Wed", value: 52, revenue: "$3,420" },
  { label: "Thu", value: 88, revenue: "$5,780" },
  { label: "Fri", value: 95, revenue: "$6,240" },
  { label: "Sat", value: 72, revenue: "$4,730" },
  { label: "Sun", value: 58, revenue: "$3,810" },
];

const monthlyData: ChartData[] = [
  { label: "Jan", value: 45, revenue: "$12,400" },
  { label: "Feb", value: 58, revenue: "$15,800" },
  { label: "Mar", value: 72, revenue: "$19,600" },
  { label: "Apr", value: 65, revenue: "$17,700" },
  { label: "May", value: 80, revenue: "$21,800" },
  { label: "Jun", value: 92, revenue: "$25,000" },
  { label: "Jul", value: 85, revenue: "$23,100" },
  { label: "Aug", value: 78, revenue: "$21,200" },
  { label: "Sep", value: 95, revenue: "$25,800" },
  { label: "Oct", value: 88, revenue: "$23,900" },
  { label: "Nov", value: 70, revenue: "$19,000" },
  { label: "Dec", value: 98, revenue: "$26,600" },
];

const yearlyData: ChartData[] = [
  { label: "2020", value: 35, revenue: "$120K" },
  { label: "2021", value: 52, revenue: "$178K" },
  { label: "2022", value: 68, revenue: "$233K" },
  { label: "2023", value: 78, revenue: "$267K" },
  { label: "2024", value: 88, revenue: "$301K" },
  { label: "2025", value: 95, revenue: "$325K" },
];

const dataMap: Record<TimeRange, ChartData[]> = {
  weekly: weeklyData,
  monthly: monthlyData,
  yearly: yearlyData,
};

const ChartCard: Component = () => {
  const [activeTab, setActiveTab] = createSignal<TimeRange>("weekly");

  const currentData = () => dataMap[activeTab()];

  return (
    <div class="glass-card p-6 glow-cyan">
      {/* Header */}
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h3 class="text-lg font-semibold text-white mb-1">Revenue Overview</h3>
          <p class="text-sm text-gray-400">Track your earnings over time</p>
        </div>

        {/* Flowbite-style tabs */}
        <div class="flex mt-3 sm:mt-0 bg-white/5 rounded-lg p-1">
          <button
            class={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab() === "weekly"
                ? "bg-neon-cyan/20 text-neon-cyan"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("weekly")}
          >
            Weekly
          </button>
          <button
            class={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab() === "monthly"
                ? "bg-neon-cyan/20 text-neon-cyan"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly
          </button>
          <button
            class={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab() === "yearly"
                ? "bg-neon-cyan/20 text-neon-cyan"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Summary Row */}
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="p-3 rounded-xl bg-white/5">
          <p class="text-xs text-gray-500 mb-1">Total</p>
          <p class="text-lg font-bold text-white">$48,352</p>
        </div>
        <div class="p-3 rounded-xl bg-white/5">
          <p class="text-xs text-gray-500 mb-1">Average</p>
          <p class="text-lg font-bold text-white">$6,907</p>
        </div>
        <div class="p-3 rounded-xl bg-white/5">
          <p class="text-xs text-gray-500 mb-1">Best Day</p>
          <p class="text-lg font-bold text-neon-emerald">$8,240</p>
        </div>
      </div>

      {/* CSS Bar Chart */}
      <div class="flex items-end justify-between gap-1.5 h-48">
        <For each={currentData()}>
          {(item) => (
            <div class="flex-1 flex flex-col items-center gap-2 group">
              {/* Value on hover */}
              <span class="text-xs text-neon-cyan font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {item.revenue}
              </span>
              {/* Bar */}
              <div class="w-full relative">
                <div
                  class="chart-bar w-full rounded-t-md bg-gradient-to-t from-neon-cyan/80 to-neon-violet/60 group-hover:from-neon-cyan group-hover:to-neon-violet min-h-[4px]"
                  style={{ height: `${item.value * 1.5}px` }}
                />
                {/* Glow effect on hover */}
                <div
                  class="absolute bottom-0 left-0 w-full rounded-t-md bg-neon-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ height: `${item.value * 1.5}px` }}
                />
              </div>
              {/* Label */}
              <span class="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                {item.label}
              </span>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default ChartCard;
