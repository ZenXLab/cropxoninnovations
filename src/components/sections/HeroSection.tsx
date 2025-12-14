import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ComputationalBackground from "@/components/visuals/ComputationalBackground";
import VisionModal from "@/components/modals/VisionModal";
const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [visionModalOpen, setVisionModalOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);
  return <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <ComputationalBackground />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          {/* Logo Mark */}
          <div className={`mb-6 sm:mb-8 flex justify-center transition-all duration-1000 ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative">
              {/* Stylized X Logo Mark */}
              <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* X shape with circuitry */}
                <path d="M20 20L40 40M40 40L60 60M60 20L40 40M40 40L20 60" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" />
                {/* Circuit nodes */}
                <circle cx="20" cy="20" r="4" fill="hsl(234, 55%, 50%)" />
                <circle cx="60" cy="20" r="4" fill="hsl(234, 55%, 50%)" />
                <circle cx="20" cy="60" r="4" fill="hsl(249, 90%, 68%)" />
                <circle cx="60" cy="60" r="4" fill="hsl(249, 90%, 68%)" />
                <circle cx="40" cy="40" r="6" fill="hsl(234, 55%, 50%)" />
                {/* Circuit traces */}
                <path d="M65 18L75 8M75 8L75 20M75 8L68 8" stroke="hsl(249, 90%, 68%)" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="75" cy="8" r="2" fill="hsl(249, 90%, 68%)" />
                <defs>
                  <linearGradient id="gradient" x1="20" y1="20" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="hsl(234, 55%, 50%)" />
                    <stop offset="1" stopColor="hsl(249, 90%, 68%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Brand Name */}
          <div className={`mb-10 sm:mb-16 transition-all duration-1000 delay-100 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.15em] sm:tracking-[0.2em] text-foreground mb-2">
              CROPXON
            </h2>
            <span className="font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-[0.3em] sm:tracking-[0.4em] uppercase">
              Innovations
            </span>
          </div>

          {/* Headline */}
          <div className={`transition-all duration-1000 delay-200 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide mb-4 sm:mb-6 text-foreground px-2">
              BUILDING THE FOUNDATIONAL SYSTEMS.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 font-light tracking-wide px-4">
              Operating layers for work, intelligence, and infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Button variant="heroPrimary" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#ecosystem">Explore the Ecosystem</a>
              </Button>
              <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={() => setVisionModalOpen(true)}>
                View Our Vision
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${showContent ? "opacity-100" : "opacity-0"}`}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">SCROLL</span>
              <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Modal */}
      <VisionModal isOpen={visionModalOpen} onClose={() => setVisionModalOpen(false)} />
    </>;
};
export default HeroSection;