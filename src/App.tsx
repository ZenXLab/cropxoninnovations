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
import ScrollToTop from "@/components/ScrollToTop";
import PWAInstallBanner from "@/components/PWAInstallBanner";
import PushNotificationPrompt from "@/components/PushNotificationPrompt";
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
import ZenithInstitute from "./pages/products/ZenithInstitute";
import Cognix from "./pages/products/Cognix";
import Qualyx from "./pages/products/Qualyx";
import Huminex from "./pages/products/Huminex";
import Opzenix from "./pages/products/Opzenix";
import ZenithStudio from "./pages/products/ZenithStudio";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Search from "./pages/Search";
import TermsAndConditions from "./pages/policies/TermsAndConditions";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import RefundPolicy from "./pages/policies/RefundPolicy";
import CookiePolicy from "./pages/policies/CookiePolicy";
import SecurityPolicy from "./pages/policies/SecurityPolicy";
import AcceptableUsePolicy from "./pages/policies/AcceptableUsePolicy";
import ServiceLevelAgreement from "./pages/policies/ServiceLevelAgreement";
import DataProcessingAgreement from "./pages/policies/DataProcessingAgreement";

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
    // Scroll to top on route change
    window.scrollTo(0, 0);
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
        className={`transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
          showContent 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-3 scale-[0.995]'
        }`}
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
          <Route path="/zenith-institute" element={<ZenithInstitute />} />
          <Route path="/cognix" element={<Cognix />} />
          <Route path="/qualyx" element={<Qualyx />} />
          <Route path="/huminex" element={<Huminex />} />
          <Route path="/opzenix" element={<Opzenix />} />
          <Route path="/zenith-studio" element={<ZenithStudio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/search" element={<Search />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/security" element={<SecurityPolicy />} />
          <Route path="/acceptable-use" element={<AcceptableUsePolicy />} />
          <Route path="/sla" element={<ServiceLevelAgreement />} />
          <Route path="/dpa" element={<DataProcessingAgreement />} />
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
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            {isInitialLoading && <LoadingScreen onComplete={() => setIsInitialLoading(false)} />}
            {!isInitialLoading && <ScrollProgress />}
            <Toaster />
            <Sonner />
            <BrowserRouter>
              {!isInitialLoading && <AnimatedRoutes />}
              {!isInitialLoading && <PWAInstallBanner />}
              {!isInitialLoading && <PushNotificationPrompt />}
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
