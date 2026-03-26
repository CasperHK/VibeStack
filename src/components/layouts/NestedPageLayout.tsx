import { useLocation } from "@solidjs/router";
import { animate } from "motion";
import { Component, createEffect, JSX, on, onMount } from "solid-js";
import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";

interface NestedPageLayoutProps {
  children: JSX.Element;
}

const NestedPageLayout: Component<NestedPageLayoutProps> = (props) => {
  const location = useLocation();
  let contentRef: HTMLDivElement | undefined;

  const animateContent = () => {
    if (!contentRef) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      animate(contentRef, { opacity: [0, 1] }, { duration: 0.2, easing: "ease-out" });
      return;
    }

    animate(
      contentRef,
      { opacity: [0, 1], y: [16, 0] },
      { duration: 0.35, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );
  };

  onMount(async () => {
    const { initFlowbite } = await import("flowbite");
    initFlowbite();

    animateContent();
  });

  createEffect(
    on(
      () => location.pathname,
      () => {
        animateContent();
      }
    )
  );

  return (
    <div class="min-h-screen bg-dark-900 grid-pattern">
      <Navbar />
      <Sidebar />

      <main class="p-4 sm:ml-64 mt-16">
        <div ref={contentRef} class="p-2 md:p-4">{props.children}</div>
      </main>

      <footer class="fixed bottom-0 left-0 z-30 w-full sm:ml-64">
        <div class="futuristic-navbar px-4 py-2 flex items-center justify-between text-xs text-gray-500">
          <div class="flex items-center space-x-4">
            <span class="flex items-center">
              <span class="w-2 h-2 rounded-full bg-neon-emerald mr-1.5 animate-pulse" />
              All systems operational
            </span>
            <span>|</span>
            <span>v2.4.1</span>
          </div>
          <div class="flex items-center space-x-4">
            <span>Latency: 12ms</span>
            <span>|</span>
            <span>Region: US-East</span>
            <span>|</span>
            <span>&copy; 2026 VibeStack</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NestedPageLayout;
