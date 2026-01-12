import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronDown } from "lucide-react";
import EcosystemCanvas from "./EcosystemCanvas";
import { PlatformDashboard, platformsData } from "./PlatformDashboard";
import FullscreenDashboardModal from "@/components/modals/FullscreenDashboardModal";
import FloatingParticles from "@/components/visuals/FloatingParticles";
import type { PlatformData } from "./PlatformDashboard";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedPlatformId, setSelectedPlatformId] = useState<string | null>(null);
  const [modalPlatform, setModalPlatform] = useState<PlatformData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Calculate parallax values
  const parallaxOffset = scrollY * 0.3;
  const opacityFade = Math.max(0, 1 - scrollY / 600);
  const scaleEffect = 1 + scrollY * 0.0002;

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Animated Gradient background with parallax */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px)`,
        }}
      >
        <div 
          className="absolute inset-0 dark:opacity-100 opacity-50"
          style={{
            background: `
              radial-gradient(ellipse 100% 60% at 50% -10%, hsl(var(--primary) / 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 80% 50% at 85% 100%, hsl(var(--accent) / 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 70% 40% at 10% 90%, hsl(var(--secondary) / 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Animated orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 dark:opacity-30"
          style={{
            background: 'hsl(var(--primary) / 0.3)',
            top: '-20%',
            left: '10%',
            transform: `translate(${Math.sin(scrollY * 0.002) * 30}px, ${parallaxOffset * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 dark:opacity-25"
          style={{
            background: 'hsl(var(--accent) / 0.4)',
            bottom: '10%',
            right: '5%',
            transform: `translate(${Math.cos(scrollY * 0.002) * 25}px, ${-parallaxOffset * 0.2}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-10 dark:opacity-20"
          style={{
            background: 'hsl(var(--secondary) / 0.5)',
            top: '40%',
            left: '60%',
            transform: `translate(${Math.sin(scrollY * 0.003) * 20}px, ${parallaxOffset * 0.15}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Header content with parallax */}
      <div 
        className={`pt-20 sm:pt-24 pb-2 px-4 sm:px-6 text-center lg:text-left lg:px-8 lg:max-w-7xl lg:mx-auto lg:w-full transition-all duration-1000 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{
          transform: `translateY(${parallaxOffset * 0.1}px) scale(${scaleEffect})`,
          opacity: opacityFade,
        }}
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
        {/* Left Side - Ecosystem Canvas (Compact & Fixed Width) */}
        <div className="lg:w-[280px] xl:w-[320px] shrink-0 relative min-h-[300px] sm:min-h-[340px] lg:min-h-0 lg:py-4">
          <div className="h-full w-full lg:border-r lg:border-border/20 lg:pr-4">
            <EcosystemCanvas onPlatformHover={handlePlatformSelect} />
          </div>
        </div>

        {/* Right Side - Platform Dashboard (Expanded - Takes remaining space) */}
        <div className="hidden lg:flex flex-1 py-4 pl-4 min-h-[480px]">
          <div className={`w-full h-full transition-all duration-500 ${selectedPlatformId ? 'opacity-100 translate-x-0' : 'opacity-80'}`}>
            <PlatformDashboard 
              platformId={selectedPlatformId || 'traceflow'} 
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
    </section>
  );
};

export default HeroSection;
