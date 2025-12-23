import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import MobileMenu from "./MobileMenu";
import MegaMenu from "./MegaMenu";
import officialLogo from "@/assets/cropxon-logo-official.png";

interface NavItem {
  label: string;
  href?: string;
  isMegaMenu?: boolean;
  children?: { label: string; href: string; external?: boolean }[];
}

const navItems: NavItem[] = [
  {
    label: "ECOSYSTEM",
    isMegaMenu: true,
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

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string, isMegaMenu?: boolean) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    if (isMegaMenu) {
      setMegaMenuOpen(true);
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
      setMegaMenuOpen(false);
    }
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleMegaMenuClose = () => {
    setMegaMenuOpen(false);
  };

  const isChildActive = (item: NavItem) => {
    if (!item.children) return false;
    return item.children.some((child) => {
      if (child.external) return false;
      const basePath = child.href.split("#")[0];
      return location.pathname === basePath;
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[220ms] ease-[cubic-bezier(0.4,0.0,0.2,1)] ${
          scrolled || megaMenuOpen
            ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-border/10"
            : "bg-transparent border-b border-transparent"
        }`}
        style={{
          height: scrolled ? "56px" : "64px",
        }}
      >
        <nav className="h-full max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between h-full">
            {/* Brand Lockup */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={officialLogo} 
                alt="CropXon Innovations logo" 
                className="h-7 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="hidden sm:flex flex-col leading-none">
                <span
                  className="text-foreground/95 group-hover:text-foreground transition-colors"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "0.04em",
                  }}
                >
                  CropXon
                </span>
                <span
                  className="text-muted-foreground/50"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "8px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "2px",
                  }}
                >
                  Innovations
                </span>
              </div>
            </Link>

            {/* Navigation Items - Desktop */}
            <div className="hidden lg:flex items-center" style={{ gap: "36px" }}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label, item.isMegaMenu)}
                  onMouseLeave={!item.isMegaMenu ? handleMouseLeave : undefined}
                >
                  <button
                    className={`flex items-center gap-1.5 transition-all duration-150 ${
                      (item.isMegaMenu && megaMenuOpen) || isChildActive(item) || activeDropdown === item.label
                        ? "text-foreground"
                        : "text-muted-foreground/70 hover:text-foreground"
                    }`}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        (item.isMegaMenu && megaMenuOpen) || activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Active Indicator */}
                  {isChildActive(item) && (
                    <div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-primary/60"
                      style={{ width: "20px" }}
                    />
                  )}

                  {/* Standard Dropdown (non-mega menu) */}
                  {activeDropdown === item.label && item.children && !item.isMegaMenu && (
                    <div
                      className="absolute top-full left-0 mt-3 py-2 min-w-[200px] bg-[#0a0a0f]/98 backdrop-blur-xl border border-border/10 rounded-lg z-[60]"
                      style={{
                        animation: 'dropdownIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-muted-foreground/70 hover:text-foreground hover:bg-foreground/[0.03] transition-colors"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 400,
                              fontSize: "12px",
                              letterSpacing: "0.02em",
                            }}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2.5 text-muted-foreground/70 hover:text-foreground hover:bg-foreground/[0.03] transition-colors"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 400,
                              fontSize: "12px",
                              letterSpacing: "0.02em",
                            }}
                            onClick={() => setActiveDropdown(null)}
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

            {/* Right Side */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>

              {/* PLATFORMS CTA */}
              <Link
                to="/platforms"
                className="hidden lg:inline-flex items-center justify-center text-foreground/90 hover:text-foreground bg-foreground/5 hover:bg-foreground/10 border border-border/20 hover:border-border/40 transition-all duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  padding: "8px 16px",
                  borderRadius: "6px",
                }}
              >
                PLATFORMS
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-1 text-muted-foreground/70 hover:text-foreground transition-colors"
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

      {/* Mega Menu */}
      <MegaMenu isOpen={megaMenuOpen} onClose={handleMegaMenuClose} />

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />

      <style>{`
        @keyframes dropdownIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
