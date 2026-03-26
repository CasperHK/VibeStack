import { Component, createSignal, For } from "solid-js";
import ProfileButton from "@components/ProfileButton";

interface NavItem {
  label: string;
  icon: string;
  href?: string;
  badge?: string;
  active?: boolean;
  children?: { label: string; href: string }[];
}

const mainNavItems: NavItem[] = [
  {
    label: "Dashboard",
    icon: "dashboard",
    href: "/",
    active: true,
  },
  {
    label: "Analytics",
    icon: "analytics",
    href: "/analytics",
  },
  {
    label: "Products",
    icon: "projects",
    href: "/products",
  },
  {
    label: "Profile",
    icon: "team",
    href: "/profile",
  },
  {
    label: "Messages",
    icon: "messages",
    href: "#",
    badge: "5",
  },
  {
    label: "Transactions",
    icon: "transactions",
    href: "#",
  },
];

const secondaryNavItems: NavItem[] = [
  { label: "Settings", icon: "settings", href: "/settings" },
  { label: "Help & Support", icon: "help", href: "#" },
];

function getIcon(name: string) {
  switch (name) {
    case "dashboard":
      return (
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
        </svg>
      );
    case "analytics":
      return (
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "projects":
      return (
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
      );
    case "team":
      return (
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      );
    case "messages":
      return (
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      );
    case "transactions":
      return (
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      );
    case "settings":
      return (
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "help":
      return (
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      );
    default:
      return null;
  }
}

const Sidebar: Component = () => {
  const [openDropdown, setOpenDropdown] = createSignal<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown() === label ? null : label);
  };

  return (
    <aside class="futuristic-sidebar fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full sm:translate-x-0">
      <div class="h-full px-3 py-6 overflow-y-auto flex flex-col">
        {/* Logo */}
        <a href="/" class="flex items-center px-3 mb-8">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center mr-3">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <span class="text-lg font-bold gradient-text">VibeStack</span>
        </a>

        {/* Main Navigation */}
        <nav class="flex-1 space-y-1">
          <p class="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Main Menu</p>
          <For each={mainNavItems}>
            {(item) => (
              <div>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      class={`flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                        openDropdown() === item.label
                          ? "text-neon-cyan bg-white/5"
                          : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                      }`}
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span class="shrink-0 transition-colors duration-200 group-hover:text-neon-cyan">
                        {getIcon(item.icon)}
                      </span>
                      <span class="flex-1 ms-3 text-left whitespace-nowrap">{item.label}</span>
                      <svg
                        class={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown() === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <ul
                      class={`overflow-hidden transition-all duration-300 ${
                        openDropdown() === item.label ? "max-h-48 opacity-100 mt-1" : "max-h-0 opacity-0"
                      }`}
                    >
                      <For each={item.children}>
                        {(child) => (
                          <li>
                            <a
                              href={child.href}
                              class="flex items-center pl-11 pr-3 py-2 text-sm text-gray-400 rounded-lg hover:text-neon-cyan hover:bg-white/5 transition-all duration-200"
                            >
                              {child.label}
                            </a>
                          </li>
                        )}
                      </For>
                    </ul>
                  </>
                ) : (
                  <a
                    href={item.href}
                    class={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      item.active
                        ? "nav-item-active text-neon-cyan"
                        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                    }`}
                  >
                    <span class={`shrink-0 transition-colors duration-200 ${item.active ? "text-neon-cyan" : "group-hover:text-neon-cyan"}`}>
                      {getIcon(item.icon)}
                    </span>
                    <span class="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
                    {item.badge && (
                      <span class="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-neon-rose rounded-full pulse-dot">
                        {item.badge}
                      </span>
                    )}
                  </a>
                )}
              </div>
            )}
          </For>
        </nav>

        {/* Separator */}
        <div class="border-t border-white/10 my-4" />

        {/* Secondary Navigation */}
        <nav class="space-y-1 mb-4">
          <p class="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Support</p>
          <For each={secondaryNavItems}>
            {(item) => (
              <a
                href={item.href}
                class="flex items-center px-3 py-2.5 text-sm font-medium text-gray-400 rounded-lg hover:text-gray-200 hover:bg-white/5 transition-all duration-200 group"
              >
                <span class="shrink-0 transition-colors duration-200 group-hover:text-neon-cyan">
                  {getIcon(item.icon)}
                </span>
                <span class="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
              </a>
            )}
          </For>
        </nav>

        {/* CTA Card */}
        <div class="p-4 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-violet/10 border border-neon-cyan/20">
          <div class="flex items-center mb-3">
            <span class="inline-flex items-center px-2 py-0.5 text-xs font-semibold text-neon-cyan bg-neon-cyan/10 rounded-full">
              PRO
            </span>
          </div>
          <p class="text-sm text-gray-300 mb-3">Unlock advanced analytics and AI-powered insights.</p>
          <button class="w-full px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-neon-cyan to-neon-violet rounded-lg hover:opacity-90 transition-opacity">
            Upgrade Now
          </button>
        </div>

        <ProfileButton />
      </div>
    </aside>
  );
};

export default Sidebar;
