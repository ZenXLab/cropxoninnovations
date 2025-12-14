import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Brain, Zap, Shield, BarChart3, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Workforce Intelligence",
    description: "AI-powered insights into team performance, capacity, and optimization opportunities."
  },
  {
    icon: Brain,
    title: "Smart Scheduling",
    description: "Intelligent shift management and resource allocation using predictive algorithms."
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline repetitive tasks with customizable automation rules and triggers."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with role-based access control and audit trails."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time analytics and reporting for data-driven workforce decisions."
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Comprehensive time tracking with project allocation and productivity metrics."
  }
];

const Atlas = () => {
  return (
    <>
      <Helmet>
        <title>ATLAS — Workforce Operating System | CropXon</title>
        <meta
          name="description"
          content="ATLAS is an AI-enabled workforce management and productivity platform designed for enterprise organizations."
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
                  <pattern id="atlas-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#atlas-grid)" />
              </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs px-3 py-1 rounded-sm bg-accent/20 text-accent font-mono uppercase tracking-wider">
                    Beta / Early Access
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wide mb-6">
                  ATLAS
                </h1>
                <p className="font-mono text-lg text-accent uppercase tracking-wider mb-6">
                  Workforce Operating System
                </p>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
                  A unified platform for managing workforce operations, scheduling, and resource allocation across enterprise organizations. Built for scale, designed for humans.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="heroPrimary" size="xl" asChild>
                    <a href="https://atlas.cropxon.com" target="_blank" rel="noopener noreferrer">
                      Try ATLAS
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

          {/* Features */}
          <section className="py-20 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Capabilities
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">
                  Enterprise-Grade Features
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
                Ready to Transform Your Workforce?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10">
                Join the beta program and be among the first to experience the future of workforce management.
              </p>
              <Button variant="heroPrimary" size="xl" asChild>
                <a href="https://atlas.cropxon.com" target="_blank" rel="noopener noreferrer">
                  Request Early Access
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

export default Atlas;
