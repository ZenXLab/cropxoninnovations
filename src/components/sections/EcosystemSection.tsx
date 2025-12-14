import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  position: { x: number; y: number };
  color: string;
  status: string;
  statusColor: string;
  link: string;
  externalUrl: string;
}

const products: Product[] = [
  {
    id: "atlas",
    name: "ATLAS",
    tagline: "Workforce Operating System",
    description:
      "A unified platform for managing workforce operations, scheduling, and resource allocation across enterprise organizations.",
    position: { x: 15, y: 25 },
    color: "hsl(234, 55%, 50%)",
    status: "Beta",
    statusColor: "bg-yellow-500/20 text-yellow-400",
    link: "/atlas",
    externalUrl: "https://atlas.cropxon.com"
  },
  {
    id: "traceflow",
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description:
      "Infrastructure layer enabling intelligent decision-making and automated reasoning across complex business processes.",
    position: { x: 85, y: 25 },
    color: "hsl(249, 90%, 68%)",
    status: "Live",
    statusColor: "bg-green-500/20 text-green-400",
    link: "/traceflow",
    externalUrl: "https://traceflow.io"
  },
  {
    id: "originx",
    name: "OriginX Labs",
    tagline: "Product & R&D Division",
    description:
      "Our research and development division focused on pioneering new technologies and bringing innovations to market.",
    position: { x: 15, y: 75 },
    color: "hsl(200, 60%, 50%)",
    status: "Active R&D",
    statusColor: "bg-blue-500/20 text-blue-400",
    link: "/originx-labs",
    externalUrl: "https://labs.cropxon.com"
  },
  {
    id: "cloud",
    name: "Cropxon Cloud",
    tagline: "IaaS for Individuals → SMBs",
    description:
      "Scalable infrastructure-as-a-service designed to grow with businesses from individual developers to enterprise scale.",
    position: { x: 85, y: 75 },
    color: "hsl(280, 60%, 55%)",
    status: "Live",
    statusColor: "bg-green-500/20 text-green-400",
    link: "/cropxon-cloud",
    externalUrl: "https://cloud.cropxon.com"
  },
];

const CropxonMark = () => (
  <svg
    viewBox="0 0 60 60"
    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 15L30 30M30 30L45 45M45 15L30 30M30 30L15 45"
      stroke="url(#ecosystemGradient)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="15" cy="15" r="3" fill="hsl(234, 55%, 50%)" />
    <circle cx="45" cy="15" r="3" fill="hsl(234, 55%, 50%)" />
    <circle cx="15" cy="45" r="3" fill="hsl(249, 90%, 68%)" />
    <circle cx="45" cy="45" r="3" fill="hsl(249, 90%, 68%)" />
    <circle cx="30" cy="30" r="5" fill="hsl(234, 55%, 50%)" />
    <defs>
      <linearGradient id="ecosystemGradient" x1="15" y1="15" x2="45" y2="45" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(234, 55%, 50%)" />
        <stop offset="1" stopColor="hsl(249, 90%, 68%)" />
      </linearGradient>
    </defs>
  </svg>
);

const EcosystemSection = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <section
      id="ecosystem"
      className="py-20 sm:py-32 lg:py-48 relative overflow-hidden bg-gradient-subtle"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest mb-4 block">
            The Ecosystem
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide">
            UNIFIED ARCHITECTURE
          </h2>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div className="md:hidden space-y-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              className="block p-6 bg-card border border-border rounded-sm hover:border-muted-foreground/30 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {product.name}
                </h3>
                <span className={`text-[10px] px-2 py-1 rounded-sm font-mono ${product.statusColor}`}>
                  {product.status}
                </span>
              </div>
              <p className="font-mono text-xs text-accent mb-2">{product.tagline}</p>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </Link>
          ))}
        </div>

        {/* Desktop Constellation */}
        <div className="hidden md:block relative max-w-5xl mx-auto aspect-[4/3]">
          {/* Connection Lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Lines from center to each product */}
            {products.map((product) => (
              <line
                key={product.id}
                x1="50"
                y1="50"
                x2={product.position.x}
                y2={product.position.y}
                stroke={
                  activeProduct?.id === product.id
                    ? product.color
                    : "hsl(222, 20%, 20%)"
                }
                strokeWidth="0.3"
                className="transition-all duration-500"
                strokeDasharray="2 2"
              />
            ))}
            {/* Connecting lines between products */}
            <line
              x1="15"
              y1="25"
              x2="85"
              y2="25"
              stroke="hsl(222, 20%, 15%)"
              strokeWidth="0.2"
              strokeDasharray="1 2"
            />
            <line
              x1="15"
              y1="75"
              x2="85"
              y2="75"
              stroke="hsl(222, 20%, 15%)"
              strokeWidth="0.2"
              strokeDasharray="1 2"
            />
            <line
              x1="15"
              y1="25"
              x2="15"
              y2="75"
              stroke="hsl(222, 20%, 15%)"
              strokeWidth="0.2"
              strokeDasharray="1 2"
            />
            <line
              x1="85"
              y1="25"
              x2="85"
              y2="75"
              stroke="hsl(222, 20%, 15%)"
              strokeWidth="0.2"
              strokeDasharray="1 2"
            />
          </svg>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-card border border-border flex items-center justify-center glow-subtle">
              <CropxonMark />
            </div>
          </div>

          {/* Product Nodes */}
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${product.position.x}%`,
                top: `${product.position.y}%`,
              }}
              onMouseEnter={() => setActiveProduct(product)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div
                className={`
                  w-32 lg:w-44 p-4 lg:p-6 rounded-sm bg-card border border-border
                  transition-all duration-500 ease-out
                  ${
                    activeProduct?.id === product.id
                      ? "scale-110 border-accent/50"
                      : "hover:scale-105 hover:border-muted-foreground/30"
                  }
                `}
                style={{
                  boxShadow:
                    activeProduct?.id === product.id
                      ? `0 0 40px ${product.color}30`
                      : "none",
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-sm lg:text-base font-bold text-foreground">
                    {product.name}
                  </h3>
                  <span className={`text-[8px] lg:text-[10px] px-1.5 py-0.5 rounded-sm font-mono ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>
                <p className="font-mono text-[10px] lg:text-xs text-muted-foreground">
                  {product.tagline}
                </p>
              </div>
            </Link>
          ))}

          {/* Active Product Detail Panel */}
          {activeProduct && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-8 w-full max-w-md p-6 bg-card/90 backdrop-blur-sm border border-border rounded-sm animate-fade-in z-30">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-lg font-bold text-foreground">
                  {activeProduct.name}
                </h4>
                <span className={`text-xs px-2 py-1 rounded-sm font-mono ${activeProduct.statusColor}`}>
                  {activeProduct.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {activeProduct.description}
              </p>
              <div className="flex gap-3">
                <Button variant="institutional" size="sm" asChild>
                  <Link to={activeProduct.link}>Learn More</Link>
                </Button>
                <Button variant="heroPrimary" size="sm" asChild>
                  <a href={activeProduct.externalUrl} target="_blank" rel="noopener noreferrer">
                    Enter Platform →
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
