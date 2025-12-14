import { useState } from "react";
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
    status: "LIVE",
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
    status: "R&D",
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
    status: "LIVE",
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
    status: "PLANNED",
    statusDate: "Future Roadmap",
    link: "/robotics",
    externalUrl: "https://robotics.cropxon.com",
  },
];

// Pentagon positions (5 vertices, starting from top, going clockwise)
const getNodePositions = (centerX: number, centerY: number, radius: number) => {
  const positions: { x: number; y: number }[] = [];
  for (let i = 0; i < 5; i++) {
    // Start from top (-90 degrees) and go clockwise
    const angle = (i * 72 - 90) * (Math.PI / 180);
    positions.push({
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    });
  }
  return positions;
};

const ConstellationVisualization = ({ 
  activeProduct, 
  onProductHover 
}: { 
  activeProduct: Product | null;
  onProductHover: (product: Product | null) => void;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  // Responsive sizing
  const size = { width: 600, height: 600 };
  const center = { x: size.width / 2, y: size.height / 2 };
  const radius = 220;
  const nodePositions = getNodePositions(center.x, center.y, radius);

  return (
    <div 
      ref={ref}
      className={`relative w-full max-w-[600px] mx-auto aspect-square transition-all duration-1000 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <svg
        viewBox={`0 0 ${size.width} ${size.height}`}
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Pulsing concentric circles around center */}
        <circle
          cx={center.x}
          cy={center.y}
          r={60}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <circle
          cx={center.x}
          cy={center.y}
          r={90}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="0.5"
          opacity="0.5"
        />

        {/* Orbital lines from center to each product node */}
        {nodePositions.map((pos, index) => {
          const product = products[index];
          const isActive = activeProduct?.id === product.id;
          
          return (
            <line
              key={`line-${product.id}`}
              x1={center.x}
              y1={center.y}
              x2={pos.x}
              y2={pos.y}
              stroke={isActive ? "hsl(var(--accent))" : "hsl(var(--border))"}
              strokeWidth={isActive ? "2" : "1"}
              className="transition-all duration-500"
              style={{
                strokeDasharray: isActive ? "none" : "4,4",
                opacity: activeProduct && !isActive ? 0.3 : 1,
              }}
            />
          );
        })}

        {/* Pentagon outline connecting all nodes */}
        <polygon
          points={nodePositions.map(p => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="0.5"
          opacity="0.3"
        />

        {/* Product nodes at pentagon vertices */}
        {nodePositions.map((pos, index) => {
          const product = products[index];
          const isActive = activeProduct?.id === product.id;
          
          return (
            <g
              key={product.id}
              className="cursor-pointer transition-transform duration-300"
              style={{
                transform: isActive ? `translate(${pos.x}px, ${pos.y}px) scale(1.1)` : `translate(${pos.x}px, ${pos.y}px) scale(1)`,
                transformOrigin: "center",
                transformBox: "fill-box",
              }}
              onMouseEnter={() => onProductHover(product)}
              onMouseLeave={() => onProductHover(null)}
            >
              {/* Node background circle */}
              <circle
                cx={0}
                cy={0}
                r={isActive ? 45 : 40}
                fill={isActive ? "hsl(var(--card))" : "hsl(var(--background))"}
                stroke={isActive ? "hsl(var(--accent))" : "hsl(var(--border))"}
                strokeWidth={isActive ? "2" : "1"}
                className="transition-all duration-300"
                transform={`translate(${pos.x}, ${pos.y})`}
                style={{
                  filter: isActive ? "drop-shadow(0 0 20px hsl(var(--accent) / 0.3))" : "none",
                }}
              />
              
              {/* Product abbreviation */}
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isActive ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))"}
                className="transition-all duration-300 pointer-events-none"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  opacity: activeProduct && !isActive ? 0.4 : 1,
                }}
              >
                {product.id === "originx" ? "OXL" : 
                 product.id === "cloud" ? "CLOUD" : 
                 product.id === "robotics" ? "ROBO" :
                 product.name.split(" ")[0]}
              </text>

              {/* Product name label below node */}
              <text
                x={pos.x}
                y={pos.y + 58}
                textAnchor="middle"
                fill={isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"}
                className="transition-all duration-300 pointer-events-none"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  opacity: activeProduct && !isActive ? 0.4 : 1,
                }}
              >
                {product.name}
              </text>
            </g>
          );
        })}

        {/* Center Cropxon Logo */}
        <g className="pointer-events-none">
          <circle
            cx={center.x}
            cy={center.y}
            r={50}
            fill="hsl(var(--background))"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
          <image
            href={cropxonLogo}
            x={center.x - 28}
            y={center.y - 28}
            width={56}
            height={56}
          />
        </g>
      </svg>
    </div>
  );
};

const ProductInfoPanel = ({ product }: { product: Product | null }) => {
  if (!product) return null;

  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 bottom-4 w-full max-w-md px-4 animate-fade-in"
    >
      <div className="bg-card border border-border rounded-sm p-5 border-l-2 border-l-accent">
        <div className="flex items-start justify-between mb-2">
          <h4 
            className="text-foreground font-medium"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "14px",
            }}
          >
            {product.name}
          </h4>
          <span 
            className="text-[9px] px-2 py-0.5 rounded font-mono bg-accent/10 text-accent border border-accent/20"
          >
            {product.status}
          </span>
        </div>
        <p 
          className="text-muted-foreground mb-3"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {product.tagline}
        </p>
        <p 
          className="text-muted-foreground mb-3 text-sm leading-relaxed"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {product.description}
        </p>
        <Link 
          to={product.link}
          className="inline-flex items-center gap-1 text-accent hover:text-accent/80 transition-colors"
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

const EcosystemSection = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="ecosystem" className="py-16 lg:py-24 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 lg:mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.08em] mb-3 text-foreground">
            THE CROPXON ECOSYSTEM
          </h2>
          <p className="text-sm lg:text-base max-w-2xl mx-auto text-muted-foreground">
            Five Foundational Platforms · One Unified Architecture
          </p>
        </div>

        {/* Intro Text */}
        <div
          ref={introRef}
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 delay-200 ${
            introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p 
            className="text-muted-foreground leading-relaxed"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            These principles are not abstract. They materialize as a connected ecosystem of platforms—each addressing 
            a critical layer of modern technology, each built to stand independently, and all sharing a common 
            architectural foundation.
          </p>
        </div>

        {/* Constellation Visualization */}
        <div className="relative min-h-[700px] lg:min-h-[750px] flex items-center justify-center">
          <ConstellationVisualization 
            activeProduct={activeProduct}
            onProductHover={setActiveProduct}
          />
          <ProductInfoPanel product={activeProduct} />
        </div>

        {/* Products Grid (Mobile Fallback) */}
        <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="p-5 bg-card border border-border rounded-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display text-sm font-bold text-foreground">
                  {product.name}
                </h3>
                <span className="text-[9px] px-2 py-0.5 rounded font-mono bg-accent/10 text-accent border border-accent/20">
                  {product.status}
                </span>
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mb-2 uppercase tracking-wide">
                {product.tagline}
              </p>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-[10px] flex-1 h-8" asChild>
                  <Link to={product.link}>Learn More</Link>
                </Button>
                {product.externalUrl !== "#" && (
                  <Button variant="default" size="sm" className="text-[10px] flex-1 h-8" asChild>
                    <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                      Access
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
