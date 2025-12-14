import useScrollAnimation from "@/hooks/useScrollAnimation";

const VisionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="vision" className="py-16 lg:py-24 relative overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="vision-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vision-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span 
            className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60 block mb-4"
          >
            Philosophy
          </span>
          <h2 
            className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground tracking-wide uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            How We Think
          </h2>
        </div>

        {/* Core Manifesto */}
        <div 
          ref={ref2}
          className="max-w-4xl mx-auto"
        >
          {/* Main Statement */}
          <div 
            className={`mb-10 lg:mb-14 transition-all duration-1000 delay-150 ${
              isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p 
              className="text-lg md:text-xl lg:text-2xl font-display font-medium text-foreground leading-relaxed text-center"
              style={{ lineHeight: 1.6 }}
            >
              CropXon builds <span className="text-primary">primitives</span>, not products.
            </p>
          </div>

          {/* Manifesto Paragraphs */}
          <div className="space-y-6 lg:space-y-8">
            <p 
              className={`text-sm lg:text-base text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ lineHeight: 1.8 }}
            >
              We operate at the foundational layer where systems are shaped, not packaged—designing 
              infrastructure that is stable, extensible, and resilient by default.
            </p>

            <p 
              className={`text-sm lg:text-base text-muted-foreground leading-relaxed transition-all duration-1000 delay-450 ${
                isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ lineHeight: 1.8 }}
            >
              Everything we build is designed to operate quietly, scale predictably, and remain 
              relevant long after market cycles, tools, and narratives change.
            </p>
          </div>

          {/* Divider */}
          <div 
            className={`my-10 lg:my-14 flex justify-center transition-all duration-1000 delay-500 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-12 h-px bg-border" />
          </div>

          {/* Core Principles */}
          <div 
            className={`mt-12 lg:mt-16 transition-all duration-1000 delay-800 ${
              isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 
              className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-8 text-center"
            >
              Core Principles
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                { title: "Systems First", desc: "Architecture precedes implementation. We design for coherence across the entire system." },
                { title: "Primitives Over Products", desc: "We build foundational components that enable others to create." },
                { title: "Longevity as Constraint", desc: "Every decision is evaluated against a decade-long horizon." },
                { title: "Quiet Infrastructure", desc: "The best systems are invisible. They work without announcement." },
                { title: "Structure Before Scale", desc: "Growth follows form. We establish robust foundations first." },
                { title: "Responsibility at Foundation", desc: "Operating at the infrastructure layer means our failures cascade." },
              ].map((principle, index) => (
                <div key={index} className="group">
                  <h4 className="font-display text-xs font-semibold text-foreground mb-2 tracking-wide">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed" style={{ lineHeight: 1.7 }}>
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
