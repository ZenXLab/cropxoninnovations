import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { Boxes, Shield, Layers, Building2 } from "lucide-react";
import { useState } from "react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: Boxes,
    title: "Unified Architecture",
    description: "Shared primitives across all platforms, ensuring consistency and interoperability at every layer.",
    color: "hsl(220, 70%, 55%)",
  },
  {
    icon: Shield,
    title: "Shared Security Primitives",
    description: "Enterprise-grade security built into the foundation, not bolted on as an afterthought.",
    color: "hsl(145, 55%, 45%)",
  },
  {
    icon: Layers,
    title: "Platform-First Engineering",
    description: "Every product extends from a common platform layer designed for infinite composability.",
    color: "hsl(260, 60%, 58%)",
  },
  {
    icon: Building2,
    title: "Built for Regulated Industries",
    description: "Compliance-ready infrastructure for finance, healthcare, government, and enterprise.",
    color: "hsl(25, 75%, 52%)",
  },
];

const WhyCropxonSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 20% 80%, hsl(var(--primary) / 0.03) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-display text-[10px] sm:text-[11px] font-medium text-primary tracking-[0.25em] uppercase mb-4">
            Why Cropxon
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            FOUNDATIONAL PRINCIPLES
          </h2>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                className={`group relative p-6 lg:p-8 bg-card/80 backdrop-blur-sm border rounded-2xl transition-all duration-500 ${
                  gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${isActive ? 'border-primary/40 shadow-xl scale-[1.02]' : 'border-border/50 hover:border-primary/30 hover:shadow-lg'}`}
                style={{ transitionDelay: getStaggerDelay(index, 100) }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Background glow */}
                <div 
                  className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl transition-all duration-700 ${
                    isActive ? 'opacity-25' : 'opacity-0'
                  }`}
                  style={{ backgroundColor: feature.color }}
                />

                {/* Icon container with animation */}
                <div 
                  className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                  style={{ 
                    backgroundColor: isActive ? feature.color : `${feature.color.replace(')', ' / 0.12)')}`,
                    boxShadow: isActive ? `0 8px 24px ${feature.color.replace(')', ' / 0.3)')}` : 'none'
                  }}
                >
                  <Icon className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-white' : 'text-foreground'}`} />
                  
                  {/* Pulse ring on hover */}
                  {isActive && (
                    <div 
                      className="absolute inset-0 rounded-xl animate-ping opacity-20"
                      style={{ backgroundColor: feature.color }}
                    />
                  )}
                </div>

                {/* Content */}
                <h3 className={`relative font-display text-lg lg:text-xl font-bold mb-3 transition-colors duration-300 ${
                  isActive ? 'text-foreground' : 'text-foreground/90'
                }`}>
                  {feature.title}
                </h3>
                <p className={`relative text-sm leading-relaxed transition-colors duration-300 ${
                  isActive ? 'text-foreground/80' : 'text-muted-foreground'
                }`}>
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div 
                  className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundColor: feature.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCropxonSection;
