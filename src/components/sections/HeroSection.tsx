import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ComputationalBackground from "@/components/visuals/ComputationalBackground";
import VisionModal from "@/components/modals/VisionModal";
import cropxonLogo from "@/assets/cropxon-logo-full.png";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [visionModalOpen, setVisionModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <ComputationalBackground />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          {/* Logo */}
          <div
            className={`mb-6 sm:mb-8 flex justify-center transition-all duration-1000 ${
              showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <img
                src={cropxonLogo}
                alt="Cropxon Innovations"
                className="w-48 h-auto sm:w-56 md:w-72 lg:w-80 object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Headline */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
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
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => setVisionModalOpen(true)}
              >
                View Our Vision
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
                SCROLL
              </span>
              <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Modal */}
      <VisionModal isOpen={visionModalOpen} onClose={() => setVisionModalOpen(false)} />
    </>
  );
};

export default HeroSection;