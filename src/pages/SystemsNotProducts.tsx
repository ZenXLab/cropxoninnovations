import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const contrasts = [
  {
    product: "Ships features",
    system: "Ships capabilities",
  },
  {
    product: "Optimizes for launch",
    system: "Optimizes for evolution",
  },
  {
    product: "Measures adoption",
    system: "Measures reliability",
  },
  {
    product: "Responds to market",
    system: "Shapes infrastructure",
  },
  {
    product: "Depreciates over time",
    system: "Appreciates over time",
  },
  {
    product: "Requires replacement",
    system: "Enables extension",
  },
];

const SystemsNotProducts = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <Helmet>
        <title>Systems, Not Products — CropXon Innovations</title>
        <meta
          name="description"
          content="Why CropXon builds systems instead of products. Systems appreciate over time, enable extension, and shape infrastructure rather than respond to markets."
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
                  Systems, Not Products
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Products are designed to be consumed. Systems are designed to endure.
                  We build for the latter.
                </p>
              </div>
            </div>
          </section>

          {/* Manifesto */}
          <section className="py-14 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The technology industry has a product obsession. Ship fast. Iterate. Pivot.
                    This approach works for consumer applications competing for attention.
                    It fails catastrophically for infrastructure.
                  </p>
                  <p>
                    Infrastructure cannot pivot. A database schema change doesn't happen in a sprint.
                    A security architecture doesn't evolve through A/B testing. The foundations of
                    enterprise technology require a different mindset entirely.
                  </p>
                  <p>
                    We build systems. Systems are characterized by stability, extensibility, and
                    predictability. They are designed not just to work today, but to remain correct
                    under conditions we cannot yet anticipate.
                  </p>
                  <p className="text-foreground font-medium">
                    A system is successful when the people who built it are no longer needed
                    to operate it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contrast Table */}
          <section className="py-14">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                  The Difference
                </h2>

                <div className="border border-border rounded-sm overflow-hidden">
                  <div className="grid grid-cols-2 bg-muted/50">
                    <div className="p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider border-r border-border">
                      Product Thinking
                    </div>
                    <div className="p-4 font-mono text-xs text-accent uppercase tracking-wider">
                      Systems Thinking
                    </div>
                  </div>
                  {contrasts.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-2 border-t border-border"
                    >
                      <div className="p-4 text-muted-foreground border-r border-border text-sm">
                        {row.product}
                      </div>
                      <div className="p-4 text-foreground text-sm">
                        {row.system}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="py-14 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  This is not a philosophical stance—it's an operational reality.
                  Every CropXon platform is designed as infrastructure first, interface second.
                  The goal is durability measured in decades, not quarters.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/design-principles"
                    className="font-mono text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    ← Design Principles
                  </Link>
                  <Link
                    to="/architecture"
                    className="font-mono text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    Architecture →
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

export default SystemsNotProducts;
