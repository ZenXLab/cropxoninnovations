import { Helmet } from "react-helmet-async";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Shield, Layers, Database, Lock, Zap, Globe } from "lucide-react";

const architectureLayers = [
  {
    icon: Globe,
    name: "Edge Layer",
    description: "Global CDN, DDoS protection, and intelligent routing for low-latency access worldwide.",
    details: ["Multi-region failover", "Edge caching", "Geographic load balancing"],
  },
  {
    icon: Shield,
    name: "Security Layer",
    description: "Zero-trust architecture with end-to-end encryption, identity verification, and audit logging.",
    details: ["mTLS everywhere", "RBAC & ABAC", "Complete audit trails"],
  },
  {
    icon: Zap,
    name: "Application Layer",
    description: "Horizontally scalable microservices with event-driven communication and graceful degradation.",
    details: ["Container orchestration", "Auto-scaling", "Circuit breakers"],
  },
  {
    icon: Database,
    name: "Data Layer",
    description: "Multi-model data stores with strong consistency guarantees and point-in-time recovery.",
    details: ["PostgreSQL core", "Redis caching", "Time-series analytics"],
  },
  {
    icon: Layers,
    name: "Infrastructure Layer",
    description: "Infrastructure as code with immutable deployments, blue-green rollouts, and chaos engineering.",
    details: ["Terraform managed", "GitOps workflows", "Multi-cloud ready"],
  },
  {
    icon: Lock,
    name: "Compliance Layer",
    description: "Built-in compliance controls for regulated industries with continuous monitoring and reporting.",
    details: ["SOC 2 controls", "GDPR/DPDP ready", "Automated compliance"],
  },
];

const principles = [
  {
    title: "Defense in Depth",
    description: "Multiple layers of security controls ensure that no single point of failure can compromise the system.",
  },
  {
    title: "Immutable Infrastructure",
    description: "Servers are never modified in place. Every change is a fresh deployment from version-controlled code.",
  },
  {
    title: "Observable by Default",
    description: "Every component emits metrics, logs, and traces. Debugging does not require code changes.",
  },
  {
    title: "Graceful Degradation",
    description: "When dependencies fail, systems degrade functionality rather than failing completely.",
  },
];

const Architecture = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <>
      <Helmet>
        <title>Architecture — CropXon Innovations</title>
        <meta
          name="description"
          content="The technical architecture powering CropXon platforms. Defense in depth, immutable infrastructure, and observability by default."
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
                  <pattern id="arch-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#arch-grid)" />
              </svg>
            </div>

            <div
              className={`container mx-auto px-6 lg:px-12 relative z-10 transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="max-w-3xl mx-auto text-center">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Technology
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide mb-6">
                  Architecture
                </h1>
                <p className="text-lg text-muted-foreground">
                  Built for enterprises. Designed for decades. Operated with discipline.
                </p>
              </div>
            </div>
          </section>

          {/* Architecture Layers */}
          <section className="py-14 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">
                  Platform Layers
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {architectureLayers.map((layer) => (
                  <div
                    key={layer.name}
                    className="p-6 bg-background border border-border rounded-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <layer.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {layer.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {layer.description}
                    </p>
                    <ul className="space-y-1.5">
                      {layer.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Architectural Principles */}
          <section className="py-14">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">
                  Architectural Principles
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {principles.map((principle) => (
                  <div
                    key={principle.title}
                    className="p-6 bg-card border border-border rounded-sm"
                  >
                    <h3 className="font-display font-bold text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="py-14 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/systems-not-products"
                    className="font-mono text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    ← Systems, Not Products
                  </Link>
                  <Link
                    to="/company#compliance"
                    className="font-mono text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    Security & Compliance →
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

export default Architecture;
