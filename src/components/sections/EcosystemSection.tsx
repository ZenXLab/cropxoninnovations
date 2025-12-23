import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import ProductTransition from "@/components/ProductTransition";
import { Cpu, Cloud, FlaskConical, Boxes, Settings, GraduationCap, ArrowUpRight, Sparkles } from "lucide-react";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  status: string;
  statusDate: string;
  link: string;
  externalUrl: string;
  icon: React.ElementType;
  color: string;
}

const products: Product[] = [
  {
    id: "atlas",
    name: "ATLAS",
    tagline: "Workforce Operating System",
    description: "A unified platform for managing workforce operations, scheduling, and resource allocation.",
    capabilities: ["Workforce Analytics", "Resource Optimization", "Predictive Scheduling"],
    status: "BETA",
    statusDate: "Q1 2025",
    link: "/atlas",
    externalUrl: "https://atlas.cropxon.com",
    icon: Cpu,
    color: "hsl(220, 70%, 55%)",
  },
  {
    id: "traceflow",
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description: "Infrastructure layer enabling intelligent decision-making and automated reasoning.",
    capabilities: ["Cognitive Mapping", "Decision Automation", "Process Intelligence"],
    status: "LIVE",
    statusDate: "Q4 2024",
    link: "/traceflow",
    externalUrl: "https://traceflow.cropxon.com",
    icon: Boxes,
    color: "hsl(200, 70%, 50%)",
  },
  {
    id: "originx",
    name: "ORIGINX LABS",
    tagline: "Research & Development",
    description: "Our research division focused on pioneering new technologies and deep-tech innovations.",
    capabilities: ["AI/ML Research", "Prototype Development", "Tech Transfer"],
    status: "ACTIVE",
    statusDate: "Active R&D",
    link: "/originx-labs",
    externalUrl: "https://originxlabs.com",
    icon: FlaskConical,
    color: "hsl(25, 75%, 52%)",
  },
  {
    id: "cloud",
    name: "CROPXON CLOUD",
    tagline: "Infrastructure as a Service",
    description: "Scalable infrastructure-as-a-service designed to grow from developers to enterprise.",
    capabilities: ["Compute Resources", "Storage Solutions", "Network Infrastructure"],
    status: "LIVE",
    statusDate: "Live (SMB)",
    link: "/cropxon-cloud",
    externalUrl: "https://cropxoncloud.com",
    icon: Cloud,
    color: "hsl(260, 60%, 58%)",
  },
  {
    id: "opzenix",
    name: "OPZENIX",
    tagline: "Autonomous Systems",
    description: "Advanced robotics and autonomous systems division for next-generation automation and intelligent machine systems.",
    capabilities: ["Autonomous Navigation", "Industrial Automation", "Machine Intelligence", "Sensor Fusion"],
    status: "PLANNED",
    statusDate: "Future Roadmap",
    link: "/robotics",
    externalUrl: "https://opzenix.com",
    icon: Settings,
    color: "hsl(175, 60%, 45%)",
  },
  {
    id: "zenith",
    name: "ZENITH INSTITUTE",
    tagline: "Learning Division",
    description: "Building world-class engineers from India with industry-relevant education and real experience.",
    capabilities: ["Engineering Programs", "Industry Labs", "Verified Credentials", "Placement Support"],
    status: "ACTIVE",
    statusDate: "Enrolling Now",
    link: "/zenith-institute",
    externalUrl: "https://zenithinstitute.in",
    icon: GraduationCap,
    color: "hsl(145, 55%, 45%)",
  },
];

