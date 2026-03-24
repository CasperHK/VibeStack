import { Component, For } from "solid-js";

interface Activity {
  id: number;
  user: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
  type: "deploy" | "commit" | "review" | "alert" | "user";
}

const activities: Activity[] = [
  {
    id: 1,
    user: "Alex Chen",
    avatar: "Felix",
    action: "deployed",
    target: "v2.4.1 to production",
    time: "2 minutes ago",
    type: "deploy",
  },
  {
    id: 2,
    user: "Sarah Mitchell",
    avatar: "Sarah",
    action: "merged PR",
    target: "#384 — Fix auth middleware",
    time: "18 minutes ago",
    type: "commit",
  },
  {
    id: 3,
    user: "James Wilson",
    avatar: "James",
    action: "approved review for",
    target: "API Gateway refactor",
    time: "45 minutes ago",
    type: "review",
  },
  {
    id: 4,
    user: "System",
    avatar: "System",
    action: "triggered alert:",
    target: "CPU usage exceeded 85%",
    time: "1 hour ago",
    type: "alert",
  },
  {
    id: 5,
    user: "Emily Zhang",
    avatar: "Emily",
    action: "joined the team as",
    target: "Frontend Developer",
    time: "3 hours ago",
    type: "user",
  },
];

const typeConfig = {
  deploy: { color: "bg-neon-emerald", icon: "rocket" },
  commit: { color: "bg-neon-cyan", icon: "code" },
  review: { color: "bg-neon-violet", icon: "check" },
  alert: { color: "bg-neon-amber", icon: "alert" },
  user: { color: "bg-neon-rose", icon: "user" },
};

function getTimelineIcon(type: string) {
  switch (type) {
    case "rocket":
      return (
        <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      );
    case "code":
      return (
        <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case "check":
      return (
        <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      );
    case "alert":
      return (
        <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      );
    case "user":
      return (
        <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
        </svg>
      );
    default:
      return null;
  }
}

const ActivityFeed: Component = () => {
  return (
    <div class="glass-card p-5">
      <div class="flex items-center justify-between mb-5">
        <h3 class="text-lg font-semibold text-white">Activity Feed</h3>
        <a href="#" class="text-xs text-neon-cyan hover:underline">View all</a>
      </div>

      {/* Timeline */}
      <ol class="relative border-l border-white/10 ml-3">
        <For each={activities}>
          {(activity) => {
            const config = typeConfig[activity.type];
            return (
              <li class="mb-6 ml-6 last:mb-0">
                <span class={`absolute flex items-center justify-center w-7 h-7 rounded-full -left-3.5 ring-4 ring-dark-900 ${config.color}`}>
                  {getTimelineIcon(config.icon)}
                </span>
                <div class="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                  <div class="flex items-center gap-2 mb-1">
                    {activity.type !== "alert" && (
                      <img
                        class="w-5 h-5 rounded-full"
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.avatar}`}
                        alt={activity.user}
                      />
                    )}
                    <span class="text-sm font-medium text-gray-200">{activity.user}</span>
                    <span class="text-xs text-gray-500">{activity.time}</span>
                  </div>
                  <p class="text-sm text-gray-400">
                    {activity.action} <span class="text-gray-300 font-medium">{activity.target}</span>
                  </p>
                </div>
              </li>
            );
          }}
        </For>
      </ol>
    </div>
  );
};

export default ActivityFeed;
