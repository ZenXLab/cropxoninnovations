import { useState, useEffect } from "react";
import originxLogo from "@/assets/originx-logo.png";

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
        {/* Logo container with animation */}
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
            className="absolute inset-0 rounded-full"
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
          
          {/* Logo - No background, just the icon */}
          <img 
            src={originxLogo} 
            alt="OriginX Labs" 
            className="relative w-24 h-24 sm:w-28 sm:h-28 object-contain"
            style={{
              animation: showLogo ? 'logoFloat 3s ease-in-out infinite' : 'none',
            }}
          />
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
