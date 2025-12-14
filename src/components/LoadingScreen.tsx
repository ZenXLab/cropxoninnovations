import { useState, useEffect, useRef } from "react";
import loadingVideo from "@/assets/cropxon-loading-animation.mp4";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    }, 35);

    // Complete loading after video plays or timeout
    const completeTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 600);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-600 ${
        fadeOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{ background: '#0a0a0f' }}
    >
      {/* Neural network background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Neural network nodes */}
          {[
            { cx: 20, cy: 30 }, { cx: 35, cy: 15 }, { cx: 50, cy: 25 },
            { cx: 65, cy: 20 }, { cx: 80, cy: 35 }, { cx: 25, cy: 50 },
            { cx: 40, cy: 45 }, { cx: 60, cy: 55 }, { cx: 75, cy: 50 },
            { cx: 30, cy: 70 }, { cx: 50, cy: 75 }, { cx: 70, cy: 70 },
            { cx: 85, cy: 65 }, { cx: 15, cy: 80 }, { cx: 45, cy: 85 },
          ].map((node, i) => (
            <g key={i}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r="0.8"
                fill="#0d9488"
                className="animate-pulse"
                style={{ animationDelay: `${i * 150}ms` }}
              />
              {/* Connection lines */}
              {i < 14 && (
                <line
                  x1={node.cx}
                  y1={node.cy}
                  x2={[
                    { cx: 20, cy: 30 }, { cx: 35, cy: 15 }, { cx: 50, cy: 25 },
                    { cx: 65, cy: 20 }, { cx: 80, cy: 35 }, { cx: 25, cy: 50 },
                    { cx: 40, cy: 45 }, { cx: 60, cy: 55 }, { cx: 75, cy: 50 },
                    { cx: 30, cy: 70 }, { cx: 50, cy: 75 }, { cx: 70, cy: 70 },
                    { cx: 85, cy: 65 }, { cx: 15, cy: 80 }, { cx: 45, cy: 85 },
                  ][i + 1]?.cx || node.cx}
                  y2={[
                    { cx: 20, cy: 30 }, { cx: 35, cy: 15 }, { cx: 50, cy: 25 },
                    { cx: 65, cy: 20 }, { cx: 80, cy: 35 }, { cx: 25, cy: 50 },
                    { cx: 40, cy: 45 }, { cx: 60, cy: 55 }, { cx: 75, cy: 50 },
                    { cx: 30, cy: 70 }, { cx: 50, cy: 75 }, { cx: 70, cy: 70 },
                    { cx: 85, cy: 65 }, { cx: 15, cy: 80 }, { cx: 45, cy: 85 },
                  ][i + 1]?.cy || node.cy}
                  stroke="#0d9488"
                  strokeWidth="0.15"
                  strokeOpacity="0.3"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Video container */}
      <div className={`relative z-10 transition-all duration-700 ease-out ${
        videoLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}>
        <video
          ref={videoRef}
          src={loadingVideo}
          autoPlay
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="w-48 sm:w-64 md:w-80 h-auto object-contain"
        />
      </div>

      {/* Progress bar and status text */}
      <div className={`relative z-10 mt-12 transition-all duration-500 ${
        videoLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        {/* Progress bar */}
        <div className="w-48 sm:w-64 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(13, 148, 136, 0.2)' }}>
          <div
            className="h-full transition-all duration-100 ease-out"
            style={{ 
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #0d9488, #14b8a6)'
            }}
          />
        </div>
        
        {/* Status text */}
        <p 
          className="text-[11px] uppercase tracking-[0.3em] text-center mt-6 font-medium"
          style={{ 
            color: '#94a3b8',
            fontFamily: 'Space Grotesk, sans-serif'
          }}
        >
          Initializing Systems...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
