import { useState, useEffect, useRef } from "react";
import loadingVideo from "@/assets/cropxon-loading-video.mp4";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    // Complete after 1.5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 400);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-400 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Video container with dark mode blend */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
        <video
          ref={videoRef}
          src={loadingVideo}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen dark:invert"
        />
      </div>

      {/* Progress bar */}
      <div className="mt-8 w-48 sm:w-64">
        <div className="h-[2px] bg-border/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] text-center mt-4 font-mono">
          Initializing Systems
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
