import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Eye, Cog, Shield, Zap, Radio } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced visual perception systems for real-time environment understanding and object recognition."
  },
  {
    icon: Cpu,
    title: "Neural Processing",
    description: "Edge AI computing for autonomous decision-making with minimal latency and maximum reliability."
  },
  {
    icon: Cog,
    title: "Precision Mechanics",
    description: "High-precision actuators and mechanical systems designed for industrial-grade durability."
  },
  {
    icon: Shield,
    title: "Safety Systems",
    description: "Multi-layered safety protocols ensuring human-robot collaboration in shared workspaces."
  },
  {
    icon: Zap,
    title: "Real-Time Control",
    description: "Sub-millisecond response times for critical operations requiring instant adjustments."
  },
  {
    icon: Radio,
    title: "Swarm Intelligence",
    description: "Coordinated multi-robot operations with distributed decision-making capabilities."
  }
];

const applications = [
  { name: "Industrial Automation", description: "Assembly lines, quality inspection, material handling" },
  { name: "Logistics & Warehousing", description: "Autonomous forklifts, inventory management, order fulfillment" },
  { name: "Healthcare", description: "Surgical assistance, patient care, pharmaceutical handling" },
  { name: "Agriculture", description: "Precision farming, crop monitoring, automated harvesting" },
];

const Robotics = () => {
  return (
    <>
      <SEOHead
        title="Robotics — Autonomous Systems & Industrial Automation Division"
        description="Advanced autonomous systems and industrial automation solutions for enterprise and government. Computer vision, neural processing, precision mechanics, and swarm intelligence."
        keywords="autonomous systems, industrial automation, robotics, computer vision, neural processing, precision mechanics, swarm intelligence, OriginX Robotics"
        url="https://originxlabs.com/robotics"
        type="product"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="robotics-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="0" cy="0" r="1.5" fill="currentColor" />
                    <circle cx="60" cy="0" r="1.5" fill="currentColor" />
                    <circle cx="0" cy="60" r="1.5" fill="currentColor" />
                    <circle cx="60" cy="60" r="1.5" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#robotics-grid)" />
              </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs px-3 py-1 rounded-sm bg-muted text-muted-foreground font-mono uppercase tracking-wider">
                    Planned / Future Roadmap
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wide mb-6">
                  OPZENIX
                </h1>
                <p className="font-mono text-lg text-accent uppercase tracking-wider mb-6">
                  Autonomous Systems Division
                </p>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
                  Building the next generation of autonomous systems and industrial robotics. 
                  From precision manufacturing to intelligent logistics, we're engineering 
                  machines that think, adapt, and collaborate.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <a href="https://opzenix.com" target="_blank" rel="noopener noreferrer">
                      Visit OpZeniX
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/#ecosystem">Back to Ecosystem</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative Robot Illustration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 hidden lg:block opacity-10">
              <svg viewBox="0 0 200 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="60" y="40" width="80" height="60" rx="10" stroke="currentColor" strokeWidth="2" />
                <circle cx="85" cy="70" r="8" stroke="currentColor" strokeWidth="2" />
                <circle cx="115" cy="70" r="8" stroke="currentColor" strokeWidth="2" />
                <rect x="50" y="110" width="100" height="100" rx="5" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="140" x2="30" y2="180" stroke="currentColor" strokeWidth="2" />
                <line x1="150" y1="140" x2="170" y2="180" stroke="currentColor" strokeWidth="2" />
                <rect x="70" y="220" width="20" height="50" rx="3" stroke="currentColor" strokeWidth="2" />
                <rect x="110" y="220" width="20" height="50" rx="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </section>

          {/* Vision Statement */}
          <section className="py-20 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider mb-8">
                  The Future of Autonomous Systems
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  OpZeniX represents our commitment to building autonomous systems 
                  that operate with precision, safety, and intelligence. We're not building 
                  robots—we're building infrastructure for the physical world.
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Core Technologies
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">
                  Technical Capabilities
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-8 bg-card border border-border rounded-sm hover:border-muted-foreground/30 transition-colors duration-300"
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

          {/* Applications */}
          <section className="py-20 bg-card/50 border-y border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Industries
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">
                  Target Applications
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background border border-border rounded-sm"
                  >
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {app.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {app.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Roadmap Teaser */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto">
                <div className="p-8 md:p-12 bg-card border border-border rounded-sm">
                  <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                    Development Timeline
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Coming 2027+
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    OpZeniX is currently in the research and development phase. 
                    We're building foundational technologies that will power the next 
                    generation of autonomous systems. Stay informed about our progress.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" asChild>
                      <a href="https://opzenix.com" target="_blank" rel="noopener noreferrer">
                        Visit OpZeniX
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 border-t border-border">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide mb-6">
                Interested in Autonomous Solutions?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10">
                We're looking for partners, researchers, and early adopters to shape 
                the future of industrial robotics with us.
              </p>
              <Button variant="heroPrimary" size="xl" asChild>
                <a href="https://opzenix.com" target="_blank" rel="noopener noreferrer">
                  Explore OpZeniX
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Robotics;
