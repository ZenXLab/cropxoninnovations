import { useEffect, useState } from "react";
import VisionModal from "@/components/modals/VisionModal";
import cropxonLogo from "@/assets/cropxon-logo.svg";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [visionModalOpen, setVisionModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Cinematic Background - Subtle animated grid/starfield */}
        <div className="absolute inset-0">
          {/* Deep base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          
          {/* Subtle radial accent - very minimal */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] pointer-events-none opacity-40"
            style={{
              background: "radial-gradient(ellipse 50% 50% at 50% 50%, hsl(var(--primary) / 0.04) 0%, transparent 70%)",
            }}
          />
          
          {/* Animated subtle grid lines */}
          <div className="absolute inset-0 opacity-[0.015]">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          {/* Floating data points - very subtle */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-foreground/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${15 + Math.random() * 20}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">
          {/* Logo - Transparent, no container, premium presentation */}
          <div
            className={`mb-14 sm:mb-16 lg:mb-20 flex justify-center transition-all duration-1000 ease-out ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative">
              {/* Very subtle CSS glow - external, professional */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.25) 0%, transparent 55%)",
                  filter: "blur(60px)",
                  transform: "scale(2.5)",
                }}
              />
              <img 
                src={cropxonLogo} 
                alt="CropXon Innovations" 
                className="relative h-28 sm:h-36 md:h-44 lg:h-52 xl:h-60 w-auto"
              />
            </div>
          </div>

          {/* Headline - Large, bold, inevitable */}
          <div
            className={`transition-all duration-1000 delay-150 ease-out ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-[0.02em] mb-6 lg:mb-8 text-foreground/95 leading-tight">
              BUILDING THE FOUNDATIONAL SYSTEMS.
            </h1>

            {/* Sub-headline - Architectural statement */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground/60 max-w-xl mx-auto mb-12 lg:mb-16 font-light tracking-wide leading-relaxed">
              Operating layers for work, intelligence, and infrastructure.
            </p>

            {/* CTAs - Deliberate, heavy, no gimmicks */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Button - Solid, deliberate */}
              <a
                href="#ecosystem"
                className="group inline-flex items-center justify-center h-11 px-8 text-[11px] font-medium uppercase tracking-[0.15em] bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
              >
                Explore the Ecosystem
              </a>
              
              {/* Secondary Button - Outline only */}
              <button
                onClick={() => setVisionModalOpen(true)}
                className="inline-flex items-center justify-center h-11 px-8 text-[11px] font-medium uppercase tracking-[0.15em] border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors duration-300 bg-transparent"
              >
                View Our Vision
              </button>
            </div>
          </div>

          {/* Scroll Indicator - Minimal */}
          <div
            className={`absolute bottom-10 lg:bottom-14 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-[9px] text-muted-foreground/40 uppercase tracking-[0.4em] font-light">
                Scroll
              </span>
              <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Modal */}
      <VisionModal isOpen={visionModalOpen} onClose={() => setVisionModalOpen(false)} />

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0); 
            opacity: 0.2;
          }
          50% { 
            transform: translate(10px, -20px); 
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
