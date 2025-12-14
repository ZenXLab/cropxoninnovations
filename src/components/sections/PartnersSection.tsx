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
  { 
    name: "Banking & Finance", 
    icon: Landmark,
    companies: ["HDFC", "ICICI", "SBI", "Axis"]
  },
  { 
    name: "Healthcare", 
    icon: Heart,
    companies: ["Apollo", "Fortis", "Max", "AIIMS"]
  },
  { 
    name: "Government", 
    icon: Building2,
    companies: ["NIC", "UIDAI", "GSTN", "DigiLocker"]
  },
  { 
    name: "Technology", 
    icon: Cpu,
    companies: ["Infosys", "TCS", "Wipro", "HCL"]
  },
  { 
    name: "Insurance", 
    icon: Shield,
    companies: ["LIC", "ICICI Pru", "HDFC Life", "SBI Life"]
  },
  { 
    name: "Telecom", 
    icon: Radio,
    companies: ["Jio", "Airtel", "Vi", "BSNL"]
  },
  { 
    name: "Manufacturing", 
    icon: Factory,
    companies: ["Tata", "L&T", "Mahindra", "Reliance"]
  },
  { 
    name: "Education", 
    icon: GraduationCap,
    companies: ["IITs", "IIMs", "NPTEL", "UGC"]
  },
  { 
    name: "Aviation", 
    icon: Plane,
    companies: ["Air India", "IndiGo", "SpiceJet", "Vistara"]
  },
  { 
    name: "Retail", 
    icon: ShoppingBag,
    companies: ["Reliance Retail", "DMart", "Flipkart", "Amazon"]
  },
  { 
    name: "Logistics", 
    icon: Truck,
    companies: ["BlueDart", "Delhivery", "DTDC", "Gati"]
  },
  { 
    name: "Energy", 
    icon: Zap,
    companies: ["NTPC", "ONGC", "Adani Power", "Tata Power"]
  },
];

const PartnersSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 relative bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
            Trusted By Industry Leaders
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-wide">
            PARTNERS & CLIENTS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Building foundational technology for enterprises across regulated industries.
          </p>
        </div>

        {/* Industry Grid */}
        <div 
          ref={gridRef} 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto"
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className={`group card-glow p-5 lg:p-6 bg-card border border-border rounded-sm hover:border-primary/30 transition-all duration-500 ${
                  gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {/* Industry Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display text-sm font-semibold text-foreground">
                    {industry.name}
                  </span>
                </div>
                
                {/* Company Names */}
                <div className="flex flex-wrap gap-1.5">
                  {industry.companies.map((company, companyIndex) => (
                    <span 
                      key={companyIndex}
                      className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-muted/50 rounded-sm border border-border/50 group-hover:border-primary/20 group-hover:text-foreground transition-colors"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div 
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-700 delay-500 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "50+", label: "Enterprise Partners" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "12", label: "Industries Served" },
            { value: "ISO 27001", label: "Certified" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 border border-border/50 rounded-sm bg-card/50">
              <div className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div 
          className={`mt-12 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {["SOC 2 Type II", "GDPR Ready", "HIPAA Compliant", "PCI DSS", "ISO 27001"].map((badge, index) => (
            <div 
              key={index}
              className="px-4 py-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-muted/30 rounded-sm border border-border/30"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
