/**
 * OriginX Labs Official Logo Component
 * Uses the actual SVG logo file with no background
 * Premium, Apple-level quality with theme awareness
 */

import { cn } from "@/lib/utils";
import originxLogoSvg from '@/assets/originx-logo.svg';

interface OriginXLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  animated?: boolean;
  showText?: boolean;
}

const sizeMap = {
  sm: { container: "w-8 h-8", image: 28 },
  md: { container: "w-12 h-12", image: 44 },
  lg: { container: "w-16 h-16", image: 56 },
  xl: { container: "w-24 h-24", image: 88 },
  "2xl": { container: "w-32 h-32", image: 120 },
};

const OriginXLogo = ({ 
  className, 
  size = "md", 
  animated = false,
  showText = false 
}: OriginXLogoProps) => {
  const sizeConfig = sizeMap[size];
  
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div 
        className={cn(
          sizeConfig.container,
          "flex items-center justify-center flex-shrink-0",
          animated && "animate-[logoFloat_3s_ease-in-out_infinite]"
        )}
      >
        <img 
          src={originxLogoSvg} 
          alt="OriginX Labs"
          className="w-full h-full object-contain"
          style={{ maxWidth: sizeConfig.image, maxHeight: sizeConfig.image }}
        />
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
