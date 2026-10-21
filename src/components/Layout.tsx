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
      document.getElementById(section.id)?.scrollIntoView({ behavior: "instant", block: "start" });
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
