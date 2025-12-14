import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface Principle {
  number: string;
  title: string;
  paragraphs: string[];
}

const principles: Principle[] = [
  {
    number: "01",
    title: "Systems First",
    paragraphs: [
      "We begin with systems, not features. Every product we build starts as an architecture, a set of relationships and constraints that define how components interact, scale, and evolve. This approach ensures that what we ship today will remain coherent as requirements change and complexity increases.",
      "Systems thinking forces us to consider the whole before the parts. It means understanding feedback loops, identifying bottlenecks, and designing for emergence. The goal is not to anticipate every possible future, but to create structures flexible enough to adapt without breaking.",
      "This discipline requires patience. It often means building infrastructure before building interfaces, and validating assumptions before committing to implementations. The payoff is durability—systems that work reliably under pressure and remain maintainable over time."
    ]
  },
  {
    number: "02",
    title: "Primitives Over Products",
    paragraphs: [
      "We build primitives, not products. Primitives are the foundational abstractions that other things are built upon—the atoms from which molecules are composed. They are intentionally minimal, intentionally stable, and intentionally unopinionated about how they will be used.",
      "Products are assemblies. They combine primitives in specific ways to solve specific problems. By investing heavily in primitives, we create leverage: the same foundational components can power dozens of different applications without modification.",
      "This approach requires resisting the temptation to ship features quickly. Instead, we ask: what is the underlying capability this feature requires? Can we extract it, generalize it, and make it available as a primitive? The answer is usually yes."
    ]
  },
  {
    number: "03",
    title: "Longevity as a Design Constraint",
    paragraphs: [
      "We design for decades, not quarters. Every architectural decision is evaluated against a simple question: will this still make sense in ten years? Technologies change, markets shift, and teams evolve. Infrastructure must be built to outlast all of these.",
      "Longevity is not the same as permanence. It means building systems that can be extended, migrated, and refactored without catastrophic rewrites. It means choosing standards over proprietary solutions, simplicity over cleverness, and clarity over brevity.",
      "This constraint influences everything from API design to data modeling to documentation practices. The assumption is always that someone else—possibly someone not yet hired—will need to understand and modify this code. We optimize for their success."
    ]
  },
  {
    number: "04",
    title: "Quiet Infrastructure",
    paragraphs: [
      "The best infrastructure is invisible. It does not demand attention, does not require constant intervention, and does not surprise operators at 3 AM. It works correctly, consistently, and predictably—and this predictability is the result of deliberate design choices.",
      "Quiet infrastructure is observable without being noisy. It exposes the right metrics, logs meaningful events, and surfaces genuine anomalies. But it does not cry wolf. Alert fatigue is a design failure, and we treat it as such.",
      "Achieving this requires extensive testing, careful capacity planning, and a deep understanding of failure modes. We prefer boring technologies with known failure characteristics over novel technologies with unknown risks. Reliability is not glamorous, but it is foundational."
    ]
  },
  {
    number: "05",
    title: "Structure Before Scale",
    paragraphs: [
      "We get the structure right before we optimize for scale. Premature scaling is expensive: it locks in architectural decisions before they have been validated, and it introduces complexity that obscures underlying problems.",
      "Structure means clear boundaries between components, well-defined interfaces, and explicit dependencies. It means knowing exactly what each piece of the system is responsible for—and, equally important, what it is not responsible for.",
      "Once structure is established, scaling becomes an engineering problem rather than an architectural one. Horizontal scaling, caching, and optimization can be applied systematically to bottlenecks, without rearchitecting the entire system."
    ]
  },
  {
    number: "06",
    title: "Responsibility at the Foundation",
    paragraphs: [
      "Infrastructure decisions have consequences that compound over time. The choices made at the foundational layer—security models, data governance, access controls—propagate upward into every application built on top of them.",
      "We accept this responsibility explicitly. We design for compliance, for auditability, and for graceful degradation. We assume that our systems will be used in regulated environments, that they will handle sensitive data, and that they will face adversarial conditions.",
      "This is not paranoia; it is professionalism. Systems deployed in enterprise and government contexts must meet standards that consumer applications do not. By building to these standards from the start, we ensure that our infrastructure is ready for its most demanding users."
    ]
  },
  {
    number: "07",
    title: "Technology as Long-Term Capital",
    paragraphs: [
      "We treat technology investments as long-term capital, not short-term expenses. Every line of code, every system design, every operational runbook is an asset that either appreciates or depreciates based on how it is maintained.",
      "Appreciation comes from documentation, testing, and continuous improvement. Depreciation comes from neglect, accumulated technical debt, and deferred maintenance. The distinction is not subtle: well-maintained systems become more valuable over time, while neglected systems become liabilities.",
      "This perspective shapes our resource allocation. We invest in tooling, in automation, and in knowledge transfer—not because they are exciting, but because they are necessary for sustainable operation. The goal is to build technology that generates returns for decades."
    ]
  }
];

