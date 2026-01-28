/**
 * OriginX Labs Official SVG Logo Component
 * Pure SVG implementation - no background, works on any surface
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
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
  "2xl": "w-32 h-32",
};

const OriginXLogo = ({ 
  className, 
  size = "md", 
  animated = false,
  showText = false 
}: OriginXLogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg 
        viewBox="0 0 100 100" 
        className={cn(
          sizeMap[size],
          "flex-shrink-0",
          animated && "animate-[logoFloat_3s_ease-in-out_infinite]"
        )}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic gradient for 3D effect */}
          <linearGradient id="metallic-main" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.9" />
            <stop offset="30%" stopColor="hsl(var(--foreground))" stopOpacity="0.7" />
            <stop offset="50%" stopColor="hsl(var(--foreground))" stopOpacity="0.95" />
            <stop offset="70%" stopColor="hsl(var(--foreground))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Highlight gradient */}
          <linearGradient id="highlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.4" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main X shape - intersecting elliptical rings */}
        <g filter="url(#logo-glow)">
          {/* First ring (tilted left) */}
          <ellipse 
            cx="50" 
            cy="50" 
            rx="38" 
            ry="12"
            fill="none"
            stroke="url(#metallic-main)"
            strokeWidth="4"
            transform="rotate(-45 50 50)"
          />
          
          {/* Second ring (tilted right) */}
          <ellipse 
            cx="50" 
            cy="50" 
            rx="38" 
            ry="12"
            fill="none"
            stroke="url(#metallic-main)"
            strokeWidth="4"
            transform="rotate(45 50 50)"
          />
          
          {/* Center highlight dot */}
          <circle 
            cx="50" 
            cy="50" 
            r="3"
            fill="url(#highlight)"
          />
          
          {/* Inner accent strokes for depth */}
          <ellipse 
            cx="50" 
            cy="50" 
            rx="36" 
            ry="10"
            fill="none"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="1"
            transform="rotate(-45 50 50)"
          />
          
          <ellipse 
            cx="50" 
            cy="50" 
            rx="36" 
            ry="10"
            fill="none"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="1"
            transform="rotate(45 50 50)"
          />
        </g>
      </svg>
      
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
