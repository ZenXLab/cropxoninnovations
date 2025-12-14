import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import MobileMenu from "./MobileMenu";

const CropxonLogo = ({ className = "h-10" }: { className?: string }) => (
  <svg
    viewBox="0 0 180 50"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* X mark with circuit */}
    <g transform="translate(0, 5)">
      <path
        d="M8 8L20 20M20 20L32 32M32 8L20 20M20 20L8 32"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="2.5" fill="hsl(234, 55%, 50%)" />
      <circle cx="32" cy="8" r="2.5" fill="hsl(234, 55%, 50%)" />
      <circle cx="8" cy="32" r="2.5" fill="hsl(249, 90%, 68%)" />
      <circle cx="32" cy="32" r="2.5" fill="hsl(249, 90%, 68%)" />
      <circle cx="20" cy="20" r="4" fill="hsl(234, 55%, 50%)" />
      {/* Circuit traces */}
      <path
        d="M35 6L42 0M42 0L42 8M42 0L36 0"
        stroke="hsl(249, 90%, 68%)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="42" cy="0" r="1.5" fill="hsl(249, 90%, 68%)" />
    </g>
    {/* Text */}
    <text
      x="52"
      y="32"
      fill="currentColor"
      className="text-foreground"
      style={{
        fontFamily: 'Space Grotesk, system-ui, sans-serif',
        fontSize: '24px',
        fontWeight: 700,
        letterSpacing: '0.05em'
      }}
    >
      CROPXON
    </text>
    <defs>
      <linearGradient id="logoGradient" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(234, 55%, 50%)" />
        <stop offset="1" stopColor="hsl(249, 90%, 68%)" />
      </linearGradient>
    </defs>
  </svg>
);

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center text-foreground">
              <CropxonLogo className="h-6 sm:h-8 w-auto" />
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-widest link-underline"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-xs lg:text-sm font-medium transition-colors duration-300 uppercase tracking-widest link-underline ${
                      isActive(link.href) 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Right Side: Theme Toggle + CTA */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>
              <div className="hidden md:block">
                <a
                  href="/#ecosystem"
                  className="text-xs lg:text-sm font-medium text-foreground uppercase tracking-widest hover:text-accent transition-colors duration-300"
                >
                  Enter
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-foreground p-2"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navigation;
