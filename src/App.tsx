import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Index from "./pages/Index";
import CompanyProfile from "./pages/CompanyProfile";
import HowWeThink from "./pages/HowWeThink";
import Atlas from "./pages/products/Atlas";
import Traceflow from "./pages/products/Traceflow";
import OriginxLabs from "./pages/products/OriginxLabs";
import CropxonCloud from "./pages/products/CropxonCloud";
import Robotics from "./pages/products/Robotics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Page transition wrapper
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <div 
      key={location.pathname}
      className="animate-fade-in"
      style={{ animationDuration: '0.3s' }}
    >
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/company" element={<CompanyProfile />} />
        <Route path="/how-we-think" element={<HowWeThink />} />
        <Route path="/atlas" element={<Atlas />} />
        <Route path="/traceflow" element={<Traceflow />} />
        <Route path="/originx-labs" element={<OriginxLabs />} />
        <Route path="/cropxon-cloud" element={<CropxonCloud />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            {!isLoading && <ScrollProgress />}
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AnimatedRoutes />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
