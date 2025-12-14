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
  icon: "cube" | "brain" | "flask" | "cloud" | "robot" | "question";
  accentColor: string;
  accentColorLight: string;
  status: string;
  statusDate: string;
  link: string;
  externalUrl: string;
  angle: number;
}

const products: Product[] = [
  {
    id: "atlas",
    name: "ATLAS",
    tagline: "Workforce Operating System",
    description: "A unified platform for managing workforce operations, scheduling, and resource allocation across enterprise organizations.",
    capabilities: ["Workforce Analytics", "Resource Optimization", "Predictive Scheduling"],
    icon: "cube",
    accentColor: "#3b82f6",
    accentColorLight: "#2563eb",
    status: "BETA",
    statusDate: "Q1 2025",
    link: "/atlas",
    externalUrl: "https://atlas.cropxon.com",
    angle: 270,
  },
  {
    id: "traceflow",
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description: "Infrastructure layer enabling intelligent decision-making and automated reasoning across complex business processes.",
    capabilities: ["Cognitive Mapping", "Decision Automation", "Process Intelligence"],
    icon: "brain",
    accentColor: "#f59e0b",
    accentColorLight: "#d97706",
    status: "BETA",
    statusDate: "Q4 2024",
    link: "/traceflow",
    externalUrl: "https://traceflow.io",
    angle: 330,
  },
  {
    id: "originx",
    name: "ORIGIN X LABS",
    tagline: "Research & Development",
    description: "Our research division focused on pioneering new technologies and bringing deep-tech innovations to market.",
    capabilities: ["AI/ML Research", "Prototype Development", "Tech Transfer"],
    icon: "flask",
    accentColor: "#a855f7",
    accentColorLight: "#9333ea",
    status: "BETA",
    statusDate: "Active R&D",
    link: "/originx-labs",
    externalUrl: "https://labs.cropxon.com",
    angle: 30,
  },
  {
    id: "cloud",
    name: "CROPXON CLOUD",
    tagline: "Infrastructure as a Service",
    description: "Scalable infrastructure-as-a-service designed to grow with businesses from individual developers to enterprise scale.",
    capabilities: ["Compute Resources", "Storage Solutions", "Network Infrastructure"],
    icon: "cloud",
    accentColor: "#64748b",
    accentColorLight: "#475569",
    status: "BETA",
    statusDate: "Live (SMB)",
    link: "/cropxon-cloud",
    externalUrl: "https://cloud.cropxon.com",
    angle: 90,
  },
  {
    id: "robotics",
    name: "CROPXON ROBOTICS",
    tagline: "Autonomous Systems",
    description: "Advanced robotics and autonomous systems division focused on next-generation automation solutions.",
    capabilities: ["Autonomous Navigation", "Industrial Automation", "Sensor Fusion"],
    icon: "robot",
    accentColor: "#f97316",
    accentColorLight: "#ea580c",
    status: "BETA",
    statusDate: "Planned",
    link: "/robotics",
    externalUrl: "https://robotics.cropxon.com",
    angle: 150,
  },
  {
    id: "unannounced",
    name: "[UNANNOUNCED]",
    tagline: "Future Platform",
    description: "A new platform in stealth development, addressing critical gaps in modern enterprise infrastructure.",
    capabilities: ["Coming Soon", "Stealth Mode", "Strategic Initiative"],
    icon: "question",
    accentColor: "#94a3b8",
    accentColorLight: "#64748b",
    status: "BETA",
    statusDate: "TBA",
    link: "#",
    externalUrl: "#",
    angle: 210,
  },
];

