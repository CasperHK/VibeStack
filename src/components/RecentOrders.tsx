import { Component, For } from "solid-js";

interface Order {
  id: string;
  customer: { name: string; email: string; avatar: string };
  product: string;
  amount: string;
  status: "completed" | "pending" | "cancelled" | "processing";
  date: string;
}

const orders: Order[] = [
  {
    id: "#VS-4821",
    customer: { name: "Sarah Mitchell", email: "sarah@example.com", avatar: "Sarah" },
    product: "Enterprise Plan",
    amount: "$2,499",
    status: "completed",
    date: "Mar 24, 2026",
  },
  {
    id: "#VS-4820",
    customer: { name: "James Wilson", email: "james@example.com", avatar: "James" },
    product: "API Credits Pack",
    amount: "$599",
    status: "processing",
    date: "Mar 24, 2026",
  },
  {
    id: "#VS-4819",
    customer: { name: "Emily Zhang", email: "emily@example.com", avatar: "Emily" },
    product: "Team License",
    amount: "$1,299",
    status: "completed",
    date: "Mar 23, 2026",
  },
  {
    id: "#VS-4818",
    customer: { name: "Marcus Johnson", email: "marcus@example.com", avatar: "Marcus" },
    product: "Starter Plan",
    amount: "$49",
    status: "pending",
    date: "Mar 23, 2026",
  },
  {
    id: "#VS-4817",
    customer: { name: "Aiko Tanaka", email: "aiko@example.com", avatar: "Aiko" },
    product: "Enterprise Plan",
    amount: "$2,499",
    status: "cancelled",
    date: "Mar 22, 2026",
  },
  {
    id: "#VS-4816",
    customer: { name: "David Park", email: "david@example.com", avatar: "David" },
    product: "Pro License",
    amount: "$899",
    status: "completed",
    date: "Mar 22, 2026",
  },
];

const statusConfig = {
  completed: { label: "Completed", bg: "bg-neon-emerald/10", text: "text-neon-emerald", dot: "bg-neon-emerald" },
  processing: { label: "Processing", bg: "bg-neon-cyan/10", text: "text-neon-cyan", dot: "bg-neon-cyan" },
  pending: { label: "Pending", bg: "bg-neon-amber/10", text: "text-neon-amber", dot: "bg-neon-amber" },
  cancelled: { label: "Cancelled", bg: "bg-neon-rose/10", text: "text-neon-rose", dot: "bg-neon-rose" },
};

const RecentOrders: Component = () => {
  return (
    <div class="glass-card overflow-hidden">
      {/* Header */}
      <div class="p-5 flex items-center justify-between border-b border-white/10">
        <div>
          <h3 class="text-lg font-semibold text-white">Recent Orders</h3>
          <p class="text-sm text-gray-400 mt-0.5">Latest transactions from your customers</p>
        </div>
        <a
          href="#"
          class="inline-flex items-center px-3 py-1.5 text-xs font-medium text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 rounded-lg hover:bg-neon-cyan/20 transition-colors"
        >
          View all
          <svg class="w-3 h-3 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Table */}
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="text-xs text-gray-500 uppercase bg-white/[0.02]">
            <tr>
              <th scope="col" class="px-5 py-3.5 font-medium">Order ID</th>
              <th scope="col" class="px-5 py-3.5 font-medium">Customer</th>
              <th scope="col" class="px-5 py-3.5 font-medium">Product</th>
              <th scope="col" class="px-5 py-3.5 font-medium">Amount</th>
              <th scope="col" class="px-5 py-3.5 font-medium">Status</th>
              <th scope="col" class="px-5 py-3.5 font-medium">Date</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <For each={orders}>
              {(order) => {
                const config = statusConfig[order.status];
                return (
                  <tr class="futuristic-table-row transition-colors">
                    <td class="px-5 py-3.5">
                      <span class="font-medium text-gray-200">{order.id}</span>
                    </td>
                    <td class="px-5 py-3.5">
                      <div class="flex items-center">
                        <img
                          class="w-8 h-8 rounded-full ring-1 ring-white/10"
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${order.customer.avatar}`}
                          alt={order.customer.name}
                        />
                        <div class="ml-3">
                          <p class="font-medium text-gray-200">{order.customer.name}</p>
                          <p class="text-xs text-gray-500">{order.customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-3.5 text-gray-300">{order.product}</td>
                    <td class="px-5 py-3.5 font-semibold text-white">{order.amount}</td>
                    <td class="px-5 py-3.5">
                      <span class={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full ${config.bg} ${config.text}`}>
                        <span class={`w-1.5 h-1.5 rounded-full ${config.dot} mr-1.5`} />
                        {config.label}
                      </span>
                    </td>
                    <td class="px-5 py-3.5 text-gray-400">{order.date}</td>
                  </tr>
                );
              }}
            </For>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div class="p-4 flex items-center justify-between border-t border-white/10">
        <p class="text-xs text-gray-500">Showing <span class="font-medium text-gray-300">1-6</span> of <span class="font-medium text-gray-300">48</span> results</p>
        <nav class="inline-flex items-center space-x-1">
          <button class="px-3 py-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-gray-200 transition-all">
            Previous
          </button>
          <button class="px-3 py-1.5 text-xs text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 rounded-lg font-medium">
            1
          </button>
          <button class="px-3 py-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-gray-200 transition-all">
            2
          </button>
          <button class="px-3 py-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-gray-200 transition-all">
            3
          </button>
          <button class="px-3 py-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-gray-200 transition-all">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default RecentOrders;
