import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import CompanyProfile from "./pages/CompanyProfile";
import Atlas from "./pages/products/Atlas";
import Traceflow from "./pages/products/Traceflow";
import OriginxLabs from "./pages/products/OriginxLabs";
import CropxonCloud from "./pages/products/CropxonCloud";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/company" element={<CompanyProfile />} />
                <Route path="/atlas" element={<Atlas />} />
                <Route path="/traceflow" element={<Traceflow />} />
                <Route path="/originx-labs" element={<OriginxLabs />} />
                <Route path="/cropxon-cloud" element={<CropxonCloud />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
