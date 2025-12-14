import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { label: "Ecosystem", href: "/#ecosystem" },
    { label: "Vision", href: "/#vision" },
    { label: "Philosophy", href: "/how-we-think" },
    { label: "Company", href: "/company" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
          scrolled ? "backdrop-blur-xl bg-background/90" : ""
        }`}
        style={{ borderBottom: "1px solid hsl(var(--border) / 0.3)" }}
      >
        <nav className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Wordmark Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-display text-xl lg:text-2xl font-bold tracking-wide text-foreground">
                Cropxon
              </span>
              <span className="font-display text-xl lg:text-2xl font-light tracking-wide text-muted-foreground">
                Innovations
              </span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-10 lg:gap-14">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-[11px] font-medium transition-colors duration-300 uppercase ${
                      isActive(link.href) 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Right Side: Theme Toggle + CTA */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>
              <a
                href="/#ecosystem"
                className="hidden md:inline-flex items-center justify-center text-[11px] font-semibold uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  letterSpacing: "0.05em",
                  padding: "12px 32px",
                  borderRadius: "4px"
                }}
              >
                Enter
              </a>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navigation;
