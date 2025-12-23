import { useState, useEffect, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

const SurveillanceDrone = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isEnabled, setIsEnabled] = useState(() => {
    const saved = localStorage.getItem("droneEnabled");
    return saved === null ? true : saved === "true";
  });
  const targetRef = useRef({ x: 100, y: 100 });
  const animationRef = useRef<number>();
  const particleIdRef = useRef(0);
  const lastParticleTimeRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    localStorage.setItem("droneEnabled", String(isEnabled));
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = (timestamp: number) => {
      setPosition((prev) => {
        const dx = targetRef.current.x - prev.x;
        const dy = targetRef.current.y - prev.y;
        const ease = 0.025;
        const newX = prev.x + dx * ease;
        const newY = prev.y + dy * ease;

        // Add particle trail every 80ms (reduced frequency)
        if (timestamp - lastParticleTimeRef.current > 80) {
          const speed = Math.sqrt(dx * dx + dy * dy);
          if (speed > 8) {
            lastParticleTimeRef.current = timestamp;
            setParticles((prev) => {
              const newParticle: Particle = {
                id: particleIdRef.current++,
                x: newX,
                y: newY - 20,
                opacity: 0.5,
              };
              // Keep only last 6 particles for better performance
              return [...prev.slice(-5), newParticle];
            });
          }
        }

        return { x: newX, y: newY };
      });

      // Fade out particles faster
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.06 }))
          .filter((p) => p.opacity > 0)
      );

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
        className="fixed bottom-4 right-4 z-50 p-1.5 bg-card/80 backdrop-blur-sm border border-border/40 rounded-full shadow-md hover:bg-card transition-colors"
        title="Enable Drone"
      >
        <svg className="w-3.5 h-3.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      </button>
    );
  }

  return (
    <>
      {/* Particle Trail - Optimized */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-30 w-1.5 h-1.5 rounded-full bg-primary/60"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 4px hsl(var(--primary) / 0.4)",
          }}
        />
      ))}

      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: position.x - 12,
          top: position.y - 35,
        }}
      >
        {/* Tiny Drone */}
        <div
          className="relative pointer-events-auto cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsEnabled(false)}
          title="Click to hide"
        >
          <div className="relative w-6 h-4">
            {/* Rotors */}
            {[
              { x: -8, y: -2 },
              { x: 8, y: -2 },
              { x: -8, y: 4 },
              { x: 8, y: 4 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-3 h-3"
                style={{
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="w-full h-full rounded-full border border-primary/40"
                  style={{ animation: `spin ${0.12 + i * 0.01}s linear infinite` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-px bg-primary/60 rounded-full" />
                  </div>
                </div>
              </div>
            ))}

            {/* Body */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-2.5 bg-gradient-to-b from-muted to-muted/70 rounded border border-border/40 flex items-center justify-center">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: isHovered ? "hsl(var(--destructive))" : "hsl(var(--primary))",
                  boxShadow: isHovered ? "0 0 4px hsl(var(--destructive))" : "0 0 3px hsl(var(--primary))",
                }}
              />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </>
  );
};

export default SurveillanceDrone;
