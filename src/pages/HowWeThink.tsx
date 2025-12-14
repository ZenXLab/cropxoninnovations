import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
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
      "We begin with systems, not features. Every product we build starts as an architecture, a set of relationships and constraints that define how components interact, scale, and evolve.",
      "Systems thinking forces us to consider the whole before the parts. The goal is not to anticipate every possible future, but to create structures flexible enough to adapt without breaking.",
      "This discipline requires patience. The payoff is durability—systems that work reliably under pressure and remain maintainable over time."
    ]
  },
  { number: "02", title: "Primitives Over Products", paragraphs: ["We build primitives, not products. Primitives are the foundational abstractions that other things are built upon.", "By investing heavily in primitives, we create leverage: the same foundational components can power dozens of different applications.", "This approach requires resisting the temptation to ship features quickly."] },
  { number: "03", title: "Longevity as a Design Constraint", paragraphs: ["We design for decades, not quarters. Every architectural decision is evaluated against: will this still make sense in ten years?", "Longevity means building systems that can be extended, migrated, and refactored without catastrophic rewrites.", "We optimize for the success of someone who will need to understand and modify this code in the future."] },
  { number: "04", title: "Quiet Infrastructure", paragraphs: ["The best infrastructure is invisible. It works correctly, consistently, and predictably.", "Quiet infrastructure is observable without being noisy. Alert fatigue is a design failure.", "We prefer boring technologies with known failure characteristics over novel technologies with unknown risks."] },
  { number: "05", title: "Structure Before Scale", paragraphs: ["We get the structure right before we optimize for scale. Premature scaling locks in architectural decisions before they have been validated.", "Structure means clear boundaries between components, well-defined interfaces, and explicit dependencies.", "Once structure is established, scaling becomes an engineering problem rather than an architectural one."] },
  { number: "06", title: "Responsibility at the Foundation", paragraphs: ["Infrastructure decisions have consequences that compound over time.", "We design for compliance, for auditability, and for graceful degradation.", "Systems deployed in enterprise contexts must meet standards that consumer applications do not."] },
  { number: "07", title: "Technology as Long-Term Capital", paragraphs: ["We treat technology investments as long-term capital, not short-term expenses.", "Well-maintained systems become more valuable over time, while neglected systems become liabilities.", "The goal is to build technology that generates returns for decades."] }
];

const PrincipleSection = ({ principle, index }: { principle: Principle; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const parallaxOffset = (scrollY * 0.02) % 50;

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 lg:py-48 relative overflow-hidden">
      {/* Parallax geometry */}
      <div 
        className="absolute right-0 top-1/2 w-48 h-48 lg:w-72 lg:h-72 opacity-[0.06] pointer-events-none"
        style={{ transform: `translateY(calc(-50% + ${parallaxOffset}px)) rotate(${parallaxOffset}deg)` }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-foreground">
          {index % 3 === 0 && <><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" /><circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" /></>}
          {index % 3 === 1 && <><polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" /><polygon points="50,30 70,70 30,70" fill="none" stroke="currentColor" strokeWidth="0.5" /></>}
          {index % 3 === 2 && <><rect x="15" y="15" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="0.5" /><rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" /></>}
        </svg>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <span className="font-display text-[6rem] lg:text-[10rem] font-bold leading-none block mb-6 text-border">{principle.number}</span>
          <h2 className="font-display text-2xl lg:text-4xl font-bold text-foreground mb-10 tracking-wide">{principle.title}</h2>
          <div className="space-y-6">
            {principle.paragraphs.map((p, i) => (
              <p key={i} className={`text-base lg:text-lg leading-relaxed text-muted-foreground max-w-[65ch] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${(i + 1) * 150}ms` }}>{p}</p>
            ))}
          </div>
        </div>
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
        <meta name="description" content="Our philosophy: systems thinking, architectural discipline, and long-term relevance." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <section ref={heroRef} className="min-h-screen flex items-center justify-center py-32 relative">
            <div className={`container mx-auto px-6 lg:px-12 text-center transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <span className="font-mono text-sm text-muted-foreground uppercase tracking-[0.3em] mb-8 block">Philosophy</span>
              <h1 className="font-display text-4xl lg:text-7xl font-bold text-foreground tracking-wide mb-8">OUR PHILOSOPHY</h1>
              <p className="text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto">Seven principles that guide how we design, build, and operate foundational technology infrastructure.</p>
            </div>
          </section>
          {principles.map((p, i) => <PrincipleSection key={p.number} principle={p} index={i} />)}
          <section className="py-32">
            <div className="container mx-auto px-6 text-center">
              <p className="text-muted-foreground mb-8">These principles shape every decision we make.</p>
              <a href="/#ecosystem" className="font-mono text-sm text-primary hover:text-primary/80">Explore Our Ecosystem →</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HowWeThink;
