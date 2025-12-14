import { useState, useEffect } from "react";
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
import DesignPrinciples from "./pages/DesignPrinciples";
import SystemsNotProducts from "./pages/SystemsNotProducts";
import Architecture from "./pages/Architecture";
import PlatformConsoles from "./pages/PlatformConsoles";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Atlas from "./pages/products/Atlas";
import Traceflow from "./pages/products/Traceflow";
import OriginxLabs from "./pages/products/OriginxLabs";
import CropxonCloud from "./pages/products/CropxonCloud";
import Robotics from "./pages/products/Robotics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Page transition wrapper with loading screen
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Show loading screen on route change (except initial load)
    setIsPageLoading(true);
    setShowContent(false);
  }, [location.pathname]);

  const handleLoadingComplete = () => {
    setIsPageLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {isPageLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div 
        key={location.pathname}
        className={`transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/company" element={<CompanyProfile />} />
          <Route path="/how-we-think" element={<HowWeThink />} />
          <Route path="/design-principles" element={<DesignPrinciples />} />
          <Route path="/systems-not-products" element={<SystemsNotProducts />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/platforms" element={<PlatformConsoles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/traceflow" element={<Traceflow />} />
          <Route path="/originx-labs" element={<OriginxLabs />} />
          <Route path="/cropxon-cloud" element={<CropxonCloud />} />
          <Route path="/robotics" element={<Robotics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            {isInitialLoading && <LoadingScreen onComplete={() => setIsInitialLoading(false)} />}
            {!isInitialLoading && <ScrollProgress />}
            <Toaster />
            <Sonner />
            <BrowserRouter>
              {!isInitialLoading && <AnimatedRoutes />}
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
