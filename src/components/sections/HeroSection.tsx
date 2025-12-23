import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import EcosystemCanvas from "./EcosystemCanvas";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('ecosystem');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Layered gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 60% at 50% -10%, hsl(var(--primary) / 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 80% 50% at 85% 100%, hsl(260 60% 55% / 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 70% 40% at 10% 90%, hsl(200 70% 50% / 0.06) 0%, transparent 50%)
            `,
          }}
        />
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Top tagline */}
      <div 
        className={`pt-24 sm:pt-28 pb-4 sm:pb-6 px-6 sm:px-8 text-center transition-all duration-1000 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p 
          className="text-muted-foreground/50 tracking-[0.25em] uppercase mb-5"
          style={{ fontSize: 'clamp(9px, 1.2vw, 11px)' }}
        >
          Deep Technology Infrastructure
        </p>
        <h1 
          className="font-display font-bold text-foreground leading-[1.08]"
          style={{ 
            fontSize: "clamp(1.75rem, 5.5vw, 4rem)",
            letterSpacing: "-0.025em",
          }}
        >
          <span className="block">Building the Operating</span>
          <span 
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(260 60% 60%) 50%, hsl(200 70% 55%) 100%)',
            }}
          >
            Layers of Tomorrow
          </span>
        </h1>
        <p 
          className="mt-5 sm:mt-6 text-muted-foreground/65 max-w-lg mx-auto leading-relaxed font-light"
          style={{ fontSize: "clamp(0.875rem, 1.8vw, 1.1rem)" }}
        >
          Foundational systems for cognition, operations, and enterprise infrastructure.
        </p>
      </div>

      {/* Interactive Ecosystem Canvas */}
      <div 
        className={`flex-1 relative transition-all duration-1000 delay-200 ease-out ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
        }`}
      >
        <EcosystemCanvas />
      </div>

      {/* Bottom scroll indicator */}
      <div 
        className={`pb-6 sm:pb-8 flex flex-col items-center transition-all duration-1000 delay-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300"
        >
          <span 
            className="tracking-[0.2em] uppercase"
            style={{ fontSize: '9px' }}
          >
            Explore
          </span>
          <div className="relative">
            <ChevronDown 
              className="w-5 h-5 animate-bounce"
              style={{ animationDuration: '2s' }}
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
