import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import MobileMenu from "./MobileMenu";
import cropxonLogo from "@/assets/cropxon-logo.svg";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { label: "Ecosystem", href: "/#ecosystem" },
    { label: "Vision", href: "/#vision" },
    { label: "Technology", href: "/#technology" },
    { label: "Company", href: "/company" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl">
        {/* Hairline divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/10" />
        
        <nav className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo - Clean, no container */}
            <Link to="/" className="flex items-center">
              <img 
                src={cropxonLogo} 
                alt="Cropxon" 
                className="h-7 lg:h-8 w-auto" 
              />
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-10 lg:gap-14">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[11px] font-medium text-muted-foreground/70 hover:text-foreground transition-colors duration-300 uppercase tracking-[0.2em]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-[11px] font-medium transition-colors duration-300 uppercase tracking-[0.2em] ${
                      isActive(link.href) 
                        ? "text-foreground" 
                        : "text-muted-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Right Side: Theme Toggle + CTA */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:block opacity-60 hover:opacity-100 transition-opacity">
                <ThemeToggle />
              </div>
              <div className="hidden md:block">
                <a
                  href="/#ecosystem"
                  className="text-[11px] font-medium text-muted-foreground/70 hover:text-foreground uppercase tracking-[0.2em] transition-colors duration-300"
                >
                  Enter
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-foreground/70 hover:text-foreground transition-colors p-1"
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
