import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Database, Eye, Layers, Lock, Workflow } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-time Observability",
    description: "Monitor every transaction, request, and interaction across your entire digital infrastructure."
  },
  {
    icon: Eye,
    title: "Experience Intelligence",
    description: "Understand user journeys with session replay, heatmaps, and behavioral analytics."
  },
  {
    icon: Workflow,
    title: "Distributed Tracing",
    description: "Track requests across microservices with automatic correlation and dependency mapping."
  },
  {
    icon: Database,
    title: "Log Aggregation",
    description: "Centralized logging with intelligent parsing, indexing, and full-text search."
  },
  {
    icon: Layers,
    title: "Infrastructure Metrics",
    description: "Deep visibility into servers, containers, and cloud resources with anomaly detection."
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description: "Built for regulated industries with data residency, encryption, and audit capabilities."
  }
];

const industries = [
  "Banking & Financial Services",
  "Healthcare & Life Sciences",
  "Insurance",
  "Telecommunications",
  "Government & Public Sector"
];

const Traceflow = () => {
  return (
    <>
      <Helmet>
        <title>TRACEFLOW — Digital Cognition Infrastructure | CropXon</title>
        <meta
          name="description"
          content="TRACEFLOW provides enterprise observability and experience intelligence for banking, healthcare, insurance, and telecom industries."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="trace-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#trace-grid)" />
              </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs px-3 py-1 rounded-sm bg-green-500/20 text-green-400 font-mono uppercase tracking-wider">
                    Live & Scaling
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wide mb-6">
                  TRACEFLOW
                </h1>
                <p className="font-mono text-lg text-accent uppercase tracking-wider mb-6">
                  Digital Cognition Infrastructure
                </p>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
                  Infrastructure layer enabling intelligent decision-making and automated reasoning across complex business processes. Built for enterprise, trusted by regulated industries.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="heroPrimary" size="xl" asChild>
                    <a href="https://traceflow.io" target="_blank" rel="noopener noreferrer">
                      Explore Traceflow
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/#ecosystem">Back to Ecosystem</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Industries */}
          <section className="py-16 border-b border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  Trusted by:
                </span>
                {industries.map((industry, index) => (
                  <span key={index} className="text-sm text-foreground/70">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-card/50 border-b border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Capabilities
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">
                  Complete Observability Stack
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-8 bg-background border border-border rounded-sm hover:border-muted-foreground/30 transition-colors duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide mb-6">
                See Everything. Know Everything.
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10">
                Deploy Traceflow and gain complete visibility into your digital infrastructure within minutes.
              </p>
              <Button variant="heroPrimary" size="xl" asChild>
                <a href="https://traceflow.io" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Traceflow;
