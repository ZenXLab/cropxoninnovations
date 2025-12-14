import useScrollAnimation from "@/hooks/useScrollAnimation";

const VisionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="vision" className="py-32 lg:py-48 relative overflow-hidden bg-background">
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
          className={`text-center mb-24 lg:mb-32 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span 
            className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60 block mb-6"
          >
            Philosophy
          </span>
          <h2 
            className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-wide uppercase"
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
            className={`mb-20 lg:mb-28 transition-all duration-1000 delay-150 ${
              isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p 
              className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-foreground leading-relaxed text-center"
              style={{ lineHeight: 1.6 }}
            >
              CropXon builds <span className="text-primary">primitives</span>, not products.
            </p>
          </div>

          {/* Manifesto Paragraphs */}
          <div className="space-y-12 lg:space-y-16">
            <p 
              className={`text-base lg:text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ lineHeight: 1.9 }}
            >
              We operate at the foundational layer where systems are shaped, not packaged—designing 
              infrastructure that is stable, extensible, and resilient by default. Our work is guided 
              by systems thinking, long time horizons, and architectural discipline, prioritizing 
              correctness and longevity over speed and surface appeal.
            </p>

            <p 
              className={`text-base lg:text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-450 ${
                isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ lineHeight: 1.9 }}
            >
              Everything we build is designed to operate quietly, scale predictably, and remain 
              relevant long after market cycles, tools, and narratives change.
            </p>
          </div>

          {/* Divider */}
          <div 
            className={`my-20 lg:my-28 flex justify-center transition-all duration-1000 delay-500 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-16 h-px bg-border" />
          </div>

          {/* Ecosystem Intro */}
          <div className="space-y-12 lg:space-y-16">
            <p 
              className={`text-lg lg:text-xl font-display font-medium text-foreground text-center transition-all duration-1000 delay-600 ${
                isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              These principles are not abstract.
            </p>

            <p 
              className={`text-base lg:text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-700 ${
                isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ lineHeight: 1.9 }}
            >
              They materialize as a connected ecosystem of platforms—each addressing a critical 
              layer of modern technology, each built to stand independently, and all sharing a 
              common architectural foundation. From digital cognition and workforce systems to 
              cloud infrastructure and advanced research, every CropXon division exists to solve 
              problems at the level where leverage is highest and failure is least tolerable.
            </p>
          </div>

          {/* Core Principles */}
          <div 
            className={`mt-24 lg:mt-32 transition-all duration-1000 delay-800 ${
              isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 
              className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-12 text-center"
            >
              Core Principles
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {[
                { title: "Systems First", desc: "Architecture precedes implementation. We design for coherence across the entire system, not isolated optimization." },
                { title: "Primitives Over Products", desc: "We build foundational components that enable others to create, rather than finished solutions that constrain." },
                { title: "Longevity as Constraint", desc: "Every decision is evaluated against a decade-long horizon. Short-term convenience yields to long-term stability." },
                { title: "Quiet Infrastructure", desc: "The best systems are invisible. They work without announcement, scale without drama, and persist without attention." },
                { title: "Structure Before Scale", desc: "Growth follows form. We establish robust foundations before pursuing expansion." },
                { title: "Responsibility at Foundation", desc: "Operating at the infrastructure layer means our failures cascade. We build with that weight in mind." },
              ].map((principle, index) => (
                <div key={index} className="group">
                  <h4 className="font-display text-sm font-semibold text-foreground mb-3 tracking-wide">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ lineHeight: 1.8 }}>
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
