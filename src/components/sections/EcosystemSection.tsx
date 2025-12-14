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
  status: string;
  statusDate: string;
  link: string;
  externalUrl: string;
  angle: number; // Position angle in degrees (hexagon vertices)
}

const products: Product[] = [
  {
    id: "atlas",
    name: "ATLAS",
    tagline: "Workforce Operating System",
    description: "A unified platform for managing workforce operations, scheduling, and resource allocation across enterprise organizations.",
    capabilities: ["Workforce Analytics", "Resource Optimization", "Predictive Scheduling"],
    icon: "cube",
    accentColor: "#1e40af", // Deep Ocean Blue
    status: "BETA",
    statusDate: "Q1 2025",
    link: "/atlas",
    externalUrl: "https://atlas.cropxon.com",
    angle: 270, // Top
  },
  {
    id: "traceflow",
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description: "Infrastructure layer enabling intelligent decision-making and automated reasoning across complex business processes.",
    capabilities: ["Cognitive Mapping", "Decision Automation", "Process Intelligence"],
    icon: "brain",
    accentColor: "#92400e", // Cognac Brown
    status: "BETA",
    statusDate: "Q4 2024",
    link: "/traceflow",
    externalUrl: "https://traceflow.io",
    angle: 330, // Top-right
  },
  {
    id: "originx",
    name: "ORIGIN X LABS",
    tagline: "Research & Development",
    description: "Our research division focused on pioneering new technologies and bringing deep-tech innovations to market.",
    capabilities: ["AI/ML Research", "Prototype Development", "Tech Transfer"],
    icon: "flask",
    accentColor: "#7c3aed", // Research Purple
    status: "BETA",
    statusDate: "Active R&D",
    link: "/originx-labs",
    externalUrl: "https://labs.cropxon.com",
    angle: 30, // Bottom-right
  },
  {
    id: "cloud",
    name: "CROPXON CLOUD",
    tagline: "Infrastructure as a Service",
    description: "Scalable infrastructure-as-a-service designed to grow with businesses from individual developers to enterprise scale.",
    capabilities: ["Compute Resources", "Storage Solutions", "Network Infrastructure"],
    icon: "cloud",
    accentColor: "#475569", // Infrastructure Steel
    status: "BETA",
    statusDate: "Live (SMB)",
    link: "/cropxon-cloud",
    externalUrl: "https://cloud.cropxon.com",
    angle: 90, // Bottom
  },
  {
    id: "robotics",
    name: "CROPXON ROBOTICS",
    tagline: "Autonomous Systems",
    description: "Advanced robotics and autonomous systems division focused on next-generation automation solutions.",
    capabilities: ["Autonomous Navigation", "Industrial Automation", "Sensor Fusion"],
    icon: "robot",
    accentColor: "#b45309", // Mecha Bronze
    status: "BETA",
    statusDate: "Planned",
    link: "/robotics",
    externalUrl: "https://robotics.cropxon.com",
    angle: 150, // Bottom-left
  },
  {
    id: "unannounced",
    name: "[UNANNOUNCED]",
    tagline: "Future Platform",
    description: "A new platform in stealth development, addressing critical gaps in modern enterprise infrastructure.",
    capabilities: ["Coming Soon", "Stealth Mode", "Strategic Initiative"],
    icon: "question",
    accentColor: "#6b7280", // Future Grey
    status: "BETA",
    statusDate: "TBA",
    link: "#",
    externalUrl: "#",
    angle: 210, // Top-left
  },
];

// Product icon components
const ProductIcon = ({ icon, color, size = 24 }: { icon: Product["icon"]; color: string; size?: number }) => {
  const iconProps = { width: size, height: size, stroke: color, strokeWidth: 1.5, fill: "none" };
  
  switch (icon) {
    case "cube":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "brain":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
        </svg>
      );
    case "flask":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M9 3h6v2H9z" />
          <path d="M10 5v6.5L4 19.5a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L14 11.5V5" />
          <circle cx="12" cy="15" r="1" />
          <circle cx="9" cy="17" r="1" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
        </svg>
      );
    case "robot":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16" />
          <line x1="16" y1="16" x2="16" y2="16" />
          <circle cx="8" cy="16" r="1" fill={color} />
          <circle cx="16" cy="16" r="1" fill={color} />
        </svg>
      );
    case "question":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    default:
      return null;
  }
};

// Neural pulse animation component
const NeuralPulse = ({ startAngle, isActive, color }: { startAngle: number; isActive: boolean; color: string }) => {
  const [pulseProgress, setPulseProgress] = useState(0);
  
  useEffect(() => {
    if (!isActive) {
      setPulseProgress(0);
      return;
    }
    
    const interval = setInterval(() => {
      setPulseProgress(prev => (prev >= 100 ? 0 : prev + 3));
    }, 30);
    
    return () => clearInterval(interval);
  }, [isActive]);

  const radians = (startAngle * Math.PI) / 180;
  const endX = 50 + 38 * Math.cos(radians);
  const endY = 50 + 38 * Math.sin(radians);
  
  // Calculate pulse position along the line
  const pulseX = 50 + (endX - 50) * (pulseProgress / 100);
  const pulseY = 50 + (endY - 50) * (pulseProgress / 100);

  return (
    <g>
      {/* Base line */}
      <line
        x1="50"
        y1="50"
        x2={endX}
        y2={endY}
        stroke={isActive ? color : "#334155"}
        strokeWidth={isActive ? "0.6" : "0.3"}
        className="transition-all duration-300"
      />
      {/* Animated pulse */}
      {isActive && pulseProgress > 0 && pulseProgress < 100 && (
        <circle
          cx={pulseX}
          cy={pulseY}
          r="1"
          fill={color}
          opacity={0.8}
        />
      )}
    </g>
  );
};

