import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 right-0 z-50 h-screen w-[3px] pointer-events-none"
      style={{ background: 'hsl(var(--border) / 0.2)' }}
    >
      <div
        className="w-full transition-all duration-150 ease-out"
        style={{
          height: `${progress}%`,
          background: 'linear-gradient(180deg, #0d9488 0%, #14b8a6 100%)',
          boxShadow: '0 0 10px rgba(13, 148, 136, 0.5)',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
