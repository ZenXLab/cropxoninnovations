import useScrollAnimation from "@/hooks/useScrollAnimation";

const TechnologySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: flowRef, isVisible: flowVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });

  const flowSteps = [
    { label: "Research", description: "Foundational R&D" },
    { label: "Primitive", description: "Core building blocks" },
    { label: "Platform", description: "Unified infrastructure" },
    { label: "Product", description: "End-user applications" },
  ];

  return (
    <section
      id="technology"
      className="py-12 lg:py-16 relative bg-gradient-subtle overflow-hidden"
    >
      {/* Subtle line pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diagonal-lines"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest mb-3 block">
            Technology & Research
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-wide mb-4">
            FROM RESEARCH TO PRODUCT
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach to building foundational technology.
          </p>
        </div>

        {/* Flow Diagram */}
        <div ref={flowRef} className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {flowSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 md:gap-2 transition-all duration-700 ease-out ${
                  flowVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full border border-border bg-card flex items-center justify-center mb-3 group hover:border-accent/50 transition-colors duration-300">
                    <span className="font-mono text-xs text-accent">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-foreground mb-1">
                    {step.label}
                  </h4>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block">
                    <svg
                      className="w-10 h-4 text-border"
                      viewBox="0 0 48 16"
                      fill="none"
                    >
                      <path
                        d="M0 8h44M40 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "∞", label: "Scalability" },
            { value: "24/7", label: "Availability" },
            { value: "100%", label: "Compliance" },
            { value: "0", label: "Vendor Lock-in" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-out ${
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
