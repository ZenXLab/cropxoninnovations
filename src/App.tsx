import React, { useState, useEffect, useRef } from "react";
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
import SurveillanceDrone from "@/components/SurveillanceDrone";
import CommandPalette from "@/components/CommandPalette";
import PlatformQuickNav from "@/components/PlatformQuickNav";
import PlatformWizard from "@/components/PlatformWizard";
import Index from "./pages/Index";
import PlatformShowcase from "./pages/PlatformShowcase";
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
import Proxinex from "./pages/products/Proxinex";
import Chronyx from "./pages/products/Chronyx";
import Convertix from "./pages/products/Convertix";
import Finioraa from "./pages/products/Finioraa";
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

// Page transition wrapper with smooth transitions between product pages
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [isProductTransition, setIsProductTransition] = useState(false);
  const prevPathRef = React.useRef(location.pathname);

  // Check if transitioning between product pages for smoother transitions
  const productRoutes = ['/cognix', '/qualyx', '/huminex', '/opzenix', '/traceflow', '/zenith-studio', '/zenith-institute', '/originx-labs', '/proxinex', '/chronyx', '/convertix', '/finioraa', '/atlas', '/cropxon-cloud', '/robotics'];
  
  useEffect(() => {
    const prevPath = prevPathRef.current;
    const isFromProduct = productRoutes.some(route => prevPath.startsWith(route));
    const isToProduct = productRoutes.some(route => location.pathname.startsWith(route));
    
    // Faster transition between product pages
    if (isFromProduct && isToProduct && prevPath !== location.pathname) {
      setIsProductTransition(true);
      setShowContent(false);
      window.scrollTo(0, 0);
      
      // Quick fade for product-to-product navigation
      setTimeout(() => {
        setShowContent(true);
        setIsProductTransition(false);
      }, 150);
    } else if (prevPath !== location.pathname) {
      // Full loading screen for other navigations
      setIsPageLoading(true);
      setShowContent(false);
      window.scrollTo(0, 0);
    }
    
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  const handleLoadingComplete = () => {
    setIsPageLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {isPageLoading && !isProductTransition && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div 
        key={location.pathname}
        className={`transition-all ${isProductTransition ? 'duration-200' : 'duration-500'} ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
          showContent 
            ? 'opacity-100 translate-y-0 scale-100' 
            : `opacity-0 ${isProductTransition ? 'translate-x-2' : 'translate-y-3'} scale-[0.998]`
        }`}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/showcase" element={<PlatformShowcase />} />
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
          <Route path="/proxinex" element={<Proxinex />} />
          <Route path="/chronyx" element={<Chronyx />} />
          <Route path="/convertix" element={<Convertix />} />
          <Route path="/finioraa" element={<Finioraa />} />
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
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  // Expose wizard opener globally
  useEffect(() => {
    (window as any).openPlatformWizard = () => setIsWizardOpen(true);
    return () => {
      delete (window as any).openPlatformWizard;
    };
  }, []);

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
              {!isInitialLoading && <CommandPalette />}
              {!isInitialLoading && <PlatformQuickNav />}
              {!isInitialLoading && <PlatformWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />}
              {!isInitialLoading && <AnimatedRoutes />}
              {!isInitialLoading && <PWAInstallBanner />}
              {!isInitialLoading && <PushNotificationPrompt />}
              {!isInitialLoading && <SurveillanceDrone />}
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
