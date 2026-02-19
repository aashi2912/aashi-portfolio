import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* On desktop shift content right of sidebar; on mobile add top padding for the bar */}
      <main className="md:ml-14 pt-[49px] md:pt-0">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
