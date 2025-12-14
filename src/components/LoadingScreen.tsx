import { useState, useEffect, useRef } from "react";
import loadingVideo from "@/assets/cropxon-loading-video.mp4";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Fallback timeout in case video doesn't load
    const fallbackTimer = setTimeout(() => {
      if (!videoEnded) {
        setFadeOut(true);
        setTimeout(onComplete, 600);
      }
    }, 4000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [onComplete, videoEnded]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setFadeOut(true);
    setTimeout(onComplete, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: '#000000' }}
    >
      {/* Full-screen video - no background box */}
      <video
        ref={videoRef}
        src={loadingVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-contain"
        style={{
          maxWidth: '100vw',
          maxHeight: '100vh',
        }}
      />
    </div>
  );
};

export default LoadingScreen;
