import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const principles = [
  {
    id: "clarity",
    title: "Clarity Over Cleverness",
    description: "We choose the obvious solution over the clever one. Clever solutions create cognitive overhead; clear solutions create leverage.",
    details: [
      "Code should read like well-written prose",
      "Abstractions should reveal intent, not hide complexity",
      "If something requires explanation, it requires simplification",
    ],
  },
  {
    id: "restraint",
    title: "Restraint as Discipline",
    description: "Every feature we don't build is maintenance we don't carry. Every abstraction we avoid is complexity we don't impose.",
    details: [
      "Build the minimum that solves the problem completely",
      "Resist feature accumulation that doesn't serve the core mission",
      "Simplicity is not the absence of features, but the absence of unnecessary ones",
    ],
  },
  {
    id: "consistency",
    title: "Consistency Over Novelty",
    description: "Consistent systems are predictable systems. Predictability enables trust, debuggability, and team velocity.",
    details: [
      "Patterns should repeat across the codebase",
      "Exceptions should be exceptional, not habitual",
      "New team members should orient quickly",
    ],
  },
  {
    id: "durability",
    title: "Durability by Design",
    description: "Systems should be designed to outlast the people who build them. Documentation is not optional; it's architectural.",
    details: [
      "Every decision should be documented with rationale",
      "Future maintainers are the primary audience",
      "Optimize for the 10-year reader, not the 10-day deadline",
    ],
  },
  {
    id: "observability",
    title: "Observability as Foundation",
    description: "If you can't observe it, you can't operate it. Logging, metrics, and tracing are first-class architectural concerns.",
    details: [
      "Systems should explain themselves under failure",
      "Debugging should not require code changes",
      "Alert fatigue is a design failure",
    ],
  },
  {
    id: "boundaries",
    title: "Strong Boundaries, Loose Coupling",
    description: "Components should have clear boundaries with minimal surface area. Coupling should be explicit, versioned, and contractual.",
    details: [
      "APIs are contracts, not implementation details",
      "Changes should propagate predictably",
      "Dependencies should be visible and intentional",
    ],
  },
];

const DesignPrinciples = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <Helmet>
        <title>Design Principles — CropXon Innovations</title>
        <meta
          name="description"
          content="The design principles that guide every architectural decision at CropXon. Clarity, restraint, consistency, durability, observability, and strong boundaries."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero */}
          <section
            ref={heroRef}
            className="py-16 lg:py-24 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.02]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="design-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#design-grid)" />
              </svg>
            </div>

            <div
              className={`container mx-auto px-6 lg:px-12 relative z-10 transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="max-w-3xl mx-auto text-center">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Philosophy
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide mb-6">
                  Design Principles
                </h1>
                <p className="text-lg text-muted-foreground">
                  The constraints we embrace. The patterns we repeat. The discipline we practice.
                </p>
              </div>
            </div>
          </section>

          {/* Principles Grid */}
          <section className="py-14 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {principles.map((principle) => (
                  <div
                    key={principle.id}
                    className="p-6 lg:p-8 bg-background border border-border rounded-sm"
                  >
                    <h3 className="font-display text-lg lg:text-xl font-bold text-foreground mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {principle.description}
                    </p>
                    <ul className="space-y-2">
                      {principle.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="py-14">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  These principles are not aspirational—they are operational. They inform every code review,
                  every architecture decision, every product choice we make.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/how-we-think"
                    className="font-mono text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    ← How We Think
                  </Link>
                  <Link
                    to="/systems-not-products"
                    className="font-mono text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    Systems, Not Products →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DesignPrinciples;