const EcosystemSection = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [pulseIntervals, setPulseIntervals] = useState<{ [key: string]: boolean }>({});
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  // Random pulse intervals for neural pathways
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
      className="py-32 lg:py-48 relative overflow-hidden"
      style={{ background: 'hsl(var(--background))' }}
    >
      {/* Darker background overlay for constellation */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(222 30% 4%) 0%, hsl(222 30% 3%) 50%, hsl(222 30% 4%) 100%)' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 lg:mb-32 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.1em] mb-6"
            style={{ color: '#f1f5f9' }}
          >
            THE CROPXON ECOSYSTEM
          </h2>
          <p 
            className="text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            Foundational Platforms in Beta Development
          </p>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div ref={contentRef} className="lg:hidden space-y-4">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={product.link}
              className={`block p-6 rounded-sm border transition-all duration-500 ${
                contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))'
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <ProductIcon icon={product.icon} color={product.accentColor} size={20} />
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {product.name}
                  </h3>
                </div>
                <span 
                  className="text-[10px] px-2 py-1 rounded-sm font-mono"
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
            {/* Background mesh (barely visible) */}
            <defs>
              <pattern id="mesh" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.1" fill="#1e293b" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#mesh)" />
            
            {/* Center pulsing ring */}
            <circle
              cx="50"
              cy="50"
              r="8"
              fill="none"
              stroke="#1e293b"
              strokeWidth="0.3"
              className="animate-pulse"
              style={{ animationDuration: '2s' }}
            />
            <circle
              cx="50"
              cy="50"
              r="12"
              fill="none"
              stroke="#1e293b"
              strokeWidth="0.2"
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            />

            {/* Neural pathways */}
            {products.map((product) => (
              <NeuralPulse
                key={product.id}
                startAngle={product.angle}
                isActive={activeProduct?.id === product.id || pulseIntervals[product.id]}
                color={product.accentColor}
              />
            ))}

            {/* Product vertex orbiting rings */}
            {products.map((product) => {
              const pos = getNodePosition(product.angle);
              return (
                <circle
                  key={`orbit-${product.id}`}
                  cx={pos.x}
                  cy={pos.y}
                  r="4"
                  fill="none"
                  stroke={activeProduct?.id === product.id ? product.accentColor : "#334155"}
                  strokeWidth="0.15"
                  opacity={activeProduct?.id === product.id ? 0.6 : 0.3}
                  className={`transition-all duration-300 ${activeProduct?.id === product.id ? 'animate-spin' : ''}`}
                  style={{ 
                    transformOrigin: `${pos.x}% ${pos.y}%`,
                    animationDuration: '8s'
                  }}
                />
              );
            })}
          </svg>

          {/* Center Logo */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ width: '100px', height: '100px' }}
          >
            <div 
              className="w-full h-full rounded-full flex items-center justify-center animate-pulse"
              style={{ 
                background: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                animationDuration: '2s'
              }}
            >
              <img 
                src={cropxonLogo} 
                alt="CropXon" 
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Product Nodes */}
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
                    className={`p-4 rounded-sm transition-all duration-300 ${
                      isActive ? 'scale-120' : 'scale-100'
                    }`}
                    style={{
                      background: isActive ? '#2d2d3a' : '#1a1a24',
                      border: `1px solid ${isActive ? product.accentColor : '#475569'}`,
                      boxShadow: isActive ? `0 0 30px ${product.accentColor}30` : 'none',
                      minWidth: '160px',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <ProductIcon icon={product.icon} color={isActive ? product.accentColor : '#cbd5e1'} size={18} />
                      <span 
                        className="font-mono text-xs"
                        style={{ color: '#cbd5e1' }}
                      >
                        {product.name}
                      </span>
                    </div>
                    {/* Beta tag */}
                    <span 
                      className={`inline-block text-[10px] px-2 py-0.5 rounded-sm font-mono transition-all duration-300 ${
                        isActive ? 'animate-pulse' : ''
                      }`}
                      style={{ 
                        background: `rgba(13, 148, 136, 0.2)`,
                        border: '1px solid #0d9488',
                        color: '#0d9488'
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
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-8 w-full max-w-md animate-fade-in z-30"
              style={{
                background: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(10px)',
                borderLeft: `3px solid ${activeProduct.accentColor}`,
                borderRadius: '4px',
              }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ProductIcon icon={activeProduct.icon} color={activeProduct.accentColor} size={24} />
                  <div>
                    <h4 className="font-display text-lg font-bold" style={{ color: '#f1f5f9' }}>
                      {activeProduct.name}
                    </h4>
                    <p className="font-mono text-xs" style={{ color: '#94a3b8' }}>
                      {activeProduct.tagline}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm mb-4" style={{ color: '#94a3b8' }}>
                  {activeProduct.description}
                </p>
                
                {/* Capabilities */}
                <ul className="space-y-1 mb-4">
                  {activeProduct.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs" style={{ color: '#cbd5e1' }}>
                      <span style={{ color: activeProduct.accentColor }}>•</span>
                      {cap}
                    </li>
                  ))}
                </ul>
                
                {/* Status */}
                <p className="text-xs font-mono mb-4" style={{ color: '#64748b' }}>
                  Status: <span style={{ color: '#0d9488' }}>Beta Preview</span> · {activeProduct.statusDate}
                </p>
                
                {/* CTAs */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    style={{ 
                      borderColor: '#475569',
                      color: '#cbd5e1'
                    }}
                    asChild
                  >
                    <Link to={activeProduct.link}>View Technical Paper</Link>
                  </Button>
                  {activeProduct.externalUrl !== "#" && (
                    <Button 
                      size="sm"
                      className="text-xs"
                      style={{ 
                        background: '#0d9488',
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
