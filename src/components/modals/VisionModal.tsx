import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import cropxonAnimation from "@/assets/cropxon-logo-animation.mp4";

interface VisionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VisionModal = ({ isOpen, onClose }: VisionModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setShowContent(false);
      setVideoEnded(false);
      
      // Start video playback
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // If autoplay fails, show content immediately
          setVideoEnded(true);
          setShowContent(true);
        });
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => setShowContent(true), 300);
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoEnded(true);
    setShowContent(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-3 text-muted-foreground hover:text-foreground transition-colors bg-card/50 rounded-full border border-border"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Skip Button */}
      {!videoEnded && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 z-20 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-wider"
        >
          Skip →
        </button>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Video Section */}
        <div 
          className={`flex justify-center transition-all duration-1000 ${
            videoEnded ? "opacity-0 scale-95 absolute inset-0 pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          <video
            ref={videoRef}
            src={cropxonAnimation}
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
          />
        </div>

        {/* Vision Content */}
        <div 
          className={`text-center transition-all duration-1000 delay-300 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
          }`}
        >
          {/* Logo Mark */}
          <div className="mb-12 flex justify-center">
            <svg
              viewBox="0 0 80 80"
              className="w-16 h-16 md:w-20 md:h-20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20L40 40M40 40L60 60M60 20L40 40M40 40L20 60"
                stroke="url(#visionGradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="20" cy="20" r="4" fill="hsl(234, 55%, 50%)" />
              <circle cx="60" cy="20" r="4" fill="hsl(234, 55%, 50%)" />
              <circle cx="20" cy="60" r="4" fill="hsl(249, 90%, 68%)" />
              <circle cx="60" cy="60" r="4" fill="hsl(249, 90%, 68%)" />
              <circle cx="40" cy="40" r="6" fill="hsl(234, 55%, 50%)" />
              <defs>
                <linearGradient id="visionGradient" x1="20" y1="20" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="hsl(234, 55%, 50%)" />
                  <stop offset="1" stopColor="hsl(249, 90%, 68%)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <span className="font-mono text-sm text-accent uppercase tracking-[0.3em] mb-6 block">
            Our Vision
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide mb-8 max-w-4xl mx-auto leading-tight">
            Building Technology That Outlasts Market Cycles
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We envision a world where foundational technology infrastructure is{" "}
              <span className="text-foreground font-medium">designed for permanence, not pivots</span>.
              Where systems are built to serve generations, not just quarters.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              CropXon exists to create the{" "}
              <span className="text-foreground font-medium">operating layers</span>{" "}
              that power the next era of work, intelligence, and infrastructure—platforms that will remain{" "}
              <span className="text-foreground font-medium">relevant for decades</span>.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              This is not about building products. This is about{" "}
              <span className="text-foreground font-medium">building systems</span>.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-border/30 max-w-2xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-foreground font-display italic tracking-wide">
              "We build for the long arc of technology, not the next funding cycle."
            </blockquote>
            <cite className="text-sm text-muted-foreground mt-4 block font-mono uppercase tracking-wider">
              — CropXon Innovations
            </cite>
          </div>

          {/* Close CTA */}
          <button
            onClick={onClose}
            className="mt-12 px-8 py-3 text-sm font-medium text-foreground uppercase tracking-widest hover:text-accent transition-colors"
          >
            Continue Exploring →
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisionModal;
