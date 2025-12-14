import { Link } from "react-router-dom";

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
  const navLinks = [
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Vision", href: "#vision" },
    { label: "Technology", href: "#technology" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center text-foreground">
            <CropxonLogo className="h-8 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-widest link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#ecosystem"
              className="text-sm font-medium text-foreground uppercase tracking-widest hover:text-accent transition-colors duration-300"
            >
              Enter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground p-2">
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
      </nav>
    </header>
  );
};

export default Navigation;
