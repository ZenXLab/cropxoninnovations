import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
import { ThemeSelector } from "@/components/ThemeSelector";
import MobileMenu from "./MobileMenu";
import MegaMenu from "./MegaMenu";
import originxLogo from "@/assets/originx-logo.png";

interface NavItem {
  label: string;
  href?: string;
  isMegaMenu?: boolean;
  children?: { label: string; href: string; external?: boolean }[];
}

const navItems: NavItem[] = [
  { label: "ECOSYSTEM", isMegaMenu: true },
  {
    label: "EXPLORE",
    children: [
      { label: "Platform Showcase", href: "/showcase" },
      { label: "All Platforms", href: "/platforms" },
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
      { label: "Working at OriginX", href: "/careers" },
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
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string, isMegaMenu?: boolean) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    if (isMegaMenu) {
      setMegaMenuOpen(true);
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
      setMegaMenuOpen(false);
    }
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-out ${
          scrolled || megaMenuOpen
            ? "bg-background/98 backdrop-blur-xl border-b border-border/40 shadow-lg"
            : "bg-background/90 backdrop-blur-md border-b border-border/20"
        }`}
        style={{ height: scrolled ? "56px" : "64px" }}
      >
        <nav className="h-full max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={originxLogo} 
                alt="OriginX Labs" 
                className="h-8 w-auto transition-opacity group-hover:opacity-80"
              />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-[14px] tracking-wide group-hover:text-foreground/80 transition-colors">
                  OriginX Labs
                </span>
                <span className="text-muted-foreground/60 text-[8px] tracking-[0.12em] uppercase mt-0.5">
                  Pvt. Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label, item.isMegaMenu)}
                  onMouseLeave={!item.isMegaMenu ? handleMouseLeave : undefined}
                >
                  <button
                    className={`flex items-center gap-1.5 font-display text-[11px] font-medium tracking-[0.1em] transition-colors duration-150 ${
                      (item.isMegaMenu && megaMenuOpen) || isChildActive(item) || activeDropdown === item.label
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        (item.isMegaMenu && megaMenuOpen) || activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isChildActive(item) && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-px bg-primary/60" />
                  )}

                  {activeDropdown === item.label && item.children && !item.isMegaMenu && (
                    <div
                      className="absolute top-full left-0 mt-3 py-2 min-w-[200px] bg-card/98 backdrop-blur-xl border border-border/30 rounded-lg shadow-xl z-[60]"
                      style={{ animation: 'dropdownIn 0.2s ease-out' }}
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
                            className="block px-4 py-2.5 text-[12px] text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2.5 text-[12px] text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
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
            <div className="flex items-center gap-4 sm:gap-5">
              <button
                onClick={() => {
                  const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true });
                  document.dispatchEvent(event);
                }}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors group flex items-center gap-2"
                title="Search (⌘K)"
              >
                <Search className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="hidden md:flex items-center gap-1 text-[10px] text-muted-foreground/60">
                  <kbd className="px-1.5 py-0.5 bg-muted/50 rounded text-[10px] font-mono">⌘K</kbd>
                </span>
              </button>

              <div className="hidden sm:block">
                <ThemeSelector />
              </div>

              <Link
                to="/platforms"
                className="hidden lg:inline-flex items-center justify-center px-4 py-2 font-display text-[10px] font-semibold tracking-[0.12em] rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                PLATFORMS
              </Link>

              <button
                className="lg:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navigation;
