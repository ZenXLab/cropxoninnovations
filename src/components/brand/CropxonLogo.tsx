import { cn } from "@/lib/utils";

interface CropxonLogoProps {
  variant?: "full" | "symbol" | "wordmark";
  colorMode?: "auto" | "light" | "dark" | "mono";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  xs: { symbol: 24, wordmark: 80, full: 120 },
  sm: { symbol: 32, wordmark: 100, full: 140 },
  md: { symbol: 40, wordmark: 120, full: 180 },
  lg: { symbol: 56, wordmark: 160, full: 240 },
  xl: { symbol: 72, wordmark: 200, full: 300 },
};

const CropxonLogo = ({
  variant = "full",
  colorMode = "auto",
  size = "md",
  className,
}: CropxonLogoProps) => {
  // Colors based on mode
  const getColors = () => {
    switch (colorMode) {
      case "light":
        return { primary: "#0b1e3c", accent: "#5b5ce2" };
      case "dark":
        return { primary: "#ffffff", accent: "#5b5ce2" };
      case "mono":
        return { primary: "currentColor", accent: "currentColor" };
      default:
        // Auto mode uses CSS variables
        return { primary: "currentColor", accent: "#5b5ce2" };
    }
  };

  const colors = getColors();
  const dimensions = sizes[size];

  // Symbol: Abstract node/connection mark representing systems architecture
  const Symbol = ({ symbolSize = 40 }: { symbolSize?: number }) => (
    <svg
      width={symbolSize}
      height={symbolSize}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Central hexagonal node - represents core infrastructure */}
      <path
        d="M24 8L36 16V32L24 40L12 32V16L24 8Z"
        stroke={colors.primary}
        strokeWidth="2"
        fill="none"
      />
      {/* Inner connection point */}
      <circle cx="24" cy="24" r="4" fill={colors.accent} />
      {/* Connection lines to vertices - data flow */}
      <line x1="24" y1="20" x2="24" y2="12" stroke={colors.accent} strokeWidth="1.5" />
      <line x1="27.5" y1="26" x2="33" y2="30" stroke={colors.accent} strokeWidth="1.5" />
      <line x1="20.5" y1="26" x2="15" y2="30" stroke={colors.accent} strokeWidth="1.5" />
    </svg>
  );

  // Wordmark: Clean geometric typography
  const Wordmark = ({ width = 120 }: { width?: number }) => (
    <svg
      width={width}
      height={width * 0.25}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <text
        x="0"
        y="36"
        fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif"
        fontSize="38"
        fontWeight="600"
        letterSpacing="0.02em"
        fill={colors.primary}
      >
        Crop
      </text>
      <text
        x="78"
        y="36"
        fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif"
        fontSize="38"
        fontWeight="700"
        letterSpacing="0.02em"
        fill={colors.accent}
      >
        X
      </text>
      <text
        x="104"
        y="36"
        fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif"
        fontSize="38"
        fontWeight="600"
        letterSpacing="0.02em"
        fill={colors.primary}
      >
        on
      </text>
    </svg>
  );

  if (variant === "symbol") {
    return (
      <div className={cn("inline-flex items-center", className)}>
        <Symbol symbolSize={dimensions.symbol} />
      </div>
    );
  }

  if (variant === "wordmark") {
    return (
      <div className={cn("inline-flex items-center", className)}>
        <Wordmark width={dimensions.wordmark} />
      </div>
    );
  }

  // Full logo: Symbol + Wordmark
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <Symbol symbolSize={dimensions.symbol * 0.8} />
      <Wordmark width={dimensions.wordmark} />
    </div>
  );
};

export default CropxonLogo;
