import { Link } from "react-router-dom";
import cropxonLogo from "@/assets/cropxon-logo.svg";

// Official Channels - External links only
const officialChannels = [
  {
    label: "X",
    href: "https://x.com/CropxonAI",
    ariaLabel: "CropXon on X (Twitter)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cropxon",
    ariaLabel: "CropXon on LinkedIn",
  },
  {
    label: "GitHub",
    href: "https://github.com/cropxon",
    ariaLabel: "CropXon on GitHub",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CropXon",
    ariaLabel: "CropXon on YouTube",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cropxon_innovations/",
    ariaLabel: "CropXon on Instagram",
  },
];

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    ecosystem: [
      { label: "ATLAS", href: "/atlas" },
      { label: "TRACEFLOW", href: "/traceflow" },
      { label: "OriginX Labs", href: "/originx-labs" },
      { label: "CropXon Cloud", href: "/cropxon-cloud" },
      { label: "Robotics", href: "/robotics" },
    ],
    resources: [
      { label: "Philosophy", href: "/how-we-think" },
      { label: "Architecture", href: "/architecture" },
      { label: "Design Principles", href: "/design-principles" },
    ],
    governance: [
      { label: "Compliance", href: "/company#compliance" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  };

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={cropxonLogo} alt="CropXon" className="h-8 w-auto" />
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              Building foundational technology for work, intelligence, and infrastructure.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 
                className="text-muted-foreground mb-3"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") && !link.href.includes("#") ? (
                      <Link
                        to={link.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-opacity duration-150 opacity-70 hover:opacity-100"
                        style={{
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "12px",
                        }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-opacity duration-150 opacity-70 hover:opacity-100"
                        style={{
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "12px",
                        }}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Official Channels Section */}
        <div className="py-8 border-t border-border">
          <h4 
            className="text-muted-foreground mb-4"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 500,
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Official Channels
          </h4>
          
          {/* Desktop: Horizontal / Mobile: Vertical */}
          <nav 
            aria-label="Official communication channels"
            className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6"
          >
            {officialChannels.map((channel, index) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={channel.ariaLabel}
                className="text-muted-foreground transition-opacity duration-150 opacity-60 hover:opacity-100 focus:opacity-100 focus:outline-none focus:underline"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  letterSpacing: "0.02em",
                }}
              >
                {channel.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Legal / Compliance Bottom Bar */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p 
                className="text-muted-foreground opacity-60"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.01em",
                }}
              >
                CropXon Innovations Pvt. Ltd.
              </p>
              <span className="hidden sm:inline text-muted-foreground opacity-40">·</span>
              <p 
                className="text-muted-foreground opacity-50"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.01em",
                }}
              >
                CIN: U62010OD2025PTC051089
              </p>
            </div>
            <p 
              className="text-muted-foreground opacity-50"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.01em",
              }}
            >
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
