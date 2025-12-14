import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  position: { x: number; y: number };
  color: string;
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
  },
  {
    id: "traceflow",
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description:
      "Infrastructure layer enabling intelligent decision-making and automated reasoning across complex business processes.",
    position: { x: 85, y: 25 },
    color: "hsl(249, 90%, 68%)",
  },
  {
    id: "originx",
    name: "OriginX Labs",
    tagline: "Product & R&D Division",
    description:
      "Our research and development division focused on pioneering new technologies and bringing innovations to market.",
    position: { x: 15, y: 75 },
    color: "hsl(200, 60%, 50%)",
  },
  {
    id: "cloud",
    name: "Cropxon Cloud",
    tagline: "IaaS for Individuals → SMBs",
    description:
      "Scalable infrastructure-as-a-service designed to grow with businesses from individual developers to enterprise scale.",
    position: { x: 85, y: 75 },
    color: "hsl(280, 60%, 55%)",
  },
];

const CropxonMark = () => (
  <svg
    viewBox="0 0 60 60"
    className="w-12 h-12 md:w-16 md:h-16"
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
      className="py-32 lg:py-48 relative overflow-hidden bg-gradient-subtle"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
            The Ecosystem
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide">
            UNIFIED ARCHITECTURE
          </h2>
        </div>

        {/* Constellation */}
        <div className="relative max-w-5xl mx-auto aspect-square md:aspect-[4/3]">
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
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-card border border-border flex items-center justify-center glow-subtle">
              <CropxonMark />
            </div>
          </div>

          {/* Product Nodes */}
          {products.map((product) => (
            <div
              key={product.id}
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
                  w-28 md:w-36 lg:w-44 p-4 md:p-6 rounded-sm bg-card border border-border
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
                <h3 className="font-display text-sm md:text-base font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="font-mono text-[10px] md:text-xs text-muted-foreground">
                  {product.tagline}
                </p>
              </div>
            </div>
          ))}

          {/* Active Product Detail Panel */}
          {activeProduct && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-8 w-full max-w-md p-6 bg-card/90 backdrop-blur-sm border border-border rounded-sm animate-fade-in z-30">
              <h4 className="font-display text-lg font-bold text-foreground mb-2">
                {activeProduct.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {activeProduct.description}
              </p>
              <Button variant="institutional" size="sm">
                Enter Platform →
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
