import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import MobileMenu from "./MobileMenu";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "ECOSYSTEM",
    children: [
      { label: "ATLAS", href: "/atlas" },
      { label: "TRACEFLOW", href: "/traceflow" },
      { label: "OriginX Labs", href: "/originx-labs" },
      { label: "CropXon Cloud", href: "/cropxon-cloud" },
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
      { label: "Security & Compliance", href: "/company#compliance" },
      { label: "Research & Foundations", href: "/originx-labs" },
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

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isChildActive = (item: NavItem) => {
    if (!item.children) return false;
    return item.children.some((child) => {
      const basePath = child.href.split("#")[0];
      return location.pathname === basePath;
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[220ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] ${
          scrolled
            ? "bg-background/88 dark:bg-[rgba(10,10,15,0.72)] backdrop-blur-[16px] border-b border-foreground/[0.04] dark:border-white/[0.06]"
            : "bg-transparent border-b border-transparent"
        }`}
        style={{
          height: scrolled ? "56px" : "64px",
        }}
      >
        <nav className="h-full max-w-[1200px] mx-auto px-8">
          <div className="flex items-center justify-between h-full">
            {/* Brand Lockup */}
            <Link to="/" className="flex items-center" style={{ gap: "6px" }}>
              <span
                className="text-[#0B0E14] dark:text-[#F5F7FA]"
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
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
                  fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  letterSpacing: "0.02em",
                }}
              >
                Innovations
              </span>
            </Link>

            {/* Navigation Items - Desktop */}
            <div className="hidden lg:flex items-center" style={{ gap: "32px", marginLeft: "48px" }}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 transition-opacity duration-[120ms] ease-linear ${
                      isChildActive(item) || activeDropdown === item.label
                        ? "text-[#0B0E14] dark:text-[#F5F7FA] opacity-100"
                        : "text-[#6B7280] opacity-75 hover:opacity-100 hover:text-[#111827] dark:hover:text-[#E5E7EB]"
                    }`}
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontWeight: 500,
                      fontSize: "12px",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-150 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Active Indicator */}
                  {isChildActive(item) && (
                    <div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-[#0B0E14] dark:bg-[#F5F7FA]"
                      style={{ width: "16px" }}
                    />
                  )}

                  {/* Dropdown */}
                  {activeDropdown === item.label && item.children && (
                    <div
                      className="absolute top-full left-0 mt-2 py-2 min-w-[200px] bg-background dark:bg-[#0f0f14] backdrop-blur-[16px] border border-foreground/[0.08] dark:border-white/[0.08] rounded-md z-[60]"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-[#6B7280] hover:text-[#111827] dark:hover:text-[#F5F7FA] hover:bg-foreground/[0.04] transition-colors duration-[120ms]"
                          style={{
                            fontFamily: "Inter, system-ui, sans-serif",
                            fontWeight: 400,
                            fontSize: "13px",
                            letterSpacing: "0.01em",
                          }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side: Theme Toggle + CTA */}
            <div className="flex items-center" style={{ gap: "40px" }}>
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>

              {/* PLATFORMS CTA - Links to Consoles Page */}
              <Link
                to="/platforms"
                className="hidden lg:inline-flex items-center justify-center text-white transition-colors duration-[120ms]"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  backgroundColor: "#0B1A3A",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0F2557")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0B1A3A")}
              >
                PLATFORMS
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-1 text-[#6B7280] hover:text-[#111827] dark:hover:text-[#F5F7FA] transition-opacity duration-[120ms]"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navigation;
