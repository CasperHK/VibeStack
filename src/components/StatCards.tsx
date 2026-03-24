import { Component, For } from "solid-js";

interface StatCard {
  label: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  icon: "revenue" | "users" | "orders" | "conversion";
  glowClass: string;
  accentColor: string;
  bgGradient: string;
}

const stats: StatCard[] = [
  {
    label: "Total Revenue",
    value: "$48,352",
    change: "+12.5%",
    changeType: "up",
    icon: "revenue",
    glowClass: "glow-cyan",
    accentColor: "text-neon-cyan",
    bgGradient: "from-neon-cyan/20 to-neon-cyan/5",
  },
  {
    label: "Active Users",
    value: "12,845",
    change: "+8.2%",
    changeType: "up",
    icon: "users",
    glowClass: "glow-violet",
    accentColor: "text-neon-violet",
    bgGradient: "from-neon-violet/20 to-neon-violet/5",
  },
  {
    label: "New Orders",
    value: "1,284",
    change: "-3.1%",
    changeType: "down",
    icon: "orders",
    glowClass: "glow-emerald",
    accentColor: "text-neon-emerald",
    bgGradient: "from-neon-emerald/20 to-neon-emerald/5",
  },
  {
    label: "Conversion Rate",
    value: "3.24%",
    change: "+1.8%",
    changeType: "up",
    icon: "conversion",
    glowClass: "glow-rose",
    accentColor: "text-neon-amber",
    bgGradient: "from-neon-amber/20 to-neon-amber/5",
  },
];

function getStatIcon(name: string, colorClass: string) {
  const cls = `w-6 h-6 ${colorClass}`;
  switch (name) {
    case "revenue":
      return (
        <svg class={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "users":
      return (
        <svg class={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    case "orders":
      return (
        <svg class={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      );
    case "conversion":
      return (
        <svg class={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      );
    default:
      return null;
  }
}

const StatCards: Component = () => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <For each={stats}>
        {(stat) => (
          <div
            class={`glass-card p-5 hover:scale-[1.02] transition-all duration-300 cursor-pointer ${stat.glowClass}`}
            data-tooltip-target={`tooltip-${stat.icon}`}
          >
            <div class="flex items-center justify-between mb-4">
              <div class={`p-2.5 rounded-xl bg-gradient-to-br ${stat.bgGradient}`}>
                {getStatIcon(stat.icon, stat.accentColor)}
              </div>
              <span
                class={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full ${
                  stat.changeType === "up"
                    ? "text-neon-emerald bg-neon-emerald/10"
                    : "text-neon-rose bg-neon-rose/10"
                }`}
              >
                {stat.changeType === "up" ? (
                  <svg class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                ) : (
                  <svg class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                  </svg>
                )}
                {stat.change}
              </span>
            </div>
            <p class="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p class="text-sm text-gray-400">{stat.label}</p>

            {/* Tooltip */}
            <div
              id={`tooltip-${stat.icon}`}
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-dark-700 rounded-lg shadow-sm opacity-0 tooltip transition-opacity"
            >
              Click to view {stat.label.toLowerCase()} details
              <div class="tooltip-arrow" data-popper-arrow />
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default StatCards;
