import { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface PlatformsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Platform {
  name: string;
  descriptor: string;
  status: string;
  primaryAction: string;
  primaryRoute: string;
  secondaryAction: string;
  secondaryRoute: string;
  isExternal: boolean;
}

const platforms: Platform[] = [
  {
    name: "ATLAS",
    descriptor: "Workforce Operating System",
    status: "Live / Beta",
    primaryAction: "ENTER PLATFORM",
    primaryRoute: "https://atlas.cropxon.com",
    secondaryAction: "View Overview",
    secondaryRoute: "/atlas",
    isExternal: true,
  },
  {
    name: "TRACEFLOW",
    descriptor: "Digital Cognition Infrastructure",
    status: "Live",
    primaryAction: "ENTER PLATFORM",
    primaryRoute: "https://traceflow.cropxon.com",
    secondaryAction: "View Overview",
    secondaryRoute: "/traceflow",
    isExternal: true,
  },
  {
    name: "ORIGINX LABS",
    descriptor: "Research & Product Innovation",
    status: "Internal / Partnership Access",
    primaryAction: "REQUEST ACCESS",
    primaryRoute: "https://originxlabs.com",
    secondaryAction: "View Overview",
    secondaryRoute: "/originx-labs",
    isExternal: true,
  },
  {
    name: "CROPXON CLOUD",
    descriptor: "Infrastructure for Builders",
    status: "Live (SMB) / Enterprise (Roadmap)",
    primaryAction: "ENTER PLATFORM",
    primaryRoute: "https://cloud.cropxon.com",
    secondaryAction: "View Overview",
    secondaryRoute: "/cropxon-cloud",
    isExternal: true,
  },
  {
    name: "CROPXON ROBOTICS",
    descriptor: "Advanced Robotics Systems",
    status: "Planning / R&D",
    primaryAction: "VIEW PROGRAM",
    primaryRoute: "https://robotics.cropxon.com",
    secondaryAction: "Learn More",
    secondaryRoute: "/robotics",
    isExternal: true,
  },
];

const PlatformsModal = ({ isOpen, onClose }: PlatformsModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  // Focus trap and keyboard handling
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="platforms-title"
      className="fixed inset-0 z-[100] flex items-start justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative w-full h-full overflow-y-auto bg-[#0a0a0f] animate-fade-in"
        style={{
          animationDuration: "200ms",
        }}
      >
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#0a0a0f] border-b border-[#1a1a24]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div>
                <h1
                  id="platforms-title"
                  className="text-[#f5f7fa]"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Platforms
                </h1>
                <p
                  className="text-[#6b7280] mt-0.5 hidden sm:block"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    letterSpacing: "0.02em",
                  }}
                >
                  Operational access to CropXon systems
                </p>
              </div>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 text-[#6b7280] hover:text-[#f5f7fa] transition-colors duration-100 focus:outline-none focus:ring-1 focus:ring-[#6b7280]"
                aria-label="Close platforms selector"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </header>

        {/* Platform Grid */}
        <main className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid gap-0 divide-y divide-[#1a1a24]">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="py-8 lg:py-10 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
                  {/* Platform Info */}
                  <div className="flex-1 min-w-0">
                    <h2
                      className="text-[#f5f7fa] mb-1"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {platform.name}
                    </h2>
                    <p
                      className="text-[#9ca3af] mb-2"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {platform.descriptor}
                    </p>
                    <span
                      className="text-[#6b7280]"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontWeight: 400,
                        fontSize: "11px",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {platform.status}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 flex-shrink-0">
                    {platform.isExternal ? (
                      <a
                        href={platform.primaryRoute}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-[#f5f7fa] text-[#0a0a0f] hover:bg-[#e5e7eb] transition-colors duration-100 focus:outline-none focus:ring-1 focus:ring-[#f5f7fa]"
                        style={{
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontWeight: 500,
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {platform.primaryAction}
                      </a>
                    ) : (
                      <Link
                        to={platform.primaryRoute}
                        onClick={onClose}
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-[#f5f7fa] text-[#0a0a0f] hover:bg-[#e5e7eb] transition-colors duration-100 focus:outline-none focus:ring-1 focus:ring-[#f5f7fa]"
                        style={{
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontWeight: 500,
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {platform.primaryAction}
                      </Link>
                    )}

                    <Link
                      to={platform.secondaryRoute}
                      onClick={onClose}
                      className="inline-flex items-center justify-center px-5 py-2.5 border border-[#2a2a34] text-[#9ca3af] hover:text-[#f5f7fa] hover:border-[#3a3a44] transition-colors duration-100 focus:outline-none focus:ring-1 focus:ring-[#6b7280]"
                      style={{
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontWeight: 400,
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {platform.secondaryAction}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#1a1a24] mt-auto">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-8">
            <p
              className="text-[#6b7280] text-center"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                letterSpacing: "0.02em",
              }}
            >
              For access requests or support, contact{" "}
              <a
                href="mailto:access@cropxon.com"
                className="text-[#9ca3af] hover:text-[#f5f7fa] transition-colors duration-100"
              >
                access@cropxon.com
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PlatformsModal;