const PrincipleSection = ({ principle, index }: { principle: Principle; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center py-32 lg:py-48 relative"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* Large principle number */}
          <span 
            className="font-display text-[8rem] lg:text-[12rem] font-bold leading-none block mb-8"
            style={{ color: 'hsl(var(--border))' }}
          >
            {principle.number}
          </span>
          
          {/* Principle title */}
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-12 tracking-wide">
            {principle.title}
          </h2>
          
          {/* Paragraphs */}
          <div className="space-y-8">
            {principle.paragraphs.map((paragraph, pIndex) => (
              <p 
                key={pIndex}
                className={`text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-[65ch] transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(pIndex + 1) * 200}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle geometric visualization */}
      <div 
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 opacity-5 transition-all duration-1000 ${
          isVisible ? 'opacity-5' : 'opacity-0'
        }`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {index % 3 === 0 && (
            <>
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </>
          )}
          {index % 3 === 1 && (
            <>
              <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <polygon points="50,25 75,75 25,75" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </>
          )}
          {index % 3 === 2 && (
            <>
              <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <rect x="40" y="40" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </>
          )}
        </svg>
      </div>
    </section>
  );
};

const HowWeThink = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <Helmet>
        <title>How We Think — Cropxon Innovations</title>
        <meta
          name="description"
          content="Our philosophy: systems thinking, architectural discipline, and long-term relevance. Learn how we approach building foundational technology infrastructure."
        />
        <meta
          name="keywords"
          content="systems thinking, infrastructure philosophy, enterprise technology, architectural design, long-term technology"
        />
        <link rel="canonical" href="https://cropxon.com/how-we-think" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section 
            ref={heroRef}
            className="min-h-screen flex items-center justify-center py-32 relative overflow-hidden"
          >
            <div 
              className="absolute inset-0" 
              style={{ background: 'linear-gradient(180deg, hsl(222 30% 4%) 0%, hsl(222 30% 5%) 100%)' }} 
            />
            
            <div 
              className={`container mx-auto px-6 lg:px-12 text-center relative z-10 transition-all duration-1000 ease-out ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <span className="font-mono text-sm text-muted-foreground uppercase tracking-[0.3em] mb-8 block">
                Philosophy
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground tracking-wide mb-8">
                OUR PHILOSOPHY
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Seven principles that guide how we design, build, and operate foundational technology infrastructure.
              </p>
            </div>
          </section>

          {/* Principle Sections */}
          {principles.map((principle, index) => (
            <PrincipleSection key={principle.number} principle={principle} index={index} />
          ))}

          {/* Closing Section */}
          <section className="py-32 lg:py-48 relative">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12">
                  These principles are not abstract ideals. They are operational constraints that shape every decision we make—from architecture to hiring to resource allocation. They are what make us who we are.
                </p>
                <a 
                  href="/#ecosystem" 
                  className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  Explore Our Ecosystem
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HowWeThink;
