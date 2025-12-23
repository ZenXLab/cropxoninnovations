import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { 
  Building2, 
  Landmark, 
  Heart, 
  Cpu, 
  Shield, 
  Radio, 
  Factory, 
  GraduationCap,
  Plane,
  ShoppingBag,
  Truck,
  Zap,
  LucideIcon
} from "lucide-react";

interface Industry {
  name: string;
  icon: LucideIcon;
  color: string;
}

const industries: Industry[] = [
  { name: "Banking & Finance", icon: Landmark, color: "hsl(160, 60%, 45%)" },
  { name: "Healthcare", icon: Heart, color: "hsl(350, 65%, 55%)" },
  { name: "Government", icon: Building2, color: "hsl(215, 70%, 55%)" },
  { name: "Technology", icon: Cpu, color: "hsl(265, 60%, 58%)" },
  { name: "Insurance", icon: Shield, color: "hsl(40, 75%, 50%)" },
  { name: "Telecommunications", icon: Radio, color: "hsl(185, 70%, 45%)" },
  { name: "Manufacturing", icon: Factory, color: "hsl(25, 75%, 52%)" },
  { name: "Education", icon: GraduationCap, color: "hsl(235, 65%, 58%)" },
  { name: "Aviation", icon: Plane, color: "hsl(195, 75%, 50%)" },
  { name: "Retail", icon: ShoppingBag, color: "hsl(330, 65%, 55%)" },
  { name: "Logistics", icon: Truck, color: "hsl(170, 60%, 42%)" },
  { name: "Energy", icon: Zap, color: "hsl(50, 80%, 48%)" },
];

const PartnersSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 relative bg-card/30 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-display text-[10px] sm:text-[11px] font-medium text-primary tracking-[0.25em] uppercase mb-4">
            Industries We Serve
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
            CROSS-INDUSTRY EXPERTISE
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our foundational systems power enterprises across regulated and mission-critical industries worldwide.
          </p>
        </div>

        {/* Industry Icons Grid */}
        <div 
          ref={gridRef} 
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5 max-w-5xl mx-auto"
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const isActive = activeIndustry === index;
            
            return (
              <div
                key={index}
                className={`group relative flex flex-col items-center justify-center p-4 lg:p-6 rounded-xl border bg-card/50 backdrop-blur-sm transition-all duration-500 ${
                  gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${isActive ? 'border-primary/40 shadow-xl scale-105 bg-card' : 'border-border/50 hover:border-primary/30 hover:shadow-lg hover:bg-card'}`}
                style={{ transitionDelay: getStaggerDelay(index, 40) }}
                onMouseEnter={() => setActiveIndustry(index)}
                onMouseLeave={() => setActiveIndustry(null)}
              >
                {/* Background glow */}
                <div 
                  className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    background: `radial-gradient(circle at center, ${industry.color.replace(')', ' / 0.12)')}, transparent 70%)`
                  }}
                />

                {/* Industry Icon with unique color */}
                <div 
                  className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-3 transition-all duration-500 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                  style={{ 
                    backgroundColor: isActive ? industry.color : `${industry.color.replace(')', ' / 0.1)')}`,
                    boxShadow: isActive ? `0 8px 24px ${industry.color.replace(')', ' / 0.35)')}` : 'none'
                  }}
                >
                  <IconComponent 
                    className={`w-5 h-5 lg:w-6 lg:h-6 transition-all duration-300 ${isActive ? 'text-white' : ''}`}
                    style={{ color: isActive ? 'white' : industry.color }}
                    strokeWidth={1.5} 
                  />
                </div>
                
                {/* Industry Name */}
                <span className={`relative font-mono text-[9px] lg:text-[10px] uppercase tracking-wider text-center transition-colors duration-300 ${
                  isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                }`}>
                  {industry.name}
                </span>

                {/* Active indicator dot */}
                <div 
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ backgroundColor: industry.color }}
                />
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div 
          className={`mt-12 flex flex-wrap justify-center gap-8 lg:gap-16 transition-all duration-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          {[
            { value: "12+", label: "Industries" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "Enterprise", label: "Grade Security" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Line */}
        <div 
          className={`mt-8 flex flex-wrap justify-center items-center gap-2 lg:gap-3 transition-all duration-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <span className="text-[9px] font-mono text-muted-foreground/60 uppercase tracking-wider">Compliant with</span>
          {["SOC 2", "GDPR", "HIPAA", "ISO 27001", "PCI DSS"].map((badge, index) => (
            <span 
              key={index}
              className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-muted-foreground border border-border/40 rounded-full bg-background/50 hover:border-primary/30 hover:text-foreground transition-all duration-300"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
