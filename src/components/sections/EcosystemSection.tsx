import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import cropxonLogo from "@/assets/cropxon-logo.svg";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  accentColor: string;
  status: string;
  statusDate: string;
  link: string;
  externalUrl: string;
}

const products: Product[] = [
  {
    id: "atlas",
    name: "ATLAS",
    tagline: "Workforce Operating System",
    description: "A unified platform for managing workforce operations, scheduling, and resource allocation.",
    capabilities: ["Workforce Analytics", "Resource Optimization", "Predictive Scheduling"],
    accentColor: "#3b82f6",
    status: "BETA",
    statusDate: "Q1 2025",
    link: "/atlas",
    externalUrl: "https://atlas.cropxon.com",
  },
  {
    id: "traceflow",
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description: "Infrastructure layer enabling intelligent decision-making and automated reasoning.",
    capabilities: ["Cognitive Mapping", "Decision Automation", "Process Intelligence"],
    accentColor: "#f59e0b",
    status: "BETA",
    statusDate: "Q4 2024",
    link: "/traceflow",
    externalUrl: "https://traceflow.io",
  },
  {
    id: "originx",
    name: "ORIGIN X LABS",
    tagline: "Research & Development",
    description: "Our research division focused on pioneering new technologies and deep-tech innovations.",
    capabilities: ["AI/ML Research", "Prototype Development", "Tech Transfer"],
    accentColor: "#a855f7",
    status: "BETA",
    statusDate: "Active R&D",
    link: "/originx-labs",
    externalUrl: "https://labs.cropxon.com",
  },
  {
    id: "cloud",
    name: "CROPXON CLOUD",
    tagline: "Infrastructure as a Service",
    description: "Scalable infrastructure-as-a-service designed to grow from developers to enterprise.",
    capabilities: ["Compute Resources", "Storage Solutions", "Network Infrastructure"],
    accentColor: "#64748b",
    status: "BETA",
    statusDate: "Live (SMB)",
    link: "/cropxon-cloud",
    externalUrl: "https://cloud.cropxon.com",
  },
  {
    id: "robotics",
    name: "CROPXON ROBOTICS",
    tagline: "Autonomous Systems",
    description: "Advanced robotics and autonomous systems division for next-generation automation and intelligent machine systems.",
    capabilities: ["Autonomous Navigation", "Industrial Automation", "Machine Intelligence", "Sensor Fusion"],
    accentColor: "#f97316",
    status: "PLANNED",
    statusDate: "Future Roadmap",
    link: "/robotics",
    externalUrl: "https://robotics.cropxon.com",
  },
];

const EcosystemSection = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="ecosystem" className="py-16 lg:py-24 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 lg:mb-14 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.08em] mb-3 text-foreground">
            THE CROPXON ECOSYSTEM
          </h2>
          <p className="text-sm lg:text-base max-w-2xl mx-auto text-muted-foreground">
            Foundational Platforms in Beta Development
          </p>
        </div>

        {/* Products Grid */}
        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative transition-all duration-500 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveProduct(product)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div
                className={`p-6 lg:p-8 rounded-lg border bg-card transition-all duration-300 h-full ${
                  activeProduct?.id === product.id 
                    ? "border-primary shadow-xl scale-[1.02]" 
                    : "border-border hover:border-primary/50"
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-lg lg:text-xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <span 
                    className="text-[10px] px-2 py-1 rounded font-mono font-medium shrink-0 bg-accent/20 text-accent border border-accent/30"
                  >
                    {product.status}
                  </span>
                </div>

                {/* Tagline */}
                <p className="font-mono text-xs text-muted-foreground mb-3">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Capabilities */}
                <ul className="space-y-1.5 mb-6">
                  {product.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-accent" />
                      {cap}
                    </li>
                  ))}
                </ul>

                {/* Status */}
                <p className="text-xs font-mono text-muted-foreground mb-4">
                  {product.statusDate}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="text-xs flex-1" asChild>
                    <Link to={product.link}>Learn More</Link>
                  </Button>
                  {product.externalUrl !== "#" && (
                    <Button 
                      variant="default"
                      size="sm"
                      className="text-xs flex-1"
                      asChild
                    >
                      <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                        Access
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EcosystemSection;
