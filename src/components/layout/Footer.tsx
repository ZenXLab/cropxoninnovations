import { Link } from "react-router-dom";

const CropxonLogoFull = ({ className = "h-10" }: { className?: string }) => (
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
        stroke="url(#footerLogoGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="2.5" fill="hsl(234, 55%, 50%)" />
      <circle cx="32" cy="8" r="2.5" fill="hsl(234, 55%, 50%)" />
      <circle cx="8" cy="32" r="2.5" fill="hsl(249, 90%, 68%)" />
      <circle cx="32" cy="32" r="2.5" fill="hsl(249, 90%, 68%)" />
      <circle cx="20" cy="20" r="4" fill="hsl(234, 55%, 50%)" />
      <path
        d="M35 6L42 0M42 0L42 8M42 0L36 0"
        stroke="hsl(249, 90%, 68%)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="42" cy="0" r="1.5" fill="hsl(249, 90%, 68%)" />
    </g>
    <text
      x="52"
      y="32"
      fill="currentColor"
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
      <linearGradient id="footerLogoGradient" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(234, 55%, 50%)" />
        <stop offset="1" stopColor="hsl(249, 90%, 68%)" />
      </linearGradient>
    </defs>
  </svg>
);

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    ecosystem: [
      { label: "ATLAS", href: "#" },
      { label: "TRACEFLOW", href: "#" },
      { label: "OriginX Labs", href: "#" },
      { label: "Cropxon Cloud", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
    governance: [
      { label: "Compliance", href: "#" },
      { label: "Trust Center", href: "#" },
    ],
  };

  return (
    <footer className="py-20 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-6 text-foreground">
              <CropxonLogoFull className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building foundational technology for work, intelligence, and
              infrastructure.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Cropxon Innovations Pvt. Ltd. — Building Foundational Technology.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
