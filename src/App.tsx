import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShowDetails from "./pages/ShowDetails";
import Popular from "./pages/Popular";
import NewReleases from "./pages/NewReleases";
import Genres from "./pages/Genres";
import MyList from "./pages/MyList";
import Search from "./pages/Search";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/new-releases" element={<NewReleases />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/search" element={<Search />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
