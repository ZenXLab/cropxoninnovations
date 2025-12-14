import useScrollAnimation from "@/hooks/useScrollAnimation";

const partners = [
  { name: "Enterprise Client", industry: "Financial Services" },
  { name: "Government Partner", industry: "Public Sector" },
  { name: "Healthcare System", industry: "Healthcare" },
  { name: "Tech Corporation", industry: "Technology" },
  { name: "Insurance Group", industry: "Insurance" },
  { name: "Telecom Provider", industry: "Telecommunications" },
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

        {/* Partners Grid */}
        <div 
          ref={gridRef} 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group p-6 lg:p-8 bg-card border border-border rounded-sm hover:border-accent/30 transition-all duration-500 flex flex-col items-center justify-center min-h-[120px] ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Placeholder Logo */}
              <div className="w-12 h-12 rounded-sm bg-muted/50 border border-border flex items-center justify-center mb-3 group-hover:border-accent/30 transition-colors">
                <span className="font-mono text-xs text-muted-foreground">
                  {partner.name.split(' ').map(w => w[0]).join('')}
                </span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider text-center">
                {partner.industry}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div 
          className={`mt-16 flex flex-wrap justify-center gap-8 lg:gap-16 transition-all duration-700 delay-300 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "5+", label: "Enterprise Partners" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "SOC 2", label: "Compliant" },
            { value: "GDPR", label: "Ready" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-xl lg:text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
