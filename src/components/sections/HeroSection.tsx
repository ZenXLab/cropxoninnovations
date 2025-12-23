import { useEffect, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import EcosystemCanvas from "./EcosystemCanvas";
import { PlatformDashboard, platformsData } from "./PlatformDashboard";
import FullscreenDashboardModal from "@/components/modals/FullscreenDashboardModal";
import PlatformDemoModal from "@/components/modals/PlatformDemoModal";
import type { PlatformData } from "./PlatformDashboard";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedPlatformId, setSelectedPlatformId] = useState<string | null>('cognix');
  const [modalPlatform, setModalPlatform] = useState<PlatformData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [demoPlatformId, setDemoPlatformId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('ecosystem-preview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlatformSelect = useCallback((platformId: string | null) => {
    setSelectedPlatformId(platformId);
  }, []);

  const handleOpenFullscreen = useCallback((platform: PlatformData) => {
    setModalPlatform(platform);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setModalPlatform(null);
  }, []);

  const handlePlatformDemo = useCallback((platformId: string) => {
    setDemoPlatformId(platformId);
  }, []);

  const handleCloseDemoModal = useCallback(() => {
    setDemoPlatformId(null);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 dark:opacity-100 opacity-50"
          style={{
            background: `
              radial-gradient(ellipse 100% 60% at 50% -10%, hsl(var(--primary) / 0.1) 0%, transparent 60%),
              radial-gradient(ellipse 80% 50% at 85% 100%, hsl(var(--accent) / 0.05) 0%, transparent 50%),
              radial-gradient(ellipse 70% 40% at 10% 90%, hsl(var(--secondary) / 0.06) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Header content */}
      <div 
        className={`pt-20 sm:pt-24 pb-2 px-4 sm:px-6 text-center lg:text-left lg:px-8 lg:max-w-7xl lg:mx-auto lg:w-full transition-all duration-1000 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="font-display text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-[0.25em] uppercase mb-3">
          Deep Technology Infrastructure
        </p>
        <h1 className="font-display font-bold text-foreground leading-[1.08]" style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}>
          <span className="block">Building the Operating</span>
          <span className="block text-primary">Layers of Tomorrow</span>
        </h1>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed" style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.95rem)" }}>
          Foundational systems for cognition, operations, and enterprise infrastructure.
        </p>
      </div>

      {/* Main Content - Split Layout */}
      <div className={`flex-1 relative flex flex-col lg:flex-row lg:items-stretch lg:px-4 xl:px-8 lg:max-w-[1800px] lg:mx-auto lg:w-full transition-all duration-1000 delay-200 ease-out ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
        {/* Left Side - Ecosystem Canvas */}
        <div className="lg:w-[280px] xl:w-[320px] shrink-0 relative min-h-[300px] sm:min-h-[340px] lg:min-h-0 lg:py-4">
          <div className="h-full w-full lg:border-r lg:border-border/20 lg:pr-4">
            <EcosystemCanvas 
              onPlatformHover={handlePlatformSelect} 
              onPlatformDemo={handlePlatformDemo}
            />
          </div>
        </div>

        {/* Right Side - Platform Dashboard */}
        <div className="hidden lg:flex flex-1 py-4 pl-4 min-h-[480px]">
          <div className={`w-full h-full transition-all duration-500 ${selectedPlatformId ? 'opacity-100 translate-x-0' : 'opacity-80'}`}>
            <PlatformDashboard 
              platformId={selectedPlatformId || 'cognix'} 
              onOpenFullscreen={handleOpenFullscreen}
              expanded
            />
          </div>
        </div>
      </div>

      {/* Mobile Dashboard Preview */}
      <div className={`lg:hidden px-4 pb-4 transition-all duration-500 ${selectedPlatformId ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <div className="h-[280px]">
          <PlatformDashboard 
            platformId={selectedPlatformId} 
            onOpenFullscreen={handleOpenFullscreen}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`pb-4 sm:pb-6 flex flex-col items-center transition-all duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <button onClick={scrollToNextSection} className="group flex flex-col items-center gap-1.5 text-muted-foreground/40 hover:text-muted-foreground transition-colors">
          <span className="font-display text-[8px] tracking-[0.2em] uppercase">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" style={{ animationDuration: '2s' }} />
        </button>
      </div>

      {/* Fullscreen Dashboard Modal */}
      <FullscreenDashboardModal 
        platform={modalPlatform}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Platform Demo Modal */}
      <PlatformDemoModal
        isOpen={!!demoPlatformId}
        onClose={handleCloseDemoModal}
        platformId={demoPlatformId}
      />
    </section>
  );
};

export default HeroSection;