const EcosystemSection = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [transitionProduct, setTransitionProduct] = useState<Product | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const handleAccessClick = (product: Product) => {
    setTransitionProduct(product);
  };

  return (
    <>
      <section id="ecosystem" className="py-16 lg:py-24 relative bg-background overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 40% at 50% 0%, hsl(var(--primary) / 0.04) 0%, transparent 60%)`
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-display text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-[0.25em] uppercase mb-4">
              Product Portfolio
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">
              THE CROPXON ECOSYSTEM
            </h2>
            <p className="text-sm lg:text-base max-w-2xl mx-auto text-muted-foreground">
              Foundational platforms powering enterprise digital transformation
            </p>
          </div>

          {/* Products Grid */}
          <div 
            ref={contentRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {products.map((product, index) => {
              const Icon = product.icon;
              const isActive = activeProduct?.id === product.id;
              
              return (
                <div
                  key={product.id}
                  className={`group relative transition-all duration-500 ${
                    contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: getStaggerDelay(index, 80) }}
                  onMouseEnter={() => setActiveProduct(product)}
                  onMouseLeave={() => setActiveProduct(null)}
                >
                  <div
                    className={`relative p-6 lg:p-8 rounded-2xl border bg-card/80 backdrop-blur-sm transition-all duration-500 h-full overflow-hidden ${
                      isActive 
                        ? "border-primary/50 shadow-2xl scale-[1.02]" 
                        : "border-border/50 hover:border-primary/30 hover:shadow-lg"
                    }`}
                  >
                    {/* Animated background glow */}
                    <div 
                      className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-all duration-700 ${
                        isActive ? 'opacity-30' : 'opacity-0'
                      }`}
                      style={{ backgroundColor: product.color }}
                    />

                    {/* Floating particles */}
                    {isActive && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 rounded-full animate-float"
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + (i % 3) * 20}%`,
                              backgroundColor: product.color,
                              opacity: 0.5,
                              animationDelay: `${i * 0.3}s`,
                              animationDuration: `${2 + i * 0.3}s`
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Header */}
                    <div className="relative flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div 
                          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 ${
                            isActive ? 'scale-110' : 'group-hover:scale-105'
                          }`}
                          style={{ 
                            backgroundColor: isActive ? product.color : `${product.color.replace(')', ' / 0.15)')}`,
                            boxShadow: isActive ? `0 8px 24px ${product.color.replace(')', ' / 0.35)')}` : 'none'
                          }}
                        >
                          <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-foreground'}`} />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-bold text-foreground">
                            {product.name}
                          </h3>
                          <p className="font-mono text-[10px] text-muted-foreground">
                            {product.tagline}
                          </p>
                        </div>
                      </div>
                      <span 
                        className={`text-[9px] px-2 py-1 rounded-full font-mono font-medium shrink-0 transition-all duration-300 ${
                          isActive 
                            ? 'bg-primary/20 text-primary border border-primary/30' 
                            : 'bg-muted/50 text-muted-foreground border border-border/50'
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="relative text-sm text-muted-foreground mb-5 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Capabilities with micro-animations */}
                    <ul className="relative space-y-2 mb-6">
                      {product.capabilities.map((cap, i) => (
                        <li 
                          key={i} 
                          className={`flex items-center gap-2.5 text-xs transition-all duration-300`}
                          style={{
                            transitionDelay: isActive ? `${i * 50}ms` : '0ms',
                            transform: isActive ? 'translateX(4px)' : 'translateX(0)'
                          }}
                        >
                          <Sparkles 
                            className={`w-3 h-3 shrink-0 transition-all duration-300 ${
                              isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                            }`}
                            style={{ color: product.color, transitionDelay: `${i * 50}ms` }}
                          />
                          <span 
                            className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${
                              isActive ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                            }`}
                            style={{ backgroundColor: product.color }}
                          />
                          <span className={`transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {cap}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Status with pulse animation */}
                    <div className="relative flex items-center gap-2 mb-5">
                      <div 
                        className={`w-2 h-2 rounded-full ${product.status === 'LIVE' ? 'animate-pulse' : ''}`}
                        style={{ backgroundColor: product.color }}
                      />
                      <p className="text-xs font-mono text-muted-foreground">
                        {product.statusDate}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="relative flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className={`text-xs flex-1 group/btn transition-all duration-300 ${
                          isActive ? 'border-primary/30 hover:bg-primary/5' : ''
                        }`} 
                        asChild
                      >
                        <Link to={product.link}>
                          Learn More
                          <ArrowUpRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>
                      </Button>
                      <Button 
                        variant="default"
                        size="sm"
                        className="text-xs flex-1 group/btn"
                        onClick={() => handleAccessClick(product)}
                      >
                        Access
                        <ArrowUpRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
            50% { transform: translateY(-15px) translateX(8px); opacity: 0.7; }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Product Transition Overlay */}
      <ProductTransition
        isOpen={!!transitionProduct}
        productName={transitionProduct?.name || ""}
        externalUrl={transitionProduct?.externalUrl || ""}
        onClose={() => setTransitionProduct(null)}
      />
    </>
  );
};

export default EcosystemSection;
