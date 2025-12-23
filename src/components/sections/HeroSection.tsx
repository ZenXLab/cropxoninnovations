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
        <div 
          className="absolute inset-0 opacity-[0.012] dark:opacity-[0.018]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Header content */}
      <div 
        className={`pt-24 sm:pt-28 pb-2 sm:pb-4 px-6 sm:px-8 text-center transition-all duration-1000 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="font-display text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-[0.25em] uppercase mb-4 sm:mb-5">
          Deep Technology Infrastructure
        </p>
        <h1 className="font-display font-bold text-foreground leading-[1.08]" style={{ fontSize: "clamp(1.75rem, 6vw, 4rem)", letterSpacing: "-0.02em" }}>
          <span className="block">Building the Operating</span>
          <span className="block text-primary">Layers of Tomorrow</span>
        </h1>
        <p className="mt-4 sm:mt-5 text-muted-foreground max-w-lg mx-auto leading-relaxed" style={{ fontSize: "clamp(0.875rem, 1.8vw, 1.05rem)" }}>
          Foundational systems for cognition, operations, and enterprise infrastructure.
        </p>
      </div>

      {/* Ecosystem Canvas */}
      <div className={`flex-1 relative transition-all duration-1000 delay-200 ease-out ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
        <EcosystemCanvas />
      </div>

      {/* Scroll indicator */}
      <div className={`pb-6 sm:pb-8 flex flex-col items-center transition-all duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <button onClick={scrollToNextSection} className="group flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground transition-colors">
          <span className="font-display text-[9px] tracking-[0.2em] uppercase">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" style={{ animationDuration: '2s' }} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
