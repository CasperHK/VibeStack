import { Component } from "solid-js";

const QuickActions: Component = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Progress / Usage Card */}
      <div class="glass-card p-5 lg:col-span-2">
        <h3 class="text-lg font-semibold text-white mb-5">Project Progress</h3>

        {/* Progress bars */}
        <div class="space-y-5">
          <div>
            <div class="flex justify-between mb-1.5">
              <span class="text-sm font-medium text-gray-300">API Gateway v2</span>
              <span class="text-sm font-medium text-neon-cyan">87%</span>
            </div>
            <div class="w-full bg-dark-700 rounded-full h-2.5">
              <div class="bg-gradient-to-r from-neon-cyan to-neon-violet h-2.5 rounded-full" style="width: 87%"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between mb-1.5">
              <span class="text-sm font-medium text-gray-300">Dashboard Redesign</span>
              <span class="text-sm font-medium text-neon-emerald">64%</span>
            </div>
            <div class="w-full bg-dark-700 rounded-full h-2.5">
              <div class="bg-gradient-to-r from-neon-emerald to-neon-cyan h-2.5 rounded-full" style="width: 64%"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between mb-1.5">
              <span class="text-sm font-medium text-gray-300">Auth Microservice</span>
              <span class="text-sm font-medium text-neon-violet">42%</span>
            </div>
            <div class="w-full bg-dark-700 rounded-full h-2.5">
              <div class="bg-gradient-to-r from-neon-violet to-neon-rose h-2.5 rounded-full" style="width: 42%"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between mb-1.5">
              <span class="text-sm font-medium text-gray-300">Storage Usage</span>
              <span class="text-sm font-medium text-neon-amber">73%</span>
            </div>
            <div class="w-full bg-dark-700 rounded-full h-2.5">
              <div class="bg-gradient-to-r from-neon-amber to-neon-rose h-2.5 rounded-full" style="width: 73%"></div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div class="mt-6 space-y-3">
          <div id="alert-info" class="flex items-center p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20" role="alert">
            <svg class="flex-shrink-0 w-4 h-4 text-neon-cyan" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div class="ml-3 text-sm text-neon-cyan">
              Next deployment window opens in <span class="font-semibold">2h 15m</span>
            </div>
            <button type="button" class="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 text-neon-cyan/60 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-colors" data-dismiss-target="#alert-info" aria-label="Close">
              <span class="sr-only">Close</span>
              <svg class="w-3 h-3" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>

          <div id="alert-warning" class="flex items-center p-3 rounded-xl bg-neon-amber/10 border border-neon-amber/20" role="alert">
            <svg class="flex-shrink-0 w-4 h-4 text-neon-amber" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Warning</span>
            <div class="ml-3 text-sm text-neon-amber">
              SSL certificate for <span class="font-semibold">api.vibestack.dev</span> expires in 14 days
            </div>
            <button type="button" class="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 text-neon-amber/60 hover:text-neon-amber hover:bg-neon-amber/10 transition-colors" data-dismiss-target="#alert-warning" aria-label="Close">
              <span class="sr-only">Close</span>
              <svg class="w-3 h-3" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div class="glass-card p-5">
        <h3 class="text-lg font-semibold text-white mb-5">Quick Actions</h3>

        <div class="space-y-3">
          {/* Button Group */}
          <button type="button" class="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 hover:from-neon-cyan/30 hover:to-neon-violet/30 border border-neon-cyan/20 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-neon-cyan/10">
            <svg class="w-5 h-5 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            Deploy to Production
          </button>

          <button type="button" class="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-neon-violet/20 to-neon-rose/20 hover:from-neon-violet/30 hover:to-neon-rose/30 border border-neon-violet/20 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-neon-violet/10">
            <svg class="w-5 h-5 text-neon-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create New Project
          </button>

          <button type="button" class="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-neon-emerald/20 to-neon-cyan/20 hover:from-neon-emerald/30 hover:to-neon-cyan/30 border border-neon-emerald/20 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-neon-emerald/10">
            <svg class="w-5 h-5 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            Invite Team Member
          </button>

          <button type="button" class="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-neon-amber/20 to-neon-emerald/20 hover:from-neon-amber/30 hover:to-neon-emerald/30 border border-neon-amber/20 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-neon-amber/10">
            <svg class="w-5 h-5 text-neon-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Export Report
          </button>

          <button type="button" class="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-neon-rose/20 to-neon-amber/20 hover:from-neon-rose/30 hover:to-neon-amber/30 border border-neon-rose/20 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-neon-rose/10">
            <svg class="w-5 h-5 text-neon-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            System Settings
          </button>
        </div>

        {/* Speed Dial / Floating Action */}
        <div class="mt-5 pt-4 border-t border-white/10">
          <p class="text-xs text-gray-500 mb-3">Keyboard shortcuts</p>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-400">Search</span>
              <kbd class="px-2 py-1 text-xs font-semibold text-gray-400 bg-dark-700 border border-white/10 rounded-lg">⌘K</kbd>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-400">New Project</span>
              <kbd class="px-2 py-1 text-xs font-semibold text-gray-400 bg-dark-700 border border-white/10 rounded-lg">⌘N</kbd>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-400">Deploy</span>
              <kbd class="px-2 py-1 text-xs font-semibold text-gray-400 bg-dark-700 border border-white/10 rounded-lg">⌘D</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
