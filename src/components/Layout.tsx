import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { getSectionForPath } from "@/lib/portfolio-sections";

export function Layout() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    const section = getSectionForPath(pathname);
    if (!section) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(section.id);
      if (!target) return;
      // Use layout offsets rather than animated bounding boxes.
      let top = 0;
      let element: HTMLElement | null = target;
      while (element) {
        top += element.offsetTop;
        const parent = element.offsetParent;
        element = parent instanceof HTMLElement ? parent : null;
      }
      window.scrollTo({ top: Math.max(0, top - 80), behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, key]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* On desktop shift content right of sidebar; on mobile add top padding for the bar */}
      <main className="md:ml-14 pt-[49px] md:pt-0">
        <Outlet />
      </main>
    </div>
  );
}
