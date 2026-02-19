import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Navbar />
      <main className="ml-14 flex-1">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
