/**
 * OriginX Labs Official Logo Component
 * Pure SVG vector logo with metallic gradients - no background fills
 * Premium, Apple-level quality with theme awareness
 */

import { cn } from "@/lib/utils";

interface OriginXLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  animated?: boolean;
  showText?: boolean;
}

const sizeMap = {
  sm: 28,
  md: 40,
  lg: 56,
  xl: 80,
  "2xl": 120,
};

const OriginXLogo = ({ 
  className, 
  size = "md", 
  animated = false,
  showText = false 
}: OriginXLogoProps) => {
  const logoSize = sizeMap[size];
  
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div 
        className={cn(
          "flex items-center justify-center flex-shrink-0",
          animated && "animate-[logoFloat_3s_ease-in-out_infinite]"
        )}
        style={{ width: logoSize, height: logoSize }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logoGradientPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B5998"/>
              <stop offset="50%" stopColor="#4A6FB5"/>
              <stop offset="100%" stopColor="#6B8DD6"/>
            </linearGradient>
            <linearGradient id="logoGradientSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5B7BC2"/>
              <stop offset="100%" stopColor="#8FA4D8"/>
            </linearGradient>
            <linearGradient id="logoMetallic" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C4D4F0"/>
              <stop offset="30%" stopColor="#7D9AD4"/>
              <stop offset="70%" stopColor="#4A6FB5"/>
              <stop offset="100%" stopColor="#3B5998"/>
            </linearGradient>
          </defs>
          
          {/* Main X shape - clean geometric form */}
          <g transform="translate(50, 50)">
            {/* Top-left to center stroke */}
            <path 
              d="M -28 -28 L -4 -4" 
              stroke="url(#logoGradientPrimary)" 
              strokeWidth="8" 
              strokeLinecap="round"
            />
            
            {/* Top-right to center stroke */}
            <path 
              d="M 28 -28 L 4 -4" 
              stroke="url(#logoGradientSecondary)" 
              strokeWidth="8" 
              strokeLinecap="round"
            />
            
            {/* Bottom-left to center stroke */}
            <path 
              d="M -28 28 L -4 4" 
              stroke="url(#logoGradientSecondary)" 
              strokeWidth="8" 
              strokeLinecap="round"
            />
            
            {/* Bottom-right to center stroke */}
            <path 
              d="M 28 28 L 4 4" 
              stroke="url(#logoGradientPrimary)" 
              strokeWidth="8" 
              strokeLinecap="round"
            />
            
            {/* Corner nodes */}
            <circle cx="-28" cy="-28" r="6" fill="url(#logoMetallic)"/>
            <circle cx="28" cy="-28" r="6" fill="url(#logoMetallic)"/>
            <circle cx="-28" cy="28" r="6" fill="url(#logoMetallic)"/>
            <circle cx="28" cy="28" r="6" fill="url(#logoMetallic)"/>
            
            {/* Center hub */}
            <circle cx="0" cy="0" r="10" fill="url(#logoGradientPrimary)"/>
            <circle cx="0" cy="0" r="6" fill="url(#logoMetallic)"/>
          </g>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-foreground tracking-wide">
            OriginX Labs
          </span>
          <span className="text-muted-foreground/60 text-[8px] tracking-[0.12em] uppercase mt-0.5">
            Pvt. Ltd.
          </span>
        </div>
      )}
      
      <style>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
};

export default OriginXLogo;
