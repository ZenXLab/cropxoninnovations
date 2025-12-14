import { useEffect, useState } from "react";
import VisionModal from "@/components/modals/VisionModal";
import SubtleMeshBackground from "@/components/visuals/SubtleMeshBackground";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [visionModalOpen, setVisionModalOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["FOUNDATIONAL", "INTELLIGENT", "RESILIENT", "SCALABLE"];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Animated Mesh Background */}
        <SubtleMeshBackground />

        {/* Content Container - Absolutely Centered */}
        <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center flex flex-col items-center justify-center">
          
          {/* Headline with Typography Animation */}
          <div
            className={`transition-all duration-1000 ease-out ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 
              className="font-display font-bold leading-none text-foreground"
              style={{ 
                fontSize: "clamp(2rem, 7vw, 5.5rem)",
                letterSpacing: "0.03em",
                lineHeight: 1.1
              }}
            >
              <span className="block">BUILDING THE</span>
              <span className="relative inline-block overflow-hidden h-[1.15em]">
                {words.map((word, index) => (
                  <span
                    key={word}
                    className={`block transition-all duration-700 ease-out absolute left-0 right-0 bg-clip-text text-transparent hero-gradient-text ${
                      index === wordIndex 
                        ? "translate-y-0 opacity-100" 
                        : index === (wordIndex - 1 + words.length) % words.length
                          ? "-translate-y-full opacity-0"
                          : "translate-y-full opacity-0"
                    }`}
                  >
                    {word}
                  </span>
                ))}
                <span className="invisible">{words[0]}</span>
              </span>
              <span className="block">SYSTEMS</span>
            </h1>

            {/* Sub-headline */}
            <p 
              className="font-sans font-normal mx-auto text-muted-foreground"
              style={{ 
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                maxWidth: "42ch",
                marginTop: "2.5rem",
                lineHeight: 1.7
              }}
            >
              Operating layers for work, intelligence, and infrastructure.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              style={{ marginTop: "3.5rem" }}
            >
              {/* Primary CTA */}
              <a
                href="#ecosystem"
                className="inline-flex items-center justify-center font-semibold uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  padding: "1.125rem 2.5rem",
                  borderRadius: "4px",
                  letterSpacing: "0.05em",
                  fontSize: "0.75rem"
                }}
              >
                Explore Ecosystem
              </a>
              
              {/* Secondary CTA */}
              <button
                onClick={() => setVisionModalOpen(true)}
                className="inline-flex items-center justify-center font-semibold uppercase bg-transparent text-muted-foreground hover:text-foreground border border-border hover:border-muted-foreground transition-all duration-300"
                style={{ 
                  padding: "1.125rem 2.5rem",
                  borderRadius: "4px",
                  letterSpacing: "0.05em",
                  fontSize: "0.75rem"
                }}
              >
                View Our Vision
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - At Bottom */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <a 
            href="#ecosystem"
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <span 
              className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 group-hover:text-muted-foreground transition-colors"
            >
              Scroll
            </span>
            <div className="relative w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center group-hover:border-muted-foreground/50 transition-colors">
              <div 
                className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-2 animate-scroll-indicator"
              />
            </div>
          </a>
        </div>
      </section>

      {/* Vision Modal */}
      <VisionModal isOpen={visionModalOpen} onClose={() => setVisionModalOpen(false)} />

      <style>{`
        @keyframes scroll-indicator {
          0%, 100% { 
            opacity: 0.5;
            transform: translateY(0);
          }
          50% { 
            opacity: 1;
            transform: translateY(12px);
          }
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
        
        /* Dark theme gradient - Electric blue to violet */
        :root .hero-gradient-text,
        .dark .hero-gradient-text {
          background: linear-gradient(
            135deg, 
            hsl(234 85% 65%) 0%, 
            hsl(249 90% 68%) 50%, 
            hsl(280 80% 65%) 100%
          );
          background-size: 200% 200%;
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        /* Light theme gradient - Deep navy to indigo */
        .light .hero-gradient-text {
          background: linear-gradient(
            135deg, 
            hsl(222 75% 35%) 0%, 
            hsl(234 65% 45%) 50%, 
            hsl(249 60% 50%) 100%
          );
          background-size: 200% 200%;
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
