import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Staggered reveal
    const logoTimer = setTimeout(() => setShowLogo(true), 100);
    const textTimer = setTimeout(() => setShowText(true), 400);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 40);

    // Complete after 2 seconds
    const completeTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background: 'hsl(var(--background))',
      }}
    >
      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, hsl(var(--primary) / 0.08) 0%, transparent 60%)
          `,
        }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center">
        {/* Logo container with animation - Pure SVG, no background */}
        <div 
          className={`relative transition-all duration-700 ease-out ${
            showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Animated glow ring */}
          <div 
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
              transform: 'scale(2.5)',
              animationDuration: '2s',
            }}
          />
          
          {/* Rotating ring animation */}
          <div 
            className="absolute rounded-full"
            style={{
              width: '140px',
              height: '140px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid hsl(var(--primary) / 0.2)',
              animation: 'spin 8s linear infinite',
            }}
          />
          
          {/* Pure SVG Logo - No white background */}
          <svg 
            viewBox="0 0 100 100" 
            className="relative w-24 h-24 sm:w-28 sm:h-28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animation: showLogo ? 'logoFloat 3s ease-in-out infinite' : 'none',
            }}
          >
            <defs>
              {/* Premium metallic gradient */}
              <linearGradient id="splash-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.95" />
                <stop offset="25%" stopColor="hsl(var(--foreground))" stopOpacity="0.75" />
                <stop offset="50%" stopColor="hsl(var(--foreground))" stopOpacity="1" />
                <stop offset="75%" stopColor="hsl(var(--foreground))" stopOpacity="0.65" />
                <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.85" />
              </linearGradient>
              
              {/* Primary accent gradient */}
              <linearGradient id="splash-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="splash-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Main X shape - Premium intersecting rings */}
            <g filter="url(#splash-glow)">
              {/* First ring (tilted left) */}
              <ellipse 
                cx="50" 
                cy="50" 
                rx="40" 
                ry="14"
                fill="none"
                stroke="url(#splash-metallic)"
                strokeWidth="5"
                strokeLinecap="round"
                transform="rotate(-45 50 50)"
              />
              
              {/* Second ring (tilted right) */}
              <ellipse 
                cx="50" 
                cy="50" 
                rx="40" 
                ry="14"
                fill="none"
                stroke="url(#splash-metallic)"
                strokeWidth="5"
                strokeLinecap="round"
                transform="rotate(45 50 50)"
              />
              
              {/* Inner accent rings */}
              <ellipse 
                cx="50" 
                cy="50" 
                rx="37" 
                ry="11"
                fill="none"
                stroke="url(#splash-accent)"
                strokeWidth="1.5"
                transform="rotate(-45 50 50)"
              />
              
              <ellipse 
                cx="50" 
                cy="50" 
                rx="37" 
                ry="11"
                fill="none"
                stroke="url(#splash-accent)"
                strokeWidth="1.5"
                transform="rotate(45 50 50)"
              />
              
              {/* Center highlight */}
              <circle 
                cx="50" 
                cy="50" 
                r="4"
                fill="hsl(var(--foreground))"
              />
            </g>
          </svg>
        </div>

        {/* Brand text */}
        <div 
          className={`mt-8 text-center transition-all duration-700 delay-200 ease-out ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 
            className="font-display font-bold text-foreground tracking-wide"
            style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}
          >
            ORIGINX LABS
          </h1>
          <p 
            className="mt-1 text-muted-foreground/60 tracking-[0.2em] uppercase"
            style={{ fontSize: '10px' }}
          >
            Pvt. Ltd.
          </p>
        </div>

        {/* Progress bar */}
        <div 
          className={`mt-10 w-40 sm:w-48 transition-all duration-500 delay-300 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-[1px] bg-border/30 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-100 ease-out"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, hsl(var(--primary) / 0.5), hsl(var(--primary)))',
              }}
            />
          </div>
          <p 
            className="text-center mt-4 text-muted-foreground/50 tracking-[0.15em] uppercase font-mono"
            style={{ fontSize: '9px' }}
          >
            Initializing
          </p>
        </div>
      </div>

      {/* Bottom branding */}
      <div 
        className={`absolute bottom-8 transition-all duration-700 delay-500 ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p 
          className="text-muted-foreground/30 tracking-[0.1em]"
          style={{ fontSize: '8px' }}
        >
          © 2026 ORIGINX LABS PVT. LTD.
        </p>
      </div>

      <style>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
