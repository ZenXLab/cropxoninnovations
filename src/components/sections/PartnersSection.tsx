import useScrollAnimation from "@/hooks/useScrollAnimation";
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
  bgColor: string;
  borderColor: string;
  glowColor: string;
}

const industries: Industry[] = [
  { 
    name: "Banking & Finance", 
    icon: Landmark,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    glowColor: "shadow-[0_0_30px_rgba(52,211,153,0.3)]"
  },
  { 
    name: "Healthcare", 
    icon: Heart,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    glowColor: "shadow-[0_0_30px_rgba(251,113,133,0.3)]"
  },
  { 
    name: "Government", 
    icon: Building2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    glowColor: "shadow-[0_0_30px_rgba(96,165,250,0.3)]"
  },
  { 
    name: "Technology", 
    icon: Cpu,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    glowColor: "shadow-[0_0_30px_rgba(167,139,250,0.3)]"
  },
  { 
    name: "Insurance", 
    icon: Shield,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    glowColor: "shadow-[0_0_30px_rgba(251,191,36,0.3)]"
  },
  { 
    name: "Telecommunications", 
    icon: Radio,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    glowColor: "shadow-[0_0_30px_rgba(34,211,238,0.3)]"
  },
  { 
    name: "Manufacturing", 
    icon: Factory,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    glowColor: "shadow-[0_0_30px_rgba(251,146,60,0.3)]"
  },
  { 
    name: "Education", 
    icon: GraduationCap,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    glowColor: "shadow-[0_0_30px_rgba(129,140,248,0.3)]"
  },
  { 
    name: "Aviation", 
    icon: Plane,
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    glowColor: "shadow-[0_0_30px_rgba(56,189,248,0.3)]"
  },
  { 
    name: "Retail", 
    icon: ShoppingBag,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    glowColor: "shadow-[0_0_30px_rgba(244,114,182,0.3)]"
  },
  { 
    name: "Logistics", 
    icon: Truck,
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    glowColor: "shadow-[0_0_30px_rgba(45,212,191,0.3)]"
  },
  { 
    name: "Energy", 
    icon: Zap,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    glowColor: "shadow-[0_0_30px_rgba(250,204,21,0.3)]"
  },
];

const PartnersSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-24 relative bg-card/30">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs text-primary uppercase tracking-widest mb-3 block">
            Industries We Serve
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-wide mb-4">
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
            return (
              <div
                key={index}
                className={`group flex flex-col items-center justify-center p-4 lg:p-5 rounded-sm border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 ${
                  gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {/* Industry Icon with unique color */}
                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full ${industry.bgColor} border ${industry.borderColor} flex items-center justify-center mb-3 transition-all duration-500`}>
                  <IconComponent className={`w-5 h-5 lg:w-6 lg:h-6 ${industry.color} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                </div>
                
                {/* Industry Name */}
                <span className="font-mono text-[9px] lg:text-[10px] text-muted-foreground uppercase tracking-wider text-center group-hover:text-foreground transition-colors duration-300">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div 
          className={`mt-10 flex flex-wrap justify-center gap-8 lg:gap-16 transition-all duration-700 delay-500 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "12+", label: "Industries" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "Enterprise", label: "Grade Security" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-1">
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
          className={`mt-8 flex flex-wrap justify-center items-center gap-2 lg:gap-3 transition-all duration-700 delay-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[9px] font-mono text-muted-foreground/60 uppercase tracking-wider">Compliant with</span>
          {["SOC 2", "GDPR", "HIPAA", "ISO 27001", "PCI DSS"].map((badge, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider text-muted-foreground border border-border/40 rounded-sm bg-background/50"
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
