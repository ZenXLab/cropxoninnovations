import { useEffect, useState } from "react";
import EcosystemCanvas from "./EcosystemCanvas";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-[#050508] overflow-hidden">
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 20% 90%, rgba(6, 182, 212, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      {/* Top tagline */}
      <div 
        className={`pt-28 pb-8 px-8 text-center transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-[11px] font-medium text-muted-foreground/50 tracking-[0.3em] uppercase mb-4">
          Deep Technology Infrastructure
        </p>
        <h1 
          className="font-display font-bold text-foreground leading-[1.1]"
          style={{ 
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="block">Building the Operating</span>
          <span className="block text-primary/90">Layers of Tomorrow</span>
        </h1>
        <p 
          className="mt-6 text-muted-foreground/60 max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
        >
          Foundational systems for cognition, operations, and enterprise infrastructure.
        </p>
      </div>

      {/* Interactive Ecosystem Canvas */}
      <div 
        className={`flex-1 relative transition-all duration-1000 delay-300 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <EcosystemCanvas />
      </div>

      {/* Bottom indicator */}
      <div 
        className={`pb-8 text-center transition-all duration-1000 delay-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-[10px] text-muted-foreground/40 tracking-[0.25em] uppercase mb-3">
          Interact with the ecosystem
        </p>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/20 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
