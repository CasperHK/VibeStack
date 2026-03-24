import { Component, createSignal, For } from "solid-js";
import { Title } from "@solidjs/meta";
import NestedPageLayout from "~/components/layouts/NestedPageLayout";
import Card from "~/components/ui/Card";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
  image: string;
}

const products: Product[] = [
  { id: "1", name: "Wireless Pro Headphones", sku: "WPH-001", category: "Electronics", price: 299.99, stock: 145, status: "in-stock", image: "🎧" },
  { id: "2", name: "Ergonomic Keyboard", sku: "EKB-042", category: "Accessories", price: 189.00, stock: 8, status: "low-stock", image: "⌨️" },
  { id: "3", name: "4K Ultra Monitor", sku: "MON-128", category: "Electronics", price: 899.00, stock: 0, status: "out-of-stock", image: "🖥️" },
  { id: "4", name: "USB-C Hub Pro", sku: "HUB-077", category: "Accessories", price: 79.99, stock: 312, status: "in-stock", image: "🔌" },
  { id: "5", name: "Mechanical Mouse", sku: "MSE-019", category: "Accessories", price: 69.99, stock: 56, status: "in-stock", image: "🖱️" },
  { id: "6", name: "Portable SSD 2TB", sku: "SSD-256", category: "Storage", price: 149.99, stock: 4, status: "low-stock", image: "💾" },
  { id: "7", name: "Webcam HD 1080p", sku: "CAM-033", category: "Electronics", price: 119.00, stock: 0, status: "out-of-stock", image: "📷" },
  { id: "8", name: "Desk Lamp LED", sku: "LMP-055", category: "Office", price: 49.99, stock: 220, status: "in-stock", image: "💡" },
];

const statusConfig = {
  "in-stock": { label: "In Stock", classes: "bg-neon-emerald/10 text-neon-emerald border border-neon-emerald/20" },
  "low-stock": { label: "Low Stock", classes: "bg-neon-amber/10 text-neon-amber border border-neon-amber/20" },
  "out-of-stock": { label: "Out of Stock", classes: "bg-neon-rose/10 text-neon-rose border border-neon-rose/20" },
};

const Products: Component = () => {
  const [search, setSearch] = createSignal("");

  const filtered = () => {
    const q = search().toLowerCase();
    return q
      ? products.filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q))
      : products;
  };

  return (
    <NestedPageLayout>
      <Title>Products — VibeStack</Title>

      <div class="mb-6">
        <h1 class="text-2xl font-bold text-white mb-1">Product Inventory</h1>
        <p class="text-sm text-gray-400">Manage your product catalog and stock levels</p>
      </div>

      {/* KPI Summary */}
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Products", value: "8", color: "text-neon-cyan" },
          { label: "In Stock", value: "4", color: "text-neon-emerald" },
          { label: "Low Stock", value: "2", color: "text-neon-amber" },
          { label: "Out of Stock", value: "2", color: "text-neon-rose" },
        ].map((stat) => (
          <Card class="text-center py-4">
            <p class={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p class="text-xs text-gray-400 mt-1">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Toolbar */}
      <Card class="mb-6">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="w-full sm:max-w-xs">
            <Input
              placeholder="Search products or SKU..."
              value={search()}
              onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => setSearch(e.currentTarget.value)}
              icon={
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              }
            />
          </div>
          <div class="flex gap-2 shrink-0">
            <Button variant="secondary" size="sm">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
              </svg>
              Filter
            </Button>
            <Button size="sm">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add Product
            </Button>
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead>
              <tr class="border-b border-white/10">
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Product</th>
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">SKU</th>
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Category</th>
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Price</th>
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Stock</th>
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th class="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              <For each={filtered()}>
                {(product) => {
                  const status = statusConfig[product.status];
                  return (
                    <tr class="futuristic-table-row transition-colors">
                      <td class="px-4 py-3">
                        <div class="flex items-center gap-3">
                          <span class="text-2xl">{product.image}</span>
                          <span class="font-medium text-gray-200">{product.name}</span>
                        </div>
                      </td>
                      <td class="px-4 py-3 font-mono text-xs text-gray-400">{product.sku}</td>
                      <td class="px-4 py-3 text-gray-400">{product.category}</td>
                      <td class="px-4 py-3 font-medium text-gray-200">${product.price.toFixed(2)}</td>
                      <td class="px-4 py-3 text-gray-400">{product.stock}</td>
                      <td class="px-4 py-3">
                        <span class={`inline-flex px-2.5 py-1 text-xs font-medium rounded-lg ${status.classes}`}>
                          {status.label}
                        </span>
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex gap-2">
                          <Button variant="secondary" size="sm">Edit</Button>
                          <Button variant="danger" size="sm">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  );
                }}
              </For>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div class="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
          <p class="text-sm text-gray-500">
            Showing <span class="text-gray-300">{filtered().length}</span> of <span class="text-gray-300">{products.length}</span> products
          </p>
          <div class="flex gap-1">
            <Button variant="secondary" size="sm">Previous</Button>
            <Button variant="secondary" size="sm" class="!bg-neon-cyan/20 !text-neon-cyan !border-neon-cyan/30">1</Button>
            <Button variant="secondary" size="sm">2</Button>
            <Button variant="secondary" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </NestedPageLayout>
  );
};

export default Products;
