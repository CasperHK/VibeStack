import { Component } from "solid-js";

const Navbar: Component = () => {
  return (
    <nav class="futuristic-navbar fixed top-0 z-50 w-full">
      <div class="px-4 py-3 lg:px-6">
        <div class="flex items-center justify-between">
          {/* Left: Hamburger + Brand */}
          <div class="flex items-center justify-start">
            <button
              data-drawer-target="sidebar-default"
              data-drawer-toggle="sidebar-default"
              aria-controls="sidebar-default"
              type="button"
              class="inline-flex items-center p-2 text-gray-400 rounded-lg sm:hidden hover:bg-white/10 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            >
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Breadcrumb */}
            <nav class="hidden sm:flex items-center ml-4 text-sm" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-2">
                <li class="inline-flex items-center">
                  <a href="/" class="inline-flex items-center text-gray-400 hover:text-neon-cyan transition-colors">
                    <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg class="w-3 h-3 text-gray-600 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <span class="text-gray-200 font-medium">Dashboard</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Center: Search */}
          <div class="hidden md:flex flex-1 max-w-md mx-8">
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <input
                type="text"
                class="block w-full pl-10 pr-4 py-2 text-sm text-gray-200 bg-white/5 border border-white/10 rounded-xl focus:ring-neon-cyan/50 focus:border-neon-cyan/50 placeholder-gray-500 transition-all"
                placeholder="Search anything... (⌘K)"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <kbd class="px-1.5 py-0.5 text-xs text-gray-500 bg-white/5 border border-white/10 rounded">⌘K</kbd>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div class="flex items-center space-x-3">
            {/* Mobile Search Button */}
            <button class="md:hidden p-2 text-gray-400 rounded-lg hover:bg-white/10 hover:text-gray-200 transition-all">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            {/* Notification Bell */}
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              class="relative p-2 text-gray-400 rounded-lg hover:bg-white/10 hover:text-gray-200 transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <span class="sr-only">View notifications</span>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <span class="absolute top-1 right-1 w-2.5 h-2.5 bg-neon-rose rounded-full pulse-dot border-2 border-dark-900" />
            </button>

            {/* Notification Dropdown */}
            <div
              class="z-50 hidden w-80 bg-dark-800 border border-white/10 rounded-xl shadow-2xl"
              id="notification-dropdown"
            >
              <div class="p-4 border-b border-white/10">
                <div class="flex items-center justify-between">
                  <h6 class="text-sm font-semibold text-gray-200">Notifications</h6>
                  <span class="inline-flex items-center px-2 py-0.5 text-xs font-medium text-neon-cyan bg-neon-cyan/10 rounded-full">
                    3 new
                  </span>
                </div>
              </div>
              <div class="divide-y divide-white/5">
                <a href="#" class="flex items-center px-4 py-3 hover:bg-white/5 transition-colors">
                  <div class="shrink-0">
                    <div class="w-8 h-8 rounded-full bg-neon-emerald/20 flex items-center justify-center">
                      <svg class="w-4 h-4 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm text-gray-200">Deployment <span class="font-medium text-neon-emerald">successful</span></p>
                    <p class="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </a>
                <a href="#" class="flex items-center px-4 py-3 hover:bg-white/5 transition-colors">
                  <div class="shrink-0">
                    <div class="w-8 h-8 rounded-full bg-neon-violet/20 flex items-center justify-center">
                      <svg class="w-4 h-4 text-neon-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm text-gray-200">New team member <span class="font-medium text-neon-violet">joined</span></p>
                    <p class="text-xs text-gray-500">15 minutes ago</p>
                  </div>
                </a>
                <a href="#" class="flex items-center px-4 py-3 hover:bg-white/5 transition-colors">
                  <div class="shrink-0">
                    <div class="w-8 h-8 rounded-full bg-neon-amber/20 flex items-center justify-center">
                      <svg class="w-4 h-4 text-neon-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm text-gray-200">API rate limit at <span class="font-medium text-neon-amber">85%</span></p>
                    <p class="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </a>
              </div>
              <div class="p-3 border-t border-white/10">
                <a href="#" class="block text-center text-sm text-neon-cyan hover:underline">View all notifications</a>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              class="p-2 text-gray-400 rounded-lg hover:bg-white/10 hover:text-neon-amber transition-all"
              data-tooltip-target="tooltip-dark-mode"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </button>
            <div id="tooltip-dark-mode" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-dark-700 rounded-lg shadow-sm opacity-0 tooltip transition-opacity">
              Toggle theme
              <div class="tooltip-arrow" data-popper-arrow />
            </div>

            {/* Separator */}
            <div class="hidden md:block w-px h-6 bg-white/10" />

            {/* User Avatar Dropdown */}
            <button
              type="button"
              class="flex items-center text-sm rounded-full focus:ring-2 focus:ring-neon-cyan/30 transition-all"
              id="user-menu-button"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom-end"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full ring-2 ring-white/10 hover:ring-neon-cyan/30 transition-all"
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="user photo"
              />
            </button>

            {/* User Dropdown */}
            <div
              class="z-50 hidden bg-dark-800 border border-white/10 rounded-xl shadow-2xl w-52"
              id="user-dropdown"
            >
              <div class="px-4 py-3 border-b border-white/10">
                <p class="text-sm font-medium text-gray-200">Alex Chen</p>
                <p class="text-xs text-gray-500 truncate">alex@vibestack.dev</p>
              </div>
              <ul class="py-1">
                <li>
                  <a href="#" class="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-gray-200 transition-colors">
                    <svg class="w-4 h-4 mr-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-gray-200 transition-colors">
                    <svg class="w-4 h-4 mr-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-gray-200 transition-colors">
                    <svg class="w-4 h-4 mr-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                    Billing
                  </a>
                </li>
              </ul>
              <div class="border-t border-white/10">
                <a href="#" class="flex items-center px-4 py-2.5 text-sm text-neon-rose hover:bg-neon-rose/5 transition-colors">
                  <svg class="w-4 h-4 mr-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
