import { useState, useEffect } from "react";
import cropxonLogo from "@/assets/cropxon-logo.svg";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // Delay logo fade-in for dramatic effect
    const logoTimer = setTimeout(() => setLogoVisible(true), 200);

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

    // Complete loading
    const completeTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 800);
    }, 3500);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(interval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-800 ${
        fadeOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />
      
      {/* Logo container with glow effect */}
      <div className={`relative transition-all duration-1000 ease-out ${
        logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}>
        <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 scale-150" />
        <img
          src={cropxonLogo}
          alt="CropXon"
          className="relative z-10 w-40 sm:w-56 md:w-72 h-auto object-contain"
        />
      </div>

      {/* Progress bar */}
      <div className={`relative z-10 mt-16 w-48 sm:w-64 transition-all duration-700 delay-300 ${
        logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        <div className="h-[2px] bg-border/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary/80 to-accent/60 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.4em] text-center mt-6 font-medium">
          Building Foundational Systems
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
