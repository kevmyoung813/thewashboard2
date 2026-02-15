import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import HowTo from "./pages/HowTo";
import HowToWashers from "./pages/HowToWashers";
import HowToDryers from "./pages/HowToDryers";
import HowToLaundryCard from "./pages/HowToLaundryCard";
import Rules from "./pages/Rules";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-to" element={<HowTo />} />
        <Route path="/how-to/washers" element={<HowToWashers />} />
        <Route path="/how-to/dryers" element={<HowToDryers />} />
        <Route path="/how-to/laundry-card" element={<HowToLaundryCard />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
