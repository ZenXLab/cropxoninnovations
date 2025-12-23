import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Server, HardDrive, Globe, Shield, Gauge } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Virtual Machines",
    description: "Scalable compute instances with flexible configurations for any workload."
  },
  {
    icon: HardDrive,
    title: "Block Storage",
    description: "High-performance SSD storage with automatic backups and snapshots."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivery network with edge locations for low-latency access worldwide."
  },
  {
    icon: Cloud,
    title: "Object Storage",
    description: "S3-compatible object storage for unlimited data with 99.999% durability."
  },
  {
    icon: Shield,
    title: "Managed Security",
    description: "DDoS protection, firewalls, and compliance certifications included."
  },
  {
    icon: Gauge,
    title: "Simple Pricing",
    description: "Pay only for what you use with predictable, transparent pricing."
  }
];

const tiers = [
  {
    name: "Individual",
    description: "For developers and side projects",
    features: ["1 vCPU, 1GB RAM", "25GB SSD Storage", "1TB Transfer", "Community Support"]
  },
  {
    name: "Startup",
    description: "For growing teams and applications",
    features: ["Up to 8 vCPUs", "Up to 32GB RAM", "500GB SSD Storage", "Priority Support"]
  },
  {
    name: "SMB",
    description: "For established businesses",
    features: ["Unlimited Resources", "Custom Configurations", "Dedicated Support", "SLA Guarantee"]
  }
];

const CropxonCloud = () => {
  return (
    <>
      <SEOHead
        title="Cropxon Cloud — Scalable Cloud Infrastructure & IaaS Platform"
        description="Cropxon Cloud provides scalable infrastructure-as-a-service designed for businesses from individual developers to enterprise. Virtual machines, storage, CDN, and managed security."
        keywords="cloud infrastructure, IaaS, cloud computing, virtual machines, cloud storage, CDN, managed security, enterprise cloud, Cropxon Cloud"
        url="https://cropxon.com/cropxon-cloud"
        type="product"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cloud-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 0 25 L 50 25 M 25 0 L 25 50" fill="none" stroke="currentColor" strokeWidth="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cloud-grid)" />
              </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs px-3 py-1 rounded-sm bg-green-500/20 text-green-400 font-mono uppercase tracking-wider">
                    Live (SMB)
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wide mb-6">
                  Cropxon Cloud
                </h1>
                <p className="font-mono text-lg text-accent uppercase tracking-wider mb-6">
                  Infrastructure as a Service
                </p>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
                  Scalable cloud infrastructure designed to grow with your business. From individual developers to enterprise scale, deploy with confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="heroPrimary" size="xl" asChild>
                    <a href="https://cloud.cropxon.com" target="_blank" rel="noopener noreferrer">
                      Get Started
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
                  Services
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">
                  Cloud Infrastructure
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

          {/* Tiers */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
                  Plans
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wider">
                  Scale as You Grow
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {tiers.map((tier, index) => (
                  <div
                    key={index}
                    className="p-8 bg-card border border-border rounded-sm hover:border-muted-foreground/30 transition-colors duration-300"
                  >
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {tier.description}
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-gradient-subtle border-t border-border">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide mb-6">
                Deploy in Minutes
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10">
                Start with our free tier and scale seamlessly as your business grows. No credit card required.
              </p>
              <Button variant="heroPrimary" size="xl" asChild>
                <a href="https://cloud.cropxon.com" target="_blank" rel="noopener noreferrer">
                  Create Free Account
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

export default CropxonCloud;
