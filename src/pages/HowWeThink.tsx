import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface Principle {
  number: string;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    number: "01",
    title: "Systems First",
    description: "We begin with systems, not features. Every product starts as an architecture—a set of relationships and constraints that define how components interact, scale, and evolve."
  },
  {
    number: "02",
    title: "Primitives Over Products",
    description: "We build primitives, not products. Primitives are foundational abstractions that create leverage—the same components power dozens of applications."
  },
  {
    number: "03",
    title: "Longevity as Constraint",
    description: "We design for decades, not quarters. Every decision is evaluated against: will this still make sense in ten years?"
  },
  {
    number: "04",
    title: "Quiet Infrastructure",
    description: "The best infrastructure is invisible. It works correctly, consistently, and predictably—observable without being noisy."
  },
  {
    number: "05",
    title: "Structure Before Scale",
    description: "We get structure right before optimizing for scale. Clear boundaries, well-defined interfaces, and explicit dependencies."
  },
  {
    number: "06",
    title: "Responsibility at Foundation",
    description: "Infrastructure decisions compound over time. We design for compliance, auditability, and graceful degradation."
  },
  {
    number: "07",
    title: "Technology as Capital",
    description: "We treat technology as long-term capital. Well-maintained systems become more valuable; neglected ones become liabilities."
  }
];

const HowWeThink = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: principlesRef, isVisible: principlesVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Philosophy — Cropxon Innovations</title>
        <meta name="description" content="Our philosophy: systems thinking, architectural discipline, and long-term relevance." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section - Compact */}
          <section 
            ref={heroRef} 
            className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative"
          >
            <div 
              className={`container mx-auto px-6 lg:px-12 text-center transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] mb-6 block">
                Philosophy
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide mb-6">
                HOW WE THINK
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Seven principles that guide how we design, build, and operate foundational technology infrastructure.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="container mx-auto px-6 lg:px-12">
            <div className="w-12 h-px bg-border mx-auto" />
          </div>

          {/* Principles Grid - Compact */}
          <section 
            ref={principlesRef}
            className="py-16 lg:py-24"
          >
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {principles.map((principle, index) => (
                    <div 
                      key={principle.number}
                      className={`group transition-all duration-700 ${
                        principlesVisible 
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Number */}
                      <span className="font-display text-4xl lg:text-5xl font-bold text-border/60 block mb-3">
                        {principle.number}
                      </span>
                      
                      {/* Title */}
                      <h2 className="font-display text-base lg:text-lg font-semibold text-foreground mb-3 tracking-wide">
                        {principle.title}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed" style={{ lineHeight: 1.75 }}>
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="w-12 h-px bg-border mx-auto mb-12" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  These principles shape every decision we make.
                </p>
                <Link 
                  to="/#ecosystem" 
                  className="inline-flex items-center font-mono text-xs text-primary hover:text-primary/80 uppercase tracking-widest transition-colors"
                >
                  Explore Our Ecosystem
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default HowWeThink;
