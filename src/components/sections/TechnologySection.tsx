import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { useState } from "react";

const TechnologySection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const { ref: flowRef, isVisible: flowVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const flowSteps = [
    { label: "Research", description: "Foundational R&D", color: "hsl(220, 70%, 55%)" },
    { label: "Primitive", description: "Core building blocks", color: "hsl(260, 60%, 58%)" },
    { label: "Platform", description: "Unified infrastructure", color: "hsl(175, 60%, 45%)" },
    { label: "Product", description: "End-user applications", color: "hsl(145, 55%, 45%)" },
  ];

  return (
    <section
      id="technology"
      className="py-16 lg:py-24 relative bg-gradient-subtle overflow-hidden"
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
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-display text-[10px] sm:text-[11px] font-medium text-primary tracking-[0.25em] uppercase mb-4">
            Technology & Research
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-4">
            FROM RESEARCH TO PRODUCT
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach to building foundational technology.
          </p>
        </div>

        {/* Flow Diagram */}
        <div ref={flowRef} className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {flowSteps.map((step, index) => {
              const isActive = activeStep === index;
              
              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 md:gap-2 transition-all duration-700 ease-out ${
                    flowVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: getStaggerDelay(index, 100) }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Step */}
                  <div className="flex flex-col items-center text-center group cursor-pointer">
                    <div 
                      className={`relative w-16 h-16 rounded-2xl border flex items-center justify-center mb-4 transition-all duration-500 ${
                        isActive ? 'scale-110 shadow-xl' : 'group-hover:scale-105'
                      }`}
                      style={{ 
                        backgroundColor: isActive ? step.color : 'transparent',
                        borderColor: isActive ? step.color : 'hsl(var(--border))',
                        boxShadow: isActive ? `0 8px 30px ${step.color.replace(')', ' / 0.4)')}` : 'none'
                      }}
                    >
                      <span className={`font-mono text-sm font-bold transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-primary'
                      }`}>
                        0{index + 1}
                      </span>
                      
                      {/* Pulse animation on active */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 rounded-2xl animate-ping opacity-20"
                          style={{ backgroundColor: step.color }}
                        />
                      )}
                    </div>
                    <h4 className={`font-display text-sm font-bold mb-1 transition-colors duration-300 ${
                      isActive ? 'text-foreground' : 'text-foreground/80'
                    }`}>
                      {step.label}
                    </h4>
                    <p className={`font-mono text-[10px] transition-colors duration-300 ${
                      isActive ? 'text-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow with animation */}
                  {index < flowSteps.length - 1 && (
                    <div className="hidden md:block">
                      <svg
                        className={`w-12 h-4 transition-all duration-300 ${
                          activeStep !== null && activeStep >= index ? 'text-primary' : 'text-border'
                        }`}
                        viewBox="0 0 48 16"
                        fill="none"
                      >
                        <path
                          d="M0 8h44M40 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className={`transition-all duration-500 ${
                            activeStep !== null && activeStep >= index ? 'opacity-100' : 'opacity-50'
                          }`}
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats with hover effects */}
        <div ref={statsRef} className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "∞", label: "Scalability", color: "hsl(220, 70%, 55%)" },
            { value: "24/7", label: "Availability", color: "hsl(145, 55%, 45%)" },
            { value: "100%", label: "Compliance", color: "hsl(260, 60%, 58%)" },
            { value: "0", label: "Vendor Lock-in", color: "hsl(25, 75%, 52%)" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center group cursor-pointer transition-all duration-700 ease-out hover:scale-105 ${
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: getStaggerDelay(index, 100) }}
            >
              <div 
                className="font-display text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300"
                style={{ color: 'hsl(var(--foreground))' }}
              >
                <span className="group-hover:opacity-0 transition-opacity duration-300 inline-block">
                  {stat.value}
                </span>
                <span 
                  className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
              </div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors duration-300">
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
