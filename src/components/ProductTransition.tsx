import { useEffect, useState, useRef } from "react";
import loadingVideo from "@/assets/cropxon-loading-video.mp4";

interface ProductTransitionProps {
  isOpen: boolean;
  productName: string;
  externalUrl: string;
  onClose: () => void;
}

const ProductTransition = ({ isOpen, productName, externalUrl, onClose }: ProductTransitionProps) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setFadeOut(false);
      return;
    }

    document.body.style.overflow = 'hidden';

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        document.body.style.overflow = '';
        window.open(externalUrl, '_blank');
        onClose();
      }, 400);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      document.body.style.overflow = '';
    };
  }, [isOpen, externalUrl, onClose]);

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    document.body.style.overflow = '';
    window.open(externalUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-400 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 text-muted-foreground hover:text-foreground text-xs uppercase tracking-widest transition-colors z-10"
      >
        Skip →
      </button>

      {/* Video container */}
      <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
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

      {/* Progress bar and label */}
      <div className="mt-6 w-40 sm:w-56">
        <div className="h-[2px] bg-border/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] text-center mt-3 font-mono">
          Opening {productName}
        </p>
      </div>
    </div>
  );
};

export default ProductTransition;
