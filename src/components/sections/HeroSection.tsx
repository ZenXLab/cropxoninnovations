import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ComputationalBackground from "@/components/visuals/ComputationalBackground";
import VisionModal from "@/components/modals/VisionModal";
import useParallax from "@/hooks/useParallax";
import cropxonLogo from "@/assets/cropxon-logo.svg";

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

        {/* Ambient light effects */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsla(234, 55%, 50%, 0.08) 0%, transparent 70%)",
            transform: `translateY(${parallaxOffset(0.15)}px)`,
            filter: "blur(60px)",
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsla(260, 50%, 45%, 0.06) 0%, transparent 70%)",
            transform: `translateY(${parallaxOffset(0.2)}px)`,
            filter: "blur(80px)",
          }}
        />

        {/* Content Container */}
        <div
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center"
          style={{ transform: `translateY(${parallaxOffset(0.1)}px)` }}
        >
          {/* Brand Mark */}
          <div
            className={`mb-8 sm:mb-12 flex justify-center transition-all duration-1000 ${
              showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative group">
              {/* Subtle glow behind logo */}
              <div 
                className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(ellipse at center, hsla(234, 55%, 50%, 0.3) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  transform: "scale(1.5)",
                }}
              />
              {/* Logo Image */}
              <img 
                src={cropxonLogo} 
                alt="CropXon Innovations" 
                className="relative z-10 h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain drop-shadow-2xl"
              />
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

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-14 font-light tracking-wide px-4">
              Operating layers for work, intelligence, and infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 px-4">
              <Button variant="heroPrimary" size="lg" className="w-full sm:w-auto min-w-[200px]" asChild>
                <a href="#ecosystem">Explore the Ecosystem</a>
              </Button>
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
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
            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.3em] font-light">
                SCROLL
              </span>
              <div className="relative w-px h-10 sm:h-14 overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-muted-foreground/60 via-muted-foreground/30 to-transparent"
                  style={{
                    animation: "scrollPulse 2s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Modal */}
      <VisionModal isOpen={visionModalOpen} onClose={() => setVisionModalOpen(false)} />

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(8px); }
        }
      `}</style>
    </>
  );
};

export default HeroSection;