const renderProductIcon = (icon: Product["icon"], color: string, size: number = 24) => {
  const style = { width: size, height: size };
  
  switch (icon) {
    case "cube":
      return (
        <svg viewBox="0 0 24 24" style={style} stroke={color} strokeWidth={1.5} fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "brain":
      return (
        <svg viewBox="0 0 24 24" style={style} stroke={color} strokeWidth={1.5} fill="none">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
        </svg>
      );
    case "flask":
      return (
        <svg viewBox="0 0 24 24" style={style} stroke={color} strokeWidth={1.5} fill="none">
          <path d="M9 3h6v2H9z" />
          <path d="M10 5v6.5L4 19.5a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L14 11.5V5" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" style={style} stroke={color} strokeWidth={1.5} fill="none">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
        </svg>
      );
    case "robot":
      return (
        <svg viewBox="0 0 24 24" style={style} stroke={color} strokeWidth={1.5} fill="none">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <circle cx="8" cy="16" r="1" fill={color} />
          <circle cx="16" cy="16" r="1" fill={color} />
        </svg>
      );
    case "question":
      return (
        <svg viewBox="0 0 24 24" style={style} stroke={color} strokeWidth={1.5} fill="none">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    default:
      return null;
  }
};

const EcosystemSection = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [pulseIntervals, setPulseIntervals] = useState<{ [key: string]: boolean }>({});
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      setPulseIntervals(prev => ({ ...prev, [randomProduct.id]: true }));
      setTimeout(() => {
        setPulseIntervals(prev => ({ ...prev, [randomProduct.id]: false }));
      }, 1500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getNodePosition = (angle: number, radius: number = 38) => {
    const radians = (angle * Math.PI) / 180;
    return {
      x: 50 + radius * Math.cos(radians),
      y: 50 + radius * Math.sin(radians),
    };
  };

  return (
    <section
      id="ecosystem"
      className="py-32 lg:py-48 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 lg:mb-32 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.1em] mb-6 text-foreground">
            THE CROPXON ECOSYSTEM
          </h2>
          <p className="text-base lg:text-lg max-w-2xl mx-auto text-muted-foreground">
            Foundational Platforms in Beta Development
          </p>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div ref={contentRef} className="lg:hidden space-y-4">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={product.link}
              className={`block p-6 rounded-sm border bg-card border-border transition-all duration-500 hover:border-primary/50 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {renderProductIcon(product.icon, product.accentColor, 20)}
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {product.name}
                  </h3>
                </div>
                <span 
                  className="text-[10px] px-2 py-1 rounded-sm font-mono font-medium"
                  style={{ 
                    background: `${product.accentColor}20`,
                    color: product.accentColor,
                    border: `1px solid ${product.accentColor}`
                  }}
                >
                  {product.status}
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground mb-2">{product.tagline}</p>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </Link>
          ))}
        </div>

        {/* Desktop Constellation */}
        <div 
          className={`hidden lg:block relative max-w-4xl mx-auto transition-all duration-1000 ${
            contentVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ minHeight: '700px' }}
        >
          {/* SVG Constellation */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background mesh - theme aware */}
            <defs>
              <pattern id="ecosystemMesh" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.15" className="fill-border/30" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#ecosystemMesh)" />
            
            {/* Center pulsing rings - theme aware */}
            <circle
              cx="50"
              cy="50"
              r="8"
              fill="none"
              className="stroke-border"
              strokeWidth="0.4"
              style={{ opacity: 0.5 }}
            />
            <circle
              cx="50"
              cy="50"
              r="12"
              fill="none"
              className="stroke-border"
              strokeWidth="0.3"
              style={{ opacity: 0.3 }}
            />

            {/* Neural pathways */}
            {products.map((product) => {
              const pos = getNodePosition(product.angle);
              const isActive = activeProduct?.id === product.id || pulseIntervals[product.id];
              return (
                <line
                  key={`line-${product.id}`}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  stroke={isActive ? product.accentColor : 'currentColor'}
                  strokeWidth={isActive ? "0.8" : "0.4"}
                  className={`transition-all duration-300 ${!isActive ? 'text-border' : ''}`}
                  style={{ opacity: isActive ? 1 : 0.4 }}
                />
              );
            })}

            {/* Product vertex orbiting rings */}
            {products.map((product) => {
              const pos = getNodePosition(product.angle);
              const isActive = activeProduct?.id === product.id;
              return (
                <circle
                  key={`orbit-${product.id}`}
                  cx={pos.x}
                  cy={pos.y}
                  r="4"
                  fill="none"
                  stroke={isActive ? product.accentColor : 'currentColor'}
                  strokeWidth="0.2"
                  className={`transition-all duration-300 ${!isActive ? 'text-border' : ''}`}
                  style={{ opacity: isActive ? 0.8 : 0.3 }}
                />
              );
            })}
          </svg>

          {/* Center Logo */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ width: '100px', height: '100px' }}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center bg-card border border-border shadow-lg">
              <img 
                src={cropxonLogo} 
                alt="CropXon" 
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Product Nodes - Theme aware */}
          {products.map((product) => {
            const pos = getNodePosition(product.angle, 42);
            const isActive = activeProduct?.id === product.id;
            
            return (
              <div
                key={product.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
                onMouseEnter={() => setActiveProduct(product)}
                onMouseLeave={() => setActiveProduct(null)}
              >
                <Link to={product.link}>
                  <div
                    className={`p-4 rounded-sm transition-all duration-300 bg-card border ${
                      isActive ? 'scale-110 shadow-xl' : 'scale-100 shadow-md'
                    }`}
                    style={{
                      borderColor: isActive ? product.accentColor : 'hsl(var(--border))',
                      boxShadow: isActive ? `0 0 30px ${product.accentColor}40` : undefined,
                      minWidth: '160px',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {renderProductIcon(product.icon, isActive ? product.accentColor : 'hsl(var(--muted-foreground))', 18)}
                      <span className="font-mono text-xs text-foreground font-medium">
                        {product.name}
                      </span>
                    </div>
                    <span 
                      className={`inline-block text-[10px] px-2 py-0.5 rounded-sm font-mono font-medium transition-all duration-300`}
                      style={{ 
                        background: `${product.accentColor}20`,
                        border: `1px solid ${product.accentColor}`,
                        color: product.accentColor
                      }}
                    >
                      {product.status}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}

          {/* Active Product Info Panel */}
          {activeProduct && (
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(100%+2rem)] w-full max-w-md animate-fade-in z-30 bg-card/95 backdrop-blur-md border border-border rounded-sm"
              style={{
                borderLeft: `3px solid ${activeProduct.accentColor}`,
              }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {renderProductIcon(activeProduct.icon, activeProduct.accentColor, 24)}
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground">
                      {activeProduct.name}
                    </h4>
                    <p className="font-mono text-xs text-muted-foreground">
                      {activeProduct.tagline}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm mb-4 text-muted-foreground">
                  {activeProduct.description}
                </p>
                
                <ul className="space-y-1 mb-4">
                  {activeProduct.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-foreground">
                      <span style={{ color: activeProduct.accentColor }}>•</span>
                      {cap}
                    </li>
                  ))}
                </ul>
                
                <p className="text-xs font-mono mb-4 text-muted-foreground">
                  Status: <span style={{ color: activeProduct.accentColor }}>Beta Preview</span> · {activeProduct.statusDate}
                </p>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="text-xs" asChild>
                    <Link to={activeProduct.link}>View Technical Paper</Link>
                  </Button>
                  {activeProduct.externalUrl !== "#" && (
                    <Button 
                      size="sm" 
                      className="text-xs"
                      style={{ 
                        background: activeProduct.accentColor,
                        color: '#ffffff'
                      }}
                      asChild
                    >
                      <a href={activeProduct.externalUrl} target="_blank" rel="noopener noreferrer">
                        Request Beta Access
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
