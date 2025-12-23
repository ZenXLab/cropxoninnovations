import { useState, useEffect, useRef } from "react";

const SurveillanceDrone = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isEnabled, setIsEnabled] = useState(() => {
    const saved = localStorage.getItem("droneEnabled");
    return saved === null ? true : saved === "true";
  });
  const targetRef = useRef({ x: 100, y: 100 });
  const animationRef = useRef<number>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    localStorage.setItem("droneEnabled", String(isEnabled));
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setPosition((prev) => {
        const dx = targetRef.current.x - prev.x;
        const dy = targetRef.current.y - prev.y;
        const ease = 0.03;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return (
      <button
        onClick={() => setIsEnabled(true)}
        className="fixed bottom-4 right-4 z-50 p-2 bg-card/90 backdrop-blur-sm border border-border/50 rounded-full shadow-lg hover:bg-card transition-colors"
        title="Enable Drone Companion"
      >
        <svg
          className="w-5 h-5 text-muted-foreground"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      </button>
    );
  }

  return (
    <div
      className="fixed pointer-events-none z-40"
      style={{
        left: position.x - 20,
        top: position.y - 60,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Drone Body */}
      <div
        className="relative pointer-events-auto cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsEnabled(false)}
        title="Click to disable drone"
      >
        {/* Main Body */}
        <div className="relative">
          {/* Rotor Arms */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-muted-foreground/40 rounded-full" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-muted-foreground/40 rounded-full rotate-90" style={{ transform: 'translateX(-50%) rotate(90deg)', top: '0px' }} />
          
          {/* Spinning Rotors */}
          {[
            { x: -16, y: -6 },
            { x: 16, y: -6 },
            { x: -16, y: 6 },
            { x: 16, y: 6 },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-6 h-6"
              style={{
                left: `calc(50% + ${pos.x}px)`,
                top: `calc(50% + ${pos.y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="w-full h-full rounded-full border border-primary/30"
                style={{
                  animation: `spin ${0.15 + i * 0.02}s linear infinite`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-0.5 bg-primary/50 rounded-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center rotate-90">
                  <div className="w-4 h-0.5 bg-primary/50 rounded-full" />
                </div>
              </div>
            </div>
          ))}

          {/* Central Body */}
          <div className="w-8 h-5 bg-gradient-to-b from-muted to-muted/80 rounded-lg border border-border/50 shadow-lg flex items-center justify-center">
            {/* Camera Lens */}
            <div className="w-2.5 h-2.5 rounded-full bg-background border border-border/50 flex items-center justify-center">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: isHovered 
                    ? "hsl(var(--destructive))" 
                    : "hsl(var(--primary))",
                  boxShadow: isHovered 
                    ? "0 0 8px hsl(var(--destructive))" 
                    : "0 0 6px hsl(var(--primary))",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          {/* Status LEDs */}
          <div className="absolute -bottom-0.5 left-1 w-1 h-1 rounded-full bg-green-500" style={{ animation: "blink 1.5s ease-in-out infinite" }} />
          <div className="absolute -bottom-0.5 right-1 w-1 h-1 rounded-full bg-primary" style={{ animation: "blink 2s ease-in-out infinite 0.5s" }} />
        </div>

        {/* Shadow */}
        <div
          className="absolute top-12 left-1/2 -translate-x-1/2 w-4 h-1 bg-foreground/10 rounded-full blur-sm"
          style={{
            animation: "shadowPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes shadowPulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.3; }
          50% { transform: translateX(-50%) scale(1.2); opacity: 0.15; }
        }
      `}</style>
    </div>
  );
};

export default SurveillanceDrone;
