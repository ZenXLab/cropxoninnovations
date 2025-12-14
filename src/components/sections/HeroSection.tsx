import { useEffect, useState } from "react";
import VisionModal from "@/components/modals/VisionModal";
import SubtleMeshBackground from "@/components/visuals/SubtleMeshBackground";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [visionModalOpen, setVisionModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#0a0a0f" }}
      >
        {/* Animated Mesh Background */}
        <SubtleMeshBackground />

        {/* Content Container - Absolutely Centered */}
        <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center flex flex-col items-center justify-center">
          
          {/* Headline */}
          <div
            className={`transition-all duration-1000 ease-out ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 
              className="font-display font-bold leading-none"
              style={{ 
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                color: "#f8fafc",
                letterSpacing: "0.05em",
                lineHeight: 1
              }}
            >
              BUILDING THE
              <br />
              FOUNDATIONAL SYSTEMS
            </h1>

            {/* Sub-headline */}
            <p 
              className="font-sans font-normal mx-auto"
              style={{ 
                fontSize: "1.25rem",
                color: "#94a3b8",
                maxWidth: "40ch",
                marginTop: "2rem"
              }}
            >
              Operating layers for work, intelligence, and infrastructure.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-center"
              style={{ gap: "2rem", marginTop: "4rem" }}
            >
              {/* Primary CTA */}
              <a
                href="#ecosystem"
                className="inline-flex items-center justify-center font-semibold uppercase transition-all"
                style={{ 
                  backgroundColor: "#0d9488",
                  color: "#f8fafc",
                  padding: "1.25rem 3rem",
                  borderRadius: "4px",
                  letterSpacing: "0.05em",
                  fontSize: "0.75rem",
                  transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0f766e";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0d9488";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Explore Ecosystem
              </a>
              
              {/* Secondary CTA */}
              <button
                onClick={() => setVisionModalOpen(true)}
                className="inline-flex items-center justify-center font-semibold uppercase transition-all"
                style={{ 
                  backgroundColor: "transparent",
                  color: "#cbd5e1",
                  padding: "1.25rem 3rem",
                  borderRadius: "4px",
                  border: "1px solid #475569",
                  letterSpacing: "0.05em",
                  fontSize: "0.75rem",
                  transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#94a3b8";
                  e.currentTarget.style.color = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#475569";
                  e.currentTarget.style.color = "#cbd5e1";
                }}
              >
                View Our Vision
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <div 
              className="flex flex-col items-center gap-2"
              style={{ color: "#475569" }}
            >
              <svg 
                className="w-5 h-5 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ animationDuration: "2s" }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Modal */}
      <VisionModal isOpen={visionModalOpen} onClose={() => setVisionModalOpen(false)} />
    </>
  );
};

export default HeroSection;
