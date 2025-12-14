import { useState, useEffect } from "react";
import logoAnimation from "@/assets/cropxon-logo-animation.mp4";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(onComplete, 800);
  };

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    // Fallback timeout in case video doesn't load
    const fallbackTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 800);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-800 ${
        fadeOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.1)_0%,transparent_70%)]" />
      
      {/* Video container with glow effect */}
      <div className="relative">
        <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 scale-150" />
        <video
          src={logoAnimation}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain"
        />
      </div>

      {/* Progress bar */}
      <div className="relative z-10 mt-12 w-48 sm:w-64">
        <div className="h-px bg-border/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary/60 to-accent/60 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.3em] text-center mt-4 font-medium">
          Initializing
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
