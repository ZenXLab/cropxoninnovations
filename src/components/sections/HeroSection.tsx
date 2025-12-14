import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ComputationalBackground from "@/components/visuals/ComputationalBackground";
import VisionModal from "@/components/modals/VisionModal";
import useParallax from "@/hooks/useParallax";
import CropxonLogo from "@/components/brand/CropxonLogo";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [visionModalOpen, setVisionModalOpen] = useState(false);
  const { parallaxOffset } = useParallax();

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${parallaxOffset(0.3)}px)` }}
        >
          <ComputationalBackground />
        </div>

        {/* Content Container */}
        <div
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center"
          style={{ transform: `translateY(${parallaxOffset(0.1)}px)` }}
        >
          {/* Brand Mark */}
          <div
            className={`mb-8 sm:mb-10 flex justify-center transition-all duration-1000 ${
              showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative group text-foreground">
              <CropxonLogo variant="full" size="xl" colorMode="auto" />
              <span className="block text-xs sm:text-sm tracking-[0.4em] uppercase text-muted-foreground mt-4">
                Innovations
              </span>
            </div>
          </div>

          {/* Headline */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide mb-4 sm:mb-6 text-foreground px-2">
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
