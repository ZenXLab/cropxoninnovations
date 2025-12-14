import { useState, useEffect } from "react";
import logoAnimation from "@/assets/cropxon-logo-animation.mp4";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(onComplete, 500);
  };

  useEffect(() => {
    // Fallback timeout in case video doesn't load
    const fallbackTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 6000);

    return () => clearTimeout(fallbackTimer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        src={logoAnimation}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
      />
    </div>
  );
};

export default LoadingScreen;
