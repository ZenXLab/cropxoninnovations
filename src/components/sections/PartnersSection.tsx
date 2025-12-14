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
  Zap
} from "lucide-react";

const industries = [
  { name: "Banking & Finance", icon: Landmark },
  { name: "Healthcare", icon: Heart },
  { name: "Government", icon: Building2 },
  { name: "Technology", icon: Cpu },
  { name: "Insurance", icon: Shield },
  { name: "Telecommunications", icon: Radio },
  { name: "Manufacturing", icon: Factory },
  { name: "Education", icon: GraduationCap },
  { name: "Aviation", icon: Plane },
  { name: "Retail", icon: ShoppingBag },
  { name: "Logistics", icon: Truck },
  { name: "Energy", icon: Zap },
];

const PartnersSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 relative bg-card/30">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-sm text-primary uppercase tracking-widest mb-4 block">
            Industries We Serve
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-wide mb-6">
            CROSS-INDUSTRY EXPERTISE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Our foundational systems power enterprises across regulated and mission-critical industries worldwide.
          </p>
        </div>

        {/* Industry Icons Grid */}
        <div 
          ref={gridRef} 
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className={`group flex flex-col items-center justify-center p-6 lg:p-8 rounded-sm border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card transition-all duration-500 ${
                  gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {/* Industry Icon */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500">
                  <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                
                {/* Industry Name */}
                <span className="font-mono text-[10px] lg:text-[11px] text-muted-foreground uppercase tracking-wider text-center group-hover:text-foreground transition-colors duration-300">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div 
          className={`mt-20 flex flex-wrap justify-center gap-12 lg:gap-20 transition-all duration-700 delay-500 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "12+", label: "Industries" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "Enterprise", label: "Grade Security" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Line */}
        <div 
          className={`mt-16 flex flex-wrap justify-center items-center gap-3 lg:gap-4 transition-all duration-700 delay-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Compliant with</span>
          {["SOC 2", "GDPR", "HIPAA", "ISO 27001", "PCI DSS"].map((badge, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border/40 rounded-sm bg-background/50"
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
