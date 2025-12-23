import { useState, useEffect } from "react";
import officialLogo from "@/assets/cropxon-logo-official.png";

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
          {/* Glow effect behind logo */}
          <div 
            className="absolute inset-0 blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
              transform: 'scale(2)',
            }}
          />
          
          {/* Logo */}
          <img 
            src={officialLogo} 
            alt="CropXon" 
            className="relative w-20 h-20 sm:w-24 sm:h-24 object-contain dark:brightness-0 dark:invert"
          />
        </div>

        {/* Brand text */}
        <div 
          className={`mt-6 text-center transition-all duration-700 delay-200 ease-out ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 
            className="font-display font-bold text-foreground tracking-wide"
            style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}
          >
            CROPXON
          </h1>
          <p 
            className="mt-1 text-muted-foreground/60 tracking-[0.2em] uppercase"
            style={{ fontSize: '10px' }}
          >
            Innovations
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
          © {new Date().getFullYear()} CROPXON INNOVATIONS PVT LTD
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
