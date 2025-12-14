import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavChild {
  label: string;
  href: string;
  external?: boolean;
}

interface NavSection {
  label: string;
  children: NavChild[];
}

const navSections: NavSection[] = [
  {
    label: "ECOSYSTEM",
    children: [
      { label: "ATLAS", href: "https://atlas.cropxon.com", external: true },
      { label: "TRACEFLOW", href: "https://traceflow.cropxon.com", external: true },
      { label: "OriginX Labs", href: "https://originxlabs.com", external: true },
      { label: "CropXon Cloud", href: "https://cropxoncloud.com", external: true },
      { label: "OpZeniX", href: "https://opzenix.com", external: true },
    ],
  },
  {
    label: "PHILOSOPHY",
    children: [
      { label: "How We Think", href: "/how-we-think" },
      { label: "Design Principles", href: "/design-principles" },
      { label: "Systems, Not Products", href: "/systems-not-products" },
    ],
  },
  {
    label: "TECHNOLOGY",
    children: [
      { label: "Architecture", href: "/architecture" },
      { label: "Security & Compliance", href: "/architecture#security" },
      { label: "Research & Foundations", href: "/architecture#research" },
    ],
  },
  {
    label: "COMPANY",
    children: [
      { label: "Company Overview", href: "/company" },
      { label: "Governance", href: "/company#governance" },
      { label: "Legal & Compliance", href: "/company#compliance" },
      { label: "Press", href: "/contact" },
    ],
  },
  {
    label: "CAREERS",
    children: [
      { label: "Open Roles", href: "/careers#positions" },
      { label: "Culture", href: "/careers" },
      { label: "Working at CropXon", href: "/careers" },
    ],
  },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const isActive = (href: string, external?: boolean) => {
    if (external) return false;
    const basePath = href.split("#")[0];
    return location.pathname === basePath;
  };

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 dark:bg-[rgba(10,10,15,0.80)] backdrop-blur-md"
        onClick={onClose}
      />

      {/* Full-height Sheet */}
      <div className="absolute top-0 right-0 w-full h-full bg-background dark:bg-[#0A0A0F] border-l border-foreground/[0.06] animate-slide-in-right overflow-y-auto">
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 border-b border-foreground/[0.06]"
          style={{ height: "56px" }}
        >
          {/* Brand Lockup */}
          <Link to="/" onClick={onClose} className="flex items-center" style={{ gap: "6px" }}>
            <span
              className="text-[#0B0E14] dark:text-[#F5F7FA]"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                letterSpacing: "-0.01em",
              }}
            >
              CropXon
            </span>
            <span
              className="text-[#6B7280] dark:text-[#9CA3AF]"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                letterSpacing: "0.02em",
              }}
            >
              Innovations
            </span>
          </Link>

          <button
            onClick={onClose}
            className="p-2 text-[#6B7280] hover:text-[#111827] dark:hover:text-[#F5F7FA] transition-opacity duration-[120ms]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Sections */}
        <nav className="px-6 py-8">
          <div className="space-y-2">
            {navSections.map((section) => (
              <div key={section.label} className="border-b border-foreground/[0.04] last:border-0">
                <button
                  onClick={() => toggleSection(section.label)}
                  className={`w-full flex items-center justify-between py-4 transition-opacity duration-[120ms] ${
                    expandedSection === section.label
                      ? "text-[#0B0E14] dark:text-[#F5F7FA]"
                      : "text-[#6B7280] hover:text-[#111827] dark:hover:text-[#E5E7EB]"
                  }`}
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                  }}
                >
                  {section.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-150 ${
                      expandedSection === section.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSection === section.label && (
                  <div className="pb-4 pl-4 space-y-1">
                    {section.children.map((child) =>
                      child.external ? (
                        <a
                          key={child.label}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className="block py-2.5 text-[#6B7280] hover:text-[#111827] dark:hover:text-[#E5E7EB] transition-opacity duration-[120ms]"
                          style={{
                            fontFamily: "Inter, system-ui, sans-serif",
                            fontWeight: 400,
                            fontSize: "13px",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={onClose}
                          className={`block py-2.5 transition-opacity duration-[120ms] ${
                            isActive(child.href)
                              ? "text-[#0B0E14] dark:text-[#F5F7FA]"
                              : "text-[#6B7280] hover:text-[#111827] dark:hover:text-[#E5E7EB]"
                          }`}
                          style={{
                            fontFamily: "Inter, system-ui, sans-serif",
                            fontWeight: 400,
                            fontSize: "13px",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* PLATFORMS CTA - Links to Consoles Page */}
          <div className="mt-8 pt-6 border-t border-foreground/[0.06]">
            <Link
              to="/platforms"
              onClick={onClose}
              className="block w-full text-center text-white transition-colors duration-[120ms]"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.14em",
                padding: "12px 16px",
                borderRadius: "8px",
                backgroundColor: "#0B1A3A",
              }}
            >
              PLATFORMS
            </Link>
          </div>

          {/* Theme Toggle */}
          <div className="mt-6 pt-6 border-t border-foreground/[0.06]">
            <div className="flex items-center justify-between">
              <span
                className="text-[#6B7280]"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "13px",
                }}
              >
                Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
