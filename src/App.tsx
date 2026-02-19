import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Podcast from "./pages/Podcast";
import Reads from "./pages/Reads";
import About from "./pages/About";
import ImpossibleList from "./pages/ImpossibleList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/work" element={<Work />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/reads" element={<Reads />} />
              <Route path="/about" element={<About />} />
              <Route path="/impossible-list" element={<ImpossibleList />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
