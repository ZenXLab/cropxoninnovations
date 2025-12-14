import { useState, useEffect } from "react";
import CropxonLogo from "@/components/brand/CropxonLogo";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    // Complete after animation
    const completeTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 600);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Minimal radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.05)_0%,transparent_60%)]" />
      
      {/* Logo */}
      <div className="relative text-foreground">
        <CropxonLogo variant="full" size="xl" colorMode="auto" />
      </div>

      {/* Progress bar */}
      <div className="relative z-10 mt-16 w-48">
        <div className="h-px bg-border/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent/60 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
